import React,{Component} from 'react';
import './searchcafe.css';
import FontAwesome from 'react-fontawesome';

class SearchCafe extends Component{

    constructor(){
        super();
        this.state={
            searchname:'',
            date:'',
            capacity:'',
            showResult:false
        }
    }

    handleChangeSearch=(event)=>{
        let val=event.target.value;
        this.setState({
            searchname:val
        })
    }
    handleChangeDate=(event)=>{
        this.setState({
            date:event.target.value
        })
    }
    handleChangeCapacity=(event)=>{
        this.setState({
            capacity:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const searchData={
            searchname:this.state.searchname,
            date:this.state.date,
            capacity:this.state.capacity
        }
        console.log(searchData);
        
    }
    handleResult=(val)=>{
        this.setState({
            showResult:val
        })
    }
    result=()=>{

        const arr=[{
            name:'whatever',
            location:'hell'
        },
        {
            name:'whatever',
            location:'hell'
        },
        {
            name:'whatever',
            location:'hell'
        }]
        let returnList=arr.map((i)=>(
                    <div className="result-list" >
                        
                        <li><FontAwesome name="glass" /><b>{i.name}</b></li>
                        <li>{i.location}</li>
                    </div>
                ));

        return(
            <div className="result">
                {returnList}
            </div>
        )
    }

    render(){
        return(
            <div className="searchcafe"
                style={{
                    background:`url('/images/backgrounds/package.jpg')`
                }}
            >
                <div className="searchlist">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="search for a restaurant, cafe or club" 
                            onChange={this.handleChangeSearch}
                            onFocus={(e)=>this.handleResult(true)}
                            onBlur={(e)=>this.handleResult(false)} 
                            value={this.state.searchname}
                        />
                        <input type="date" onChange={this.handleChangeDate} />
                        <input type="number" onChange={this.handleChangeCapacity} defaultValue="1"/>
                        <input type="submit" value="Search Hooti" />
                    </form>
                    {this.state.showResult?this.result():null}
                </div>
                
                {/* <div className="package"
                    
                >
                    <div className="packageText">
                        <h2>
                            Take a break from work<br/>
                            Plan a party from your office
                        </h2>
                        <h2>
                            Starting at<br/>
                            <strong>Rs</strong>799
                        </h2>
                    </div>
                </div> */}
        
            </div>
        )
    }
}

export default SearchCafe;