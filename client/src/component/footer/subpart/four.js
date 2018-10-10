import React from 'react';
import '../index.css';
import FontAwesome from 'react-fontawesome';

const Four=()=>{


    const icon=()=>{
        const icons=['facebook-square','instagram','twitter','play','pinterest'];
        const i=icons.map((i,item)=>(
            <div key={i}>
                <FontAwesome name={i}
                    className="icon"
                    size="1x"
                />
            </div>
        ))
        console.log(i);
        return i;
    }
    
    return(
        <div className="four">
            <div className="four-wrapper">
                {icon()}
            </div>
            <div className="four-wrapper">
                <li>INDIA ON THE GO PARTY PLANNER</li>
            </div>
            <div className="four-wrapper">
                <li>
                    2018-2019
                    <FontAwesome name="copyright"/>
                    Hooti Planner Private Limited
                </li>
            </div>
        </div>
    )
}
export default Four;