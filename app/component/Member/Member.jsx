"use client"
import React, { useState, useEffect } from 'react';
import Search from './Search';
import Filter from './Filter';
import MemberTable from './MemberTable';
import Pagination from './Pagination';
import MembershipModal from './MembershipModal';
import DateRangeFilter from './DatedRangeFilter'; // Corrected import name
import { Container, Typography, Box, Button } from '@mui/material';
import Icon from '../../component/Icons/icon';

const Member = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ role: '', isActive: false });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(100); // Default page size
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fetchAll, setFetchAll] = useState(false); // State to fetch all data

  useEffect(() => {
    // Simulate fetching data
    const fetchMembers = async () => {
      let data = [
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 1, name: 'John Doe', role: 'admin', status: 'active', joiningDate: '2023-01-01', photo: 'john.jpg', district: 'ABC', state: 'XYZ', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 2, name: 'Jane Smith', role: 'member', status: 'inactive', joiningDate: '2022-12-15', photo: 'jane.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 3, name: 'Alice Johnson', role: 'member', status: 'active', joiningDate: '2023-02-20', photo: 'alice.jpg', district: 'GHI', state: 'STU', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 4, name: 'Bob Brown', role: 'admin', status: 'inactive', joiningDate: '2023-03-10', photo: 'bob.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 5, name: 'Charlie Green', role: 'member', status: 'active', joiningDate: '2023-04-05', photo: 'charlie.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 6, name: 'Daisy Blue', role: 'member', status: 'inactive', joiningDate: '2023-05-15', photo: 'daisy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 7, name: 'Eve Black', role: 'admin', status: 'active', joiningDate: '2023-06-20', photo: 'eve.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 8, name: 'Frank White', role: 'member', status: 'inactive', joiningDate: '2023-07-03', photo: 'frank.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 9, name: 'Grace Pink', role: 'member', status: 'active', joiningDate: '2023-08-10', photo: 'grace.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 10, name: 'Henry Grey', role: 'admin', status: 'inactive', joiningDate: '2023-09-15', photo: 'henry.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 11, name: 'Isabella Violet', role: 'member', status: 'active', joiningDate: '2023-10-20', photo: 'isabella.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 12, name: 'Jack Purple', role: 'member', status: 'inactive', joiningDate: '2023-11-05', photo: 'jack.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 13, name: 'Kathy Cyan', role: 'admin', status: 'active', joiningDate: '2023-12-10', photo: 'kathy.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
        { code: 14, name: 'Leo Maroon', role: 'member', status: 'inactive', joiningDate: '2024-01-15', photo: 'leo.jpg', district: 'MNO', state: 'JKL', timesDonationMade: 5, totalAmountDonated: 500 },
        { code: 15, name: 'Mia Yellow', role: 'member', status: 'active', joiningDate: '2024-02-20', photo: 'mia.jpg', district: 'XYZ', state: 'ABC', timesDonationMade: 3, totalAmountDonated: 300 },
        { code: 16, name: 'Nina Red', role: 'admin', status: 'inactive', joiningDate: '2024-03-05', photo: 'nina.jpg', district: 'DEF', state: 'PQR', timesDonationMade: 6, totalAmountDonated: 600 },
        { code: 17, name: 'Oscar Orange', role: 'member', status: 'active', joiningDate: '2024-04-10', photo: 'oscar.jpg', district: 'GHI', state: 'STU', timesDonationMade: 2, totalAmountDonated: 200 },
        { code: 18, name: 'Pam Gold', role: 'member', status: 'inactive', joiningDate: '2024-05-15', photo: 'pam.jpg', district: 'JKL', state: 'MNO', timesDonationMade: 4, totalAmountDonated: 400 },
        { code: 19, name: 'Quinn Silver', role: 'admin', status: 'active', joiningDate: '2024-06-20', photo: 'quinn.jpg', district: 'PQR', state: 'DEF', timesDonationMade: 7, totalAmountDonated: 700 },
        { code: 20, name: 'Ruth Bronze', role: 'member', status: 'inactive', joiningDate: '2024-07-01', photo: 'ruth.jpg', district: 'STU', state: 'GHI', timesDonationMade: 1, totalAmountDonated: 100 },
   
      ];
      

      if (!fetchAll) {
        data = data.slice(0, 100); // Fetch only the first 100 items if fetchAll is false
      }

      setMembers(data);
    };

    fetchMembers();
  }, [fetchAll]);

  useEffect(() => {
    let result = members;

    // Apply search filter
    if (searchQuery) {
      result = result.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply role filter
    if (filters.role) {
      result = result.filter(member => member.role === filters.role);
    }

    // Apply active status filter
    if (filters.isActive) {
      result = result.filter(member => member.status === 'active');
    }

    // Apply date range filter
    if (startDate && endDate) {
      result = result.filter(member => {
        const memberJoiningDate = new Date(member.joiningDate);
        return memberJoiningDate >= startDate && memberJoiningDate <= endDate;
      });
    }

    // Calculate total pages for pagination
    setTotalPages(Math.ceil(result.length / pageSize));

    // Apply pagination and update filtered members
    setFilteredMembers(result.slice((page - 1) * pageSize, page * pageSize));
  }, [members, searchQuery, filters, startDate, endDate, page, pageSize]);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  const handlePageSizeChange = newSize => {
    if (newSize === 'all') {
      setPageSize(members.length); // Set pageSize to total length of members array
    } else {
      setPageSize(newSize);
    }
    setPage(1); // Reset page to 1 when page size changes
  };

  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleToggleFetchAll = () => {
    setFetchAll(!fetchAll); // Toggle between fetching all data and fetching 100 items
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" gutterBottom color='#007bff'>
          Member Management
        </Typography>
        <MembershipModal />
      </Box>
      <Box borderBottom='1px solid #bcd1c2' display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      </Box>
      <div style={{ border: '1px solid #bcd1c2' }}>
        <Box borderBottom="1px solid #bcd1c2" padding="5px" marginBottom='5px' bgcolor="#007bff" color="white">
          <Typography>Member List</Typography>
        </Box>
        <Box padding='1px'>
          <Icon />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <Search onSearch={handleSearch} />
            </Box>
          </Box>
        </Box>

        {/* Date Range Filter Component */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <DateRangeFilter onDateRangeChange={handleDateRangeChange} />
        </Box>

        <MemberTable members={filteredMembers} />
        <Pagination
          page={page}
          pageSize={pageSize}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
        
        {/* Toggle button for fetching all data or 100 items */}
        <Button variant="contained" color="primary" onClick={handleToggleFetchAll}>
          {fetchAll ? 'Fetch First 100 Items' : 'Fetch All Data'}
        </Button>
      </div>
    </>
  );
};

export default Member;
