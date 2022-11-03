
import './App.css';
import Mp3 from './components/Mp3/Item'
import songs from './components/Mp3/data/data'


function App() {
  return (
    <div className="container">
        {songs.map((song)=>(<Mp3 
          image={song.image}
          name={song.name}
          singer={song.singer}
          time={song.time} />  
      ))}
    </div>
  );
}
export default App;
