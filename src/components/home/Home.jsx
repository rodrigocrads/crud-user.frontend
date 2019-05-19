import React from 'react';
import Main from '../template/Main';

export default props =>
    <Main icon="home" 
            title="Início" 
            subtitle="Segundo Projeto do cap de React" >
        <div className="display-4">
            Bem vindo!
        </div>
        <hr />
        <p className="mb-0">Sistema desenvolvido para apresentar um
        cadastro de usuário com React</p>
    </Main>