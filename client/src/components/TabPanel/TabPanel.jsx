import React from 'react';
import { Box } from '@material-ui/core/';
const TabPanel = (props) => {
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
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          p={3}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
