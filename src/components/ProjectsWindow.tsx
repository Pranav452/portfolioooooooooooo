import { GlobalState } from "../hooks/State";
import Window from "./Window";
import Controls from "./Controls";
import Projects from "../apps/Projects";

export default function ProjectsWindow() {
  const { close } = GlobalState();

  const handleControlClick = () => {
    close("projects");
  };

  const handleMinimize = () => {
    // Placeholder for minimize functionality
  };

  return (
    <Window windowKey="projects">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        height: '500px',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '0 0 0.35rem 0.35rem',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        <Controls
          onControlClick={handleControlClick}
          onMinimize={handleMinimize}
        />
        <Projects />
      </div>
    </Window>
  );
} 