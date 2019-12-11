import React from 'react';
import '../assets/styles/Home.scss';
import Header from '../components/Header';

class Home extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <section className="content">
            <button className="content__first-button">LISTADO</button>
            <button className="content__first-button">AGREGAR USUARIO</button>
          </section>
        </div>
      </>
    );
  }
}

export default Home;