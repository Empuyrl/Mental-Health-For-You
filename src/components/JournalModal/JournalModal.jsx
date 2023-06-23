import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const JournalModal = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setJournalEntry(''); // Clear the text when modal closes
  };

  const handleSaveEntry = () => {
    dispatch({ type: 'ADD_JOURNAL_ENTRY', payload: { entry_text: journalEntry } }); // Change this to match your actual payload and action type
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Journal</button>
      {isOpen && (
        <div>
          <h3>New Entry</h3>
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