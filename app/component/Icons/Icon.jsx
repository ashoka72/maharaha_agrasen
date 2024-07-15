'use client'
import React from 'react';
import { IconButton, Box } from '@mui/material';
import { GetApp as GetAppIcon, PictureAsPdf as PictureAsPdfIcon, Print as PrintIcon, FileCopy as FileCopyIcon } from '@mui/icons-material';

const Icon = ({ handleDownloadCsv, handleDownloadPdf, handlePrint, handleCopy }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default Icon;

