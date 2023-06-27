// JournalButton.jsx
import React, { useState } from 'react';
import JournalModal from './JournalModal';

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
        <JournalModal onClose={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      ) : (
        <button onClick={handleOpenModal}>Open Journal</button>
      )}
    </div>
  );
};

export default JournalButton;