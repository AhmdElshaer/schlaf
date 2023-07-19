import React from 'react'
import MsgCard from '../../ui/MsgCard'
import { useQueries } from '@tanstack/react-query';
import { FetchPresidentMsg, FetchViceMsg } from '../../config/homePageConfig';

export default function PresidentMsg() {

  const [presidentMsgQuery, viceMsgQuery] = useQueries({
    queries: [
      {
        queryKey: ['presidentMsg'],
        queryFn: FetchPresidentMsg
      },
      {
        queryKey: ['viceMsg'],
        queryFn: FetchViceMsg
          },
    ]
  })
  
  if(presidentMsgQuery.isLoading || viceMsgQuery.isLoading){
    return <div className='text-center text-5xl font-bold'>Loading...</div>
  }

  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-2 md:gap-4 px4'>
      <div className="text-2xl md:text-3xl font-bold text-orange-600">Message From The President</div>
      <MsgCard para={presidentMsgQuery?.data[0]?.english_description} msg='President'/>
      <MsgCard para={viceMsgQuery?.data[0]?.english_description} msg='Vice President'/>
    </div>
  )
}
