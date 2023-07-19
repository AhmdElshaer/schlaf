import React from 'react'

export default function OrangeButton2(props: {text: string}) {
  return (
    <button className={`bg-orange-600 rounded-md py-2 px-4 md:px-6 text-white text-sm hover:bg-white w-fit hover:border-orange-600 hover:border ease-in duration-300 hover:text-orange-600`}>{props.text}</button>
  )
}
