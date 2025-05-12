
import React from 'react';
import { 
  PenTool, Palette, Layout, Video, Instagram, CreditCard, 
  MousePointer, Package2, SlidersHorizontal 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="text-gold" size={36} />,
      title: "Video Editing",
      description: "Professional video editing services to enhance your visual storytelling."
    },
    {
      icon: <PenTool className="text-gold" size={36} />,
      title: "Logo Design",
      description: "Distinctive and memorable logo designs that represent your brand identity."
    },
    {
      icon: <Instagram className="text-gold" size={36} />,
      title: "Social Media Posts",
      description: "Eye-catching social media graphics to boost your online presence."
    },
    {
      icon: <CreditCard className="text-gold" size={36} />,
      title: "Business Cards",
      description: "Professional business card designs that leave a lasting impression."
    },
    {
      icon: <MousePointer className="text-gold" size={36} />,
      title: "UI/UX Design",
      description: "User-centered interface designs focused on enhancing user experience."
    },
    {
      icon: <Layout className="text-gold" size={36} />,
      title: "Poster & Banner Design",
      description: "Attention-grabbing posters and banners for your marketing campaigns."
    },
    {
      icon: <Palette className="text-gold" size={36} />,
      title: "Ad Creative Design",
      description: "Compelling advertisement designs optimized for various platforms."
    },
    {
      icon: <Package2 className="text-gold" size={36} />,
      title: "Packaging Design",
      description: "Attractive packaging solutions that enhance product appeal."
    },
    {
      icon: <SlidersHorizontal className="text-gold" size={36} />,
      title: "Presentation Slides",
      description: "Professional presentation templates for impactful communication."
    }
  ];

  return (
    <section id="services">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">What I can do for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
