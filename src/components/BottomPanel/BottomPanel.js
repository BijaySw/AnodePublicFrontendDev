import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function BottomPanel() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 600}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{background:'black', height:'10px'}}
        >
          <Tab label="Orders" {...a11yProps(0)}  />
          <Tab label="Recent" {...a11yProps(1)}  />
          <Tab label="Positions" {...a11yProps(2)}/>
          <Tab label="Balances" {...a11yProps(3)}/>
          <Tab label="Credits" {...a11yProps(4)} />
          <Tab label="Transfers" {...a11yProps(4)}/>
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Orders
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Recent
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Positions
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Balances
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
         Credits
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Transfers
        </TabPanel>
    </Box>
  );
}
