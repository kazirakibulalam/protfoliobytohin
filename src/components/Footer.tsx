
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to elevate your web and app design?</h3>
          <p className="text-gray-300 text-lg mb-6">Let's collaborate and make your vision a reality!</p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">Thank you for sticking around till the end!</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
              </svg>
            </a>
          </div>
          
          <div className="pt-6 border-t border-gray-800">
            <p className="flex items-center justify-center gap-1 text-sm text-gray-400">
              Made with <Heart size={16} className="text-gold fill-gold" /> by Rakibul Alam Tohin
            </p>
            <p className="text-xs text-gray-500 mt-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
