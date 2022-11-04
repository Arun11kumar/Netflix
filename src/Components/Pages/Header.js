import React from 'react'
import logo from './assets/letter-n-arrow-logo-template_23987-64.jpg'
import { useGlobalContext } from '../context'
import './hader.css'
function Hader() {
    const {isError} = useGlobalContext()
  return (
    <div className='main_hader'>
        <div className="contain">
           <div className="series">
             <h4> <img src={logo} alt="" className='logos' /> S E R I E S</h4>
           </div>
           <div className="main">
           <div className="outer">
             <h1 className='mainHeading'>OUTER<br/>BANKS </h1>
           </div>
           <div className="test1">
             <h5>Seasion 2 coming on 30 July</h5>
           </div>
           <div className="text2">
              On an ilend of have and -nots,teen John B enlists <br />
              his three best friends to hunt for a legendary treasure <br />
              likeed to his father's disappearance.
           </div>
           <div className="btns">
              <button className='play'>Play</button>
              <button className='info'>More Info</button>
           </div>
         </div>
        </div>
        <div className="error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Hader
