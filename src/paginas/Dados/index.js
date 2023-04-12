import React, {Component} from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import "../../App.css";


class Login extends Component{
    constructor(props){
      super(props);
      this.state = {
        dados: []
      }

      this.getdados = this.getdados.bind(this);
    }

    getdados(){
      if(this.state.dados.length == 0){

        let dados = firebase.firestore().collection("usuario").get().then((retorno)=>{
          let state = this.state;
          retorno.forEach((item) =>{
              state.dados.push({
                id: item.id,
                nome: item.data().nome,
                sobrenome: item.data().sobrenome
              });
          });
          
          this.setState(state); 
          
        });
      }
    }

    render(){
      return(
        <div className='margem'>
            <h1>Dados</h1>            
            <button onClick={this.getdados} className='margem-superior-8'>visualizar</button>
            <div className='margem-superior-8'>
              {this.state.dados.map((item)=>{
                return(                  
                  <div className='card'>
                    <div><span>Id: </span>{item.id}</div>
                    <div><span>Nome: </span>{item.nome}</div>
                    <div><span>Sobrenome: </span>{item.sobrenome}</div>
                  </div>
                )
              })}
            </div>
            <div className='margem-superior-8'>
              <Link to="/">
                <button>Votar</button>
              </Link>
            </div>
        </div>
      );
    }

}

export default Login;