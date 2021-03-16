import { useState, React } from 'react';
import {
  Container,
  // Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
// import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [calDate, setCalDate] = useState(new Date());

  function onChange() {
    setCalDate(calDate);
  }

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Calendar onChange={onChange} value={calDate} />
      </Container>
    </Page>
  );
};

export default Dashboard;
