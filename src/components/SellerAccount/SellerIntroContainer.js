import React, { Component } from 'react';
import SellerIntroView from './SellerIntroView';


class SellerintroContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            //
        }
    }

    render() {
        return (
            <SellerIntroView 
                {...this.props}
                {...this.state}
            />
        )
    }
}
export default SellerintroContainer