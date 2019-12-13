import React from 'react';
import '../assets/styles/components/Header.scss';
import Button from '../components/Button';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(){

        const { dirBut, textBut, buttonH} = this.props

        if(buttonH){
            return (
                <Button  text={textBut} dir={dirBut} />
            );
        } else {
            return false;
        }
    }

    render(){

        return (
            <header className="header">
                {this.handleButton()}
            </header>
        );
    }

}

export default Header;