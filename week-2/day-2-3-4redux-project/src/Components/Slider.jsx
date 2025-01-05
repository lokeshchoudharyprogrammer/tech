import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export const Slider = () => {
  return (
    <div className='slider'>  
    <div>
        <h1>Slider</h1>
    </div>
    <AwesomeSlider animation="cubeAnimation" infinite={true} bullets={false} height={"400px"} >
    <div>
        <img src="https://media.licdn.com/dms/image/v2/D4D12AQFtfrToizelbw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704815843979?e=2147483647&v=beta&t=cbOjd6847BTJjRKlgz4F97TOa0MYKEODlcesR-MK0oE" alt="image1" />
    </div>
    <div>
        <img src="https://blog.emb.global/wp-content/uploads/2024/02/The-Future-of-Shopping-How-AI-Image-Recognition-is-Changing-Retail.webp" alt="image1" />
    </div>
        
  </AwesomeSlider>
  <div>
        <h1>Slider</h1>
    </div>
  </div>
  )
}
