import { useState } from 'react';
import './icon.css';

const images = {
  noRepeat: 'repeat-off.png',
  repeatOne: 'repeat-one.png',
  repeatAll: 'repeat-all.png',
};

const transitions = {
  noRepeat: {
    click: 'repeatOne',
  },
  repeatOne: {
    click: 'repeatAll',
  },
  repeatAll: {
    click: 'noRepeat',
  },
}

function RepeatButton() {
  const [state, setState] = useState('noRepeat');

  function transit(event) {
    console.log('Repeat input:', event.type);
    const newState = transitions[state][event.type];

    if (newState) {
      console.log('Repeat state:', newState);
      setState(newState);
    }
  }

  return (
    <img src={images[state]} alt="Repeat" onClick={transit} className='icon' />
  );
}

export default RepeatButton;
