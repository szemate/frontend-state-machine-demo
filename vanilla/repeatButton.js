{
  const getElement = function() {
    return document.querySelector('#repeat-btn');
  }

  let state = 'noRepeat';

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

  const setState = function(newState) {
    console.log('Repeat state:', newState);
    state = newState;
    getElement().setAttribute('src', images[state]);
  }

  const transit = function(event) {
    console.log('Repeat input:', event.type);
    const newState = transitions[state][event.type];

    if (newState) {
      setState(newState);
    }
  }

  window.addEventListener('load', () => {
    getElement().addEventListener('click', transit);
  });
}
