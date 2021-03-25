import React, { Component } from 'react';

class ErrorBoundry extends Component { 
    
    constructor(props) { 
        super(props);
        this.state = { 
            hasError: false,
            errorMsg: ""
        }
    }

    componentDidCatch(error,info) { 
        this.setState ( { hasError: true, errorMsg: error} )
    }

    render () {

        if (this.state.hasError) { 
            return <h1>Oh no, call me. Error occured "[{this.state.errorMsg}\] </h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;