import React, { useState } from 'react'


const Billing = () => {
            const [product,setProductName]=useState('');
            const [quantity,setQuantity]=useState('');
            const [rate,setRate]=useState('');
            let total=0;
            const gst=0;
            const final=0;
           
            function show(){
               const total=rate *quantity;
               const gst=rate * quantity *0.18;
               const final=(rate *quantity)+(rate *quantity*0.18);
            }

    

  return (
    <div>
      <div className="container">
        <h3>Billing Software</h3><hr />
        <div className="new">
            <button id='newBill'>Generate New Bill</button>
            <p>GST No:22AAAAAA0000A1Z5</p>
        </div>
        <hr />
        <div className="add">
            <div className="items">
                <p>Product Name</p>
                <label htmlFor="product">
                    <input type="text" placeholder='Enter Product Name' value={product} onChange={e=>setProductName(e.target.value)} required/>
                </label>
            </div>
            <div className="items">
                <p>Quantity</p>
                <label htmlFor="Quantity">
                    <input type="number" placeholder='No of Quantity' value={quantity} onChange={e=>setQuantity(e.target.value)} required />
                </label>
            </div>
            <div className="items">
                <p>Rate</p>
                <label htmlFor="rate">
                    <input type="number" placeholder='Rate of product' value={rate} onChange={e=>setRate(e.target.value)} required/>
                </label>
            </div>
            <div className="items">
                <p>Total</p>
                <input type="text" name="" id="" value={quantity * rate}/>
            </div>
            <button id='add' onClick={show}>Add Product</button>
        </div>
        <hr />
        <div className="final">
            <p >Cost Of the product : <span>{rate*quantity}</span></p>
            <p>GST  <span style={{marginLeft:"8vw"}}>:{rate*quantity*0.18}</span></p>
            <p >Final Amount To pay : <span>{(rate*quantity*0.18)+(rate*quantity)}</span></p>
            
        </div>
      </div>
    </div>
  )
}

export default Billing
