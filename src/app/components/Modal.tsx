"use client"
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }: {isOpen: boolean , onClose: () => void , children: React.ReactNode}) => {
  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event: { target: any; currentTarget: any; }) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            className="bg-white w-11/12  lg:w-3/4 rounded shadow-lg z-10 overflow-auto lg:max-h-[50rem] md:max-h-[40rem] max-h-[48rem]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
           
            <div className="p-4">
            <div className="flex justify-end relative p-4  md:mt-0">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none md:relative fixed"
                onClick={onClose}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99934 0.280481C8.98767 0.25406 8.97666 0.227419 8.96433 0.201439C8.86944 0.00218236 8.62262 -0.0623282 8.44384 0.0673535C8.40619 0.0946549 8.37273 0.128341 8.3397 0.161367C7.08626 1.41437 5.83326 2.66759 4.58047 3.92126C4.55581 3.94592 4.53534 3.97454 4.48558 4.03377C4.45806 3.98665 4.44595 3.95054 4.42173 3.92632C3.16322 2.66583 1.90361 1.40688 0.645106 0.146616C0.537002 0.0385109 0.418989 -0.0295225 0.260904 0.0136314C0.0184946 0.079463 -0.0792618 0.359302 0.0706758 0.56054C0.0966558 0.595548 0.128361 0.626812 0.159406 0.657857C1.41043 1.9091 2.66167 3.16012 3.91313 4.4107C3.93999 4.43734 3.9717 4.45914 4.00846 4.48886C3.97346 4.52563 3.95056 4.55095 3.92656 4.57495C2.66519 5.83632 1.40382 7.09813 0.141572 8.35862C0.0215778 8.47839 -0.036768 8.61094 0.0253201 8.77827C0.0697956 8.89804 0.168212 8.95749 0.2805 9.0002H0.421191C0.50816 8.93855 0.606136 8.88791 0.680554 8.81371C1.92915 7.56952 3.17467 6.32268 4.42019 5.07562C4.44441 5.05118 4.4596 5.01772 4.49262 4.96774C4.53534 5.02168 4.55427 5.0514 4.57871 5.07584C5.82445 6.32268 7.07019 7.56952 8.31857 8.81371C8.39298 8.88791 8.49096 8.93855 8.57793 8.99998H8.71862C8.86019 8.95396 8.95376 8.86017 9 8.7186C9 8.6717 9 8.62481 9 8.57791C8.93835 8.49094 8.88793 8.39296 8.81373 8.31855C7.56954 7.06995 6.3227 5.82443 5.07564 4.57891C5.0512 4.55469 5.01774 4.5395 4.98845 4.52013C4.98845 4.50648 4.98845 4.4926 4.98845 4.47895C5.01774 4.45958 5.0512 4.44439 5.07542 4.42017C6.32204 3.17465 7.56888 1.92913 8.81307 0.680535C8.88727 0.606116 8.93791 0.508139 8.99934 0.421171V0.280481Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
              {children}
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleOverlayClick}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Modal;
