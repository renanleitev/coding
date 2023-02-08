import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {get} from 'lodash';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyle';
import { Form, ProfilePicture, Title } from './styled';
import Input from '../../components/Input'; 
import validate from '../../store/modules/auth/validate';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Aluno({ match }){
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!id) return;
        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                const Foto = get(data, 'Fotos[0].url', '');
                setFoto(Foto);
                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);
                setIsLoading(false);
            } 
            catch (e) {
                setIsLoading(false);
                const status = get(e, 'response.status', 0);
                const errors = get(e, 'response.data.errors', []);
                if (status === 400) errors.map(error => toast.error(error));
                history.push('/');
            }
        }
        getData();
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();
        validate({
            id: id, 
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            idade: idade,
            peso: peso,
            altura: altura, 
        });
        try {
            setIsLoading(true);
            if (id) {
                await axios.put(`/alunos/${id}`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso, 
                    altura,
                });
                toast.success('Aluno(a) editado(a) com sucesso!');
            } 
            else {
                const { data } = await axios.post('/alunos/', {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso, 
                    altura,
                });
                toast.success('Aluno(a) criado(a) com sucesso!');
                history.push(`/aluno/${data.id}/edit`);
            }
            setIsLoading(false);
        } 
        catch (e) {
            const status = get(e, 'response.status', 0);
            const data = get(e, 'response.data', {});
            const errors = get(data, 'errors', []);
            if (errors.length > 0) {
                errors.map(error => toast.error(error));
            }
            else {
                toast.error('Erro desconhecido');
            }
            if (status === 401) {
                dispatch(actions.loginFailure());
            }
        }
    };

    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>
            {id && (
                <ProfilePicture>
                    {foto ? (
                        <img 
                            crossOrigin="anonymous" 
                            src={foto} 
                            alt={nome}
                        />
                    ) : (
                        <FaUserCircle size={180}/>
                    )}
                    <Link to={`/fotos/${id}`}>
                        <FaEdit size={24}/>
                    </Link>
                </ProfilePicture>
            )}
            <Form onSubmit={handleSubmit}>
                <Input field={nome} setField={setNome} placeholder='nome'/>
                <Input field={sobrenome} setField={setSobrenome} placeholder='sobrenome'/>
                <Input field={email} setField={setEmail} placeholder='email'/>
                <Input field={idade} setField={setIdade} placeholder='idade'/>
                <Input field={peso} setField={setPeso} placeholder='peso'/>
                <Input field={altura} setField={setAltura} placeholder='altura'/>
                <button type='submit'>Enviar</button>
            </Form>
        </Container>
    );
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}