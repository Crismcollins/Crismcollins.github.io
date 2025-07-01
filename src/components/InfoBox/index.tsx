import useLanguage from '@/app/hooks/useLanguage';
import { EducationModel, JobModel } from '@/types/profile'
import React from 'react'

type InfoBoxProps = {
  data: JobModel | EducationModel | null;
}

const isJob = (data: JobModel | EducationModel): data is JobModel => {
  return (data as JobModel).company !== undefined;
};

const InfoBox = ({
  data
}: InfoBoxProps) => {

  const { translator } = useLanguage();
  
  if (!data) return <div className='hidden md:flex border-l border-text my-8 flex-grow justify-center items-center'>
    { translator.infoBoxText }</div>

  const dataIsJob = isJob(data);

  const RenderDescription = () => (
    <div className='w-full'>
      <p className='text-xl font-bold'>{dataIsJob ? translator.responsibilities : translator.description }</p>
      <p className='mt-2 whitespace-pre-line'>{data.description}</p>
    </div>
  )

  const RenderAchievements = () => (
    <div className='w-full'>
      <p className='text-xl font-bold'>{ translator.achievements }</p>
      <p className='mt-2 whitespace-pre-line'>{dataIsJob && data.achievements}</p>
    </div>
  )

  const RenderProjects = () => dataIsJob && (
    <div className='w-full'>
      <p className='text-xl font-bold'>{ translator.projects }</p>
      <div className='flex justify-evenly gap-8 my-4'>
        {data.games?.map(game => (
          <div key={game.id} className='flex flex-col items-center gap-2'>
            <img
              src={game.image}
              height={128}
              width={128}
            />
            <p className='text-lg font-bold'>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  )

  const RenderSkills = () => dataIsJob && data.skills && (
    <div className='w-full'>
      <p className='text-xl font-bold mb-8'>{ translator.skills }</p>
      <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
        {data.skills.map(skill => (
          <div key={skill.id} className='flex flex-col items-center justify-center h-40 w-40 gap-2 border-4 border-separator py-2 rounded-2xl'>
            <div className='border-12 border-red rounded-md h-20 w-20'>
              { skill.image && (
                <img
                className='cover-object h-full w-full rounded-lg'
                src={skill.image}
              />
              )}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className='hidden md:flex border-l border-text my-8 flex-grow px-12 overflow-y-auto'>
      <div className='flex flex-col items-center w-full gap-4'>
        <div className='flex flex-col gap-2 items-center'>
          <img
            className='w-32 h-32 rounded-3xl'
            src={data.logo ?? '/images/independent_image.jpeg'}
          />
          <div className='flex flex-col items-center'>
            <p className='text-2xl'>{dataIsJob ? data.company : data.institution}</p>
            <p>{`${data.start_date} - ${data.end_date}`}</p>
          </div>
        </div>
        {dataIsJob && <p className='italic'>{data.company_description}</p>}
        <RenderDescription />
        {dataIsJob && data.achievements && <RenderAchievements />}
        <RenderProjects />
        <RenderSkills />

      </div>
    </div>
  )
}

export default InfoBox;
