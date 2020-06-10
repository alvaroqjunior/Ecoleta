import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import './styles.css'

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para Home
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br /> Ponto de Coleta</h1>

                <fieldset>
                    <legend><h2>Dados</h2></legend>
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input
                            type="text"
                            id="name"
                            name="name">
                        </input>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="name">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email">
                            </input>
                        </div>

                        <div className="field">
                            <label htmlFor="name">Whatsapp</label>
                            <input
                                type="text"
                                id="whatsapp"
                                name="whatsapp">
                            </input>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço do mapa</span>
                    </legend>

                    <div className="field-group">
                        <div className="field">

                            <label htmlFor="uf">Estado (UF)</label>
                            <select id="uf" name="uf">
                                <option value="0">Selecione uma Uf</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="uf">Cidade)</label>
                            <select id="city" name="city">
                                <option value="0">Selecione uma Cidade</option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend> <h2>Items de Coleta</h2> </legend>
                    <span>Selecione um ou mais items abaixo</span>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/lampadas.svg" alt=""/>
                            <span>Lampadas</span>
                        </li>

                        <li>
                            <img src="http://localhost:3333/uploads/baterias.svg" alt=""/>
                            <span>Pilhas e Baterias</span>
                        </li>

                        <li>
                            <img src="http://localhost:3333/uploads/papeis-papelao.svg" alt=""/>
                            <span>Papéis e Papelão</span>
                        </li>

                        <li>
                            <img src="http://localhost:3333/uploads/eletronicos.svg" alt=""/>
                            <span>Resíduos Eletrônicos</span>
                        </li>

                        <li>
                            <img src="http://localhost:3333/uploads/organicos.svg" alt=""/>
                            <span>Resíduos Orgânicos</span>
                        </li>

                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
                            <span>Óleo de cozinha</span>
                        </li>
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CreatePoint;