import Window from "./Window";
import { GlobalState } from "../hooks/State";
import Controls from "./Controls";

export default function ExperienceWindow() {
  const { window, close } = GlobalState();

  const handleControlClick = () => {
    close("work");
  };

  const handleMinimize = () => {
    console.log("Minimizing work... because we all need breaks!");
  };

  return (
    <Window windowKey="work">
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
        {window.work.content}
      </div>
    </Window>
  );
}

