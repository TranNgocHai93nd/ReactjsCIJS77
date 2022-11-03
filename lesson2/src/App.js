
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
    image:"https://yphimsex.cc/wp-content/uploads/2020/09/anh-sex-gai-xinh-lam-tinh-1-1.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://yphimsex.cc/wp-content/uploads/2020/09/anh-sex-gai-xinh-lam-tinh-1-1.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://lau-xanh.us/wp-content/uploads/2022/06/2_clip-sex-nhu-ha-tran-3.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://i.ytimg.com/vi/SlGnZDI9HVg/maxresdefault.jpg",
    name: 'Người Anh Yêu', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://yphimsex.cc/wp-content/uploads/2020/09/anh-sex-gai-xinh-lam-tinh-1-1.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://yphimsex.cc/wp-content/uploads/2020/09/anh-sex-gai-xinh-lam-tinh-1-1.jpg",
    name: 'hai nè', 
    singer: "Mai Tiến Dũng", 
    time:'3 hours'
  },
  {
    image:"https://lau-xanh.us/wp-content/uploads/2022/06/2_clip-sex-nhu-ha-tran-3.jpg",
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
