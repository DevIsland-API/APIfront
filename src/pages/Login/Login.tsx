import { Box, Typography } from '@mui/material';
import ioniclogo from '../../assets/images/ionic-logo.png'
import Input from '../../components/inputs/input/input';
import InputPassword from '../../components/inputs/inputPassword/inputPassword';
import ButtonGeneral from '../../components/button/buttonGeneral/buttonGeneral';
import { Link } from 'react-router-dom';

import './Login.css'

const Login = () => {

    const handleSubmit = () => {
        // Lógica para lidar com o clique no botão de salvar
    };

    document.title = 'Login'

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
                    />

                    <InputPassword
                        id="input-password"
                        name="input-password"
                        title="Password"
                        placeholder={'*******'}
                    />
                </div>

                <Link to='/' className="link-button"><ButtonGeneral onClick={handleSubmit} className='button-submit-login'>Acessar minha conta</ButtonGeneral></Link>

            </Box>
        </Box>
    );
};

export default Login;
