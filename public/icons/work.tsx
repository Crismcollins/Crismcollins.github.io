import { IconProps } from '@/types/theme';
import { colors } from "@/helpers/themes";
import React from 'react'

const Work = ({
  color,
  height,
  size,
  width
}:IconProps) => {

  const validColor = color ?? 'text' in colors ? color : "text";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={ size ?? height} viewBox="0 -960 960 960" width={size ?? width} fill={colors[validColor as keyof typeof colors]}><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
  )
}

export default Work;