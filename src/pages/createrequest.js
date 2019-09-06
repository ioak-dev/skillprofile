import React from 'react'
import Login from './login'
import Wizard from '../components/wizard';

class CreateRequest extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {loggedInUserEmail: null};
    }

    componentDidMount() {
        if (sessionStorage.getItem('userSigninName')) {
            this.setState({loggedInUserEmail: sessionStorage.getItem('userSigninName')});
        }
    }

    render() {
        if (!this.state.loggedInUserEmail) {
            return (
                <Login />
            );
        } else {
            return (
                <Wizard />
            );
        }
    }
}
export default CreateRequest