import React, { useEffect, useState } from 'react'

function Payments() {
  const initialPayment = {
    zaad : false,
    evc : false,
    zahal : false
}

const[payment, setPaymentMethod]=useState(initialPayment)
const [updated , setUpdated] = useState(false)

useEffect(()=>{
    if (payment) {
        setUpdated(true)
    }
},[payment, updated])

return (
<div>
    <div className="payment-cards">

    <h2 className='pay'>Pay With : </h2>
    <div className={`payment-card  ${payment.zahal && "selected"}`}
    onClick={()=>setPaymentMethod({...initialPayment , zahal:true })}>
       
            <h3>ZAHAL</h3>
        
    </div>
    <div className={`payment-card  ${payment.evc && "selected"} `}  onClick={()=>setPaymentMethod({...initialPayment , evc : true})}>
       
            <h3>EVC</h3>
        
    </div>
    <div className={`payment-card ${payment.zaad && "selected"}`} onClick={()=>setPaymentMethod({...initialPayment , zaad : true})}>
        
            <h3>ZAAD</h3>

        
    </div>

    <form action="">
        <input type="text" className='form-control' id="" placeholder='256...' />
        <button className="proceed" onClick={()=>{}}>Proceed</button>
    </form>
    
    </div>

</div>
)
}

export default Payments