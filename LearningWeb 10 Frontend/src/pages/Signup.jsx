import { useForm } from 'react-hook-form';

function Signup() {
    
    const {register, handleSubmit,formState: { errors },} = useForm();
    return(
    <>
    <form onSubmit={handleSubmit((data)=>console.log(data))}>
        <input {...register('firstName')} />
        <input {...register('email')} />
        <input {...register('password')} />
    </form>
    </>
    )
}
export default Signup;


// import { useState } from "react";

// function Signup() {
//     const [name  ,setName] = useState('');
//     const [email  ,setEmail] = useState('');
//     const [password  ,setPassword] = useState('');
    
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         //validation

//         //form ko submit kar denge 

//         //code to save in the backend
//     }
//     return (
//         <form onSubmit={handleSubmit} className=" min-h-screen flex flex-col justify-center items-center gap-y-3">
//             <input type="text" value={name} placeholder="Enter Your firstName" onChange={(e)=>{setName(e.target.value)}}></input>
//             <input type="email" value={email} placeholder="Enter your Emai;" onChange={(e)=>{setEmail(e.target.value)}}></input>
//             <input type="password" value={password} placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
//             <button type="submit"> Submit</button>
//         </form>
//     )
// }