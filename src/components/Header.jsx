import React from 'react';
import '../assets/styles/components/Header.scss';
import Button from '../components/Button';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.handleButton = this.handleButton.bind(this);
    }

    /**Se encarga de habilitar o desabilitar el boton cuando sea necesario segun la vista*/
    handleButton(){
        /**Se desestructuran props para su mejor manejo*/
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