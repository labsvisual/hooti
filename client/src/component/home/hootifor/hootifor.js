import React from 'react';
import './index.css';
import Card from './card/card';

const HootiFor=()=>{

    return(
        <div>
            <div className="wrapper">
                <h2>Hooti for all your needs</h2>
                <div className="hr" />
                <div className="card-wrapper">
                    <Card 
                        title="Hooti Corporate"
                        link="/"
                    >
                        Organise Corporate Parties
                    </Card>
                    <Card 
                        title="Hooti Launch"
                        link="/"
                    >
                        Launch your product with us
                    </Card>
                    <Card 
                        title="Hooti School"
                        link="/"
                    >
                        Organize fresehers and farewell
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HootiFor;
