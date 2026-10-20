import { EducationModel, GameModel, JobModel, Language, SkillModel, UserModel } from "@/types/profile";
import { useGetQuery } from "./fetchs";
import { useMutation } from "@tanstack/react-query";
import { FILENAME_CV } from "@/helpers/constants";

export type PDFDownload = {
  name: string;
  cv: string;
}

export const getUser = (language: Language) => {
  return useGetQuery<UserModel>(`/client/user/${language}`, 'Get User');
}

export const getAllEducations = (language?: Language) => {
  return useGetQuery<EducationModel[]>(`/client/educations/${language ?? ''}`, 'Get All Educations');
}

export const getAllJobs = (language?: Language) => {
  return useGetQuery<JobModel[]>(`/client/jobs/${language ?? ''}`, 'Get all jobs');
}

export const getAllSkills = (language?: Language) => {
  return useGetQuery<SkillModel[]>(`/client/skills/${language ?? ''}`, 'Get all skills');
}

export const getAllGames = (language: Language) => {
  return useGetQuery<GameModel[]>(`/client/games/${language}`, 'Get Games');
}

export const downloadCV = (language: Language) => {
  return useMutation<PDFDownload>({
    mutationKey: ['Download CV', language],
    mutationFn: async () => {
      const finalUrl = process.env.NEXT_PUBLIC_BACKEND_URL + `/client/cv/pdf/${language}`;
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