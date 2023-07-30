import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import { baseUrl,fetchAPi } from './fetchAPI'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'




function App() {

  

  return (
      <nav className='flex items-center justify-between flex-wrap bg-slate-500 p-2 -mt-5 h-20'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'> 
        <img src={logo} alt='logo' className='w-20 h-20 text-lg ml-5 p-5 '/>
        <Link to="/"><span className='font-semibold text-xl tracking-tight'>Saster.</span></Link>
        </div>
        <div className='w-full block lg:flex-grow lg:items-center lg:w-auto sm:w-auto'>
          <div className='text-sm flex-grow font-bold gap-5 justify-stretch lg:ml-96 tracking-widest'>
            <a href='/Calc' className='block mt-3 lg:inline-block lg:mt-2 text-blue-50 hover:text-pink-500 mr-4 font-bold '>Calc</a>
            <a href='/About' className='block mt-3 lg:inline-block lg:mt-2 text-blue-50 hover:text-pink-500 mr-4'>About</a>
            <a href='/Contact' className='block mt-3 lg:inline-block lg:mt-2 text-blue-50 hover:text-pink-500 mr-4'>Contact</a>
            <a href='/Calc' className='block mt-2 lg:inline-block lg:-mt-0 float-right mr-5'><Button variant='contained' color='secondary'>KNow More</Button></a>
          </div>
          
        </div>
      

      </nav>
  )
}

export default App;
      {/* {count.map((item)=>([<h6>{item.name}</h6>,
      <h5>{item.age}</h5>]))}
       <Button variant='contained'>Submit</Button> */}
export async function getStaticProps(){
  const data= await fetchAPi(`${baseUrl}/`)
}       
