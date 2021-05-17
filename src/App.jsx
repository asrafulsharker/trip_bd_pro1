
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials';
import Trending from './components/Trending/Trending';
import Guides from './components/Guides/Guides';
import Explore from './components/Explore/Explore';
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="sections">
          <Hero/>
          <Explore/>
          <Featured/>
          <Guides/>
          <Testimonials/>
          <Trending/>
          <Contact/>
        </div>
        
    </div>
  );
}

export default App;
