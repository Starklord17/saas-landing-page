import Header from './sections/Header.js';
import Hero from './sections/Hero.js';
import Features from './sections/Features.js';
import Pricing from './sections/Pricing.js';

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}

export default App