import { LuExternalLink } from "react-icons/lu";
import { useState } from "react";

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [secretClicks, setSecretClicks] = useState(0);

  const projects = [
    {
      id: 1,
      text: "All Press Culture",
      description: "E-commerce coffee shop with modern design",
      img: "/projects/22.png",
      link: "https://allpressculture.com/",
    },
    {
      id: 2,
      text: "Species in Pieces",
      description: "Interactive conservation awareness project",
      img: "/projects/10.png",
      link: "http://species-in-pieces.com/",
    },
    {
      id: 3,
      text: "Dripping Dogs",
      description: "NFT marketplace for digital pet collectibles",
      img: "/projects/15.png",
      link: "https://dripping-dogs.vercel.app/",
    },
    {
      id: 4,
      text: "Nexio",
      description: "SaaS dashboard with analytics tools",
      img: "/projects/13.png",
      link: "https://nexio-nine.vercel.app",
    },
    {
      id: 5,
      text: "Scogo",
      description: "AI-powered educational platform",
      img: "/projects/11.png",
      link: "https://scogo.ai/", 
    },
    {
      id: 6,
      text: "Byte Glitch",
      description: "Creative coding and digital art showcase",
      img: "/projects/18.png",
      link: "https://byte-glitch.vercel.app/",
    },
    {
      id: 7,
      text: "Max Kate",
      description: "Fashion portfolio and e-commerce store",
      img: "/projects/16.png",
      link: "https://max-kate.vercel.app/",
    },
    {
      id: 8,
      text: "Kidsafe",
      description: "Child safety and parental control app",
      img: "/projects/12.png",
      link: "https://kidsafe-delta.vercel.app/",
    },
    {
      id: 9,
      text: "Shree Manjunath School of Nursing",
      description: "Educational institution website",
      img: "/projects/14.png",
      link: "https://shree-manjunath-school-of-nursing-1.vercel.app/",
    },
    {
      id: 10,
      text: "Aryam Architecture",
      description: "Architecture firm portfolio showcase",
      img: "/projects/19.png",
      link: "https://aryam-architecture.vercel.app/",
    },
    {
      id: 11,
      text: "Aryam 2",
      description: "Updated architecture portfolio with 3D models",
      img: "/projects/20.png",
      link: "https://aryam-2.vercel.app/",
    },
    {
      id: 12,
      text: "Pulse Check",
      description: "Health monitoring dashboard application",
      img: "/projects/21.png",
      link: "https://pulse-check-psi.vercel.app/",
    },
    {
      id: 13,
      text: "Casecobra-dev",
      description: "Legal document management system",
      img: "/projects/01.png",
      link: "https://casecobra-dev-inky.vercel.app/",
    },
    {
      id: 14,
      text: "Carepulse-dev",
      description: "Healthcare patient management platform",
      img: "/projects/02.png",
      link: "https://healthcare1-7dkshzq2b-pranav452s-projects.vercel.app/",
    },
    {
      id: 15,
      text: "T3 Gallery",
      description: "Interactive digital art gallery experience",
      img: "/projects/03.png",
      link: "https://t3gallery-two-teal.vercel.app/",
    },
    {
      id: 16,
      text: "Spotifyer",
      description: "Music playlist curation and sharing app",
      img: "/projects/04.png",
      link: "https://spotifyer.vercel.app/",
    },
    {
      id: 17,
      text: "Portfolipo",
      description: "Creative portfolio template for designers",
      img: "/projects/05.png",
      link: "https://portfolipo.vercel.app/",
    },
    {
      id: 18,
      text: "Mindful Steps",
      description: "Meditation and wellness tracking application",
      img: "/projects/23.png",
      link: "https://mindful-steps-earth.vercel.app/",
    },
  ];

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '0.5rem 1rem',
        position: 'sticky',
        top: 0,
        zIndex: 1
      }}>
        <ul style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyleType: 'none',
          padding: 0,
          margin: 0
        }}>
          <li 
            onClick={() => {
              setSecretClicks(prev => {
                const newCount = prev + 1;
                if (newCount === 7) {
                  alert("🚀 Secret Achievement: You found the hidden code! These projects are just the beginning...");
                  return 0;
                }
                return newCount;
              });
              setTimeout(() => setSecretClicks(0), 2000);
            }}
            style={{ cursor: 'pointer' }}
            title="Something's hidden here..."
          >
            My Projects {secretClicks >= 3 && '👀'}
          </li>
          <li></li>
        </ul>
      </div>
      <div style={{
        padding: '1rem',
        overflowY: 'auto',
        flexGrow: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          paddingBottom: '1rem'
        }}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={{
                backgroundColor: 'rgba(40, 40, 40, 0.7)',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transform: hoveredCard === project.id ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
                boxShadow: hoveredCard === project.id ? '0 5px 15px rgba(0,0,0,0.3)' : 'none'
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                height: '130px',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.img} 
                  alt={project.text}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1rem'
                }}>{project.text}</h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#d1d1d1',
                  margin: '0 0 1rem 0',
                  flexGrow: 1,
                  lineHeight: 1.4
                }}>{project.description}</p>
                <a 
                  href={project.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#3a90e5',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    marginTop: 'auto'
                  }}
                >
                  Visit <LuExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 