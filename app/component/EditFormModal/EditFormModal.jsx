import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditFormModal = ({ member, open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Saving changes for member:', member);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Member</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          defaultValue={member.name}
        />
        <TextField
          margin="dense"
          id="role"
          label="Role"
          type="text"
          fullWidth
          defaultValue={member.role}
        />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFormModal;
