import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignInFrom extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sign innn
            </form>
        )
    }
}

SignInFrom = reduxForm({
    form: "SignInForm"
})(SignInFrom);

export default SignInFrom;