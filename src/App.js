import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import FadeIn from 'react-fade-in';
import Terminal from 'terminal-in-react';
import Head from './components/Head';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Head/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
