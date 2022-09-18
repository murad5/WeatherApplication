import './App.css';
import Home from './components/Home';
import background from './images/bg-image.jpg'

const style = {
    backgroundImage: `url("${background}")`,
    backgroundSize: 'cover',
    height: '100vh',
    

}

function App() {
  return (
    <div style={style} >
      <Home />
    </div>
  );
}

export default App;
