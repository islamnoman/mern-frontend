import React, { Component } from 'react';
import NavbarView from './NavbarView';
import { logoutUser } from './../../../redux/actions/loginActions';
import{ connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavbarContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            prefLang: this.props.i18n.languages[0],
            selectedCat: 0,
            productCategory: [
                "navbar.product_category.all",
                "navbar.product_category.smartphone",
                "navbar.product_category.kitchen_hardware",
                "navbar.product_category.prime_deal",
                "navbar.product_category.book"
            ],
            query: ''
        }
    }

    handleChangeLang = (event) => {
        this.setState({ prefLang: [event.target.value] })
        this.props.i18n.changeLanguage(this.state.prefLang);
    }

    handleCatChange = (event, index) => {
        event.preventDefault();
        this.setState({ selectedCat: index });
    }

    handleQueryChange = (event) => {
        this.setState({query: [event.target.value]});
    }

    logoutUser = (e) => {
        e.preventDefault()

        // call logout user action
        this.props.logoutUser(this.props.history)

        // console.log("Logout user...")
    }

    handleSearch = (event) => {
        event.preventDefault();

        console.log("Query: " + this.state.query);
        console.log("Category: " + this.state.selectedCat);
    }

    
    render() {
        const rtl = ( this.state.prefLang == 'pk' ? 'text-right' : '' );
        console.log(this.state.query);
        return (
            <div>
                <NavbarView 
                    {...this.props} 
                    handleChangeLang={this.handleChangeLang}
                    prefLang={this.state.prefLang}
                    rtl={rtl}
                    handleCatChange={this.handleCatChange}
                    selectedCat={this.state.selectedCat}
                    productCategory={this.state.productCategory}
                    handleQueryChange={this.handleQueryChange}
                    query={this.state.query}
                    handleSearch={this.handleSearch}
                    logoutUser={this.logoutUser}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(NavbarContainer))