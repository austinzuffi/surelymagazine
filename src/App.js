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
	  <Carousel views={images} />;
    </div>
  );
}

export default App;
