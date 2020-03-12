import React, {useState} from 'react';
import './Login.scss';
import "antd/dist/antd.css";
import {useHistory} from 'react-router-dom'

const Login = ({login}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (e)=>{
      e.preventDefault();
      login(email, password)
      console.log(email, password, 'token');
    // history.push('/planning')

  }

  return (<section className="login">
    <div className="login-container">
      <h1>Connectez-vous :</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" name="first_name" className="login-form_input mail" placeholder="Adresse email" value={email} onChange={e => setEmail(e.target.value)} required="required"/>
        <input type="password" name="password" className="login-form_input password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required="required"/>
        <input type="submit" className="login-form_submit" value="Valider"/>
      </form>
    </div>
  </section>)
};

export default Login
