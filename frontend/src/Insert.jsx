import { useState } from "react";
import axios from 'axios';

const Insert=()=>{
    const [input,setInput]=useState({});
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=()=>{
        let url='http://localhost:8000/user/usersave';
        axios.post(url,input).then((res)=>{
            alert("data saved");
        })
    }

    return(
        <>
        <h1>Insert Page</h1>
        Enter First Name : <input type="text" name="fname" value={input.fname} onChange={handleInput} /> <br /> <br />
        Enter Last Name : <input type="text" name="lname" value={input.lname} onChange={handleInput}/> <br /> <br />
        Enter user id : <input type="text" name="uname" value={input.uname} onChange={handleInput}/> <br /> <br />
        Enter email : <input type="text" name="email" value={input.email} onChange={handleInput}/> <br /> <br />
        <input type="submit" onClick={handleSubmit} />
        </>
    )
}

export default Insert;