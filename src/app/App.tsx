import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { HowItWorks } from './components/HowItWorks';
import { Community } from './components/Community';
import { RequestForm } from './components/RequestForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Hero />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Community />
      <RequestForm />
      <Footer />
    </div>
  );
}
