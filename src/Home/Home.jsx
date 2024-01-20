import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Flowbite } from 'flowbite-react';


const Home = () => {
    return (
        <div >
            <Flowbite>
<Outlet></Outlet>
                <Navbar></Navbar>
                <Banner ></Banner>
              
            </Flowbite>


        </div>
    );
};

export default Home;