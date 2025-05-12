
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Photoshop", level: 90 },
    { name: "Illustrator", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Canva", level: 95 },
    { name: "Adobe XD", level: 75 },
    { name: "InDesign", level: 70 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" className="bg-navy-light py-24" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">My technical proficiency</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <h4 className="text-white font-medium">{skill.name}</h4>
                  <span className="text-gold">{skill.level}%</span>
                </div>
                <div className="progress-container">
                  <div 
                    className={`progress-bar ${isVisible ? 'animate' : ''}`}
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 0.1}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
