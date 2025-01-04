import React from 'react'
import OwnStore from "../assets/ownstore.png"
import familyshop from "../assets/familyshop.png"
import CuteGirl from "../assets/cutegirlshop.png"
import shop from "../assets/carts.png"
import { Slider } from '../Components/Slider'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/service/Api'
import { useEffect } from 'react'
import {   useNavigate } from 'react-router-dom'
export const Section = () => {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>

      {/* <Slider/> */}

      <div className='categories-section'>
        {
          categories && categories?.map((category, index) => {
            return (
              <div className='category' key={index}>
                <p>{category}</p>
              </div>
            )
          })
        }
      </div>

     

      <div className='shop-now'>

        <div className='shop-now-section-inside' >
          <img width={'50%'} src={CuteGirl} alt='product' />

        </div>

        <div>
          <button onClick={() => { 
            navigate('/product')
          }} class="button">
            show now
          </button>
        </div>

        <div className='shop-now-section-inside' >
          <img width={"60%"} src={shop} alt='product' />

        </div>



      </div>


    </div>
  )
}
