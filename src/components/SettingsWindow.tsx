import Window from "./Window";
import { GlobalState } from "../hooks/State";
import Controls from "./Controls";

export default function SettingsWindow() {
  const { window, close } = GlobalState();

  function App() {
    return (
      <>
        <Controls
          onMinimize={() => console.log("Building..")}
          onControlClick={() => close("about")}
        />
        {window.about.content}
      </>
    );
  }

  return (
    <Window windowKey="about">
      <App />
    </Window>
  );
}
