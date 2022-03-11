import surelymagazine from './surelymagazine.png';
import './App.css';
import Carousel from 'react-images';


function App() {


  const images = [
    {
      source: surelymagazine
    },
    {
      source: surelymagazine
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
	<h1>Surely Magazine</h1>
      </header>
      <div>
      <Carousel views={images} />;
      </div>
      <footer className="App-header">
	<a
          className="App-link"
          href="https://www.instagram.com/surely_magazine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
	<a
          className="App-link"
	  href="https://www.dropbox.com/s/m8fx4t0l5hac4xa/Paolo%20%40BGC.WAV"
          target="_blank"
          rel="noopener noreferrer"
	>
	  listen
	</a>
      </footer>
    </div>
  );
}

export default App;
