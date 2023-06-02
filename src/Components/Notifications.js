import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventSource from 'eventsource-polyfill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/notifications/stream');

    eventSource.addEventListener('message', (event) => {
      const notification = JSON.parse(event.data);
      showNotification(notification.message);
    });

    eventSource.addEventListener('error', (error) => {
      // Handle any SSE connection errors
    });

    return () => {
      eventSource.close();
    };
  }, []);

  const showNotification = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      toastClassName: 'custom-toast',
    });
  };

  return <ToastContainer />;
};

export default Notifications;
