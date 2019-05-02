import React, { Component } from 'react';
import Form from '../../components/form';
import { DB_CONFIG } from '../../services/firebase.js'
import firebase from 'firebase/app';
import 'firebase/database';
import './registerPet.scss';
import CardList from '../../components/Cardlist';

class RegisterPet extends Component {
    constructor(){
        super()

        this.app = firebase.initializeApp(DB_CONFIG)
        this.database = this.app.database().ref().child('Pets')

        this.state = {
            Pets: [],
            cadastrar: 'Cadastrar',
            loading: false,
            success: false
        }
    }

    componentWillMount(){ 
        const previousPets = this.state.Pets
        this.database.on('child_added', snap => {
            previousPets.push({
                id: snap.key,
                Nome: snap.val().Nome,
                Dono: snap.val().Dono,
                Idade: snap.val().Idade,
                Peso: snap.val().Peso,
                Porte: snap.val().Porte,
                Raca: snap.val().Raca
            })
            this.setState({
                Pets: previousPets
            })
        })
    }


    CadastrarPets = e => {
        e.preventDefault()
        const { nome, dono, peso, idade, raca } = e.target
        let Porte = e.target.elements.Porte.value
        const { Pets } = this.state

        const newPets = {
            Nome: nome.value,
            Dono: dono.value,
            Peso: peso.value,
            Idade: idade.value,
            Raca: raca.value,
            Porte: Porte
        }

        this.setState({
            cadastrar: null,
            loading: true
        })

        setTimeout(() => {
            this.setState({
                Pets: Pets.concat(newPets),
                cadastrar: 'Cadastrar',
                loading: false,
                success: true
            })
            this.database.push().set({ 
                ...newPets
            })
        }, 2000)

        setTimeout(() => {
            this.setState({
                success: false
            })
        }, 5000)

        
       nome.value = null
       dono.value = null
       peso.value = null
       idade.value = null
       raca.value = null
       Porte = null
    }

    

    

    render() {
        const { Pets, cadastrar, loading, success } = this.state
        return (
            <div className="registerPet">
                <Form cadastrarPets={(e) => this.CadastrarPets(e)} 
                cadastrar={cadastrar} 
                loading={loading}
                success={success}/>
                <div className="listPet">
                    {Pets.map((pet, index) => {
                        return (
                            <CardList key={index} 
                            Nome={pet.Nome} 
                            Dono={pet.Dono} 
                            Raca={pet.Raca} 
                            Peso={pet.Peso} 
                            Idade={pet.Idade}
                            Porte={pet.Porte}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default RegisterPet;
