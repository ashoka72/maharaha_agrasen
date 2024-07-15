'use client'
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, IconButton } from '@mui/material';
import { GetApp as GetAppIcon, PictureAsPdf as PictureAsPdfIcon, Print as PrintIcon, FileCopy as FileCopyIcon } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './DonationReceivers.module.css';

const DonationReceivers = () => {
  const [receivers, setReceivers] = useState([]);
  const [filteredReceivers, setFilteredReceivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ district: '' });
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const [currentPage, setCurrentPage] = useState(1);
  const [receiversPerPage] = useState(5); // Number of receivers per page

  useEffect(() => {
    const fetchReceivers = async () => {
      // Mock data fetching (replace with your actual API call)
      const data = [
        { id: 1, code: 'DR001', deathDate: '2023-01-01', name: 'John Doe', district: 'District A', state: 'State A', totalDonationReceived: 1000 },
        { id: 2, code: 'DR002', deathDate: '2022-12-15', name: 'Jane Smith', district: 'District B', state: 'State B', totalDonationReceived: 2000 },
        // Add more dummy data here...
      ].map(receiver => ({ ...receiver, actions: { edit: false, delete: false } }));

      setReceivers(data);
    };

    fetchReceivers();
  }, []);

  useEffect(() => {
    let result = receivers;

    if (searchQuery) {
      result = result.filter(receiver =>
        receiver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        receiver.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        receiver.district.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.district) {
      result = result.filter(receiver => receiver.district === filters.district);
    }

    if (sortConfig.key) {
      result = result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredReceivers(result);
  }, [receivers, searchQuery, filters, sortConfig]);

  // Pagination logic
  const indexOfLastReceiver = currentPage * receiversPerPage;
  const indexOfFirstReceiver = indexOfLastReceiver - receiversPerPage;
  const currentReceivers = filteredReceivers.slice(indexOfFirstReceiver, indexOfLastReceiver);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset page to 1 when searching
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleEdit = (id) => {
    const updatedReceivers = receivers.map(receiver =>
      receiver.id === id ? { ...receiver, actions: { ...receiver.actions, edit: true } } : receiver
    );
    setReceivers(updatedReceivers);
  };

  const handleDelete = (id) => {
    const updatedReceivers = receivers.filter(receiver => receiver.id !== id);
    setReceivers(updatedReceivers);
  };

  const handleDownloadCsv = () => {
    // Implement CSV download logic
    console.log('Downloading CSV');
  };

  const handleDownloadPdf = () => {
    // Implement PDF download logic
    console.log('Downloading PDF');
  };

  const handlePrint = () => {
    // Implement print logic
    console.log('Printing');
  };

  const handleCopy = () => {
    // Implement copy logic
    console.log('Copying');
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>Manage Donation Data</Typography>
      <div className={styles.header}>
        <div className={styles.icons}>
          <IconButton onClick={handleDownloadCsv} aria-label="Download CSV">
            <GetAppIcon />
          </IconButton>
          <IconButton onClick={handleDownloadPdf} aria-label="Download PDF">
            <PictureAsPdfIcon />
          </IconButton>
          <IconButton onClick={handlePrint} aria-label="Print">
            <PrintIcon />
          </IconButton>
          <IconButton onClick={handleCopy} aria-label="Copy">
            <FileCopyIcon />
          </IconButton>
        </div>
        <div className={styles.search}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            fullWidth
          />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Death Date</th>
            <th>Name</th>
            <th>District</th>
            <th>State</th>
            <th>Total Donation Received</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentReceivers.map((receiver) => (
            <tr key={receiver.id}>
              <td>{receiver.code}</td>
              <td>{receiver.deathDate}</td>
              <td>{receiver.name}</td>
              <td>{receiver.district}</td>
              <td>{receiver.state}</td>
              <td>{receiver.totalDonationReceived}</td>
              <td>
                <IconButton onClick={() => handleEdit(receiver.id)} aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(receiver.id)} aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className={styles.pagination}>
        <ul>
          {Array.from({ length: Math.ceil(filteredReceivers.length / receiversPerPage) }, (_, index) => (
            <li key={index} className={currentPage === index + 1 ? styles.active : ''}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default DonationReceivers;
