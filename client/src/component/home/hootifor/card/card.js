import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
const Card=(props)=>{
    return(
        <div>
            <Link to={props.link}>
                <div className="card">
                    <h2>{props.title}</h2>
                    <p>
                        {props.children}
                    </p>
                </div>
            </Link>
        </div>

    )
}

export default Card;