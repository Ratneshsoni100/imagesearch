// import Axios from 'axios'
import axios from 'axios'
import React, { useState } from 'react'
import imagestyl from './image.module.css'

function Imagepro() {
    let  [txt, sendtxt]=useState('orange')
    let [showdata,setimgdata]=useState([])
    let acckey =`ulDSg4nY4mhrcmWW1rAT0gHuj7M0j8Y8_O8Ne-LpqXc`
    let lesubmit=async(event)=>{
event.preventDefault()
await axios
.get(`https://api.unsplash.com/search/photos/?client_id=${acckey}&query=${txt}`)
.then(data=>setimgdata(data?.data?.results))
.catch(err=>console.log(err))
    }
    let renderdata=showdata.map(ele=>{
      return <div  key={ele?.id}> 
      <img   
      className={imagestyl?.images}  
       src={ele?.urls?.small} 
       alt={ele?.alt_description} />
       </div>
    })
  return (
    <div>
        <form onSubmit={lesubmit}>
      <input type="text" name="" id="" value={txt}
      onChange={(event) =>sendtxt(event.target.value)}/>
      </form>
     <div className={imagestyl.one}> {renderdata}</div>
    </div>
  )
}

export default Imagepro
