import React from 'react'
import './Tab.css';
import UpdateIcon from '@mui/icons-material/Update';
const Tab = () => {

  const data = [
    {
      id:0,name:"Reliance Industries"  
    
    },
    {
      id:1,name:"Birlasoft"
    },
    {
      id:2,name:"Tata Sons"
    },
    {
      id:3,name:"Maskawala and Co."
    },
    {
      id:4,name:"Godrej Com."
    },
    {
      id:5,name:"Pidilite"
    },
    {
      id:6,name:"HPCL"
    },
    
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

export default Tab