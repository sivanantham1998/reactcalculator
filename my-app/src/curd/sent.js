import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./api";

export default function Sent(){

    //post
    const [name,setname]=useState('');
    const sqq =(e)=>
    {

        e.preventDefault();
        console.log(name);
        setname('');
        axios.post('https://645dee9a12e0a87ac0e32687.mockapi.io/siva',{Name:name})

 
         
    }

    //get
    const [name1,setname1]=useState([]);
   useEffect(()=>{ axios.get('https://645dee9a12e0a87ac0e32687.mockapi.io/siva').then((siva)=>{
    // console.log(siva.data);
    setname1(siva.data)
})},[])

//delete

const del = (a)=>{
axios.delete(`${API}/${a}`).then(()=>{
    axios.get('https://645dee9a12e0a87ac0e32687.mockapi.io/siva').then((siva)=>{
    // console.log(siva.data);
    setname1(siva.data)
})
})

}
    
    return(<>
        <h1>Axios</h1>
        <form onSubmit={sqq}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
             <input type="submit" ></input>
        </form>

            <center>


                <h5>read</h5>
                <table border={'10px'}>
                    {name1.map((t)=>(
                            <tr>
                                <td><li>{t.Name}</li></td>
                                <td><button onClick={()=>del(t.id)}>del</button></td>

                            </tr>
                    ))}
                </table>
            </center>


</>)}