import React,{Component} from 'react';

class CafeMenu extends Component{
    render(){
        return(
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}
export default CafeMenu;