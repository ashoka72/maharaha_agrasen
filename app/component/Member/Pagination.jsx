import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Pagination = ({ page, pageSize, totalPages, onPageChange, onPageSizeChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const handlePageSizeChange = (newSize) => {
    onPageSizeChange(newSize);
  };

  return (
    <Box mt={3} display="flex" justifyContent="flex-end" alignItems="center">
      <Box mr={2}>
        <Typography variant="body1">
          Page {page} of {totalPages}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="primary"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </Button>
      <Box mx={2}>
        <Button
          variant="outlined"
          color="primary"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </Button>
      </Box>
      <Box mx={2}>
        <select value={pageSize} onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
          <option value={100}>100 per page</option>
          <option value="all">All</option>
        </select>
      </Box>
    </Box>
  );
};

export default Pagination;
