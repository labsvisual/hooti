import React,{Component} from 'react';
import  './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends Component{
    onlogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
      }

    state={
        showlogin:true
    }

    header=()=>(
                <Link to="/" className="logo">
                    <h2>Hooti</h2>
                    <div className="quote">|Your Party Planner</div>
                </Link>
    )
   
    loginButton=()=>{
        return this.state.showlogin? (
            <Link to="/login">
                <div className="togglelogin" >
                    LogIn/SignUp
                </div>
            </Link>
        ):null
    }
    userIcon=()=>(
        <div className="userIcon">
            <FontAwesome name="user-circle"
                size="2x"
               
            />
        </div>
    )

    render(){
        //const { isAuthenticated, user } = this.props.auth;
        return(
            <div className="header">
                {this.header()}
                {this.loginButton()}
            </div>
        )
    }
}

export default Header; 
