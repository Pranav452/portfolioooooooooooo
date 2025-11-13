export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "AI Full-Stack Developer",
      company: "Scogo Networks",
      location: "Mumbai, India",
      period: "Dec 2024 – Jun 2025",
      description: [
        "Developed and integrated RAG pipelines for AI voice agents, enabling context-aware query handling and improving response accuracy",
        "Contributed across the full stack—from front-end workflows to back-end logic—ensuring seamless AI integration and optimized system performance"
      ]
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "HashedBit Innovations",
      location: "Mumbai, India",
      period: "Apr–Sep 2024",
      description: [
        "Revamped and optimized full-stack architecture, improving load efficiency by 15% and ensuring smoother API-client communication",
        "Built and deployed scalable RESTful APIs with Node.js and Express, integrating CI/CD pipelines for production releases handling 10,000+ daily requests"
      ]
    }
  ];

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
        background: 'rgba(20, 20, 20, 0.95)',
        padding: '0.75rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1
      }}>
        <h2 style={{ 
          fontWeight: '600', 
          fontSize: '16px',
          letterSpacing: '0.3px',
          margin: 0,
          color: '#ffffff'
        }}> Work Experience </h2>
      </div>
      <div style={{
        padding: '1.5rem',
        overflowY: 'auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 style={{
              fontSize: '1.4rem',
              marginBottom: '0.5rem',
              color: '#ffffff',
              fontWeight: '700'
            }}>
              {exp.role}
            </h2>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#3a90e5',
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              {exp.company}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#c0c0c0',
              marginBottom: '1.25rem'
            }}>
              {exp.location} | {exp.period}
            </p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              color: '#e0e0e0'
            }}>
              {exp.description.map((desc, index) => (
                <li key={index} style={{
                  marginBottom: '0.75rem',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

