import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import "./styles/style.css";
import { createGlobalStyle } from "styled-components";
import Animated from "./utils/Animated";
import { GlobalState, LocalState } from "./hooks/State";
import AIProjectsWindow from "./components/AIProjectsWindow";
import SettingsWindow from "./components/SettingsWindow";
import ProjectsWindow from "./components/ProjectsWindow";
import ExperienceWindow from "./components/ExperienceWindow";
import AIChatbot from "./components/AIChatbot";
import DragHint from "./components/DragHint";

interface StyledHTMLProps {
  imageUrl: string;
}

const GlobalStyles = createGlobalStyle<StyledHTMLProps>`
  html, body {
    background: url(${(props) => props.imageUrl}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export default function MacOS() {
  const { window } = GlobalState();
  const { backgroundImage } = LocalState();

  return (
    <>
      <Animated />
      <GlobalStyles imageUrl={backgroundImage} />
      <Navbar />
      <Dock />

      {window.about.isOpen && <SettingsWindow />}
      {window.ai.isOpen && <AIProjectsWindow />}
      {window.projects.isOpen && <ProjectsWindow />}
      {window.work.isOpen && <ExperienceWindow />}
      
      <DragHint />
      <AIChatbot />
    </>
  );
}
