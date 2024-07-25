import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// Dummy data for demonstration
const dummyDonationHistory = [
  { date: '2023-01-01', amount: '$100', description: 'Donation for Education' },
  { date: '2023-02-15', amount: '$50', description: 'Monthly Donation' },
  { date: '2023-03-20', amount: '$200', description: 'Special Campaign Donation' },
  { date: '2023-04-10', amount: '$75', description: 'Donation for Health' },
];

const DonationHistoryTable = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Donation History
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Table style={{ minWidth: '500px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyDonationHistory.map((donation, index) => (
              <TableRow key={index}>
                <TableCell align="center">{donation.date}</TableCell>
                <TableCell align="center">{donation.amount}</TableCell>
                <TableCell align="center">{donation.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default DonationHistoryTable;
