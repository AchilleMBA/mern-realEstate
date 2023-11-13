// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'

export default function SignOut() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 uppercase'> Inscription</h1>
      <form className='flex flex-col gap-5'>
        <input type="text"  placeholder='nom utilisateur' className='border p-3 rounded-lg' id='username'/>
        <input type="email"  placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type="text"  placeholder='mot de passe' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75'>Inscription</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Vous avez un compte?</p>
        <Link to ={"/sign-in"}>
        <span className='text-blue-700'>Se connecter</span>
        </Link>
      </div>
    </div>
  )
}
