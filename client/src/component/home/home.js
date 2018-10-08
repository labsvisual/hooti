import React from 'react';

//components
import SearchCafe from './searchcafe/searchcafe';
import PopCafe from './popularcafe/popularcafe';

const Home=()=>{
    return(
        <div>
            <SearchCafe />
            <PopCafe />
        </div>
    )
}

export default Home; 