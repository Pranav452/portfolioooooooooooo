import Window from "./Window";
import { GlobalState } from "../hooks/State";
import Controls from "./Controls";

export default function AIProjectsWindow() {
  const { window, close } = GlobalState();

  const handleControlClick = () => {
    close("ai");
  };

  const handleMinimize = () => {
    console.log("Minimizing AI projects...");
  };

  return (
    <Window windowKey="ai">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '850px',
        height: '550px',
        background: 'rgba(0, 0, 0, 0.85)',
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
        {window.ai.content}
      </div>
    </Window>
  );
}

