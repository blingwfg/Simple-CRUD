import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import base from '../api/base';

export const UserList = () => {
const [users, setUser] = useState([])

useEffect(()=>{
    getUser()
}, [])
const getUser = async() =>{
    const response = await axios.get(`${base.baseDb}/user`)
    setUser(response.data)
}
const deleteUser = async (id) =>{
    try {
       await axios.delete(`${base.baseDb}/user/${id}`)
        getUser();
    } catch (error) {
        // console.log(error);
    }   
}

return (
    <div >
        <div className="container text-sm w-full mx-auto p-4 ">
            <div className="mx-auto w-full md:w-2/3">
                <h1 className="text-center text-lg md:text-3xl text-teal-500 font-bold my-5">Tabel List</h1> 
                    <Link to="add" className=' text-white text-center font-semibold md:text-lg px-3 py-2 w-1/3 md:py-3 mb-2 block bg-teal-500 rounded-lg  '>Add Username</Link>
                <table className='w-full text-base border-separate  border border-slate-900 rounded-lg'>
                    <thead className='border-b-2 border-slate-700 md:text-xl '>
                        <tr className=' text-slate-500'>
                            <th className='px-3 py-2 md:px-6 md:py-3'>No</th>
                            <th className='px-3 py-2 md:px-6 md:py-3'>Name</th>
                            <th className='px-3 py-2 md:px-6 md:py-3'>Email</th>
                            <th className='px-3 py-2 md:px-6 md:py-3'>Gender</th>
                            <th className='px-3 py-2 md:px-6 md:py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => (
                        <tr key={users.id} className=' font-sm md:text-lg divide-y-2 text-center'>
                            <td>{index + 1}</td>
                            <td className='capitalize'>{users.name}</td>
                            <td>{users.email}</td>
                            <td className='capitalize'>{users.gender}</td>
                            <td className=' flex font-[600] items-center  justify-between py-2 px-1 '>
                                <a href={`edit/${users.id}`} className='px-3 py-1 bg-teal-600 text-white rounded-lg hover:opacity-80 capitalize transition duration-300 ease-in-out'>edit</a>
                                <button onClick={()=> deleteUser(users.id)} className='px-3 py-1   mx-2 bg-sky-600 text-white rounded-lg hover:opacity-80  capitalize transition duration-300'>hapus</button>
                            </td>          
                        </tr>
                        ))}
                    </tbody>
                </table>
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

export default UserList;
