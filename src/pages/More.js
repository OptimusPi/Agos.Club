import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import CombosTable from '../components/CombosTable';
import ConsumablesGrid from '../components/ConsumablesGrid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function More() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box my={2} mx={2} className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          <Tab label="Combos" {...a11yProps(0)} />
          <Tab label="Abilities" {...a11yProps(1)} />
          <Tab label="Cosmetics" {...a11yProps(2)} />
          <Tab label="Consumables" {...a11yProps(3)} />
          <Tab label="Secrets" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CombosTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming soon...
      </TabPanel>
      <TabPanel value={value} index={2}>
        Coming soon...
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ConsumablesGrid />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Coming soon...
      </TabPanel>
    </Box>
  );
}
