import './PlaylistItem.css'

function PlaylistItem({ song, isSelected, toggle }) {
  const classNames = ['playlist-item'];
  if (isSelected) {
    classNames.push('selected');
  }

  return (
    <div className={classNames.join(' ')} onClick={toggle}>
      <span className='artist'>{song.artist}</span>
      <span className='title'>{song.title}</span>
    </div>
  );
}

export default PlaylistItem;
