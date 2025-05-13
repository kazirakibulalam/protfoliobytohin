
import { Calendar, Briefcase } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      period: "2021 - 2023",
      degree: "Diploma in Graphics",
      institution: "Cyber IT Institute",
      description: "Specialized training in graphic design fundamentals, digital illustration, and branding design."
    },
    {
      period: "2016 - 2018",
      degree: "HSC",
      institution: "ABC College",
      description: "Completed higher secondary education with a focus on arts and creative studies."
    }
  ];

  const experience = [
    {
      period: "2020 - Present",
      position: "Freelance Designer",
      company: "Individual designer",
      description: "Creating custom design solutions for international clients, specializing in brand identity and digital marketing visuals."
    },
    {
      period: "2022 - 2024",
      position: "Design Intern",
      company: "Local Print Studio",
      description: "Assisted with layout design and prepress preparation for various print projects."
    },
    {
      period: "2021 - 2024",
      position: "Student Projects",
      company: "Color Theory & UI Practice",
      description: "Worked on multiple academic projects focused on color theory application and UI design principles."
    }
  ];

  return (
    <section id="resume">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Resume</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">My qualifications and work experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={24} className="text-gold" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-gold/30 hover:border-gold transition-colors duration-300 pb-8"
                >
                  <span className="absolute left-[-9px] top-0 w-4 h-4 bg-navy border-2 border-gold rounded-full"></span>
                  <div className="bg-navy-light p-6 rounded-lg hover:border-gold/50 border border-gray-800 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm rounded-full mb-4">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                    <h5 className="text-gold mb-3">{item.institution}</h5>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} className="text-gold" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-gold/30 hover:border-gold transition-colors duration-300 pb-8"
                >
                  <span className="absolute left-[-9px] top-0 w-4 h-4 bg-navy border-2 border-gold rounded-full"></span>
                  <div className="bg-navy-light p-6 rounded-lg hover:border-gold/50 border border-gray-800 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm rounded-full mb-4">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{item.position}</h4>
                    <h5 className="text-gold mb-3">{item.company}</h5>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
