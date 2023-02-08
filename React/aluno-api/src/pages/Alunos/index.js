import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

export default function Alunos(){
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsLoading(false);
        }
        getData();
    }, []);
    const handleDeleteAsk = e => {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;
        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    };
    const handleDelete = async (e, id) => {
        e.persist();
        let deleteSuccess = false;
        try {
            setIsLoading(true);
            await axios.delete(`/alunos/${id}`);
            setIsLoading(false);
            deleteSuccess = true;
            e.currentTarget.parentElement.remove();
        } 
        catch (e) {
            const errors = get(e, 'response.data.errors', []);
            errors.map(error => toast.error(error));
        }
        if (deleteSuccess) {
            window.location.reload(false);
        }
    };
    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <h1>Alunos</h1>
            {isLoggedIn ? (
                <AlunoContainer>
                <NovoAluno to="/aluno/">Novo aluno</NovoAluno>
                {alunos.map(aluno => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'Fotos[0].url', false) ? (
                                <img 
                                    crossOrigin="anonymous" 
                                    src={aluno.Fotos[0].url} 
                                    alt="Foto de aluno"
                                />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>
                        <span>{aluno.nome}</span>
                        <span>{aluno.sobrenome}</span>
                        <span>{aluno.email}</span>
                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={16}/>
                        </Link>
                        <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={16}/>
                        </Link>
                        <FaExclamation
                            size={16}
                            display={"none"}
                            cursor="pointer"
                            onClick={e => handleDelete(e, aluno.id)}
                        />
                    </div>
                ))}
                </AlunoContainer>
            ) : (
                <h3>Faça o login para visualizar os alunos!</h3>
            )}
        </Container>
    );
}