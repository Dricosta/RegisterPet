import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './form.scss';


const Form = ({ cadastrarPets, cadastrar, loading, success, error }) => {
    return (
        <div className="main-form">
            <form className="form" id="form" onSubmit={cadastrarPets}>
                <h1>Cadastre seu Pet</h1>
                <TextField
                name="Nome"
                id="nome"
                placeholder="Nome"
                className="form_input"
                autoComplete="off"
                />
                <TextField
                name="Dono"
                id="dono"
                placeholder="Dono"
                className="form_input"
                autoComplete="off"
                />
                <TextField
                name="Raca"
                id="raca"
                placeholder="Raça"
                className="form_input"
                autoComplete="off"
                />
                <TextField
                name="Idade"
                id="idade"
                placeholder="Idade"
                type="number"
                className="form_input"
                />
                <TextField
                name="Peso"
                id="peso"
                placeholder="Peso"
                type="number"
                className="form_input"
                />
                <h5 className="form_porte-title">Qual o porte do seu pet?</h5>
                <RadioGroup
                aria-label="position"
                name="Porte"
                id="porte"
                row
                >
                <FormControlLabel
                    value="pequeno"
                    control={<Radio color="primary" />}
                    label="Pequeno"
                    labelPlacement="end"
                    checked="true"
                />
                <FormControlLabel
                    value="medio"
                    control={<Radio color="primary" />}
                    label="Médio"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="grande"
                    control={<Radio color="primary" />}
                    label="Grande"
                    labelPlacement="end"
                />
                </RadioGroup>
                <button className="form_submit" type="submit">
                    {!!loading && <ReactLoading type="spin" color="white" height={20} width={20} />}
                    {cadastrar}
                </button>
                <div className={`form_msg ${success ? 'open-success' : 'close-success'}` }>
                    <FontAwesomeIcon className="form_msg-icon" icon="check-circle" />
                    Cadastro realizado com sucesso!
                </div>
                <div className={`form_msg error ${error ? 'open-error' : 'close-error'}` }>
                    <FontAwesomeIcon className="form_msg-icon" icon="times-circle" />
                    Preencha todos os campos.
                </div>
            </form>
          
        </div>
    );
}
  
export default Form;
