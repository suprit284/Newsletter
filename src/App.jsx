import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import CountryCards from './components/CountryCards';
import WhyXiphias from './components/WhyXiphias';
import Testimonials from './components/Testimonials';
import NewsLetterSignUp from './components/NewsLetterSignUp';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-slate-50">
      <Hero />
      <Spotlight />
      <CountryCards />
      <WhyXiphias />
       <Testimonials />
       <NewsLetterSignUp />
       <Footer />
    </div>

    </>
  )
}

export default App
