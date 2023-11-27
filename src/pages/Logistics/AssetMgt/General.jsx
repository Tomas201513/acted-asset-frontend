import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Catagory from './Catagory/Catagory'
import SubCatagory from './SubCatagory/SubCatagory' 
import Asset from './Asset/Asset'

function General() {
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
            <Tab label="Asset" value="1" />
            <Tab label="Catagory" value="2" />
            <Tab label="Sub-catagory" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Asset /></TabPanel>
        <TabPanel value="2"><Catagory /></TabPanel>
        <TabPanel value="3"><SubCatagory /></TabPanel>
      </TabContext>
    </Box>
    </>
    )
}

export default General
