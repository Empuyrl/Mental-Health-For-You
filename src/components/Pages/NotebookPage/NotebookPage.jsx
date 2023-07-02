import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalModal from '../../JournalModal/JournalModal';
import JournalButton from '../../JournalModal/JournalButton';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '0',
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
    <div className="background-gradient">
      <StyledContainer>
        <Box textAlign="center" marginTop={2}>
          <Title variant="h2">Embrace: A Journey to Mental Wellness</Title>
          <JournalButton setIsModalOpen={setIsModalOpen} />
        </Box>
        {Object.entries(entriesByCategory).map(([category, entries]) => (
          <TableContainer component={Paper} elevation={3} sx={{ marginTop: '20px', height: '200px', overflow: 'auto'  }} key={category}>
            <Table sx={{ minWidth: 700, marginBottom: '20px' }} align="center">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell align="center">{category}</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.reverse().map((entry) => (
                  <TableRow  sx={{ backgroundColor: '#f5f5f5' }} key={entry.id}>
                    <TableCell align="center" onClick={() => handleEditClick(entry)}>{entry.entry_text}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleEditClick(entry)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleDeleteClick(entry)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </StyledContainer>
      {isModalOpen && <JournalModal currentEntry={currentEntry} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default NotebookPage;