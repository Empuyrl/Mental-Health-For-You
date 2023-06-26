import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalModal from '../../JournalModal/JournalModal';

const NotebookPage = () => {
  const dispatch = useDispatch();
  const entries = useSelector(state => state.journal); // Get entries from Redux state

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  // Fetch entries on component mount
  useEffect(() => {
    dispatch({ type: 'FETCH_JOURNAL_ENTRIES' });
  }, [dispatch]);

  const handleEditClick = (entry) => {
    setCurrentEntry(entry);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (entry) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      dispatch({
        type: 'DELETE_JOURNAL_ENTRY',
        payload: entry.id
      });
    }
  };

  // Group entries by category
  const entriesByCategory = entries.reduce((acc, entry) => {
    (acc[entry.category] = acc[entry.category] || []).push(entry);
    return acc;
  }, {});

  return (
    <div>
      <button onClick={() => {setCurrentEntry(null); setIsModalOpen(true);}}>Open Journal</button>
      {Object.entries(entriesByCategory).map(([category, entries]) => (
        <div key={category}>
          <h2>{category}</h2>
          {entries.map((entry) => (
            <div key={entry.id}>
              <div onClick={() => handleEditClick(entry)}>
                {entry.entry_text}
              </div>
              <button onClick={() => handleDeleteClick(entry)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
      {isModalOpen && <JournalModal currentEntry={currentEntry} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
  };

export default NotebookPage;