import { useState } from "react"
import React from 'react'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async()=> {
      try {
          const res = await fetch('/login',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({email, password})
          })
          const data = await res.json()
          if (!res.ok) {
              const {error} = data;
              throw Error(error)
          }
          if (res.ok) window.location.href = `/Dboard?email=${email}`
      } catch (error) {
          console.log(error);
          
      }
  }


  return (

    <div id='main'>

        <h1 id='heading'>Welcome to Dispensary</h1>
        
        <fieldset id='fieldsetLogin'>

            <legend id='lgnd'><h2>User Registration Form</h2></legend>

                <div >

                      <div >
                          <input type='email'id='inputf' value={email} onInput={e=>setEmail(e.target.value)} placeholder='Enter Your E-mail ' /><br/><br/>
                          <input type='password' id='inputf'value={password} onInput={e=>setPassword(e.target.value)} placeholder='Enter Your Password ' /><br/><br/>
                      </div>

                      <div>
                          <button id='btn' onClick={login}>Enter to Register</button>
                      </div>

                </div>

      </fieldset>
        
    </div>
  )
}

// import React from 'react'

// export default function Login() {
//   return (
//     <div>

          
//     <div >
//          <input type='email'id='inputf' placeholder='Enter Your E-mail ' /><br/><br/>
//         <input type='password' id='inputf'  placeholder='Enter Your Password ' /><br/><br/>
//     </div>

//     </div>
//   )
// }
