 import React from 'react'
 import Product from './Product'
 
 export default function ProductList(props) {
    
   return (
     props.productList.length > 0 ?
       props.productList.map((product, i)=>{
        return <Product product={product} key={i} IQ={props.IQ} index={i} DQ={props.DQ}  removeItem={props.removeItem}/>
       })
       : <h2> No Products Exists in the Carts </h2>
   )
 }
 