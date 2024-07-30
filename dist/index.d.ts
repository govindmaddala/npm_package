import React from 'react';

type ToastDirection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
interface ToastProps {
    backgroundColor: string;
    textColor: string;
    direction: ToastDirection;
    duration: number;
    text: string;
}
interface CustomToastProps extends ToastProps {
}
declare const CustomToast: React.FC<CustomToastProps>;

export { CustomToast as default };
