import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { theme } from '../themes/theme';

import UpcomingInterviews from '../components/UpcomingInterviews'
import PastInterviews from '../components/PastInterviews'

const upcomingInterviews = [
    { date: new Date('May 25, 2020 22:00:00'), theme: 'Simple Array Sum'},
    { date: new Date('May 27, 2020 14:00:00'), theme: 'Diagonal Difference'},
    { date: new Date('May 30, 2020 10:00:00'), theme: 'Plus Minus'},
    { date: new Date('June 01, 2020 17:00:00'), theme: 'Time Conversion'},
];

const pastInterviews = [
    {date: new Date('May 25, 2020 22:00:00'), codingScore: 5, communicationScore: 4},
    {date: new Date('May 27, 2020 14:00:00'), codingScore: 3, communicationScore: 5},
];

const Dashboard = () => {
    return (
        <Container maxWidth='lg'>
            <Box pt={8}>
                <Typography style={{color:theme.palette.primary.light}}  variant='h4' align='center'>Upcoming practice interviews</Typography> 
                <UpcomingInterviews rows={upcomingInterviews}/> 
            </Box>
            <Box pt={8} pb={12}>
                <Typography style={{color:theme.palette.primary.light}}  variant='h4' align='center'>Past practice interviews</Typography> 
                <PastInterviews rows={pastInterviews}/> 
            </Box>
        </Container>    
    )
}

export default Dashboard;