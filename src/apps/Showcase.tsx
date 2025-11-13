export default function Showcase() {
  return (
    <>
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
          }}> AI Projects </h2>
        </div>
        <div style={{
          padding: '1.5rem',
          overflowY: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h1 style={{
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              fontWeight: '700',
              lineHeight: '1.3',
              color: '#ffffff'
            }}>
              Multi-Agent Customer Support Assistant
            </h1>
            <p style={{
              lineHeight: '1.6',
              color: '#e0e0e0',
              marginBottom: '1.25rem',
              fontSize: '0.95rem'
            }}>
              Designed and deployed a multi-agent architecture using LangChain and SQL Agents that cut average support 
              response time by 50% through intelligent task delegation and context sharing. Integrated SQL-powered 
              retrieval agents for dynamic database queries, enhancing response precision and factual accuracy by 30%.
            </p>
            <button style={{
              padding: '12px 28px',
              background: 'rgba(58, 144, 229, 1)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(58, 144, 229, 0.3)'
            }}>
              <a
                href='https://github.com/Pranav452/AI-Powered-Product-Recommendation-System'
                target='__blank'
                style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                View on GitHub →
              </a>
            </button>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h1 style={{
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              fontWeight: '700',
              lineHeight: '1.3',
              color: '#ffffff'
            }}>
              Large Language Model Alignment Study
            </h1>
            <p style={{
              lineHeight: '1.6',
              color: '#e0e0e0',
              marginBottom: '1.25rem',
              fontSize: '0.95rem'
            }}>
              Conducted fine-tuning of the Llama-3-8B model using QLoRA and DPO on the Anthropic HH-RLHF dataset 
              to align model behavior with human preferences. Achieved a 44.3% reduction in toxicity and 7.9% increase 
              in helpfulness through QLoRA, while DPO provided balanced safety alignment under limited GPU resources.
            </p>
            <button style={{
              padding: '12px 28px',
              background: 'rgba(58, 144, 229, 1)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(58, 144, 229, 0.3)'
            }}>
              <a
                href='https://github.com/Pranav452/Responsible_labs'
                target='__blank'
                style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Learn More →
              </a>
            </button>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h1 style={{
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              fontWeight: '700',
              lineHeight: '1.3',
              color: '#ffffff'
            }}>
              AI-Powered Dispute Assistant
            </h1>
            <p style={{
              lineHeight: '1.6',
              color: '#e0e0e0',
              marginBottom: '1.25rem',
              fontSize: '0.95rem'
            }}>
              Developed an intelligent legal assistant using advanced RAG architecture and multi-agent systems. 
              Leverages LangGraph for orchestrating complex workflows and LangChain for seamless LLM integration. 
              Features semantic search with vector databases for precise legal document retrieval and analysis.
            </p>
            <button style={{
              padding: '12px 28px',
              background: 'rgba(58, 144, 229, 1)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(58, 144, 229, 0.3)'
            }}>
              <a
                href='https://github.com/Pranav452/AI-Powered-Dispute-Assistant'
                target='__blank'
                style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Explore Project →
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
