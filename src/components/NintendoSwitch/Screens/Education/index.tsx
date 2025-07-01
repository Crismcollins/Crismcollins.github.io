import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import useScreens from '@/app/hooks/useScreens';
import Header from '@/components/Header';
import InfoBox from '@/components/InfoBox';
import { TimelineItemProps } from '@/components/TimeLineItem';
import TimeLine from '@/components/Timeline';
import { EducationModel } from '@/types/profile';
import React, { useState } from 'react'

const Education = () => {
  const [educationSelected, setEducationSelected] = useState<EducationModel | null>(null);
  const { param, navigateToScreen, isVisible } = useScreens('education');
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();

  const educations: EducationModel[] = param;

  const handlePressItem = (id: number) => {
    const educationPressed = educations.find(education => education.id === id);
    setEducationSelected(educationPressed ?? null);
  }
  
  const educationsToTimeline: TimelineItemProps[] = educations.map(education => ({
    title: education.title,
    institution: education.institution,
    image: education.logo ?? '/images/independent_image.jpeg',
    start_date: education.start_date,
    end_date: education.end_date,
    onPress: () => handlePressItem(education.id ?? 0)
  }));

  
  return (
    <div className={`flex flex-col bg-background h-full ${fadeAnimation} ${fadeOut} ${isVisible ? fadeIn : ''}`}>
      <Header
        onPress={() => navigateToScreen('mainmenu')}
      />
      <div className='flex gap-8 h-full w-full overflow-y-auto md:pl-8 justify-center md:justify-start'>
        <TimeLine
          items={educationsToTimeline}
        />
        <InfoBox data={educationSelected}/>
      </div>
    </div>
  )
}

export default Education;
