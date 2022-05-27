import React, { useState, useEffect } from "react";
import { Layouts, UIKIT } from '../../components';
import { ServiceClient } from '../apis';
import * as Commons from '../../commons';

const Home = () => {

    const [preview, setPreview] = useState({
        open: false,
        data: null
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        ServiceClient().getImages().then(res => {
            if (res.data) {
                setData(() => res.data);
            }
        });
    }, []);

    const replaceKeys = {
        "image": "src",
    };

    const galleryImages = Commons.ObjectUtils.replaceObjectKeysOfArray(data, replaceKeys);

    const handleOnItemClick = (item) => {
        setPreview(() => {
            return {
                open: true,
                data: item
            };
        })
    }

    const handelOverlayClick = () => {
        setPreview(() => {
            return {
                open: false,
                data: null
            };
        })
    }


    return (
        <Layouts.MainLayout>
            <UIKIT.Gallery
                onItemClick={handleOnItemClick}
                images={galleryImages} />
            <UIKIT.Popup
                isOpen={preview.open}
                onOverlayClick={handelOverlayClick}
            >
                <UIKIT.Slider></UIKIT.Slider>
            </UIKIT.Popup>
        </Layouts.MainLayout>
    )
};

export default Home;