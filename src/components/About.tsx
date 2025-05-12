
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator", 
    "Figma",
    "Adobe XD",
    "UI/UX Design",
    "Brand Identity Design"
  ];

  return (
    <section id="about" className="bg-navy-light py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  alt="Rakibul Alam Tohin" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold text-gold mb-4">Hi There! I'm Rakibul Alam Tohin</h3>
            <p className="text-gray-300 mb-6">
              I am a passionate and self-driven graphic designer with over 5 years of experience creating compelling visual identities and digital experiences. My design philosophy centers around blending aesthetics with functionality to deliver solutions that not only look great but also solve real problems.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in design began during my college years, and since then, I've dedicated myself to mastering various design tools and staying current with industry trends. I believe that great design has the power to elevate brands and create meaningful connections with audiences.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-medium text-white mb-4">Core Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="btn btn-primary flex items-center gap-2 w-fit">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
