'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../component/Dashboard';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Check for authentication on the client-side
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn === 'false') {
      router.push('/login');
    }
  }, [router]);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default Page;
