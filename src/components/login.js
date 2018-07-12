import React, { Component } from 'react';
import '../style/styleLogin.css'
import fireBase from "../fire";


var uid = '';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentWillMount(){
        localStorage.removeItem('uid');
       this.logout();
    }
    login(e){
        e.preventDefault();
        var email = this.refs.email.value;
        var pwd = this.refs.password.value;
        if(!localStorage.getItem('uid')){
            fireBase.auth().signInWithEmailAndPassword(email, pwd).then(res=>{
                console.log(res.user.uid,'<=====REF')
                localStorage.setItem('uid', res.user.uid);
                this.props.history.push('/home');
                uid = (res.user.uid);

            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Error: Insert Correct Value'+errorMessage);
            });
        }else{
            (localStorage.getItem('uid')===uid?this.props.history.push('/home'):'')
 //           this.props.history.push('/home');
        }


    }
    logout(){
        fireBase.auth().signOut().then(()=>{
            console.log('Logout Successful');
            localStorage.removeItem('uid');
        }).catch(err=>{
            alert('Logout Error'+err);
        })
    }
    render() {
        return (
            <div>
                <div className="login-form">
                    <form>
                        <h2 className="text-center">Sign in</h2>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                <input type="email" className="form-control" ref="email" placeholder="abc@example.com"
                                       required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" ref="password" placeholder="Password"
                                       required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary login-btn btn-block" onClick={this.login} >Login</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>
                        <div className="or-seperator"><i>or</i></div>
                        <p className="text-center">Login with your social media account</p>
                        <div className="text-center social-btn">
                            <a href="#" className="btn btn-primary"><i
                                className="fa fa-facebook"></i>&nbsp; Facebook</a>
                        </div>
                    </form>
                    <p className="text-center text-muted small">Don't have an account? <a href="/signup">Sign up here!</a></p>
                </div>
            </div>
        );
    }
}

