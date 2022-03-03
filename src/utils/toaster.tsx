import { ReactElement } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (
  msg: string | ReactElement<any, any>,
  type: 'success' | 'info' | 'error' = 'info',
  autoClose = 5000,
) => {
  const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    className: 'notif-custom-css',
  } as ToastOptions;

  const notifyType = {
    success: () => toast.success(msg, { ...options, autoClose }),
    info: () => toast.info(msg, { ...options, autoClose }),
    error: () => toast.error(msg, { ...options, autoClose }),
  };

  notifyType[type]();
};
