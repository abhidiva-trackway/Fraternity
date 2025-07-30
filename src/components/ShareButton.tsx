import { motion } from "framer-motion";
import { useState } from "react";

const ShareButton = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleShare = async () => {
    try {
      const shareData = {
        title: 'Veditha 💍 Eshwar Wedding Feast',
        text: 'Celebrate this special day with a curated menu of exquisite vegetarian delights, served with love and tradition.',
        url: 'https://bizvizcards.com/miniwebsite/GRCELEBRATTIONS',
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        showCustomToast('Link copied to clipboard!');
      } else {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`,
          '_blank'
        );
      }
    } catch (err) {
      console.error('Share failed:', err);
      const textArea = document.createElement('textarea');
      textArea.value = 'https://bizvizcards.com/miniwebsite/GRCELEBRATTIONS';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showCustomToast('Link copied to clipboard!');
    }
  };

  const showCustomToast = (message:string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105"
        aria-label="Share this page"
        title="Share this page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
      </button>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-full z-50 left-1/2 transform -translate-x-1/2 -translate-y-4 mb-4"
        >
          <div className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {toastMessage}
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-600"></div>
        </motion.div>
      )}
    </div>
  );
};

export default ShareButton;