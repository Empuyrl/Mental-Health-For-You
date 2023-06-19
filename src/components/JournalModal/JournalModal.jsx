import React, { useState } from 'react';

const JournalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveEntry = () => {
    // Perform save logic for journal entry
    console.log('Saving journal entry:', journalEntry);

    // Clear the journal entry
    setJournalEntry('');

    // Close the modal
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Journal</button>
      {isOpen && (
        <div>
          <h3>Journal Modal</h3>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
          ></textarea>
          <button onClick={handleSaveEntry}>Save</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default JournalModal;