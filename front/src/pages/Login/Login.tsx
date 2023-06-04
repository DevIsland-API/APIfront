import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ioniclogo from '../../assets/images/ionic-logo.png'
import Input from '../../components/inputs/input/input';
import InputPassword from '../../components/inputs/inputPassword/inputPassword';
import ButtonGeneral from '../../components/button/buttonGeneral/buttonGeneral';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('aaaaaaaaaaaaaa')
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

    document.title = 'Login'

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
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
                    Acesse sua conta
                </Typography>

                <Typography style={{ fontSize: '16px' }} gutterBottom>
                    Insira seu email e senha para acessar sua conta
                </Typography>

                <div className='div-inputs-login'>
                    <Input
                        type='email'
                        id="input-email"
                        name="input-email"
                        title="E-mail"
                        placeholder="ex.: joaosilva123@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputPassword
                        id="input-password"
                        name="input-password"
                        title="Password"
                        placeholder={'*******'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Link to='/login' className="link-button">
                    <ButtonGeneral onClick={handleSubmit} className='button-submit-login'>
                        Acessar minha conta
                    </ButtonGeneral>
                </Link>

                <Typography variant="body2" className='div-create-user' gutterBottom>
                    <Link to="/signup" >Criar conta</Link>.
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
