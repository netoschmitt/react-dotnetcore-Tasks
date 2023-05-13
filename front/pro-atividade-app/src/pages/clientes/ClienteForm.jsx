import React from 'react';
import { Button } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom';

const ClienteForm = () => {
    let navigate = useNavigate();
    let { id } = useParams();

    return (
        <>
            <TitlePage title={'Cliente detalhes ' + (id !== undefined ? id : '')}>
                <Button 
                        variant='outline-secondary' 
                        onClick={() => navigate('/cliente/lista')}>
                        <i className='fas fa-undo me-3'></i> Voltar
                </Button>
            </TitlePage>
            <div>Formulario</div>
        </>
    );
}

export default ClienteForm;
