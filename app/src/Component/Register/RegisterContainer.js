import React, {useState} from 'react';
import Register from "./Register";

const RegisterContainer = () => {
  const register = (email, password) => {
    fetch("http://localhost:3000/users/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then((response) => {
      response.json().then((result) => {
        // console.log(result);
        localStorage.setItem('token', result.token)
      })
    });
  }

  const initialValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  const [values, setValues] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  return (<Register register={register} values={values} setValues={setValues} handleSubmit={handleSubmit}/>)

}

export default RegisterContainer
