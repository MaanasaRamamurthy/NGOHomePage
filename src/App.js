import Navbar from './components/navbar';
import Services from './components/services';
import Footer from './components/footer';
import Newsletter from './components/newsletter';
import Video from './components/video';
import About from './components/aboutus'
import Testimonials from './components/testimonials';
import Projects from './components/projects';

function App() {
  return (
    <main>
      <Navbar />
      <Video/>
      <About />
      <Services/>
      <Testimonials />
      <Projects />
      <Newsletter />
      <Footer/>
    </main>
  )
}

export default App;
