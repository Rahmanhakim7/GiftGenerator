import './App.css';
import Header from './Header';
import Random from './Random';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-div'>
        <Random />
      </div>
      <Footer />
    </div>
  );
}

export default App;
