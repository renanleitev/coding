import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

export default function Alunos(){
    // Obtendo um array de alunos
    const [alunos, setAlunos] = useState([]);
    // Obtendo os dados da API
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            // console.log(response.data);
        }
        getData();
    }, []);
    return (
        <Container>
            <h1>Alunos</h1>
            <AlunoContainer>
                {alunos.map(aluno => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'Fotos[0].url', false) ? (
                                <img 
                                crossOrigin="anonymous" 
                                src={aluno.Fotos[0].url} 
                                alt=""
                                />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>
                        <span>{aluno.nome}</span>
                        <span>{aluno.sobrenome}</span>
                        <span>{aluno.email} </span>
                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={16}/>
                        </Link>
                        <Link to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={16}/>
                        </Link>
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}