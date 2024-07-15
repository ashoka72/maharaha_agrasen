import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, IconButton, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditFormModal from '../EditFormModal/EditFormModal'; // Import your edit form modal component

const useStyles = makeStyles({
  table: {
    border: '1px solid #ddd', // Add border to the entire table
    borderCollapse: 'collapse', // Collapse borders between cells
    minWidth: 600, // Adjust the minimum width for the table
  },
  tableCell: {
    border: '1px solid #ddd', // Add border to table cells
    padding: '8px', // Adjust cell padding as needed
  },
   // New class for header row
   headerRow: {
    background: '#007bff', // Blue background
    // color: '#fff', // White text
  },
  
});

const MemberTable = ({ members }) => {
  const classes = useStyles();
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null); // To store the member selected for editing

  const sortedMembers = React.useMemo(() => {
    let sortableMembers = [...members];
    if (sortConfig.key) {
      sortableMembers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableMembers;
  }, [members, sortConfig]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setEditModalOpen(true);
  };

  const handleDelete = (memberId) => {
    // Implement delete functionality here
    console.log(`Deleting member with ID ${memberId}`);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.headerRow}> 
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'code'}
                direction={sortConfig.direction}
                onClick={() => handleSort('code')}
                style={{color:'white'}}
              >
                Code
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'joiningDate'}
                direction={sortConfig.direction}
                onClick={() => handleSort('joiningDate')}
                style={{color:'white'}}
              >
                Joining Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell} style={{color:'white'}}>Photo</TableCell>
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'name'}
                direction={sortConfig.direction}
                onClick={() => handleSort('name')}
                style={{color:'white'}}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'district'}
                direction={sortConfig.direction}
                onClick={() => handleSort('district')}
                style={{color:'white'}}
              >
                District
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'state'}
                direction={sortConfig.direction}
                onClick={() => handleSort('state')}
                style={{color:'white'}}
              >
                State
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TableSortLabel
                active={sortConfig.key === 'timesDonationMade'}
                direction={sortConfig.direction}
                onClick={() => handleSort('timesDonationMade')}
                style={{color:'white'}}
              >
                No of Times Donation Made
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell} >
              <TableSortLabel
                active={sortConfig.key === 'totalAmountDonated'}
                direction={sortConfig.direction}
                onClick={() => handleSort('totalAmountDonated')}
                style={{color:'white'}}
              >
                Total Amount Donated
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell className={classes.tableCell}>{member.code}</TableCell>
              <TableCell className={classes.tableCell}>{member.joiningDate}</TableCell>
              <TableCell className={classes.tableCell}> {/* Placeholder for Photo */}</TableCell>
              <TableCell className={classes.tableCell}>{member.name}</TableCell>
              <TableCell className={classes.tableCell}>{member.district}</TableCell>
              <TableCell className={classes.tableCell}>{member.state}</TableCell>
              <TableCell className={classes.tableCell}>{member.timesDonationMade}</TableCell>
              <TableCell className={classes.tableCell}>{member.totalAmountDonated}</TableCell>
              <TableCell className={classes.tableCell}>
                <Tooltip title="Edit">
                  <IconButton onClick={() => handleEdit(member)} aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDelete(member.id)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editModalOpen && (
        <EditFormModal
          member={selectedMember}
          open={editModalOpen}
          onClose={handleCloseEditModal}
        />
      )}
    </>
  );
};

export default MemberTable;
