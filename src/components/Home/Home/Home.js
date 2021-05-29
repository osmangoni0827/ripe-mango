import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;