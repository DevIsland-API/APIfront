import React, { useState } from "react";
import Swal from "sweetalert2";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formInputs, setFormInputs] = useState<LoginFormInputs>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // perform validation
    if (!formInputs.email || !formInputs.password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "por favor preencha os campos!",
      });
      return;
    }
    // perform login logic
    Swal.fire({
      icon: "success",
      title: "logado!",
    });
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{textAlign: "center"}}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formInputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div style={{textAlign: "center", marginTop: 15}}>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={formInputs.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={{textAlign: "center", marginTop: 20}}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
