import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ioniclogo from '../../assets/images/ionic-logo.png'
import Input from '../../components/inputs/input/input';
import InputPassword from '../../components/inputs/inputPassword/inputPassword';
import ButtonGeneral from '../../components/button/buttonGeneral/buttonGeneral';
import { Link } from 'react-router-dom';

import '../Login/Login.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Usuário criado com sucesso!', data);
                // Faça o que for necessário após criar o usuário
            } else {
                // Trate o erro ao criar o usuário
                console.log('Erro ao criar o usuário');
            }
        } catch (error) {
            // Trate o erro de conexão
            console.log('Erro de conexão', error);
        }
    };

    document.title = 'Signup';

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* Lado Esquerdo - Verde com Imagem */}
            <Box
                sx={{
                    backgroundColor: '#72C3CC',
                    width: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={ioniclogo} alt="Imagem" />
            </Box>

            {/* Lado Direito - Formulário */}
            <Box
                sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Criar uma nova conta
                </Typography>

                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Preencha os campos abaixo para criar uma nova conta:
                </Typography>

                <div className='div-inputs-signup'>
                    <Input
                        type='text'
                        id="input-name"
                        name="input-name"
                        title="Nome completo"
                        placeholder="Digite seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type='email'
                        id="input-email"
                        name="input-email"
                        title="E-mail"
                        placeholder="exemplo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputPassword
                        id="input-password"
                        name="input-password"
                        title="Senha"
                        placeholder={'Digite sua senha'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputPassword
                        id="input-confirm-password"
                        name="input-confirm-password"
                        title="Confirmar senha"
                        placeholder={'Digite novamente sua senha'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <Link to='/login' className="link-button">
                    <ButtonGeneral onClick={handleSubmit} className='button-submit-signup'>
                        Criar conta
                    </ButtonGeneral>
                </Link>

            </Box>
        </Box>
    );
};

export default Signup;
