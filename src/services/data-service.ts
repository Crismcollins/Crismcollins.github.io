import { EducationModel, GameModel, JobModel, Language, SkillModel, UserModel } from "@/types/profile";
import { BASE_URL, useGetQuery } from "./fetchs";
import { useMutation } from "@tanstack/react-query";
import { FILENAME_CV } from "@/helpers/constants";

export type PDFDownload = {
  name: string;
  cv: string;
}

export const getUser = () => {
  return useGetQuery<UserModel>('/client/user', 'Get User');
}

export const getAllEducations = () => {
  return useGetQuery<EducationModel[]>('/client/educations', 'Get All Educations');
}

export const getAllJobs = () => {
  return useGetQuery<JobModel[]>('/client/jobs', 'Get all jobs');
}

export const getAllSkills = () => {
  return useGetQuery<SkillModel[]>('/client/skills', 'Get all skills');
}

export const getAllGames = () => {
  return useGetQuery<GameModel[]>('/client/games', 'Get Games');
}

export const downloadCV = (language: Language) => {
  return useMutation<PDFDownload>({
    mutationKey: ['Download CV', language],
    mutationFn: async () => {
      const finalUrl = BASE_URL + '/client/cv/pdf';
      const response = await fetch(finalUrl, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const blob = await response.blob();
      const contentDisposition = response.headers.get('Content-Disposition');

      let name = `${FILENAME_CV}_${language.toUpperCase()}`;
      if (contentDisposition) {
        const match = contentDisposition.match(/filename[*]?=(?:UTF-8'')?["']?([^"';]+)["']?/i);
        if (match) name = decodeURIComponent(match[1]).replace(/["']/g, '');
      }
      const cv = URL.createObjectURL(blob);
      return { name, cv };
    }
  });
}