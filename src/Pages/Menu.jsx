import React, { useState } from 'react'
import {MenuList} from '../Helpers/MenuList'

const Menu = () => {
  const [ara ,setAra] = useState("")
  return (
    <div className='menu'>
        <h1 className="menuTitle">MENÜ</h1>
        <input className='search' type="text" value={ara} placeholder='Search....' onChange={(e)=>setAra(e.target.value)}/>
      
        <div className="menu-div">
          {MenuList
           .filter((index)=> {
          if (ara === "") {   
            return index;
          }
           else if (index.name.toLowerCase().includes(ara.toLowerCase())) 
          {
            return index;
          }
        })
          .map((index,key)=>{
          return<div className="menu-div1" key={key}>
            <img src={index.image} />
            <h2>{index.name}</h2>
            <p>{index.price}</p>
          </div>
          })}
        </div>
    </div>
  )
}

export default Menu