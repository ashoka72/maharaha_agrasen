import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel, IconButton, Icon } from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AddIcon from '@mui/icons-material/Add';

const MembershipModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referenceId: '',
    gotra: '',
    photo: '',
    name: '',
    fatherName: '',
    motherName: '',
    dob: null,
    age: '',
    maritalStatus: '',
    spouseName: '',
    mobile: '',
    otp: '',
    password: '',
    email: '',
    address: '',
    block: '',
    district: '',
    state: '',
    pincode: '',
    profession: '',
    adharCard: '',
    voterId: '',
    nominee1: { name: '', relationship: '' },
    nominee2: { name: '', relationship: '' },
    disease: false,
    diseaseFile: '',
    rulesAccepted: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date, age: new Date().getFullYear() - date.getFullYear() });
  };

  const handleNomineeChange = (index, name, value) => {
    const nominees = [...formData.nominees];
    nominees[index][name] = value;
    setFormData({ ...formData, nominees });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Applying for membership with:', formData);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Apply for New Membership</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            p: 4,
            boxShadow: 24,
            maxHeight:'80vh',
            overflowY:'auto'

          }}
        >
          <Typography variant="h6" component="h2">Apply for New Membership</Typography>
          <TextField
            label="Reference ID"
            name="referenceId"
            value={formData.referenceId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gotra</InputLabel>
            <Select
              value={formData.gotra}
              onChange={handleChange}
              name="gotra"
              label="Gotra"
            >
              <MenuItem value="">None of Them</MenuItem>
              <MenuItem value="gotra1">Gotra 1</MenuItem>
              <MenuItem value="gotra2">Gotra 2</MenuItem>
              <MenuItem value="gotra3">Gotra 3</MenuItem>
            </Select>
          </FormControl>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            <IconButton>
              <CameraAltIcon />
            </IconButton>
            <IconButton>
              <PhotoLibraryIcon />
            </IconButton>
          </div>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Father's Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Mother's Name"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="DOB"
              value={formData.dob}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
            // disabled
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Marital Status</InputLabel>
            <Select
              value={formData.maritalStatus}
              onChange={handleChange}
              name="maritalStatus"
              label="Marital Status"
            >
              <MenuItem value="unmarried">Unmarried</MenuItem>
              <MenuItem value="married">Married</MenuItem>
            </Select>
          </FormControl>
          {formData.maritalStatus === 'married' && (
            <TextField
              label="Spouse Name"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="Mobile No"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" fullWidth onClick={() => {/* Implement OTP verification */}}>Verify OTP</Button>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" fullWidth onClick={() => {/* Implement OTP verification */}}>Verify OTP</Button>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Block / Tehsil"
            name="block"
            value={formData.block}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="District"
            name="district"
            value={formData.district}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Profession</InputLabel>
            <Select
              value={formData.profession}
              onChange={handleChange}
              name="profession"
              label="Profession"
            >
              <MenuItem value="profession1">Profession 1</MenuItem>
              <MenuItem value="profession2">Profession 2</MenuItem>
              <MenuItem value="profession3">Profession 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Adhar Card No"
            name="adharCard"
            value={formData.adharCard}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" fullWidth>Attach Adhar Card</Button>
          <TextField
            label="Voter ID / Driving License / Pan Card No"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" fullWidth>Attach ID</Button>
          <Typography variant="h6" component="h3">Nominee Details</Typography>
          <TextField
            label="Nominee 1 Name"
            name="nominee1Name"
            value={formData.nominee1.name}
            onChange={(e) => handleNomineeChange(0, 'name', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nominee 1 Relationship"
            name="nominee1Relationship"
            value={formData.nominee1.relationship}
            onChange={(e) => handleNomineeChange(0, 'relationship', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nominee 2 Name"
            name="nominee2Name"
            value={formData.nominee2.name}
            onChange={(e) => handleNomineeChange(1, 'name', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nominee 2 Relationship"
            name="nominee2Relationship"
            value={formData.nominee2.relationship}
            onChange={(e) => handleNomineeChange(1, 'relationship', e.target.value)}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.disease}
                onChange={(e) => setFormData({ ...formData, disease: e.target.checked })}
              />
            }
            label="Do you have any disease?"
          />
          {formData.disease && (
            <Button variant="contained" fullWidth>Upload Disease Document</Button>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.rulesAccepted}
                onChange={(e) => setFormData({ ...formData, rulesAccepted: e.target.checked })}
              />
            }
            label="I accept the rules and regulations"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Apply</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MembershipModal;
