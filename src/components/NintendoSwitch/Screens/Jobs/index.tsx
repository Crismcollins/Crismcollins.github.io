import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import useScreens from '@/app/hooks/useScreens';
import Header from '@/components/Header';
import InfoBox from '@/components/InfoBox';
import { TimelineItemProps } from '@/components/TimeLineItem';
import TimeLine from '@/components/Timeline';
import { JobModel } from '@/types/profile';
import React, { useState } from 'react'

const Jobs = () => {
  const [jobSelected, setJobSelected] = useState<JobModel | null>(null);
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  const { param, navigateToScreen, isVisible } = useScreens('jobs');
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();
  
  const jobs: JobModel[] = param;

  const handlePressItem = (id: number) => {
    const jobPressed = jobs.find(job => job.id === id);
    setJobSelected(jobPressed ?? null);
    setItemSelected(id)
  }
  
  const jobsToTimeline: TimelineItemProps[] = jobs?.map(job => ({
    title: job.title,
    institution: job.company,
    image: job.logo ?? '/images/independent_image.jpeg',
    start_date: job.start_date,
    end_date: job.end_date,
    selected: itemSelected === job.id,
    onPress: () => handlePressItem(job.id ?? 0)
  }));
  
  return (
    <div className={`flex flex-col bg-background h-full ${fadeAnimation} ${fadeOut} ${isVisible ? fadeIn : ''}`}>
      <Header
        onPress={() => navigateToScreen('mainmenu')}
      />
      <div className='flex gap-8 h-full w-full overflow-y-auto md:pl-8 justify-center md:justify-start'>
        <TimeLine
          items={jobsToTimeline}
        />
        <InfoBox data={jobSelected}/>
      </div>
    </div>
  )
}

export default Jobs;
