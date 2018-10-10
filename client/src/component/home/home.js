import React from 'react';

//components
import SearchCafe from './searchcafe/searchcafe';
import PopCafe from './popularcafe/popularcafe';
import HootiFor from './hootifor/hootifor';
import Footer from '../footer/footer';

const Home=()=>{
    return(
        <div>
            <SearchCafe />
            <PopCafe />
            <HootiFor /> 
            <Footer />
        </div>
    )
}

export default Home; 