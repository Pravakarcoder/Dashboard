import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList';
import React, {useState} from 'react'
import Footer from './Components/Footer'
import Additem from './Components/Additem';
 

function App() {
  /*changing const to var*/
  var products=[
    {
      Name:"Iphone",
      price:100000,
      Quantity:0,
    },
    {
      Name:"Redmi",
      price:10000,
      Quantity:0,
    }, {
      Name:"Blackberry",
      price:50000,
      Quantity:0,
    }, {
      Name:"vivo",
      price:30000,
      Quantity:0,
    } 
  ]

   let [productList , setProductList] = useState(products)
   let [totalamount , settotalamount] = useState(0)
    const IQ=(index)=>{
    let newProductList = [...productList]
    let newtotalamount = totalamount;
    newProductList[index].Quantity++
    newtotalamount += newProductList[index].price
    settotalamount(newtotalamount)
    setProductList(newProductList);
   }


   var DQ =(index)=>{
    let newProductList =[...productList];
    let newtotalamount=totalamount;



     if( newProductList[index].Quantity  > 0)
     {

      newProductList[index].Quantity--
      newtotalamount -= newProductList[index].price
     }
     settotalamount(newtotalamount)
    setProductList(newProductList);
   }
 const resetQ = ()=>{
 let newProductList = [...productList]
 newProductList.map((products)=>{
  
   products.Quantity = 0;
 })
 setProductList(newProductList)
 settotalamount(0);
 }
 /*changing const to var*/
  const removeItem =(index)=>{
  let newProductList =[...productList];
  let newtotalamount = totalamount;
  newtotalamount -= newProductList[index].price *  newProductList[index].price
  newProductList.splice(index , 1)


  setProductList(newProductList);
  settotalamount(newtotalamount);
 }
  const AddItem = (Name,price)=>{
 let newProductList =[...productList];
 newProductList.push({
  price:price,
Name:Name,
Quantity:0
});
 setProductList(newProductList);
 
  }





  return (
     <>

     <Navbar/>
     <main className="container" mt-5 ="true">

      <Additem AddItem={AddItem}/>

  <ProductList productList={productList} IQ={IQ}  DQ={DQ} removeItem={removeItem}/>

</main>

      <Footer totalamount={totalamount} resetQ={resetQ}/>
     </>
  );
}

export default App;
