import React, {Component} from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import "../../App.css";

class Cadastro extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: ""
      }

      this.gravar = this.gravar.bind(this);
    }

    async gravar(){
        await firebase.firestore().collection("usuario").add(
            {
                nome: this.state.nome,
                sobrenome: this.state.sobrenome
            }
        );

    }

    render(){
      return(
        <div className='margem'>
            <h1>Cadastrar</h1>
            <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} /><br/>
            <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} /><br/>
            <button onClick={this.gravar} className='margem-superior-8'>Cadastra</button>
            <div>
                <Link to="/Dados">
                    <button className='margem-superior-8'>Acessar dados</button>
                </Link>
            </div>
        </div>
      )
    }
}

export default Cadastro;