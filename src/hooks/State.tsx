import { ReactElement } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Settings from "../apps/settings/Settings";
import Showcase from "../apps/Showcase";
import Projects from "../apps/Projects";
import Experience from "../apps/pages/Experience";

interface App {
  isOpen: boolean;
  content: ReactElement;
  zIndex: number;
}

export interface WindowState {
  about: App;
  ai: App;
  projects: App;
  work: App;
}

export type WindowKey = keyof WindowState;
interface GlobalState {
  window: WindowState;
  open: (key: WindowKey) => void;
  close: (key: WindowKey) => void;
  bringToFront: (key: WindowKey) => void;
  active: boolean;
  setActive: (bool: boolean) => void;
}

interface LocalState {
  backgroundImage: string;
  setBackgroundImage: (img: string) => void;
}

export const GlobalState = create<GlobalState>((set) => ({
  window: {
    about: {
      isOpen: true,
      content: <Settings />,
      zIndex: 10,
    },
    ai: {
      isOpen: false,
      content: <Showcase />,
      zIndex: 1,
    },
    projects: {
      isOpen: false,
      content: <Projects />,
      zIndex: 1,
    },
    work: {
      isOpen: false,
      content: <Experience />,
      zIndex: 1,
    },
  },
  open: (key: WindowKey) =>
    set((state) => {
      const maxZ = Math.max(...Object.values(state.window).map(w => w.zIndex));
      return {
        window: {
          ...state.window,
          [key]: {
            ...state.window[key],
            isOpen: true,
            zIndex: maxZ + 1,
          },
        },
      };
    }),
  close: (key: WindowKey) =>
    set((state) => ({
      window: {
        ...state.window,
        [key]: {
          ...state.window[key],
          isOpen: false,
        },
      },
    })),
  bringToFront: (key: WindowKey) =>
    set((state) => {
      const maxZ = Math.max(...Object.values(state.window).map(w => w.zIndex));
      return {
        window: {
          ...state.window,
          [key]: {
            ...state.window[key],
            zIndex: maxZ + 1,
          },
        },
      };
    }),
  active: true,
  setActive: (bool) => set(() => ({ active: bool })),
}));

const localStatePersist = persist<LocalState>(
  (set) => ({
    backgroundImage: "/wallpapers/01.jpg",
    setBackgroundImage: (img) => set(() => ({ backgroundImage: img })),
  }),
  {
    name: "local-state",
    storage: createJSONStorage(() => localStorage),
  }
);

export const LocalState = create<LocalState>(localStatePersist as any);
