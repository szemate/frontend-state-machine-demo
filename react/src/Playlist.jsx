import { useState } from 'react';
import PlaylistItem from './PlaylistItem';
import songs from './songs';

function Playlist() {
  const initialStates = Array(songs.length).fill(false);
  const [ selectedStates, setSelectedStates ] = useState(initialStates);

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
