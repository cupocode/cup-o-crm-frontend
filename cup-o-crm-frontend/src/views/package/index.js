import React from 'react';
import Toolbar from './Toolbar';
import Page from 'src/components/Page';
import {
    Box,
    Container,
    makeStyles
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }));

const PackageCreator = () => {

    const classes = useStyles();
    return (
        <Page
        className={classes.root}
        title="Package Creator"
      >
        <Container maxWidth={false}>
          <Toolbar />
          <Box mt={3}>
            
          </Box>
        </Container>
      </Page>
    )
    
};

export default PackageCreator;