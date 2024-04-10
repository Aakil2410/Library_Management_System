'use client'
import './style.css'

// pages/components/ServiceCard.tsx
interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="service-card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  