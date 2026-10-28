import { getAllEducations, getAllGames, getAllJobs, getUser } from "@/services/data-service";
import useLanguage from "./useLanguage";
import { useEffect } from "react";
import useDataStore from "../stores/data-store";

const useLoadData = () => {

  const userStore = useDataStore(state => state.user);
  const gamesStore = useDataStore(state => state.games);
  const jobsStore = useDataStore(state => state.jobs);
  const educationsStore = useDataStore(state => state.educations);
  const loading = useDataStore(state => state.loading);  

  const setUserStore = useDataStore(state => state.setUser);
  const setGames = useDataStore(state => state.setGames);
  const setJobs = useDataStore(state => state.setJobs);
  const setEducations = useDataStore(state => state.setEducations);
  const setLoading = useDataStore(state => state.setLoading);

  const { language } = useLanguage();
  const { data: user, isLoading: loadingUser, refetch: refetchUser, isRefetching: refetchingUser } = getUser();
  const { data: games, isLoading: loadingGames, refetch: refetchGames, isRefetching: refetchingGames } = getAllGames();
  const { data: jobs, isLoading: loadingJobs, refetch: refetchJobs, isRefetching: refetchingJobs } = getAllJobs();
  const { data: educations, isLoading: loadingEducations, refetch: refetchEducations, isRefetching: refetchingEducations } = getAllEducations();
  
  const saveDataToStores = () => {
    if (user)
      setUserStore(user);
    
    if (games) {
      setGames(games);
    }
    if (jobs) {
      setJobs(jobs);
    }
    if (educations)
      setEducations(educations);
  }
  
  const handleRefresh = () => {
    refetchUser();
    refetchGames();
    refetchJobs();
    refetchEducations();
  }

  useEffect(() => {
    if (!loadingGames && !loadingUser && !loadingJobs && !loadingEducations)
      saveDataToStores();
    else
      setLoading(true);
  }, [loadingUser, loadingGames, loadingJobs, loadingEducations])

  useEffect(() => {
    if (userStore && gamesStore && jobsStore && educationsStore)
      setLoading(false);
  }, [userStore, gamesStore, jobsStore, educationsStore])

  useEffect(() => {
    saveDataToStores();
  }, [refetchingGames, refetchingUser, refetchingJobs, refetchingEducations])

  useEffect(() => {
    handleRefresh();
  }, [language])

  return { loading }

}

export default useLoadData;
