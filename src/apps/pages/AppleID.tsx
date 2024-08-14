import { LuExternalLink } from "react-icons/lu";

export default function AppleID() {
  const arr: { id: number; text: string; img: string; link: string }[] = [
    {
      id: 1,
      text: "Casecobra-dev",
      img: "/projects/01.png",
      link: "https://casecobra-dev-inky.vercel.app/",
    },
    {
      id: 2,
      text: "Carepulse-dev",
      img: "/projects/02.png",
      link: "https://healthcare1-7dkshzq2b-pranav452s-projects.vercel.app/",
    },
    {
      id: 3,
      text: "T3 Gallery",
      img: "/projects/03.png",
      link: "https://t3gallery-two-teal.vercel.app/",
    },
    {
      id: 4,
      text: "Spotifyer",
      img: "/projects/04.png",
      link: "https://spotifyer.vercel.app/",
    },
    {
      id: 5,
      text: "Portfolipo",
      img: "/projects/05.png",
      link: "https://portfolipo.vercel.app/",
    },
    
    
  ];

  return (
    <section className='apple_id'>
      <div className='nav'>
        <ul>
          <a href='#home'>
            <li>Home</li>
          </a>
          <a href='#projects'>
            <li>Projects</li>
          </a>
          <a href='#contact'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className='content'>
        <div className='grids grid-1' id='home'>
          <div className='inner'>
            <h1> Pranav Nair</h1>
            <h2> I make websites... (kinda) </h2>

            <p>
              Hi, I'm Pranav Nair, a full stack developer who loves making
              amazing websites. I specialize in using a framework called Next.js
              for creating interactive sleek & fast websites. I create Mockups and designs on figma and use it to create websites.
               Overall, my goal is to create websites that look great and
              engage users.{" "}
              
            </p>
          </div>
        </div>
        <div className='grids grid-2' id='projects'>
          <div className='inner'>
            <div className='inner'>
              <h1> Projects </h1>
              <p> (Scroll Horizontally) </p>
            </div>
            <div className='images'>
              {arr.map((e) => {
                return (
                  <div className='card' key={e.id}>
                    <img src={e.img} alt='img' />
                    <a href={e.link} target='_blank'>
                      {e.text} <LuExternalLink />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='grids grid-3' id='contact'>
          <div className='inner'>
            <h1>Contact</h1>
            <p>
              {" "}
              I'm available for freelance projects, you can contact me directly
              from my email   
              <a href='mailto:pranavnairop090@gmail.com'>
                (pranavnairop090@gmail.com)
              </a>
              or my socials down below:
              
            </p>

            <ul>
              <li>
                <a href='https://x.com/Pranav4521' target='__blank'>
                  <img src='/icons/twitter.png' alt='img' />
                </a>
              </li>
              <li>
                <a href='https://github.com/Pranav452' target='__blank'>
                  <img src='/icons/github.png' alt='img' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/pranav-nair-30420a317/'
                  target='__blank'
                >
                  <img src='/icons/linkedin.png' alt='img' />
                </a>
              </li>
            </ul>
            <br />also i dont do leetcode or even practice DSA
            <form action=''></form>
          </div>
        </div>
      </div>
    </section>
  );
}
