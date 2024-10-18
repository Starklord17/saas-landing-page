import Header from './sections/Header.js';
import Hero from './sections/Hero.js';
import Features from './sections/Features.js';
import Pricing from './sections/Pricing.js';
import Faq from './sections/Faq.js';
import Testimonials from './sections/Testimonials.js';
import Download from './sections/Download.js';

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </main>
  )
}

export default App