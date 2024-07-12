import React, { useState } from 'react'
import axios from 'axios'
import  base from '../api/base.js'


function AddUser() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [gender, setGender] = useState("Male")

    const saveUser = async (e) =>{
        e.preventDefault();
        try {
            
            await axios.post( `${base.baseDb}/user`,{
                name,
                email,
                gender
            }).then(window.location.replace('/'))       

        } catch (error) {
        //    console.log(error);
        }
         
    }

  return (
    <div>
        <div className='container w-full  mx-auto'>
            <div className=" w-4/5 md:w-1/2  mt-10 rounded-lg mx-auto ">
                <form onSubmit={saveUser}>
                        <div class="w-full mb-8">
                                    <label for="nama" class="text-lg font-bold text-teal-500 mb-3">Nama</label>
                                    <input id="nama" class="w-full h-12 px-2 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 border " 
                                    value={name}
                                    
                                    onChange={(e)=>
                                        setName(e.target.value)
                                    }
                                    placeholder='Nama Anda' type="text"/>
                                    <label for="email" class="text-lg font-bold text-teal-500 mb-3">Email</label>
                                    <input id="email" class="w-full h-12 px-2 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 border" 
                                    value={email}
                                    onChange={(e)=>
                                        setEmail(e.target.value)
                                    }
                                    placeholder='Email Anda' type="text"/>
                                    <label for="gender" class="text-lg font-bold text-teal-500 mb-3">Gender</label>

                                    <select name="gender" id="gender" className="capitalize h-12 px-2 w-full focus:outline-none rounded-md focus:outline-2 focus:outline-teal-500 bg-slate-200"value={gender} onChange={(e)=>
                                        setGender(e.target.value)
                                    }>
                                        <option value="male" >male</option>
                                        <option value="female">female</option>
                                        <option value="volvo">volvo</option>
                                        <option value="gigabyte">gigabyte</option>
                                        <option value="hino">hino</option>
                                        <option value="samsung">samsung</option>
                                        <option value="mitsubishi">mitsubishi</option>
                                        <option value="toshiba">toshiba</option>
                                    </select>
                        </div>
                        <div class="w-full px-4">
                                <button type='submit' class="font-semibold w-full font-base text-white bg-teal-500 px-8 py-3 rounded-full  hover:opacity-80 hover:shadow-lg transition duration-500" 
                                >Tambah</button>
                        </div>
                </form>
            </div>
        </div>   
        <footer className='container w-full bg-gradient-to-b from-white to-slate-100 mt-36 py-4 mx-auto absolute bottom-0'>
            <div className='flex justify-center'>
            <p className='font-semibold text-lg text-slate-500 hover:text-teal-500'>@2024 Bling</p>
            </div>
        </footer> 
    </div>
  )
}

export default AddUser