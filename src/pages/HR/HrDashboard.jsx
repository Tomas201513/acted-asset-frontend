import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Users from "./user/Users"
import Department from "./department/Department"
import Office from "./office/Office"
import Position from './position/Position';


function HrDashboard() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1', ml: 5 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Users" value="1" />
            <Tab label="Department" value="2" />
            <Tab label="Office" value="3" />
            <Tab label="Position" value="4" />

            </TabList>
        </Box>
        <TabPanel value="1"><Users /></TabPanel>
        <TabPanel value="2"><Department /></TabPanel>
        <TabPanel value="3"><Office /></TabPanel>
        <TabPanel value="4"><Position /></TabPanel>
        </TabContext>
    </Box>
    </>
    )
}

export default HrDashboard

