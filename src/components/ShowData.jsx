import React from 'react';
import '../assets/styles/components/ShowData.scss';
import AddUser from '../containers/AddUser';

class ShowData extends React.Component {
    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleButton = this.handleButton.bind(this);

        this.state = {
            button: false
        }
    }

    /**Se encarga de eliminar el usuario seleccionado*/
    deleteUser(){
        console.log('eliminadando usuario:');
        console.log(this.props.idUser);        
        
        fetch(`https://mongo-api.now.sh/api/dataMongo/${this.props.idUser}`,{
            method: 'DELETE',
        })
        .then((response) => response.json())
            .then((data) => {
                this.refresh(data)
            })
            .catch((err) => console.log(err));

    }

    /**Refresca automaticamente depues de eliminar un usuario*/
    refresh(res){
        console.log(res);
        alert('Se elimino el usuario con exito');
        location.reload()
    }

    /**Cambia el estado del boton cuando es cliqueado*/
    handleButton(){
        this.setState({ button: !this.state.button})
    }

    /**Gestiona las vistas que se deben renderizar egun es el caso*/
    handleView(){
        const {name, surname, identification, email, phone, idUser} = this.props;        

        if(this.state.button){
            
            return (
                <AddUser 
                nameU={name} 
                surnameU={surname} 
                identificationU={identification} 
                emailU={email} 
                phoneU={phone} 
                idUserU={idUser}
                viewEdit={true}
                />
            );
        } else {
            return (
                <div className="container-items-form">
                <section className="container-elemnt-f">
                    <div className="container-elemnt-f__item">
                        <h3 className="container-elemnt-f__item--title" >{name}</h3>
                    </div>
                    <div className="container-elemnt-f__item">
                        <h3 className="container-elemnt-f__item--title" >{surname}</h3>
                    </div>
                    <div className="container-elemnt-f__item">
                        <h3 className="container-elemnt-f__item--title" >{identification}</h3>
                    </div>
                    <div className="container-elemnt-f__item">
                        <h3 className="container-elemnt-f__item--title" >{email}</h3>
                    </div>
                    <div className="container-elemnt-f__item">
                        <h3 className="container-elemnt-f__item--title" >{phone}</h3>
                    </div>
                </section>
                <section className="container-elemnt-b">
                    <button type='button' onClick={this.deleteUser}  className="container-elemnt-b__del">Eliminar</button>
                    <button type='button' onClick={this.handleButton} className="container-elemnt-b__add">Editar</button>
                </section>
            </div>
            );
        }
    }

    render(){        
        return(
            <>
            {this.handleView()}
            </>
        );
    }
}


export default ShowData;