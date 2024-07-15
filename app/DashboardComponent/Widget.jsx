// components/Widget.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './Widget.module.css';

const Widget = ({ title, value, description }) => {
  return (
    <Card className={styles.widget}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div" className={styles.value}>
          {value}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Widget;
