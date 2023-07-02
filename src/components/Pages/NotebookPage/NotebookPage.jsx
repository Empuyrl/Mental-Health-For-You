// NotebookPage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalModal from '../../JournalModal/JournalModal';
import JournalButton from '../../JournalModal/JournalButton';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';
import Swal from 'sweetalert2';

const StyledContainer = styled(Container)(({ theme }) => ({
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

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: '20px',
  height: '450px',
  overflow: 'auto',
  backgroundColor: 'lightpink', // Change the background color here
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: 'lightpink', // Change the background color here
}));

const NotebookPage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.journal);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_JOURNAL_ENTRIES' });
  }, [dispatch]);

  const handleDeleteClick = (entry) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this entry!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#d33',  // blue color
      cancelButtonColor: '#3085d6',  // red color
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'DELETE_JOURNAL_ENTRY',
          payload: entry.id,
        });
        Swal.fire(
          'Deleted!',
          'Your entry has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your entry is safe :)',
          'error'
        )
      }
    })
  };

  const handleEditClick = (entry) => {
    Swal.fire({
      title: 'Edit Entry Text',
      input: 'text',
      inputValue: entry.entry_text,
      showCancelButton: true,
      confirmButtonText: 'Save',
      confirmButtonColor: '#3085d6', // blue color
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#d33', // red color
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'UPDATE_JOURNAL_ENTRY',
          payload: { id: entry.id, entry_text: result.value },
        });
        Swal.fire('Updated!', 'Your entry has been updated.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your update has been cancelled.', 'error');
      }
    });
  };


  const combinedEntries = entries.slice().reverse();

  return (
    <div style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', minHeight: '100vh' }}>
      <StyledContainer>
        <Box textAlign="center" marginTop={2}>
          <Title variant="h2">Embrace: A Journey to Mental Wellness</Title>
          <JournalButton setIsModalOpen={setIsModalOpen} />
        </Box>
        <StyledTableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 700, marginBottom: '20px' }} align="center">
            <TableHead>
              <StyledTableRow>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Entry Text</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {combinedEntries.map((entry) => (
                <StyledTableRow key={entry.id}>
                  <TableCell align="center">{entry.category}</TableCell>
                  <TableCell align="center" onClick={() => handleEditClick(entry)}>
                    {entry.entry_text}
                  </TableCell>
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledContainer>
      {isModalOpen && <JournalModal currentEntry={currentEntry} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default NotebookPage;