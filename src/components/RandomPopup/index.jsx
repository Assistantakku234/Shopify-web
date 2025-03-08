import { useState, useEffect, useRef } from 'react';
import styles from './Randompopup.module.css';

const BottomPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [timer, setTimer] = useState(2);
  const [timerWidth, setTimerWidth] = useState('100%');
  const intervalRef = useRef(null);
  const disappearTimerRef = useRef(null);
  const [randomName, setRandomName] = useState('');
  const [randomCity, setRandomCity] = useState('');
  const isPaused = useRef(false); // Add a ref to track pause state


const productsList = [
  {
    title: "Analogue Resin Strap",
    image: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    category: "Shoes",
    NewArrival: true,
  },
  {
    title: "Ridley High Waist",
    image: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    category: "Denim",
    NewArrival: true,
  },
  {
    title: "Blush Beanie",
    image: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    category: "Hats",
    NewArrival: true,
  },
  {
    title: "Cluse La Baheme Rose Gold",
    image: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    category: "Women",
    NewArrival: true,
  },
  {
    title: "Mercury Tee",
    image: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    category: "Men",
    NewArrival: true,
  },
  {
    title: "La Baheme Rose Gold",
    image: "/RoseGold01.jpg",
    hoverImage: "/RoseGold02.jpg",
    category: "Sale",
    NewArrival: true,
  },
  {
    title: "Cream women pants",
    image: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    category: "Women",
    NewArrival: true,
  },
  {
    title: "Black mountain hat",
    image: "/hat01.jpg",
    hoverImage: "/hat02.jpg",
    category: "Hats",
    NewArrival: true,
  },
];

const nameData = [
  "Suresh", "Rajesh", "Priya", "Anjali", "Vikram", "Anushka", "Arjun", "Kavita",
  "Deepak", "Meena", "Rahul", "Shreya", "Aditya", "Akansha", "Gaurav", "Sneha",
  "Raj", "Jyoti", "Amul", "Ritu",
];

const cityData = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune",
  "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore", "Bhopal", "Nagpur",
  "Surat", "Vadodara", "Coimbatore", "Visakhapatnam", "Patna", "Kanpur",
];

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * productsList.length);
    return productsList[randomIndex];
  };

  const getRandomNameAndCity = () => {
    const nameIndex = Math.floor(Math.random() * nameData.length);
    const cityIndex = Math.floor(Math.random() * cityData.length);
    setRandomName(nameData[nameIndex]);
    setRandomCity(cityData[cityIndex]);
  };

  const handleShowPopup = () => {
    const card = getRandomCard();
    setPopupContent(card);
    setShowPopup(true);
    setTimer(2);
    setTimerWidth('100%');
    getRandomNameAndCity();

    if (disappearTimerRef.current) {
      clearInterval(disappearTimerRef.current);
    }

    disappearTimerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer - 0.05;
        setTimerWidth(`${(newTimer / 2) * 100}%`);

        if (newTimer <= 0) {
          clearInterval(disappearTimerRef.current);
          setShowPopup(false);
          return 2;
        }
        return newTimer;
      });
    }, 50);
  };

  const handleMouseEnter = () => {
    clearInterval(disappearTimerRef.current);
    isPaused.current = true; // Set pause state to true
  };

  const handleMouseLeave = () => {
    if (isPaused.current) { // Only resume if paused
      const remainingTime = (parseFloat(timerWidth) / 100) * 2;
      setTimer(remainingTime);

      disappearTimerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 0.05;
          setTimerWidth(`${(newTimer / 2) * 100}%`);

          if (newTimer <= 0) {
            clearInterval(disappearTimerRef.current);
            setShowPopup(false);
            return 2;
          }
          return newTimer;
        });
      }, 50);
      isPaused.current = false;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleShowPopup, 25000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(disappearTimerRef.current);
    };
  }, []);

  if (!showPopup) {
    return null;
  }

  return (
    <div
      className={styles.popup}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {popupContent && (
        <div className={styles.content}>
          <img
            src={popupContent.image}
            alt={popupContent.title}
            className={styles.image}
          />
          <p className={styles.purchaseText}>
            {randomName} from {randomCity} purchased {popupContent.title} now
          </p>
        </div>
      )}
      <div className={styles.timerLine}>
        <div
          className={styles.timerProgress}
          style={{ width: timerWidth }}
        ></div>
      </div>
    </div>
  );
};

export default BottomPopup;