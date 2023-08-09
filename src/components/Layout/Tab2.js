import React from 'react'
import './Tab.css';
import UpdateIcon from '@mui/icons-material/Update';
const Tab2 = () => {

  const data = [
    {
      id:0,name:"Rajwade and Sons"  
    
    },
    {
      id:1,name:"Zensar"
    },
    {
      id:2,name:"Cybage"
    },
    {
      id:3,name:"Thoughtworks"
    },
    {
      id:4,name:"PWC"
    },
    {
      id:5,name:"Deliotte"
    },
    {
      id:6,name:"IOCL"
    }
  
]


  return (
    <>

 <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
  {
    data.map((curElm) =>
    <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><UpdateIcon className="iconpd" />{curElm.name}</button>)
  }
  </li>
  
</ul>

    </>
  )
}

export default Tab2