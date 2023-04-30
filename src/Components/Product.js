import React from 'react'
 
export default function Product(props) {
    

  return (
    <div className='row mt-3'>
        <div className='col-5'>
            <h2> {props.product.Name}<span className="badge text-bg-secondary">₹{props.product.price}</span></h2>
        </div>
      <div className="col-3">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger" onClick={()=>{props.DQ(props.index)}}>-</button>
  <button type="button" className="btn btn-warning">{props.product.Quantity}</button>
  <button type="button" className="btn btn-success" onClick={() =>{props.IQ(props.index )}}>+</button>
</div>  
      </div>
       <div className="col-2">
        {props.product.price*props.product.Quantity}
       </div>
       <div className="col-2">
        <button className="btm btn-danger" onClick= {()=>{props.removeItem(props.index)}}> Remove</button>

       </div>
    </div>
  )
}
