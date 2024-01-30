import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Senorita",
      artist: "Shawn Mendes, Camila Cabello",
      img_src: "./images/song-1.jpg",
      src: "./music/senorita.mp3"
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      img_src: "./images/song-2.jpg",
      src: "./music/shape-of-you.mp3"
    },
    {
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      img_src: "./images/song-3.jpg",
      src: "./music/despacito.mp3"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      img_src: "./images/song-4.jpg",
      src: "./music/perfect.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
