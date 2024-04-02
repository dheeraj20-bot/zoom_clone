'use client';

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if (!call)
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );

  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#participant-state-3
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner = localParticipant && call.state.createdBy && localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push('/');
  };

  return (
          <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button onClick={endCall} className="bg-red-600">
      End call
          </Button>
        </TooltipTrigger>
        <TooltipContent className=' text-white bg-dark-2'>
          <p>End call for everyone</p>
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
  );
};

export default EndCallButton;