import React, { Component } from 'react';
import '../assets/styles/AddUser.scss';
import Input from '../components/Input';
import BigButton from '../components/BigButton';

class EditUser extends Component {

    render(){
        return (
            <section className="container-f">
                <div className="container-f__form">
                    <div className="container-f__input">
                    <Input title={'Nombre'} />
                    <Input title={'Apellido'} />
                    <Input title={'Cedula'} />
                    <Input title={'Telefono'} />
                    <Input title={'Correo'} />
                    </div>
                    <BigButton funct={this.buttonAdd} text={'Editar'} />
                </div>
            </section>

        );
    }
}

export default EditUser;