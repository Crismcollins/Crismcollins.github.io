import Avatar from '@/components/NintendoSwitch/Avatar';
import ThemeModeButton from '@/components/ThemeModeButton';
import React from 'react';
import Battery from '../../../../../../public/icons/Battery';
import Clock from '@/components/NintendoSwitch/Clock';
import useDataStore from '@/app/stores/data-store';
// import LanguageSwitch from '@/components/LanguageSwitch';
import useScreens from '@/app/hooks/useScreens';
import AudioButton from '@/components/AudioButton';

const HeaderMenu = () => {

  const alias = useDataStore(state => state.user?.alias);
  const { navigateToScreen } = useScreens();

  return (
    <div className='flex justify-center justify-between'>
      <Avatar className='hidden sm:flex' name={alias} onPress={() => setTimeout(() => navigateToScreen('aboutme'), 600)} />

      <div className='flex flex-column h-full items-center gap-8'>
        <div className='hidden sm:block'><ThemeModeButton /></div>
        {/* <LanguageSwitch /> */}
      </div>

      <div className='flex justify-center sm:hidden'>
        <AudioButton/>
      </div>
      
      <div className='hidden sm:flex gap-4 items-center'>
        <AudioButton/>
        <Clock />
        <Battery size={24} />
      </div>
    </div>
  )
}

export default HeaderMenu;