import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let url='http://localhost:8000/user/datadisplay';
    axios.get(url).then((res)=>{
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  })

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td> {key.firstname} </td>
        <td> {key.lastname} </td>
        <td> {key.User.username} </td>
        <td> {key.User.email} </td>
      </tr>
      </>
    )
  })
    return(
        <>
          <h1>This is Display Page</h1>
          <table border='1'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </table>
    
        </>
    )
}

export default Display;