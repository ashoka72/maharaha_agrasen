import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditFormModal = ({ member, open, onClose, onSave }) => {
  const [editedMember, setEditedMember] = useState({ ...member });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditedMember(prevMember => ({
      ...prevMember,
      [id]: value
    }));
  };

  const handleSave = () => {
    console.log(editedMember)
    onSave(editedMember.code,editedMember);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Member</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="code"
          label="Code"
          type="text"
          fullWidth
          value={editedMember.code}
          onChange={handleChange}
          disabled
        />
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={editedMember.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="role"
          label="Role"
          type="text"
          fullWidth
          value={editedMember.role}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="status"
          label="Status"
          type="text"
          fullWidth
          value={editedMember.status}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="joiningDate"
          label="Joining Date"
          type="date"
          fullWidth
          value={editedMember.joiningDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          id="district"
          label="District"
          type="text"
          fullWidth
          value={editedMember.district}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="state"
          label="State"
          type="text"
          fullWidth
          value={editedMember.state}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="timesDonationMade"
          label="No of Times Donation Made"
          type="number"
          fullWidth
          value={editedMember.timesDonationMade}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="totalAmountDonated"
          label="Total Amount Donated"
          type="number"
          fullWidth
          value={editedMember.totalAmountDonated}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
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
