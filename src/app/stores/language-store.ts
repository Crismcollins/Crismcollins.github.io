import { Language } from '@/types/profile';
import { create } from 'zustand'

type State = {
  language: Language;
}

type Actions = {
  setLanguage: (language: Language) => void;
}

const useLanguageStore = create<State & Actions>((set) => ({
  language: 'es',
  setLanguage: (language: Language) => set(() => ({ language })),
}))

export default useLanguageStore;
