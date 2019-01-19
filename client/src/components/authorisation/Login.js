import React, {Component} from 'react';
import {Textbox} from 'react-inputs-validation';
import {connect} from 'react-redux';
import {loginUser} from "../../actions/authActions";

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            hasEmailError: true,
            password: '',
            hasPasswordError: true,
            validate:false,
        }
    }

    toggleValidating= validate => {
        this.setState({ validate });
    };

    onSubmit = e =>{
        e.preventDefault();
        this.toggleValidating(true);
        const {hasEmailError, hasPasswordError} = this.state;
        const {loginUser, history} = this.props;
        if ( !hasEmailError
            && !hasPasswordError
        ) {

            const userData = {
                email: this.state.email,
                password: this.state.password,
            };

            loginUser(userData, history);
        }
    };




    render(){
        const {email, password, validate} = this.state
        const {errors} = this.props.auth;
        return(
           <div className="login  mt-5 pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Login In</h1>
                            <p className="lead text-center">
                                Login to your account
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <Textbox
                                    classNameInput="mt-3"
                                    id={"Email"}
                                    name="Email"
                                    type="text"
                                    value={email}
                                    disabled={false}
                                    placeholder="Place your email here"
                                    validate={validate}
                                    validationCallback={res =>
                                        this.setState({ hasEmailError: res, validate: false })
                                    }

                                    onChange={email => {
                                        this.setState({ email });
                                    }}
                                    onBlur={() => {}}
                                    validationOption={{
                                        name: "Email",
                                        check: true,
                                        required: true,
                                    }}
                                />
                                <Textbox
                                    classNameInput="mt-3"
                                    id={"Password"}
                                    name="Password"
                                    type="password"
                                    value={password}
                                    disabled={false}
                                    placeholder="Place your password here"
                                    validate={validate}
                                    validationCallback={res =>
                                        this.setState({ hasPasswordError: res, validate: false })
                                    }

                                    onChange={password => {
                                        this.setState({ password });
                                    }}
                                    onBlur={() => {}}
                                    validationOption={{
                                        name: "Password",
                                        check: true,
                                        required: true,
                                    }}
                                />
                                {typeof errors === 'object' && Object.keys(errors).length !== 0 ? (<div>{errors.email}</div>) : null}
                                {typeof errors === 'object' && Object.keys(errors).length!== 0 ? (<div>{errors.password}</div>) : null}
                                <input onClick={this.onSubmit} type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps, {loginUser}) (Login)