import { LuExternalLink } from "react-icons/lu";
import { useEffect } from "react";

export default function AppleID() {
  const arr: { id: number; text: string; img: string; link: string }[] = [
    {
      id: 1,
      text: "All Press Culture",
      img: "/projects/22.png",
      link: "https://allpressculture.com/",
    },
    {
      id: 2,
      text: "Species in Pieces",
      img: "/projects/10.png",
      link: "http://species-in-pieces.com/",
    },
    {
      id: 3,
      text: "Dripping Dogs",
      img: "/projects/15.png",
      link: "https://dripping-dogs.vercel.app/",
    },
    {
      id: 4,
      text: "Nexio",
      img: "/projects/13.png",
      link: "https://nexio-nine.vercel.app",
    },
    {
      id: 5,
      text: "Scogo",
      img: "/projects/11.png",
      link: "https://scogo.ai/", 
    },
    {
      id: 6,
      text: "Byte Glitch",
      img: "/projects/18.png",
      link: "https://byte-glitch.vercel.app/",
    },
    {
      id: 7,
      text: "Max Kate",
      img: "/projects/16.png",
      link: "https://max-kate.vercel.app/",
    },
    {
      id: 8,
      text: "Kidsafe",
      img: "/projects/12.png",
      link: "https://kidsafe-delta.vercel.app/",
    },
    {
      id: 9,
      text: "Shree Manjunath School of Nursing",
      img: "/projects/14.png",
      link: "https://shree-manjunath-school-of-nursing-1.vercel.app/",
    },
    {
      id: 10,
      text: "Aryam Architecture",
      img: "/projects/19.png",
      link: "https://aryam-architecture.vercel.app/",
    },
    {
      id: 11,
      text: "Aryam 2",
      img: "/projects/20.png",
      link: "https://aryam-2.vercel.app/",
    },
    {
      id: 12,
      text: "Pulse Check",
      img: "/projects/21.png",
      link: "https://pulse-check-psi.vercel.app/",
    },
    
    {
      id: 13,
      text: "Casecobra-dev",
      img: "/projects/01.png",
      link: "https://casecobra-dev-inky.vercel.app/",
    },
    {
      id: 14,
      text: "Carepulse-dev",
      img: "/projects/02.png",
      link: "https://healthcare1-7dkshzq2b-pranav452s-projects.vercel.app/",
    },
    {
      id: 15,
      text: "T3 Gallery",
      img: "/projects/03.png",
      link: "https://t3gallery-two-teal.vercel.app/",
    },
    {
      id: 16,
      text: "Spotifyer",
      img: "/projects/04.png",
      link: "https://spotifyer.vercel.app/",
    },
    {
      id: 17,
      text: "Portfolipo",
      img: "/projects/05.png",
      link: "https://portfolipo.vercel.app/",
    },
    {
      id: 18,
      text: "Mindful Steps",
      img: "/projects/23.png",
      link: "https://mindful-steps-earth.vercel.app/",
    },
    
    
    
  ];

  useEffect(() => {
    // Remove hash from URL when component mounts
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='apple_id'>
      <div className='nav'>
        <ul>
          <li onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</li>
          <li onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</li>
          <li onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</li>
          <li onClick={() => scrollToSection('resume')} style={{ cursor: 'pointer' }}>Resume</li>
        </ul>
      </div>
      <div className='content'>
        <div className='grids grid-1' id='home'>
          <div className='inner'>
            <h1> Pranav Nair</h1>
            <h2> AI Engineer building intelligent systems </h2>

            <p>
              Hi! I'm Pranav Nair, an <span className="text-blue">AI Engineer</span> specializing in 
              <span className="text-emerald"> RAG systems, LangChain, and LangGraph</span>. I develop <span className="text-purple">production-grade 
              intelligent agents</span> from <span className="text-orange">multi-agent architectures</span> to 
              <span className="text-pink"> knowledge retrieval systems</span>.

              I'm passionate about <span className="text-indigo">fine-tuning LLMs</span> and building <span className="text-red">scalable 
              AI solutions</span>, always aiming to <span className="text-teal">turn complex challenges into practical, AI-powered products</span>.
            </p>
          </div>
        </div>
        <div className='grids grid-2' id='projects'>
          <div className='inner'>
            <div className='inner'>
              <h1> Projects </h1>
              <p> (Scroll Horizontally) </p>
            </div>
            <div className='images'>
              {arr.map((e) => {
                return (
                  <div className='card' key={e.id}>
                    <img src={e.img} alt='img' />
                    <a href={e.link} target='_blank'>
                      {e.text} <LuExternalLink />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='grids grid-3' id='contact'>
          <div className='inner'>
            <h1>Contact</h1>
            <p>
              {" "}
              I'm available for AI engineering projects and consultations. You can contact me directly
              from my email   
              <a href='mailto:pranavnairop090@gmail.com'>
                (pranavnairop090@gmail.com)
              </a>
              or my socials down below:
              contact number:
              +91 8591257188
              
            </p>

            <ul>
              <li>
                <a href='https://x.com/Pranav4521' target='__blank'>
                  <img src='/icons/twitter.png' alt='img' />
                </a>
              </li>
              <li>
                <a href='https://github.com/Pranav452' target='__blank'>
                  <img src='/icons/github.png' alt='img' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/pranav-nair-682a32384/'
                  target='__blank'
                >
                  <img src='/icons/linkedin.png' alt='img' />
                </a>
              </li>
            </ul>
          </div>
          <div className='inner'>
            <h1>Resume</h1>
            <p>
              Below is my resume. I'm currently <strong>open for AI engineering</strong> opportunities and collaborations.
            </p>
            <p>
              <a 
                href='/Pranav_resume.pdf' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{ color: '#125eaf', fontWeight: 'bold' }}
              >
                Click here to download my resume
              </a>
            </p>
          </div>
        </div>
       
      </div>
    </section>
  );
}
