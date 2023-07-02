// JournalButton.jsx
import React, { useState } from 'react';
import JournalModal from './JournalModal';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const JournalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      {isModalOpen ? (
        <JournalModal setIsModalOpen={setIsModalOpen} />
      ) : (
        <IconButton color="primary" onClick={handleOpenModal}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

export default JournalButton;