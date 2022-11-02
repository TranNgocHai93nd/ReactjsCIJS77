
import './App.css';
import Mp3 from './components/Mp3/Item'

let songs = [
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'Người Anh Yêu', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'Người Anh Yêu', 
    singer: "Mai Tiến Dũng", 
    time:'1 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },



]

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
