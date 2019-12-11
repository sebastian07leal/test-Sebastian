import React from 'react';
import '../assets/styles/Home.scss';
import Header from '../components/Header';

class Home extends React.Component {
  constructor(props){
    super(props);
    
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage(){
    this.props.history.pu
  }


  render() {
    return (
      <>
        <Header />
        <div className="container">
          <section className="content">
            <a href="/listed" className="content__a">
              <button className="content__first-button">LISTADO</button>
            </a>
            <a href="/AddUser" className="content__a">
              <button className="content__first-button">AGREGAR USUARIO</button>
            </a>
          </section>
        </div>
      </>
    );
  }
}

export default Home;