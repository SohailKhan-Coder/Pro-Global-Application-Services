import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const notifications = [
  { text: "Ali Raza from Karachi has just purchased a service", time: "10 sec ago" },
  { text: "Ahmed Khan from Doha submitted an inquiry", time: "20 sec ago" },
  { text: "Sarah Williams from New York requested a free trial", time: "30 sec ago" },
  { text: "Omar Farooq from Dubai has just purchased a service", time: "40 sec ago" },
  { text: "Hassan Ali from Lahore submitted an application", time: "50 sec ago" },

  { text: "Mohammed Al-Farsi from Riyadh requested a quote", time: "1 min ago" },
  { text: "Emily Johnson from Los Angeles has just purchased a service", time: "1 min 10 sec ago" },
  { text: "Fatima Zahra from Abu Dhabi requested a consultation", time: "1 min 20 sec ago" },
  { text: "Usman Tariq from Islamabad requested a free trial", time: "1 min 30 sec ago" },
  { text: "Aisha Al-Thani from Doha submitted an inquiry", time: "1 min 40 sec ago" },

  { text: "Yousef Ahmed from Dubai has just purchased a service", time: "2 min 20 sec ago" },
  { text: "Zain Ali from Peshawar requested a quote", time: "4 min 20 sec ago" },
  { text: "Khalid Hassan from Riyadh submitted an inquiry", time: "6 min 20 sec ago" },
  { text: "Mariam Abdullah from Sharjah has just purchased a service", time: "8 min 20 sec ago" },
  { text: "Bilal Ahmed from Faisalabad requested a consultation", time: "10 min 20 sec ago" },

  { text: "Oliver Smith from London requested a quote", time: "20 min ago" },
  { text: "Huda Ali from Doha has just purchased a service", time: "30 min ago" },
  { text: "Isabella Martinez from Houston submitted an inquiry", time: "45 min ago" },
  { text: "Saif Rahman from Abu Dhabi requested a consultation", time: "1 hour ago" },
  { text: "Arsalan Khan from Multan has just purchased a service", time: "2 hours ago" },

  { text: "Emma Wilson from Leeds requested a free trial", time: "3 hours ago" },
  { text: "Omar Khalid from Doha started an application", time: "5 hours ago" },
  { text: "Mason Anderson from New York submitted an inquiry", time: "8 hours ago" },
  { text: "Nadia Hussain from Dubai has just purchased a service", time: "12 hours ago" },
  { text: "Hamza Malik from Sialkot requested a quote", time: "18 hours ago" },

  { text: "Ali Mansoori from Riyadh has just purchased a service", time: "1 day ago" },
  { text: "Sara Khan from Abu Dhabi submitted an inquiry", time: "2 days ago" },
  { text: "Yasir Ali from Islamabad requested a consultation", time: "3 days ago" },
  { text: "Farhan Ali from Lahore requested a quote", time: "4 days ago" },
  { text: "Ayesha Khan from Karachi has just purchased a service", time: "5 days ago" },
];

export default function LiveNotification() {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const showPopup = () => {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 7000); // visible for 7 sec
    };

    // First popup after page load
    setTimeout(showPopup, 3000);

    // Show every 30 sec
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length);
      showPopup();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 60,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="fixed bottom-5 left-5 z-[9999]"
        >
          <div className="bg-white rounded-lg shadow-2xl px-4 py-3 w-[320px] border border-gray-200">
            <p className="text-sm text-gray-800 leading-relaxed">
              {notifications[current].text}
            </p>

            <small className="text-gray-500 text-xs block mt-1">
              {notifications[current].time}
            </small>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}