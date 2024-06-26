import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PopupModal = ({ isOpen, onRequestClose }) => {

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onRequestClose();
      }, 8000); // 5000 milliseconds = 5 seconds
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if isOpen changes
    }
  }, [isOpen, onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Required"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%', 
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <h2 style={{ margin: '5px', color: '#333', fontSize: '24px' }}>Login Required</h2>
      <p style={{ margin: '5px', color: '#666', fontSize: '16px' }}>To proceed with your order or access your cart, please log in to your account.</p>
      <p style={{ margin: '5px', color: '#666', fontSize: '16px' }}>@annemvikramreddy</p>
      <button style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }} onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default PopupModal;