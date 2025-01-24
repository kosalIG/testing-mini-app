import { Button, DatePicker, Form, Input } from 'antd'
import React from 'react'
import logo from '../../../assets/images/logo.png'

const PartnerRequest:React.FC = () => {
  return (
    <>
      <div className='flex-1 p-4 flex flex-col h-fit justify-center'>
        <div className='text-2xl font-bold text-center'>
            <img className='h-28 mx-auto' src={logo} />
        </div>
        <Form layout='vertical'>
            <Form.Item label="Pickup Date">
                <DatePicker className='w-full' size='large' />
            </Form.Item>
            <Form.Item label="Total Parcel">
                <Input placeholder='Total Parcel' size='large'/>
            </Form.Item>
            <Form.Item label="Note">
                <Input.TextArea placeholder='Note ...' rows={10} />
            </Form.Item>
        </Form>
        </div>  
      <div className="bg-gray-100 px-8 pt-2 pb-6 border-t border-gray-200">
        <Button variant="solid" color="orange" size="large" className="w-full">
          REQUEST PICKUP
        </Button>
      </div>
    </>
  )
}

export default PartnerRequest