// pages/index.tsx

import Header from './header';
import Navbar from './navbar';
import Footer from './footer';
import ServiceCard from './card';
import './style.css'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <div className="services-container">
          <ServiceCard
            title="Book Borrowing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="/book-borrowing.jpg"
          />
          <ServiceCard
            title="Reading Areas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="/reading-areas.jpg"
          />
          <ServiceCard
            title="Study Areas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="/study-areas.jpg"
          />
          {/* Add more service cards as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
