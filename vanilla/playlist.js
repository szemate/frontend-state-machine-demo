{
  const getElement = function() {
    return document.querySelector('#playlist');
  }

  const toggleSong = function(songIndex) {
    document.querySelectorAll('.playlist-item')[songIndex]
      .classList.toggle('selected');
  }

  window.addEventListener('load', () => {
    songs.forEach((song, i) => {
      const playlistItem = document.createElement('div');
      playlistItem.classList.add('playlist-item');
      playlistItem.innerHTML = `
        <span class="artist">${song.artist}</span>
        <span class="title">${song.title}</span>
      `;
      playlistItem.addEventListener('click', () => toggleSong(i));
      getElement().appendChild(playlistItem);
    });
  });
}
