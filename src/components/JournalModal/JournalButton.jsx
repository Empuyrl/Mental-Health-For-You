// JournalButton.jsx
import React, { useState } from 'react';
import JournalModal from './JournalModal';
import { IconButton } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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
          < LibraryBooksIcon  fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

export default JournalButton;