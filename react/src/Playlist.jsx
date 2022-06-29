import { useState, useEffect } from 'react';
import PlaylistItem from './PlaylistItem';
import songs from './songs';

const playlistEmpty = new Event('playlistEmpty');
const playlistPopulated = new Event('playlistPopulated');

function Playlist() {
  const initialStates = Array(songs.length).fill(false);
  const [ selectedStates, setSelectedStates ] = useState(initialStates);

  useEffect(() => {
    if (selectedStates.some((s) => s)) {
      document.dispatchEvent(playlistPopulated);
    } else {
      document.dispatchEvent(playlistEmpty);
    }
  }, [ selectedStates ]);

  function createToggleFunction(songIndex) {
    return () => setSelectedStates(
      (prevStates) => prevStates.reduce(
        (newStates, isSelected, i) => newStates.concat(
          i === songIndex ? !isSelected : isSelected
        ), []
      )
    );
  }

  return (
    <div>
      {songs.map((song, i) => (
        <PlaylistItem
          key={i}
          song={song}
          isSelected={selectedStates[i]}
          toggle={createToggleFunction(i)}
        />
      ))}
    </div>
  );
}

export default Playlist;
