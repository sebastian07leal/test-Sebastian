import React, { Component } from 'react';
import '../assets/styles/AddUser.scss';
import Input from '../components/Input';
import BigButton from '../components/BigButton';

class EditUser extends Component {
    constructor(props){
        super(props);

        const {nameU, surnameU, identificationU, emailU, phoneU, idUserU } = this.props;

        this.state = {
            name: nameU,
            surname: surnameU,
            identification: identificationU,
            email: emailU,
            phone: phoneU,
            idUser: idUserU 
        }
        
    }


    render(){

        const {name, surname, identification, email, phone } = this.state;

        return (
            <section className="container-f">
                <div className="container-f__form">
                    <div className="container-f__input">
                    <Input val={name} title={'Nombre'} />
                    <Input val={surname} title={'Apellido'} />
                    <Input val={identification} title={'Cedula'} />
                    <Input val={email} title={'Telefono'} />
                    <Input val={phone} title={'Correo'} />
                    </div>
                    <BigButton funct={this.buttonAdd} text={'Editar'} />
                </div>
            </section>

        );
    }
}

export default EditUser;