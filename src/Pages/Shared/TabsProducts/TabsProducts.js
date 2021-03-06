import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Shirts from '../../Home/Products/Shirts/Shirts';
import T_Shirt from '../../Home/Products/T_Shirt/T_Shirt';
import Pants from '../../Home/Products/Pants/Pants';
import Jacket from '../../Home/Products/Jacket/Jacket';
import './TabsProducts.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsProducts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width : '100%', mx: 'auto' }} >
        <Tabs centered value={value} onChange={handleChange}  aria-label="basic tabs example">
          <Tab className='tabs-btn' style={{ color:'white', fontSize:'20px'}} label="T-Shirts" {...a11yProps(0)} />
          <Tab className='tabs-btn' style={{ color:'white', fontSize:'20px'}} label="Shirts" {...a11yProps(1)} />
          <Tab className='tabs-btn' style={{ color:'white', fontSize:'20px'}} label="Pants" {...a11yProps(2)} />
          <Tab className='tabs-btn' style={{ color:'white', fontSize:'20px'}} label="Jackets" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <T_Shirt></T_Shirt>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Shirts></Shirts>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <Pants></Pants>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Jacket></Jacket>
      </TabPanel>
    </Box>
  );
}