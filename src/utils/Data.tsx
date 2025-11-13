interface DockItem {
  id: number;
  label: string;
  img: string;
}

export const dockData: DockItem[] = [
  {
    id: 0,
    label: "about",
    img: "/icons/settings.png",
  },
  {
    id: 1,
    label: "ai",
    img: "/icons/news.png",
  },
  {
    id: 2,
    label: "projects",
    img: "/icons/projects.png",
  },
  {
    id: 3,
    label: "work",
    img: "/icons/pen.png",
  },
];
