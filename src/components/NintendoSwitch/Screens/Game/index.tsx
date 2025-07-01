import useFadeAnimation from '@/app/hooks/useFadeAnimation';
import useScreens from '@/app/hooks/useScreens';
import BadgeGame from '@/components/BadgeGame';
import Header from '@/components/Header';
import { GameModel } from '@/types/profile';
import React from 'react'

const Game = () => {
  const { param, navigateToScreen, isVisible } = useScreens('game');
  const { fadeAnimation, fadeIn, fadeOut } = useFadeAnimation();
  const game: GameModel = param;

  const Video = () => (
    <div className="flex lg:w-1/2 xl:w-full">
      {game.video.includes('youtube') ?
      <iframe
        width="100%"
        height="100%"
        src={game.video}
        title="TEST"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      :
      <video
        className='h-full'
        src={game.video}
        preload="metadata"
        controls
      />}
    </div>
  )

  const Background = () => (
    <img
      className='lg:w-1/2 xl:w-3/5'
      src={game.background}
    />
  )

  return (
    <div className={`flex flex-col h-full ${fadeOut} ${fadeAnimation} ${isVisible ? fadeIn : ''}`}>
      <Header
        className='bg-background'
        onPress={() => navigateToScreen('mainmenu')}
      />
      <div className='flex flex-col px-4 pt-8 bg-background lg:flex-row h-full overflow-y-auto'>
        <div className='flex flex-col items-center gap-8 lg:w-6/12 px-2 lg:px-8 py-4 bg-background lg:overflow-y-auto'>
          <p className='text-2xl'>{game.name}</p>
          <img
            src={game.image}
            width={128}
            height={128}
          />
          {game.link &&
            <BadgeGame url={game.link} />
          }

          {(game.android_link || game.ios_link) && (
            <div className='flex flex-row gap-2 sm:gap-16 lg:gap-8'>
              {game.android_link && (
                <BadgeGame
                  url={game.android_link}
                  store='play_store'
                />
              )}

              {game.ios_link && (
                <BadgeGame
                  url={game.ios_link}
                  store='appstore'
                />
              )}
            </div>
          )}

          <p className='h-full mb-8'>{game.description}</p>
        </div>
        {game.video ? <Video /> : <Background />}
      </div>
    </div>
  )
}

export default Game;
