import React from 'react'
class Product extends React.Component{
    //qty=1
    state={
      product:{
        product_Name:'Kross Hexa 29T',
        qty:1,
        price:20688,
        image:'https://rukminim2.flixcart.com/image/224/224/xif0q/cycle/d/r/i/hexa-29t-front-suspension-dual-disc-alloy-frame-shimano-gear-15-original-imah2yfq4faabkac.jpeg?q=90'
      },
      user:{}
    }
    incrHandler = ()=>{
        console.log("Inside IncrHandler")
      this.setState({ product:{...this.state.product,qty:this.state.product.qty+1}  })
    }
    decrHandler = ()=>{
        this.setState({product:{...this.state.product,qty:this.state.product.qty-1} })
    }
    render(){
        
        return <div className='container'>
                    <div className="row">
                    <div className="col-10">
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.product_Name}</td>
                                <td><img width={"80px"} src={this.state.product.image} alt="" /></td>
                                <td>{this.state.product.price}</td>
                                <td><i onClick={this.decrHandler} className='fa fa-minus-square'></i>{this.state.product.qty}<i onClick={this.incrHandler} className='fa fa-plus-square'></i></td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
               </div>
    }
}
export default Product