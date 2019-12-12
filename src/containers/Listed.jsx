import React from 'react';
import ReactDOM from 'react-dom'
import ShowData from '../components/ShowData';
import '../assets/styles/Listed.scss';


import Header from '../components/Header';

class Listed extends React.Component {
    constructor(props){
        super(props);
        
        this.getData = this.getData.bind(this);
        this.show = this.show.bind(this);
        this.transform = this.transform.bind(this);

        this.state = {
            users: 0
        }
    }

    componentDidMount(){
        /**Traer datos*/
        this.getData();

    }

    /**CRUD de la aplicación*/
    getData(){
        
        fetch('http://localhost:3000/api/favorites/')
            .then((response) => response.json())
                .then((data) => {
                    
                    this.setState({ users: data.data });
                })
                .catch((err) => console.log(err));

    }

    show(){

        if(this.state.users !== 0){
            
            const datosUsers = this.state.users;

            const usersArray = [];
            
            for(let i=0; i < datosUsers.length; i ++){
              
                usersArray.push(this.transform(datosUsers[i]));
                
            }
            
            console.log('usersArray');
            console.log(usersArray);
            return (usersArray)
            
        }
        
    }

    transform(dataUser){

        return (
            <ShowData
                key={dataUser._id}
                name={dataUser.nombre} 
                surname={dataUser.apellido} 
                identification={dataUser.cedula}
                email={dataUser.correo} 
                phone={dataUser.telefono}
                idUser={dataUser._id}
            />
        );

    }


    render(){

        return (
            <>
                <Header />
                <section className="visibleArea" id="sectionid">
                    {this.show()}
                </section>
            </>
        );
    }
}

export default Listed;