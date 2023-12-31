import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const categories = ["Depression", "Stress", "Anxiety", "General"];

const JournalModal = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [entryText, setEntryText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      payload: { entry_text: entryText, category: category }
    });

    setIsModalOpen(false);
  };

  return (
    <Dialog
      open={setIsModalOpen}
      onClose={() => setIsModalOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{ style: { backgroundColor: ' beige ' } }} // Set the background color here
    >
      <DialogTitle>Journal Entry</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <TextField 
            label="Entry Text"
            multiline
            rows={4}
            variant="outlined"
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category, index) => <MenuItem value={category} key={index}>{category}</MenuItem>)}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default JournalModal;