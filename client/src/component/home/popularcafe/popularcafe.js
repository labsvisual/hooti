import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
//components
import Cafe from './cafe/cafe';

class PopCafe extends Component{



    showCafeList=()=>{
        const cafe=[{
                id:'ccf123',
                name:'Cafe Coffee Day',
                info:''
            },
            {
                id:'sb23',
                name:'Start Bucks',
                info:''
            },
            {
                id:'sdb411',
                name:'Sardar Bucks',
                info:''
            }
        ];
        let returnCafe=cafe.map((i)=>(
            <div>
                <Link to={`/${i.id}`} key={i}>
                <Cafe name={i.name} info={i.info}/>
                </Link>
            </div>
        ))
        return returnCafe;
        
    }

    render(){
        return(
            <div className="PopCafeWrapper">
                <h3>
                    Popular Cafe and Restaurant
                </h3>
                <hr/>
                {this.showCafeList()}
            </div>
        )
    }
}

export default PopCafe;

