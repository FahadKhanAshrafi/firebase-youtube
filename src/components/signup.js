import React, { Component } from 'react';
import '../style/styleSignup.css'
import fireBase from '../fire'


var db = fireBase.firestore();

    export default class Signup extends Component {
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this)
    }
    signup(e){
        e.preventDefault();
    var userName = this.refs.username.value;
    var email = this.refs.email.value;
    var pwd = this.refs.password.value;
    var cpwd = this.refs.confirm_password.value;

    if(pwd === cpwd || !userName || !email){
        fireBase.auth().createUserWithEmailAndPassword(email, pwd).then(ref=>{
            console.log('Register Successful');
            console.log('ref==>',ref.user.uid);
            //userName and email add in db 'users'
            db.collection('users').doc(ref.user.uid).set({userName,email}).then(()=>{
                console.log('Data add in db users');
            })
            this.props.history.push('/login');
        }).
        catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: '+errorMessage);
            // ...
        });
        this.refs.username.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';
        this.refs.confirm_password.value = '';
    }else {
        alert('Fill field correctly');
        this.refs.username.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';
        this.refs.confirm_password.value = '';
    }


}


    render() {
        return (
            <div>

                <div className="signup-form">
                    <form>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <hr/>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" ref="username" placeholder="Username"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                                    <input type="email" className="form-control" ref="email"
                                           placeholder="Email Address" required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" className="form-control" ref="password" placeholder="Password"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-lock"></i>
					<i className="fa fa-check"></i>
				</span>
                                    <input type="text" className="form-control" ref="confirm_password"
                                           placeholder="Confirm Password" required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="checkbox-inline"><input type="checkbox" required="required"/> I accept
                                    the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg" onClick={this.signup}>Sign Up</button>
                            </div>
                    </form>
                    <div className="text-center">Already have an account? <a href="/login">Login here</a></div>
                </div>

            </div>
        );
    }
}

