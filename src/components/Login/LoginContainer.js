import React, { Component } from 'react';
import LoginView from './LoginView';
import { loginRequest } from './../../redux/actions/loginActions';
import{ connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { apiBaseURL } from './../../utils/constant';


class LoginContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        if (this.props.login.isAuthenticated){
            this.props.history.push("/your_account")
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginRequest(user, this.props.history)
        
        // Swal.fire("Noman Islam.").then(()=>{
        //     Swal.fire(`API URL: ${apiBaseURL}`);
        // });

        

        // console.log(this.state);
    }

    render() {
        return (
            <LoginView 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = {
    loginRequest
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(LoginContainer))