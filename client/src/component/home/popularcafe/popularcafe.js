import React,{Component} from 'react';
import './index.css';

//components
import Cafe from './cafe/cafe';

class PopCafe extends Component{



    showCafeList=()=>{
        return(
            <div>
                <Cafe name="Cafe Coffee Day" info=""/>
                <Cafe name="Cafe Coffee Day" info=""/>
                <Cafe name="Cafe Coffee Day" info=""/>
            
            </div>
        )
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

