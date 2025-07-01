import React, { useRef, useState } from 'react'
import GameSlot from '../GameSlot';
import useDataStore from '@/app/stores/data-store';
import useScreens from '@/app/hooks/useScreens';
import EaseOutButton from '@/components/EaseOutButton';

const MINIMUM_SLOTS = 5;

const CarouselGames = () => {

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);

  const games = useDataStore(state => state.games);
  const { navigateToScreen } = useScreens();

  const renderEmptySlots = () => {
    if (!games) return;
    if (games.length >= MINIMUM_SLOTS) return;
    const slotsToFill = MINIMUM_SLOTS - games.length;

    const emptySlotsArray = Array.from({ length: slotsToFill }, (_, index) => (
      <GameSlot key={"empty-slot"+index} />
    ));

    return emptySlotsArray.map(slot => slot);
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (carousel) {
      setIsDragging(true);
      setStartX(e.pageX - carousel.offsetLeft);
      setScrollLeft(carousel.scrollLeft);
      setLastMoveTime(Date.now());
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    if (carousel) {
      const x = e.pageX - carousel.offsetLeft;
      const distanceMoved = x - startX;

      carousel.scrollLeft = scrollLeft - distanceMoved;

      const currentTime = Date.now();
      const timeElapsed = currentTime - lastMoveTime;
      const currentVelocity = distanceMoved / timeElapsed;
      setVelocity(currentVelocity);
      setLastMoveTime(currentTime);
    }
  };


  const handleMouseUp = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;

    if (carousel) {
      const inertiaScroll = (scrollSpeed: number) => {
        if (Math.abs(scrollSpeed) > 0.7) {
          carousel.scrollLeft -= scrollSpeed * 5;
          requestAnimationFrame(() => inertiaScroll(scrollSpeed * 0.7));
        }
      };

      inertiaScroll(velocity);
    }
  };

  return (
    <div
      ref={carouselRef}
      className='flex flex-col h-full justify-center overflow-x-scroll no-scrollbar'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className='flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:flex-row sm:h-4/5 sm:max-h-56 gap-4'>
        {games?.map(game => (
          <EaseOutButton
            key={"btn-" + game.id}
            onClick={() => navigateToScreen('game', game)}
          >
            <GameSlot
              key={game.id}
              name={game.name}
              image={game.image}
              // onPress={() => navigateToScreen('game', game)}
            />
          </EaseOutButton>
        ))}
        {renderEmptySlots()}
      </div>
    </div>
  )
}

export default CarouselGames;
