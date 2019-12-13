import React from 'react';
import '../assets/styles/Listed.scss';
import ShowData from '../components/ShowData';
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

    /**Esta funcion hace parte del ciclo de react  y solo se ejecuta cuando el componente esta montado*/
    componentDidMount(){
        /**Traer datos*/
        this.getData();
    }

    /**Traer los datos desde la API mediante un fetch*/
    getData(){
        fetch('https://mongo-api.now.sh/api/dataMongo/')
            .then((response) => response.json())
                .then((data) => {
                    
                    this.setState({ users: data.data });
                })
                .catch((err) => console.log(err));
    }

    /**Se encarga de mostrar solo los componentes cuando se esta han cargado los datos*/
    show(){
        if(this.state.users !== 0){
            
            const datosUsers = this.state.users;
            const usersArray = [];
            
            for(let i=0; i < datosUsers.length; i ++){
                usersArray.push(this.transform(datosUsers[i]));  
            }
            
            return (usersArray)      
        }
        
    }

    /**Se encarga de encapsular los datos dentro del componente*/
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
                <Header buttonH={true} dirBut={'/'} textBut={'Volver a inicio'} />
                <section className="visibleArea" id="sectionid">
                    {this.show()}
                </section>
            </>
        );
    }
}

export default Listed;