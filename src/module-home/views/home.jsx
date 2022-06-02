import React, { useState, useEffect } from "react";
import { Layouts, UIKIT } from '../../components';
import { ServiceClient } from '../apis';

const Home = () => {

    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const fetchImages = () => {
            ServiceClient().getImages().then(res => {
                if (res.data) {
                    setImages(() => res.data);
                }
            });
        }

        fetchImages();

        const fetchImagesInterval = setInterval(() => {
            fetchImages();
        }, (1000 * 60 * 1));

        return () => clearInterval(fetchImagesInterval);
    }, []);

    const nextImage = () => {
        const index = images.findIndex(image => image.id === preview.id);
        if (index !== -1) {
            if (index === images.length - 1) {
                setPreview(images[0]);
            } else {
                setPreview(images[index + 1]);
            }
        }
    };

    const prevImage = () => {
        const index = images.findIndex(image => image.id === preview.id);
        if (index !== -1) {
            if (index === 0) {
                setPreview(images[images.length - 1]);
            } else {
                setPreview(images[index - 1]);
            }
        }
    };

    const handleOnItemClick = (item) => {
        setPreview(item);
    }

    const handelClose = () => {
        setPreview(null);
    }

    return (
        <Layouts.MainLayout>
            <UIKIT.ImageList>
                {React.Children.toArray(images.map(image => (
                    <UIKIT.ImageListItem
                        id={image.id}
                        src={image.image}
                        title={image.title}
                        onItemClick={() => handleOnItemClick(image)} />
                )))}
            </UIKIT.ImageList>
            <UIKIT.Popup
                open={!!preview}
                onOverlayClick={handelClose}
            >
                <UIKIT.ImagePreview
                    showButtons
                    onCloseButtonClick={handelClose}
                    onNextButtonClick={nextImage}
                    onPrevButtonClick={prevImage}
                    title={preview?.title}
                    description={preview?.description}
                    src={preview?.image} />
            </UIKIT.Popup>
        </Layouts.MainLayout>
    )
};

export default Home;