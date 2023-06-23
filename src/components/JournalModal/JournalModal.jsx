import React, { useState } from 'react';

const JournalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setEditMode(false);
  };

  const handleSaveEntry = () => {
    // Perform save logic for journal entry
    console.log('Saving journal entry:', journalEntry);

    // Clear the journal entry
    setJournalEntry('');

    // Close the modal
    handleCloseModal();
  };

  const handleUpdateEntry = () => {
    // Perform update logic for journal entry
    console.log('Updating journal entry:', journalEntry);

    // Clear the journal entry
    setJournalEntry('');

    // Close the modal
    handleCloseModal();
  };

  const handleDeleteEntry = () => {
    // Perform delete logic for journal entry
    console.log('Deleting journal entry');

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
          <h3>{editMode ? 'Edit Entry' : 'New Entry'}</h3>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
          ></textarea>
          {editMode ? (
            <>
              <button onClick={handleUpdateEntry}>Update</button>
              <button onClick={handleDeleteEntry}>Delete</button>
            </>
          ) : (
            <button onClick={handleSaveEntry}>Save</button>
          )}
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default JournalModal;