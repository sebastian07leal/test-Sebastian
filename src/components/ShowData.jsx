import React from 'react';
import '../assets/styles/components/ShowData.scss';

const ShowData = ({ name, surname, identification, email, phone, del }) => {

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
            <button onClick={del}  className="container-elemnt-b__del">Eliminar</button>
            <button className="container-elemnt-b__add">Editar</button>
        </section>
    </div>
    );
}

// function deleData(){


    
// }


export default ShowData;