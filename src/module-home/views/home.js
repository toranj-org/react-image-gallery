import React, { useState, useEffect } from "react";
import { Layouts } from '../../components';
import { ServiceClient } from '../apis';

const Home = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        ServiceClient().getImages().then(res => {
            if (res.data) {
                setList(res.data);
            }
        });
    }, []);

    return (
        <Layouts.MainLayout>
            {React.Children.toArray(list.map(item => {
                return <img src={item.image} alt={item.title} />
            }))}
        </Layouts.MainLayout>
    )
};

export default Home;