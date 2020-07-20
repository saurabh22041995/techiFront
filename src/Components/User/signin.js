import React, { Component } from 'react'

class componentName extends Component {
    constructor(props) {
        super(props)

    }

    

    render() {
        return (
            <>
            <div className="col-md-7"></div>
            <div className="col-md-5">
                    <h1 className="text-center">Sign in</h1>
                    <label className="label control-label">Username or Email</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input type="text" className="form-control" name="mail" placeholder="Email"/>
                    </div>
                    <label className="label control-label">Password</label>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input type="Password" className="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="checkbox"/> <small>Remember me</small>
                        </div>
                        <div className="col-md-6">
                            <a href="#"><p className="text-right">Forget password</p></a>
                        </div>
                    </div>
                    <a href="#"><div className="btn btn-default">SIGN IN</div></a>
                    <p className="text-center">Not a member yet?<a href="#"> Sign Up</a></p>
                </div>
            </>
        )
    }
}


export default componentName