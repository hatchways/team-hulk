import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { theme } from '../themes/theme';

import UpcomingInterviews from '../components/UpcomingInterviews'
import PastInterviews from '../components/PastInterviews'

const Dashboard = () => {
    return (
        <Container maxWidth='lg'>
            <Box pt={8}>
                <Typography style={{color:theme.palette.primary.light}}  variant='h4' align='center'>Upcoming practice interviews</Typography> 
                <UpcomingInterviews/> 
            </Box>
            <Box pt={8} pb={12}>
                <Typography style={{color:theme.palette.primary.light}}  variant='h4' align='center'>Past practice interviews</Typography> 
                <PastInterviews/> 
            </Box>
        </Container>    
    )
}

export default Dashboard;