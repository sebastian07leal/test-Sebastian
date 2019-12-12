import React from 'react';
import '../assets/styles/components/ShowData.scss';

class ShowData extends React.Component {
    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    deleteUser(){
        console.log('eliminadando usuario:');
        console.log(this.props.idUser);        
        
        fetch(`http://localhost:3000/api/favorites/${this.props.idUser}`,{
            method: 'DELETE',
        })
        .then((response) => response.json())
            .then((data) => {
                this.refresh(data)
            })
            .catch((err) => console.log(err));

    }

    refresh(res){
        console.log(res);
        alert('Se elimino el usuario con exito');
        location.reload()
    }
    
    
    render(){

        const {name, surname, identification, email, phone, idUser} = this.props;
        
        return(
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
                <button onClick={this.deleteUser}  className="container-elemnt-b__del">Eliminar</button>
                <button className="container-elemnt-b__add">Editar</button>
            </section>
        </div>
        );

    }
}


export default ShowData;