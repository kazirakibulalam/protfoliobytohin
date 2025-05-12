import { ChevronDown } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-gold text-xl md:text-2xl font-medium">Hi! I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Rakibul Alam <span className="text-gold">Tohin</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto lg:mx-0"></div>
            <p className="text-xl md:text-2xl text-gray-300 my-[5px] py-0 px-0">Graphic Designer & Video Editor 
Cyber Editor</p>
            <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gold/20 animate-pulse-slow"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full bg-navy border-2 border-gold/30">
                <img alt="Rakibul Alam Tohin" className="w-full h-full object-cover" src="https://i.imgur.com/ZglER2V.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce" aria-label="Scroll down">
        <ChevronDown size={32} />
      </a>
    </section>;
};
export default Hero;