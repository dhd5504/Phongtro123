import React from 'react'
import { InputReadOnly, Select,InputFormV2 } from './index'
import { useSelector } from 'react-redux'

const targets = [
  {
    code : 'Tất cả',
    value : 'Nam hoặc Nữ'
  },
  {
    code : 'Nam',
    value : 'Nam'
  },
  {
    code : 'Nữ',
    value : 'Nữ'
  }
]

const Overview = ({payload,setPayload}) => {
  const {categories} = useSelector(state => state.app)
  const {currentData} = useSelector(state => state.user)
  const {dataEdit} = useSelector(state => state.post)
  // console.log(dataEdit)

  return (
    <div className='flex flex-col gap-2 w-full'>
        <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
        <div className='w-full flex flex-col gap-4'>
            <div className='w-1/2'><Select value={payload.categoryCode} setValue={setPayload} name='categoryCode' options={categories} label='Loại chuyên mục'/></div>
            <InputFormV2 value={payload.title} setValue={setPayload} name='title' label='Tiêu đề'/>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor='desc' className='font-semibold text-base py-2'>Nội dung mô tả</label>
                <textarea 
                  id='desc' cols='30' rows='10' type='text' 
                  className='w-full rounded-md outline-none border border-gray-300 p-2'
                  value={payload.description || ''}
                  onChange={(e)=>setPayload(prev => ({
                    ...prev,
                    description : e.target.value
                  }))}  
                />
            </div>
            <div className='w-1/2 flex flex-col gap-2'>
              <InputReadOnly label='Thông tin liên hệ' value={currentData?.name || currentData?.username}/>
              <InputReadOnly label='Điện thoại' value={currentData?.phone}/>
              <InputFormV2 value={payload.priceNumber} setValue={setPayload} name='priceNumber'  label='Giá cho thuê' unit='đồng' small='Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000'/>
              <InputFormV2 value={payload.areaNumber} setValue={setPayload} name='areaNumber'  label='Diện tích' unit='m2'/>
              <Select value={payload.target} setValue={setPayload} name='target'  options={targets} label='Đối tượng cho thuê'/>
            </div>
        </div>
    </div>
  )
}

export default Overview