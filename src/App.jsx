import React, { useState } from 'react'
import "./App.css"








const App = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('');

  const { email, password } = data
  const updateEmail = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // const regExpSpecialChars = /[!@#$%^&*(),.?":{}|<>]/;
// const[form ,setForm]=useState("")


  const submitHandler = (e) => {
    e.preventDefault();

//     const emailformat = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" ;

// if (!emailformat.test(form))
// {
//   setForm("email should containas @and.com so plese try to enter correct")
// }
// else {
  
// }




      console.log(data);
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password === "" || password === null) {
      setError("password should not be blank")

    } else if (password.length < 4) {
      setError("password should be more than 4 chars")
    } else if (!specialChars.test(password)) {
      setError("password should be at least 1digits,2special chars,1 lower and upper letters")
    } else {
      setError("")

    }

  }





  return (

    <div className='containar'>
      <div className=' sub-containar'>
        <h6> Welcome</h6>
        <h4>Holland&Knight</h4>
        <form action="off" autoComplete='off' onSubmit={submitHandler}>
          <label htmlFor='Email'>Email</label><br></br>
          <input type="email" placeholder='Enter Email' name='email' value={email} onChange={updateEmail} /><br></br>
          <br />

          <label htmlFor='password'>password</label><br></br>
          {/* <span style={{ color: "red" }}>{error}</span> */}
          <input type="password" placeholder='password' name='password' value={password} onChange={updateEmail} /><span className='password'>show</span>

          <br></br>

          <br /><span style={{ color: "red" }}>{error}</span>
          <button className='submit' >submit</button>

        </form>


        <p>
          <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C56P92ZeYOyF6bbW7I8usKeUXlgru-o1IR-GE2DtyKowHNLamdfAsAqznhB&amp;cid=1&amp;continue=https://myaccount.google.com/signinoptions/password?continue%3Dhttps://myaccount.google.com/security&amp;flowName=GlifWebSignIn&amp;hl=en_US&amp;ifkv=AYZoVhePK1dbWV-z1ig-ianKymfm1YFSMKTdaozUpeilvPtwTZf6trA-s0noJlzaF3cVn8HneWHZHg&amp;kdi=CAM&amp;rart=ANgoxceF9Fn-YayumsYofvTjQ2FTD9dtqiv-77zAsDJ1inlkbj7It_U4f393rrkUC14X-4nCTVSdXsJ3IEcmrx9HTxwjJ1j2Pg&amp;rpbg=1&amp;sarp=1&amp;scc=1&amp;service=accountsettings">
            Forgot Password?</a>
        </p>
      </div>

    </div>

  )
}

export default App