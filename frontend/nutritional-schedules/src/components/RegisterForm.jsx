import { useState } from 'react'
const RegisterForm = () =>{
  const [register, setRegister] =useState({
    name:"",
    birthdate:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    let prop = register
    prop[e.target.name] = e.target.value;
    setRegister({...prop})
  }

  const submit = () =>{
    console.log(register);
  }
  return(
    <div>
      <form>
        <label>Nome:</label>
        <input type="text" name="name" onChange={(e)=> handleChange(e)} />
        <br/>
        <label>Data de nascimento:</label>
        <input type="date" name="birthdate" onChange={(e)=> handleChange(e)} />
        <br/>
        <label>Email:</label>
        <input type="text" name="email"onChange={(e)=> handleChange(e)} />
        <br/>
        <label>Senha:</label>
        <input type="text" name="password" onChange={(e)=> handleChange(e)} />
        <br/>
        <button type="submit" onClick={submit}>Registrar</button>
      </form>
    </div>
  )
}

export default RegisterForm