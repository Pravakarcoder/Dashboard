import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom' >
        <button className='btn btn-danger col-2' onClick={()=>{
            props.resetQ()
        }} >Reset</button>
        <div className='col-8 text-center bg-dark text-white'> Total Amount =&nbsp;
         ₹{props.totalamount}
        </div>
        <button className='btn btn-primary col-2'> Pay Now </button>
      </div> 
    
  )
}
