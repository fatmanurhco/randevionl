import React, { useState } from 'react';
import './App.css'
import logo from './img/randevio-logo.svg'
import logorsp from './img/randevio-logo-rsp.svg'


function EmailForm() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('E-posta Adresi:', email);
    // E-posta adresini başka bir işlemde kullanabilirsiniz
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="E-Posta listemize kaydol, herkesten önce sen haberdar ol."
        />
      </label>

      <button type="submit"></button>
    </form>
  );
}

// export default EmailForm;
export default function App()
{
  return(
    <div className="container">
      <div className="hero">
        <h2>TÜRKİYE’NİN <span>EN İŞLEK DÜKKANI</span></h2>
       <h1>ÇOK YAKINDA BURADA</h1> 
       <img src={logorsp} alt="" className='logorsp'  />
      <img src={logo} alt="" className='rsp'/>
      <EmailForm />
      </div>
      
    </div>
  )
}