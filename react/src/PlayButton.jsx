import { useState, useEffect } from 'react';
import './icon.css';

const images = {
  disabled: 'play-disabled.png',
  paused: 'play.png',
  playing: 'pause.png',
};

const transitions = {
  disabled: {
    playlistPopulated: 'paused',
  },
  paused: {
    click: 'playing',
    playlistEmpty: 'disabled',
  },
  playing: {
    click: 'paused',
    playlistEmpty: 'disabled',
  },
}

function RepeatButton() {
  const [state, setState] = useState('disabled');

  function transit(event) {
    console.log('Play input:', event.type);
    const newState = transitions[state][event.type];

    if (newState) {
      console.log('Play state:', newState);
      setState(newState);
    }
  }

  useEffect(() => {
    document.addEventListener('playlistEmpty', transit);
    document.addEventListener('playlistPopulated', transit);

    return () => {
      document.removeEventListener('playlistEmpty', transit);
      document.removeEventListener('playlistPopulated', transit);
    };
  });

  return (
    <img src={images[state]} alt="Play" onClick={transit} className='icon' />
  );
}

export default RepeatButton;
