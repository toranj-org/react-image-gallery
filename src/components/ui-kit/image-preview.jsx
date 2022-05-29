import React from "react";
import PropTypes from 'prop-types';
import { useCombinedRefs } from '../hooks'
import { UIKIT } from "..";
import { classNames } from "../utils";


const classes = {
    root: "pct-ui-image-root",
    container: "pct-ui-image-container",
    label: "pct-ui-image-label",
    buttons: "pct-ui-image-buttons",
}


export const ImagePreview = React.forwardRef((props, forwardRef) => {

    const imgRef = React.useRef(null);
    const combinedRef = useCombinedRefs(forwardRef, imgRef);

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


    // it will run when the imageSource  is changed (users click on buttons)
    React.useEffect(() => {
        if (imgRef.current && props.src) {
            // run the animation for the same size images
            setOpacity(prevData => {
                if (prevData.value === 1) {
                    return {
                        animating: true,
                        value: 0
                    }
                }
                return prevData
            })
            // if user choose a different size image then animation will run
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


    // if we have a image and no animation is running then we must show the image (opacity = 1)
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


    // set animating property to false when the animation is finished
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


    const styles = {
        container: {
            backgroundImage: `url(${imageUrl})`,
            opacity: opacity.value,
            transition: `
                  width 500ms ease-in-out,
                  height 500ms ease-in-out,
                  opacity 100ms ease-in-out
            `,
            width: dimensions.width,
            height: dimensions.height
        }
    }

    return (
        <div className={classNames(classes.root, props?.classes.root)}>
            <div
                className={classNames(classes.container, props.classes?.container)}
                onTransitionEnd={handleTransitionEnd}
                style={{
                    ...styles.container,
                    ...props.styles?.container
                }}>

                <img ref={combinedRef} src={props.src} alt="" />

                {
                    (props.title || props.description) && (
                        <label
                            style={props.styles?.label}
                            className={classNames(classes.label, props.classes?.label)}>
                            {props.title && <div className="title">{props.title}</div>}
                            {props.description && <div className="description">{props.description}</div>}
                        </label>
                    )
                }

                {props.showButtons && (
                    <div className={classNames(classes.buttons, props.classes?.buttons)}>
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
                )}
            </div>
        </div>
    )
})

ImagePreview.defaultProps = {
    classes: {},
    styles: {},
    src: null,
    title : null,
    description: null,
    showButtons: false,
    onCloseButtonClick: null,
    onPrevButtonClick: null,
    onNextButtonClick: null
  };
  
  ImagePreview.propTypes = {
    classes: PropTypes.object,
    styles: PropTypes.object,
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    showButtons: PropTypes.bool,
    onCloseButtonClick: PropTypes.func,
    onPrevButtonClick: PropTypes.func,
    onNextButtonClick: PropTypes.func
  }