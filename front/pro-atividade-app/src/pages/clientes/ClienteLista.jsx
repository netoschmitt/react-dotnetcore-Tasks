import { useState } from 'react';
import TitlePage from '../../components/TitlePage';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const clientes = [
    {
        id:1,
        nome: 'Microsoft',
        responsavel: 'Otto',
        contato: 10101010,
        situacao: 'Ativo'
    },
    {
        id:2,
        nome: 'Amazon',
        responsavel: 'Ozama',
        contato: 69696969,
        situacao: 'Em Analise'
    },
    {
        id:3,
        nome: 'Google',
        responsavel: 'Mike',
        contato: 22222222,
        situacao: 'Desativado'
    }
]

const ClienteLista = () => {
    const history = useHistory();
    const [termoBusca, setTermoBusca] = useState('')

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);
    };

            
    const clientesFiltrados = clientes.filter((cliente) => {
        return (
            Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase())
            // cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1 ||
            // cliente.responsavel.toLocaleLowerCase().indexOf(termoBusca) !== -1
        );
    });

    const novoCliente = () => {
        history.push('/cliente/detalhe');
    };


    return (
        <>
            <TitlePage title='Cliente Lista'>
                <Button variant='outline-secondary' onClick={novoCliente}>
                   <i className='fas fa-plus me-3'></i> Novo Cliente
                </Button>
            </TitlePage>

                <InputGroup className="mt-3 mb-3">
                    <InputGroup.Text className=''>Buscar:</InputGroup.Text>
                    <FormControl 
                        onChange={handleInputChange} 
                        placeholder='Digite para buscar '
                    />
            </InputGroup>
            <table className="table table-striped table-hover">
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Responsavel</th>
                        <th scope="col">Contato</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.responsavel}</td>
                        <td>{cliente.contato}</td>
                        <td>{cliente.situacao}</td>
                        
                        <td>
                            <div>
                                <button 
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => history.push(`/cliente/detalhe/${cliente.id}`)}>
                                    <i className='fas fa-user-edit me-2'></i>
                                    Editar</button>
                                <button className="btn btn-sm btn-outline-danger me-2">
                                    <i className='fas fa-user-times me-2'></i>
                                    Desativar</button>
                            </div>
                        </td>
                    </tr>
                    ))}
                   
                </tbody>
                </table>
        </>
    );
}


export default ClienteLista;