'use client'
import Loader from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'
import React,{useState} from 'react'

const Meeting = () => {
  const {id} = useParams();
  const {user,isLoaded} = useUser()
  const [isSetupcomplete, setIsSetupcomplete] = useState(false)
  const {call,isCallLoading} = useGetCallById(id)
  if(!isLoaded || isCallLoading) return <Loader/>

  return (
    <main className='h-screen w-full'>
       <StreamTheme>
      <StreamCall call={call}>
            {!isSetupcomplete?(<MeetingSetup setIsSetupcomplete={setIsSetupcomplete} />):(<MeetingRoom/>)}
      </StreamCall>
      </StreamTheme>
    </main>
  )
}

export default Meeting