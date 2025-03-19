import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  padding-left: 1%;
`;

const ModalContent = styled(motion.div)`
  background-color: "#1e1e1e;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const Modal = ({ children, onClose }) => {
  // Prevent scrolling of the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.7 }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
