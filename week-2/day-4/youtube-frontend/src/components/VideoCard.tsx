import React from 'react';

interface Props {
 
  title: string;
  logo: string;
  img: string;
  brand: string;
  view: string;
 
}
function VideoCard(props:Props) {
  return (
    <div  className='flex flex-col  justify-center rounded-md w-80 p-1'>
      <img src={props.img} alt="" width={300} height={150} className='object-cover rounded-md' />
      <div className='flex align-center gap-2 mt-2'>
        <div>
          <img src={props.logo} alt="" width={70} className='rounded-full' />
        </div>
        <div>
          <div>
            <h1>{props.title.slice(0, 50)}</h1>
          </div>
          <div>
            <p className='text-gray-400 font-bold text-sm'>{props.brand}</p>
          </div>
          <div>
            <p className='text-gray-400 font-bold text-sm'>{props.view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
