import { LocalState } from "../../hooks/State";
import Mockup from "../settings/components/Mockup";

export default function Wallpaper() {
  const wallpapers: { id: number; wallpaper: string }[] = [
    {
      id: 1,
      wallpaper: "/wallpapers/01.jpg",
    },
    {
      id: 2,
      wallpaper: "/wallpapers/02.jpg",
    },
    // {
    //   id: 3,
    //   wallpaper: "/wallpapers/03.jpg",
    // },
    // {
    //   id: 4,
    //   wallpaper: "/wallpapers/04.jpg",
    // },
    {
      id: 5,
      wallpaper: "/wallpapers/05.jpeg",
    },
    {
      id: 6,
      wallpaper: "/wallpapers/06.jpeg",
    },
    {
      id: 7,
      wallpaper: "/wallpapers/07.jpeg",
    },
    {
      id: 8,
      wallpaper: "/wallpapers/08.jpeg",
    },
    {
      id: 9,
      wallpaper: "/wallpapers/09.jpeg",
    },
    {
      id: 10,
      wallpaper: "/wallpapers/10.jpeg",
    },
    {
      id: 11,
      wallpaper: "/wallpapers/11.jpeg",
    },
  ];

  const { backgroundImage, setBackgroundImage } = LocalState();

  return (
    <>
      <section className='wallpaper'>
        <h1> Wallpaper </h1>
        <Mockup />
        <h2> Built-in Display </h2>
      </section>
      <div className='grid'>
        {wallpapers.map((e) => {
          return (
            <img
              key={e.id}
              src={e.wallpaper}
              onClick={() => {
                if (backgroundImage !== e.wallpaper) {
                  setBackgroundImage(e.wallpaper);

                }
              }}
              alt='img'
            />
          );
        })}
      </div>
    </>
  );
}
