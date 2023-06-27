import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const categories = ["Depression", "Stress", "Anxiety", "General"]; 

const JournalModal = ({ currentEntry, setIsModalOpen }) => {
  console.log(setIsModalOpen);

  const dispatch = useDispatch();
  const [entryText, setEntryText] = useState(currentEntry ? currentEntry.entry_text : '');
  const [category, setCategory] = useState(currentEntry ? currentEntry.category : categories[0]);

 // Dispatch action to add or update the entry when form is submitted
 const handleSubmit = (event) => {
  event.preventDefault();

  console.log('entryText:', entryText);
  console.log('category:', category);

  if(currentEntry) {
    dispatch({
      type: 'UPDATE_JOURNAL_ENTRY',
      payload: {
        id: currentEntry.id,
        entry_text: entryText,
        category: category,
      },
    });
  } else {
    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      payload: { entry_text: entryText, category: category }
    });
  }

  // Close the modal after saving
  setIsModalOpen(false);
};

return (
  <form onSubmit={handleSubmit}>
    <textarea value={entryText} onChange={(e) => setEntryText(e.target.value)} />
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      {categories.map((category, index) => <option value={category} key={index}>{category}</option>)}
    </select>
    <button type="submit">Save</button>
    <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
  </form>
);
}

export default JournalModal;