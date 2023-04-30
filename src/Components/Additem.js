import React from 'react'
class Additem extends React.Component {
   constructor(props){
    super(props);
    this.state={
 productName:"",
 productPrice:0,

    }
   }
    render() { 
        return (

            <form className='row mb-5' onSubmit={(e)=>{
                e.preventDefault();
                this.props.AddItem(this.state.productName,Number(this.state.productPrice));
                }}>

  <div className="mb-3 col-4">
    <label  htmlfor="inputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName" aria-describedby="name" name="productName"
    onChange={(e)=>{
        this.setState({productName: e.currentTarget.value})
    }}
    value={this.state.productName}
   
    />
     
  </div>
  <div className="mb-3 col-4">
    <label  htmlFor="inputprice" className="form-label">Price</label>
    <input type="number" className="form-control" id="inputprice" name="productPrice"
    onClick={(e)=>{
        this.setState({productPrice: Number(e.currentTarget.value)});
    }}
     value={this.state.productPrice}
  /*  defaultValue={this.state.productPrice}*/
    />
  </div>
   
  <button type="submit" className="btn btn-primary col-4">
    Add
  </button>
</form>
        );
    }
}
 
export default Additem;