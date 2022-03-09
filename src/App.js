import surelymagazine from './surelymagazine.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={surelymagazine} className="App-logo" alt="logo" />
        <p>
	  Website coming soon..
        </p>
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
      </header>
    </div>
  );
}

export default App;
