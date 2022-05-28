import React from "react";
import { UIKIT } from "..";

export const Image = (props) => {

    const imgRef = React.useRef(null);
    const [imageUrl, setImageUrl] = React.useState(null);

    const [dimensions, setDimensions] = React.useState({
        animating: false,
        width: 0,
        height: 0
    });

    const [opacity, setOpacity] = React.useState({
        animating: false,
        value: 0
    });


    React.useEffect(() => {
        if (imgRef.current && props.src) {
            setOpacity(prevData => {
                if (prevData.value === 1) {
                    return {
                        animating: true,
                        value: 0
                    }
                }
                return prevData
            })
            setDimensions(prevData => {
                if (prevData.width !== imgRef.current.clientWidth || prevData.height !== imgRef.current.clientHeight) {
                    return {
                        animating: true,
                        width: imgRef.current.clientWidth,
                        height: imgRef.current.clientHeight
                    }
                }
                return prevData;
            });
        }
    }, [props.src, imgRef])


    React.useEffect(() => {
        if (dimensions.width && dimensions.height && opacity.value === 0) {
            if (!dimensions.animating && !opacity.animating) {
                setImageUrl(props.src);
                setOpacity(() => {
                    return {
                        animating: true,
                        value: 1
                    }
                })
            }
        }
    }, [dimensions, opacity, props.src])


    const handleTransitionEnd = (event) => {
        if (event.propertyName !== 'opacity') {
            setDimensions(prevData => {
                return {
                    ...prevData,
                    animating: false
                }
            });
        }
        if (event.propertyName === 'opacity') {
            setOpacity(prevData => {
                return {
                    ...prevData,
                    animating: false
                }
            });
        }
    }


    return (
        <div className="pct-ui-image-root">
            <div
                className="pct-ui-image-container"
                onTransitionEnd={handleTransitionEnd}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    opacity: opacity.value,
                    transition: `
                          width 500ms ease-in-out,
                          height 500ms ease-in-out,
                          opacity 100ms ease-in-out
                    `,
                    width: dimensions.width,
                    height: dimensions.height
                }}>

                <img ref={imgRef} src={props.src} alt="" />

                <label style={props.styles?.label} className="pct-ui-image-label">
                    <div className="title">{props.title}</div>
                    <div className="description">{props.description}</div>
                </label>


                <div className="pct-ui-image-buttons">
                    <UIKIT.Icons.Close
                        width={18}
                        height={18}
                        className="close"
                        color="#fff"
                        onClick={props?.onCloseButtonClick} />
                    <UIKIT.Icons.ArrowLeft
                        width={34}
                        height={34}
                        className="prev"
                        color="#fff"
                        onClick={props?.onPrevButtonClick} />
                    <UIKIT.Icons.ArrowRight
                        width={34}
                        height={34}
                        className="next"
                        color="#fff"
                        onClick={props?.onNextButtonClick} />
                </div>

            </div>
        </div>
    )
}