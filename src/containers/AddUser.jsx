import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import BigBUtton from '../components/BigButton';
import '../assets/styles/AddUser.scss';

class AddUser extends React.Component {
	constructor(props) {
		super(props);
	
		/**funciones bindeadas  para optimizar performance*/
		this.secondValidate = this.secondValidate.bind(this);
		this.buttonAdd = this.buttonAdd.bind(this);
		this.valueData = this.valueData.bind(this);
		this.addName = this.addName.bind(this);
		this.addSurname = this.addSurname.bind(this);
		this.addIdentification = this.addIdentification.bind(this);
		this.addPhone = this.addPhone.bind(this);
		this.addEmail = this.addEmail.bind(this);
		this.postData = this.postData.bind(this);

		/**Estado dónde se all*/
		this.state = {
			name: '',
			surname: '',
			identification: 0,
			phone: 0,
			email: '',
		}
	}

	secondValidate({ name, surname, identification, email, phone}){

		/**Estructura de datos para consultas*/
		const dataToFetch = {
			data: {
				nombre: name,
				apellido: surname,
				cedula: identification,
				correo: email,
				telefono: phone
			}
		}
		/**parceo de formato a JSON*/
		const dataUser = JSON.stringify(dataToFetch); 

		this.postData(dataUser);
		
	}

	/**Estructura CRUD desde front todas son funciones asincronas*/
	postData(data){
		fetch('http://localhost:3000/api/favorites/', {
			method: 'POST',
			body: data,
			headers: {
				"Content-type": "application/json"
			}
		})
		.then((response) => {
			console.log(response);
			if(response.ok){
				console.log(response.statusText);
				alert('El usuario se a agregado con éxito');
				return true;
			} else {
				console.log('Error al enviar los datos');
				return false;
			}
		})
		.then((text) => {
			console.log('Respuesta ',text);
		})
		.catch((err) => {
			console.log(err);
			alert('Error al agregar el usuario intentelo de nuevo')
			return false;
		});
	}


	/**Handle de botton simula un listener*/
	buttonAdd(){

		if(this.valueData(this.state)){
			this.secondValidate(this.state);
		}
		
	}
	/**Primera validacion de los datos enviados por el usuario*/
	valueData({ name, surname, identification, phone, email }){

		/**validacion de nombre*/
		if(name) {
			if( !(name.length <= 50) ){
				console.log('El nombre es muy largo');
				return false;
			}
		} else {
			console.log('Por favor escriba el nombre');
			return false;
		}
		/**validacion de apellido*/
		if(surname) {
			if( !(surname.length <= 50) ){
				console.log('El apellido es muy largo');
				return false;
			}
		} else {
			console.log('Por favor escriba el apellido');
			return false;
		}
		/**validacion de cedula*/
		if(identification) {
			if( !(identification.length <= 50) ){
				console.log('La cedula es muy larga');
				return false;
			}
			if(!this.findLetters(identification)){
				console.log('La identificacion no puede contener letras');
				return false;
			}
		} else {
			console.log('Por favor escriba su cedula');
			return false;
		}
		/**validacion de telefono*/
		if(phone) {
			if( !(phone.length <= 50) ){
				console.log('El telefono es muy largo');
				return false;
			}
			if(!this.findLetters(phone)){
				console.log('El numero de telefono no puede contener letra');
				return false;
			}
		} else {
			console.log('Por favor escriba su telefono');
			return false;
		}
		/**validar correo*/
		if(email) {
			if( !(email.length <= 50) ){
				console.log('El correo es muy largo');
				return false;
			}
			if(!this.validateEmail(email)){
				console.log('El correo no es valido');
				return false;
			}
		} else {
			console.log('Por favor escriba su correo electronico');
			return false;
		}
		return true;
	}



	/**Funciones de validacion*/
	findLetters(number){
		let alphabet = "abcdefghyjklmnñopqrstuvwxyz";

		for(let i = 0 ; i < number.length; i ++){
			if(alphabet.indexOf(number.charAt(i)) != -1){
				return false
			}
		}
		return true
	}
	validateEmail(email){
		for(let i = 0;i < email.length; i++){
			if(email.charAt(i) == '@'){
				return true;
			}
		}
		return false;
	}


	/**Añaden al estado lo escrito por el usuarios*/
	addName(data){
		this.setState({ name: data.target.value });
	}
	addSurname(data){
		this.setState({ surname: data.target.value });
	}
	addIdentification(data){
		this.setState({ identification: data.target.value });
	}
	addPhone(data){
		this.setState({ phone: data.target.value });
	}
	addEmail(data){
		this.setState({ email: data.target.value });
	}


    render(){
        return (
            <>
				<Header />
				<section className="container-f">
					<div className="container-f__form">
						<div className="container-f__input">
						<Input f={this.addName} title={'Nombre'} />
						<Input f={this.addSurname} title={'Apellido'} />
						<Input f={this.addIdentification} title={'Cedula'} />
						<Input f={this.addPhone} title={'Telefono'} />
						<Input f={this.addEmail} title={'Correo'} />
						</div>
						<BigBUtton funct={this.buttonAdd} text={'Agregar'} />
					</div>
				</section>
            </>
        );
    }
}

export default AddUser;	