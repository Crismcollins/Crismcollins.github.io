import useDataStore from '@/app/stores/data-store'
import React, { useEffect, useState } from 'react'
import Avatar from '../../Avatar';
import IconData from '@/components/PersonalData';
import { copyToClipboard } from '@/helpers/utils';
import useScreens from '@/app/hooks/useScreens';
import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import GitHub from '../../../../../public/icons/github';
import Linkedin from '../../../../../public/icons/linkedin';
import useThemeStore from '@/app/stores/theme-store';
import Header from '@/components/Header';

const LOCATION_SANTIAGO = {
  latitude: -33.4489,
  longitude: -70.6693,
}

const AboutMe = () => {
  const { user } = useDataStore();
  const { navigateToScreen, isVisible } = useScreens('aboutme');
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();

  const theme = useThemeStore( state => state.theme);
  const isDarkMode = theme === 'dark';

  const handleCopyToClipboard = async (text: string) => {
    await copyToClipboard(text);
    window.alert('Copiado en el portapapeles.')
  }

  const renderPersonalData = () => (
    <div className={`hidden sm:flex flex-col bg-separator2 gap-4 mt-12 py-4 min-w-fit rounded-xl h-fit`}>
      <IconData
        data={user?.email ?? ''}
        icon='mail'
        href={`mailto:${user?.email}`}
      />
      <IconData
        data={user?.phone_number ?? ''}
        icon='phone_iphone'
        href='#'
        onClick={() => handleCopyToClipboard('+56989050986')
        }
      />
      <IconData
        data={user?.location ?? ''}
        icon='location_on'
        href={`https://www.google.com/maps/@${LOCATION_SANTIAGO.latitude},${LOCATION_SANTIAGO.longitude},15z`}
      />
      <IconData
        data={'Github'}
        customIcon={<GitHub size={24} color={isDarkMode ? '#e0e0e0' : ''} />}
        href={user?.github_url}
      />
      <IconData
        data={'Linkedin'}
        customIcon={<Linkedin size={24} color={isDarkMode ? 'white' : 'black'} />}
        href={user?.linkedin_url}
      />

    </div>
  )

  const renderAboutMe = () => (
    <div className={`flex flex-col h-full w-full items-center justify-center gap-4 mt-8 sm:mt-0`}>
      <Avatar
        imageClassName='h-56 w-56'
        height={144}
        width={144}
      />

      <div className='text-center mb-4'>
        <p className='text-xl md:text-3xl lg:text-4xl'>{user?.full_name}</p>
        <p className='text-sm md:text-lg lg:text-xl'>{user?.profession}</p>
      </div>
      <p className=' md:text-md lg:text-lg xl:text-xl text-center px-0 sm:px-8 md:px-8 lg:px-20 xl:px-24'>{user?.about_me}</p>
    </div>
  )

  return (
    <div className={`flex flex-col bg-background h-full w-full p-4 overflow-y-scroll ${fadeOut} ${fadeAnimation} ${isVisible ? fadeIn : ''}`}>
      <Header
        onPress={() => navigateToScreen('mainmenu')}
      />
      <div className='flex flex-row h-full items-center'>
        {renderPersonalData()}
        {renderAboutMe()}
      </div>
    </div>
  )
}

export default AboutMe;
