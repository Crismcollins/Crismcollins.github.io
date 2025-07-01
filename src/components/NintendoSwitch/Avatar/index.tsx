import useAudioStore from '@/app/stores/audio-store';
import useDataStore from '@/app/stores/data-store';
import EaseOutButton from '@/components/EaseOutButton';
import React from 'react'

type AvatarProps = {
  name?: string;
  className?: string;
  imageClassName?: string;
  nameClassName?: string;
  height?: number;
  width?: number;
  onPress?: () => void;
}

const Avatar = ({
  name,
  className,
  nameClassName,
  imageClassName,
  height,
  width,
  onPress
}: AvatarProps) => {

  const user = useDataStore(state => state.user);
  const playSound = useAudioStore(state => state.playAudio);

  const handlePress = () => {
    if (!onPress) return;
    playSound('user');
    onPress();
  };

  return (
    <EaseOutButton
      className={`flex gap-4 items-center ${className}`}
      onClick={handlePress}
    >
      <img
        className={`rounded-full border-2 border-separator ${imageClassName ?? 'h-12 w-12' }`}
        src={user?.image}
        height={height}
        width={width}
      />
      <p className={`text-lg capitalize ${nameClassName}`}>{name}</p>
    </EaseOutButton>
  )
}

export default Avatar;