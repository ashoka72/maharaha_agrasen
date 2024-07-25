'use client'
import { useState } from 'react';
import GotraForm from './GotraForm';
import GotraTable from './GotraTable';
import { TextField, Paper, Stack, Box, Button, Dialog } from '@mui/material';

const GotraPage = () => {
  const [gotras, setGotras] = useState([]);
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddGotra = (gotra) => {
    if (editIndex !== null) {
      const updatedGotras = [...gotras];
      updatedGotras[editIndex] = gotra;
      setGotras(updatedGotras);
      setEditIndex(null);
    } else {
      setGotras([...gotras, gotra]);
    }
    setIsFormOpen(false);
  };

  const handleEditGotra = (index) => {
    setEditIndex(index);
    setIsFormOpen(true);
  };

  const handleDeleteGotra = (index) => {
    setGotras(gotras.filter((_, i) => i !== index));
  };

  const filteredGotras = gotras.filter(gotra =>
    gotra.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack spacing={2} padding={2}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Gotra
        </Button>
      </Box>
      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <Paper elevation={3} padding={2}>
          <GotraForm
            onSubmit={handleAddGotra}
            initialValue={editIndex !== null ? gotras[editIndex] : ''}
            formTitle={editIndex !== null ? 'Edit Gotra' : 'Add Gotra'}
          />
        </Paper>
      </Dialog>
      <TextField
        label="Search Gotra"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
      />
      <GotraTable
        gotras={filteredGotras}
        onEdit={handleEditGotra}
        onDelete={handleDeleteGotra}
      />
    </Stack>
  );
};

export default GotraPage;
