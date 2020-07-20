import React from 'react';
import ImgCoding from '../../Assets/Images/time.jpg';
import Signin from '../User/signin';
import Header from '../Common/header';

function Signup() {
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <Signin/>
                <div className="col-md-7"></div>
                <div className="col-md-5">
                    <h2 className="text-center">Sign up</h2>
                    <label className="label control-label">Name</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input type="text" className="form-control" name="Name" placeholder="Name"/>
                    </div>
                    <label className="label control-label">E-mail</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                        <input type="text" className="form-control" name="Email" placeholder="E-mail"/>
                    </div>
                    <label className="label control-label">Contact</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-phone"></span></span>
                        <input type="number" className="form-control" name="contact" placeholder="contact"/>
                    </div>
                    <label className="label control-label">Password</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <label className="label control-label">Re-type Password</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input type="password" className="form-control" name="Re-type Password" placeholder="Re-type Password"/>
                    </div>
                    <a href="#">
                        <div className="btn btn-default">SIGN UP</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Signup
