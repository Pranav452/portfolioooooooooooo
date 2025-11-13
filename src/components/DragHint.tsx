import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DragHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem('hasSeenDragHint');
    
    if (!hasSeenHint) {
      // Show hint after 2 seconds
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowHint(false);
    localStorage.setItem('hasSeenDragHint', 'true');
  };

  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10000,
            backgroundColor: 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '90%',
            width: 'auto'
          }}
        >
          <motion.div
            animate={{ 
              x: [0, 10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ fontSize: '24px' }}
          >
            👆
          </motion.div>
          
          <div style={{ color: '#ffffff' }}>
            <p style={{ 
              margin: 0, 
              fontWeight: '600',
              fontSize: '15px',
              marginBottom: '4px'
            }}>
              Pro Tip!
            </p>
            <p style={{ 
              margin: 0,
              fontSize: '14px',
              color: '#d1d1d1'
            }}>
              You can drag windows around to organize your view
            </p>
          </div>

          <button
            onClick={handleDismiss}
            style={{
              background: 'rgba(58, 144, 229, 0.9)',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              color: 'white',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(58, 144, 229, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(58, 144, 229, 0.9)';
            }}
          >
            Got it!
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

