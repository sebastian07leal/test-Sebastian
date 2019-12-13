import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import BigButton from '../components/BigButton';
import '../assets/styles/AddUser.scss';

class AddUser extends React.Component {
	constructor(props) {
		super(props);
	
		const {nameU, surnameU, identificationU, emailU, phoneU, viewEdit } = this.props;

		/**funciones bindeadas  para optimizar performance*/
		this.refresh = this.refresh.bind(this);
		this.handleView = this.handleView.bind(this);
		this.secondValidate = this.secondValidate.bind(this);
		this.buttonAdd = this.buttonAdd.bind(this);
		this.valueData = this.valueData.bind(this);
		this.addName = this.addName.bind(this);
		this.addSurname = this.addSurname.bind(this);
		this.addIdentification = this.addIdentification.bind(this);
		this.addPhone = this.addPhone.bind(this);
		this.addEmail = this.addEmail.bind(this);
		this.postData = this.postData.bind(this);
		this.patchData = this.patchData.bind(this);

		/**Estado dónde se all*/
		this.state = {
			name: nameU,
			surname: surnameU,
			identification: identificationU,
			phone: phoneU,
			email: emailU,
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

		if(this.props.viewEdit){
			this.patchData(dataUser);
			
		} else {
			this.postData(dataUser);
		}
		
	}

	/**Estructura CRUD desde front todas son funciones asincronas*/
	postData(data){
		fetch('https://mongo-api.now.sh/api/dataMongo/', {
			method: 'POST',
			body: data,
			headers: {
				"Content-type": "application/json"
			}
		})
		.then((response) => {
			response.json();
		})
		.then((data) => {
			console.log(data);
			this.refresh();
		})
		.catch((err) => {
			console.log(err);
			alert('Error al agregar el usuario intentelo de nuevo')
		});
	}
	patchData(data){
		console.log('haciendo patch')
		console.log('Data enviada',data);
		

		fetch(`https://mongo-api.now.sh/api/dataMongo/${this.props.idUserU}`, {
			method: 'PATCH',
			body: data,
			headers: {
				"Content-type": "application/json"
			}
		})
		.then((response) => response.json())
			.then((data) => {
				console.log(data)
				this.refresh();
			})
			.catch((err) => console.log(err));
	}

	/**Da aviso al usuario de la ceracion o edicion del usuario, a su vez recarga la pagina para ver los cambios*/
	refresh(){
	
		if(this.props.viewEdit){
			alert(`El usuario ${this.state.name} se a actualizado`); 
		} else {
			alert(`El usuario ${this.state.name} se a añadido`); 
		}

		location.reload();
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


	handleView(){

		const {nameU, surnameU, identificationU, emailU, phoneU, viewEdit } = this.props;

		if(viewEdit){

			return (
				<section className="container-f">
					<div className="container-f__form">
						<div className="container-f__input">
						<Input val={nameU} f={this.addName} title={'Nombre'} />
						<Input val={surnameU} f={this.addSurname} title={'Apellido'} />
						<Input val={identificationU} f={this.addIdentification} title={'Cedula'} />
						<Input val={phoneU} f={this.addPhone} title={'Telefono'} />
						<Input val={emailU} f={this.addEmail} title={'Correo'} />
						</div>
						<BigButton funct={this.buttonAdd} text={'Editar'} />
					</div>
            	</section>
			);
		} else {
			
			return (
			<>
				<Header buttonH={true} dirBut={'/'} textBut={'Volver a inicio'} />
				<section className="container-f">
					<div className="container-f__form">
						<div className="container-f__input">
						<Input f={this.addName} title={'Nombre'} />
						<Input f={this.addSurname} title={'Apellido'} />
						<Input f={this.addIdentification} title={'Cedula'} />
						<Input f={this.addPhone} title={'Telefono'} />
						<Input f={this.addEmail} title={'Correo'} />
						</div>
						<BigButton funct={this.buttonAdd} text={'Agregar'} />
					</div>
				</section>
            </>
			);
		}


	}


    render(){
        return (
            <>
				{this.handleView()}
            </>
        );
    }
}

export default AddUser;	