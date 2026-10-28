import { ProfilePicture, UserModel } from "@/types/profile";
import { useGetQuery, usePatchQuery } from "./fetchs"

export const getUser = () => {
  return useGetQuery<UserModel>('/client/user', 'Get User');
}

export const updateUser = () => {
  return usePatchQuery<UserModel>('/client/user', 'Update user')
}

export const getProfilePicture = () => {
  return useGetQuery<ProfilePicture>('/storage/profile-picture', 'Get profile picture');
}
