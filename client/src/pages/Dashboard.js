import { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { theme } from '../themes/theme';
import Button from '@material-ui/core/Button';

import UpcomingInterviews from '../components/UpcomingInterviews';
import PastInterviews from '../components/PastInterviews';
import CreateInterview from '../components/dialogs/CreateInterview'
import WaitingRoom from '../components/dialogs/WaitingRoom'
import { UserContext } from '../context/UserContext'
import { makeStyles } from '@material-ui/core/styles';

const pastInterviews = [
	{
		id: '123',
		date: new Date('May 25, 2020 22:00:00'),
		codingScore: 5,
		communicationScore: 4,
	},
	{
		id: '456',
		date: new Date('May 27, 2020 14:00:00'),
		codingScore: 3,
		communicationScore: 5,
	},
];

const useStyles = makeStyles((theme) => ({
	btnRoot: {
		borderRadius: '30px',
		padding: '1rem 3rem'
	}
}))

const Dashboard = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false)
	const {upcomingInterviews, WaitingRoomOpen, setWaitingRoomOpen} = useContext(UserContext)

	return (
		<>
			<Container maxWidth="lg">
				<Box mt={4} align='center'>
					<Button
						autoFocus
						classes={{ root: classes.btnRoot }}
						onClick={() => setOpen(true)}
						size="large"
						variant="contained"
						color="primary">
						Create Interview
					</Button>
				</Box>
				<Box pt={8}>
					<Typography
						style={{ color: theme.palette.primary.light }}
						variant="h4"
						align="center"
					>
						Upcoming practice interviews
					</Typography>
					<UpcomingInterviews rows={upcomingInterviews} />
				</Box>
				<Box pt={8} pb={12}>
					<Typography
						style={{ color: theme.palette.primary.light }}
						variant="h4"
						align="center"
					>
						Past practice interviews
					</Typography>
					<PastInterviews rows={pastInterviews} />
				</Box>
			</Container>
			<CreateInterview
				open={open}
				setOpen={setOpen}
			/>
			<WaitingRoom
				open={WaitingRoomOpen}
				setOpen={setWaitingRoomOpen}
			/>
		</>
	);
};

export default Dashboard;
