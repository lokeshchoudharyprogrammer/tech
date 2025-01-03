import React from 'react'
import OwnStore from "../assets/ownstore.png"
import menwithshop from "../assets/menwithshop.png"
import CuteGirl from "../assets/cutegirlshop.png"
export const Section = () => {
  return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            height: '100vh',
        }}>

        <div>
            <img width={'50%'} src={CuteGirl} alt='product'/>

        </div>

        <div>
            <img src={OwnStore} alt='product'/>

        </div>
        

        </div>
    </div>
  )
}
