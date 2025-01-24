import { Button } from 'antd';
import React from 'react'

interface IItem {
name: string;
url: string;
price: number
}

const Item:React.FC<IItem> = ({name,url,price}) => {
  return (
    <div className='aspect-[2/2.7] w-full space-y-1 text-center mx-auto bg-white rounded-md'>
        <img className='aspect-[2/1.6] object-contain' src={url} alt="Icon"  />
        <div className='text-xs'>{name}. <b>$ {price}.00</b></div>
        <Button className='w-24' variant='solid' color='orange'>ADD</Button>
    </div>
  )
}

export default Item