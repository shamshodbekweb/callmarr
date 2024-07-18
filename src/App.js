import './App.css';
import Header from "./components/header/header"
import Rules from "./components/rules/rules"
import Video from './components/video/video'
import Footer from './components/footer/footer'



function App() {
  return (
    <div className="App">
      <Header/>
      <Rules/>
      <Video/><br/>
      <Footer/>
    </div>
  );
}

export default App;
