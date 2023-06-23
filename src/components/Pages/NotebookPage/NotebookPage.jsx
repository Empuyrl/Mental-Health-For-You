import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalModal from '../../JournalModal/JournalModal';
import JournalButton from '../../JournalModal/JournalButton';

const NotebookPage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((store) => store.journal) || [];
  const userId = useSelector((store) => store.user.id);
  const [selectedEntry, setSelectedEntry] = useState(null);
 

  useEffect(() => {
    dispatch({ type: 'FETCH_JOURNAL_ENTRIES' });
  }, [dispatch]);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleModalClose = () => {
    setSelectedEntry(null);
  };

  const handleUpdateEntry = (updatedEntry) => {
    dispatch({ type: 'UPDATE_JOURNAL_ENTRY', payload: updatedEntry });
  };

  const handleDeleteEntry = (entryId) => {
    dispatch({ type: 'DELETE_JOURNAL_ENTRY', payload: entryId });
  };

  return (
    <div>
      <h1>Notebook Page</h1>
      {entries.map((entry) => (
        <div key={entry.id} onClick={() => handleEntryClick(entry)}>
          {entry.entry_text}
        </div>
      ))}
      {selectedEntry && (
        <JournalModal
          entry={selectedEntry}
          onClose={handleModalClose}
          onUpdate={handleUpdateEntry}
          onDelete={handleDeleteEntry}
          allowEdit={userId === selectedEntry.user_id}
        />
      )}
        <JournalButton />
    </div>
  );
};

export default NotebookPage;