'use client'
import React from 'react'
import Widget from '../../DashboardComponent/Widget'
import DonationForm from '../../DashboardComponent/Donation'
import DonationHistoryTable from '../../DashboardComponent/Donation_History'
import ProfileEditForm from '../../DashboardComponent/Profile_Editing'

const page = () => {
  return (
    <>
           <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Widget title="Total Donations" value="$5000" description="Amount received so far" />
            <Widget title="Active Users" value="120" description="Users currently active" />
            <Widget title="New Registrations" value="30" description="Registrations this month" />
            <Widget title="New Registrations" value="700" description="Registrations this month" />
          </div>
          <DonationForm />
          <DonationHistoryTable />
          <ProfileEditForm/>
    </>
  )
}

export default page
