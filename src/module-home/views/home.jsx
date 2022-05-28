import React, { useState, useEffect } from "react";
import { Layouts, UIKIT } from '../../components';
import { ServiceClient } from '../apis';
import * as Commons from '../../commons';

const Home = () => {

    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState(null);


    useEffect(() => {

        const fetchImages = () => {
            ServiceClient().getImages().then(res => {
                if (res.data) {
                    const replaceKeys = {
                        "image": "src",
                    };
                    const alias = Commons.ObjectUtils.replaceObjectKeysOfArray(res.data, replaceKeys);
                    setImages(() => alias);
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
            <UIKIT.Gallery
                onItemClick={handleOnItemClick}
                images={images} />
            <UIKIT.Popup
                isOpen={!!preview}
                onOverlayClick={handelClose}
            >
                {preview && (
                    <UIKIT.Image
                        onCloseButtonClick={handelClose}
                        onNextButtonClick={nextImage}
                        onPrevButtonClick={prevImage}
                        title={preview.title}
                        description={preview.description}
                        src={preview.src} />
                )}

            </UIKIT.Popup>
        </Layouts.MainLayout>
    )
};

export default Home;