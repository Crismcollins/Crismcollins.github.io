export type Language = 'en' | 'es';
export type SkillType = 'hard' | 'soft';

export type UserModel = {
  id?: number;
  full_name: string;
  profession: string;
  alias: string;
  email: string;
  linkedin_url: string;
  github_url: string;
  location: string;
  phone_number: string;
  about_me: string;
  image: string;
  study_title: string;
  language: Language;
}

export type SkillModel = {
  id?: number;
  user_id: number;
  name: string;
  type: SkillType;
  image: string;
  language: Language;
}

export type EducationModel = {
  id?: number;
  user_id: number;
  title: string;
  institution: string;
  description: string;
  start_date: string;
  end_date: string;
  language: Language;
  location?: string;
  logo: string;
}

export type JobModel = {
  id?: number;
  user_id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  company: string;
  language: Language;
  company_description?: string;
  location?: string;
  contact?: string;
  skills?: SkillModel[];
  games?: GameModel[];
  achievements: string;
  logo: string;
}

export type ProfilePicture = {
  mimeType: string;
  webViewLink: string;
  webContentLink: string;
  imageLink: string;
  id: string;
  name: string;
}

export type GameModel = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  link: string;
  video: string;
  ios_link?: string;
  android_link?:string;
  image: string;
  background: string;
  duration: string;
  language: Language;
  skills: SkillModel[];
}