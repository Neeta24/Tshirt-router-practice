/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    
    const tshirts = useLoaderData();

    return (
        <div>
           {tshirts.map(tshirt => <TShirt key ={tshirt._id} tshirt ={tshirt}></TShirt>)}
        </div>
    );
};

export default Home;