import React from 'react'
import Card from "react-bootstrap/Card";
import './Order.css'

 function Orders() {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row ">
           
              <>
              <div id="flex">
               <div>
               <img src="https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL127_SR127,127_.jpg" id='orderimg'></img>
               </div>
               <div id='line'></div>
               <div className='order'>
               <strong>Ordered on</strong> <br/>
               </div>
               <div className='order'>
               <strong >Delivery to</strong>

               </div>

               <div id='cancel'> 
                <button className='btn btn-danger'>Cancel Order</button>
               </div>

              </div>
              </>
            
      </div>
    </div>
  )
}
export default Orders
