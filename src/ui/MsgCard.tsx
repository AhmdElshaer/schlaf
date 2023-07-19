import React from 'react'

export default function MsgCard(props: {para: string; msg: string}) {
  return (
    <div className='bg-gradient-to-t from-schlafBlue to-schlafBlue p-4 md:p-6 lg:p-8 border rounded-2xl flex flex-col gap-2 '>
      <p className='text-sm md:text-md lg:text-base font-normal text-stone-300'>{`"${props?.para}"`}</p>
      <p className='text-white text-lg lg:text-xl w-full text-end font-semibold'>{`Message From The ${props?.msg}`}</p>
    </div>
  )
}
