import React from 'react';
import { ToastContainer, toast, Slide, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastDirection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

interface ToastProps {
  backgroundColor: string;
  textColor: string;
  direction: ToastDirection;
  duration: number;
  text: string
}

interface CustomToastProps extends ToastProps {}

const CustomToast: React.FC<CustomToastProps> = ({ text, backgroundColor, textColor, direction, duration }) => {
  const showToast = () => {
    toast(text, {
      position: direction,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      style: { backgroundColor, color: textColor },
    } as ToastOptions);
  };

  return (
    <div>
      <button onClick={showToast}>
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default CustomToast;
