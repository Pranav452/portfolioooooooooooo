import { AiFillApple } from "react-icons/ai";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Modal from "react-modal";
import { useKonamiCode, getRandomFunnyMessage } from "../utils/EasterEggs";

Modal.setAppElement("#root");

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("Seriously, you thought it was real? It doesn't exist yet.");

  useKonamiCode(() => {
    setModalMessage("🎮 Konami Code Activated! You're a legend! 🎮");
    setIsModalOpen(true);
    setTimeout(() => {
      document.body.style.transform = 'rotate(360deg)';
      document.body.style.transition = 'transform 1s';
      setTimeout(() => {
        document.body.style.transform = 'rotate(0deg)';
      }, 1000);
    }, 100);
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBluetoothClick = () => {
    setModalMessage("Seriously, you thought it was real? It doesn't exist yet.");
    openModal();
  };

  const handleAppleClick = () => {
    let clickCount = 0;
    return () => {
      clickCount++;
      if (clickCount === 5) {
        setModalMessage(`🍎 ${getRandomFunnyMessage()}`);
        setIsModalOpen(true);
        clickCount = 0;
      }
      setTimeout(() => { clickCount = 0; }, 2000);
    };
  };

  const appleClickHandler = handleAppleClick();

  return (
    <>
      <nav>
        <div>
          <ul>
            <li className='apple' onClick={appleClickHandler} style={{ cursor: 'pointer' }} title="Click me 5 times fast!">
              <AiFillApple size={20} />
            </li>
          </ul>
        </div>
       
        <div>
          <ul>
            <li className='clock' onClick={handleBluetoothClick}>
              <CountrySpecificClock />
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-overlay'
      >
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{modalMessage}</p>
      </Modal>
    </>
  );
}

function CountrySpecificClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = format(currentTime, "h:mm a", { locale: enUS });
  const formattedDate = format(currentTime, "EEE, MMM d", { locale: enUS });

  return (
    <div className='clock-container'>
      <div className='clock-date'>{formattedDate}</div>
      <div className='clock-time'>{formattedTime}</div>
    </div>
  );
}