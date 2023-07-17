

const OrangeButton = (props: {text: string}) => {
  return(
  <div>
    <button className=" px-4 py-2 md:mt-4 hover:text-white font-normal text-sm md:text-md ease-in duration-300 hover:bg-orange-500 text-orange-600 border rounded-md border-orange-600 w-full h-full">{props.text}</button>
  </div>
  )
}

export default OrangeButton;