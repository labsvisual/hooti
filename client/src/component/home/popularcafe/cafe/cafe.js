import React from 'react';
import '../index.css';


const Cafe=(props)=>{
    


    return(
        <div className="CafeBox">
            <div className="CafeWrapper">
                <img src="/images/cafeimages/cafe1.jpg" />
                <h4>{props.name}</h4>
                <p>
                    Coffee,Food,Beers
                </p> 
                <span
                    style={{
                        color:"green",
                        margin:"5px"
                    }}
                >
                    Rating
                </span>
                <hr/>
            </div>
        </div>
    )
}

export default Cafe;