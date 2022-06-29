{
  const getElement = function() {
    return document.querySelector('#play-btn');
  }

  let state = 'disabled';

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

  const setState = function(newState) {
    console.log('Play state:', newState);
    state = newState;
    getElement().setAttribute('src', images[state]);
  }

  const transit = function(event) {
    console.log('Play input:', event.type);
    const newState = transitions[state][event.type];

    if (newState) {
      setState(newState);
    }
  }

  window.addEventListener('load', () => {
    getElement().addEventListener('click', transit);
    document.addEventListener('playlistEmpty', transit);
    document.addEventListener('playlistPopulated', transit);
  });
}
