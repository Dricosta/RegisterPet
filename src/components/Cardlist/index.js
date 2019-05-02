import React from 'react';
import './Cardlist.scss';

const CardList = ({ Nome, Dono, Idade, Peso, Porte, Raca }) => {
    return (
        <ul className="listPet_list">
            <div className="listPet_list-divisor">
                <li className="listPet_list-item">Nome: {Nome}</li>
                <li className="listPet_list-item">Dono: {Dono}</li>
            </div>
            <div className="listPet_list-divisor">
                <li className="listPet_list-item">Idade: {Idade}</li>
                <li className="listPet_list-item">Peso: {Peso}kg</li>
            </div>
            <div className="listPet_list-divisor">
                <li className="listPet_list-item">Porte: {Porte}</li>
                <li className="listPet_list-item">Raça: {Raca}</li>
            </div>
        </ul> 
    );
}

export default CardList;
