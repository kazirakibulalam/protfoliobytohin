
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  position: string;
  avatar: string;
  rating: number;
  text: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Rahul Ahmed",
      position: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working with Rakibul was a fantastic experience. He understood our brand and delivered exceptional designs that perfectly captured our vision."
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      position: "Startup Founder",
      avatar: "https://i.imgur.com/zZ9H9tq.jpeg",
      rating: 5,
      text: "Rakibul created an amazing logo and brand identity for my startup. His attention to detail and creativity exceeded my expectations."
    },
    {
      id: 3,
      name: "Farhan Khan",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 4,
      text: "Great designer with strong UI/UX skills. Rakibul helped us improve our app interface, resulting in significantly better user engagement."
    }
  ];

  return (
    <section id="reviews">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Reviews</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">What people say about my work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-navy-light p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:border-gold/40 hover:transform hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < review.rating ? "text-gold fill-gold" : "text-gray-600"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
