import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {registerUser} from "../../actions/authActions";
import {Textbox} from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class Register extends Component {
constructor(props){
    super(props)

    this.state = {
        name:'',
        hasNameError: true,

        email:'',
        hasEmailError:true,

        password: '',
        hasPasswordError: true,

        password2:'',
        hasPasswordError2: true,

        validate: false
    }
}


toggleValidating= validate => {
    this.setState({ validate });
};

onSubmit = (e) =>{
    e.preventDefault();
    this.toggleValidating(true);
    const {hasNameError, hasEmailError, hasPasswordError, hasPasswordError2} = this.state;
    if (
        !hasNameError
        && !hasEmailError
        && !hasPasswordError
        && !hasPasswordError2
    ) {
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }
}

    render() {
    const {validate, name, email, password, password2} = this.state
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your account
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <Textbox
                                    classNameInput=""
                                    id={"Name"}
                                    name="Name"
                                    type="text"
                                    value={name}
                                    disabled={false}
                                    placeholder="Place your name here"
                                    validate={validate}
                                    validationCallback={res =>
                                        this.setState({ hasNameError: res, validate: false })
                                    }

                                    onChange={name => {
                                        this.setState({ name });
                                    }}
                                    onBlur={() => {}}
                                    validationOption={{
                                        name: "Name",
                                        check: true,
                                        required: true,
                                        min: 2,
                                        max: 30,

                                    }}
                                />
                                <Textbox
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
                                        customFunc: email => {
                                            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                            if (reg.test(String(email).toLowerCase())) {
                                                return true;
                                            } else {
                                                return "is not a valid email address";
                                            }
                                        }

                                    }}
                                />
                                <Textbox
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
                                        reg: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
                                        regMsg: 'Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.',

                                    }}
                                />
                                <Textbox
                                    id={"Password2"}
                                    name="Password2"
                                    type="password"
                                    value={password2}
                                    disabled={false}
                                    placeholder="Place again your password here"
                                    validate={validate}
                                    validationCallback={res =>
                                        this.setState({ hasPasswordError2: res, validate: false })
                                    }

                                    onChange={password2 => {
                                        this.setState({ password2 });
                                    }}
                                    onBlur={() => {}}
                                    validationOption={{
                                        name: "Password2",
                                        check: true,
                                        required: true,
                                        compare: password,
                                        msgOnError: 'password must be identical'

                                    }}
                                />
                                <input onClick={this.onSubmit} type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    auth: state.auth
    }
};

export default connect(mapStateToProps, {registerUser})(withRouter(Register));