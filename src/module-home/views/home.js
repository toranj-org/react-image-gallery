import { useEffect } from "react";
import { Layouts } from '../../components';

const Home = () => {


    useEffect(() => {
        console.log('Home');
    }, []);

    return (
        <Layouts.MainLayout>
            <h1>Home</h1>
            <p>This is the home page</p>
        </Layouts.MainLayout>
    )
};

export default Home;