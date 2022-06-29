import PlayButton from './PlayButton';
import RepeatButton from './RepeatButton';
import Playlist from './Playlist';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        <PlayButton />
        <RepeatButton />
      </header>
      <Playlist />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
