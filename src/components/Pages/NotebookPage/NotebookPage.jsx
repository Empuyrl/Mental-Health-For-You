import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalModal from '../../JournalModal/JournalModal';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  background: '#f7f7f7', // Light gray color resembling a notebook page
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '2rem',
  padding: '2rem', // Optional padding to create some spacing around the content
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional box shadow for a paper-like effect
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '2rem 0',
}));

const NotebookPage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.journal);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

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
        payload: entry.id,
      });
    }
  };

  const entriesByCategory = entries.reduce((acc, entry) => {
    (acc[entry.category] = acc[entry.category] || []).push(entry);
    return acc;
  }, {});

  return (
    <Container>
      <Title variant="h2">Notebook Page</Title>
      <button onClick={() => { setCurrentEntry(null); setIsModalOpen(true); }}>Open Journal</button>
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
    </Container>
  );
};

export default NotebookPage;