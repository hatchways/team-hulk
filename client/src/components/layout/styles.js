import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    navbar: {
      fontSize: '10px',
      minHeight: '11em',
      boxShadow: '0px 5px 20px 1px rgba(0,0,0,0.05)',
      fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
      fontWeight: '600',
      padding: '0 9em'
    },
    navbar__logo: {
      opacity: '0.3',
      fontSize: '2.6em',
      flexGrow: 1,
      justifyContent: 'flex-start'
    },
    navbar__link: {
      textDecoration: 'none',
      color: '#5E6676',
      fontWeight: 'inherit',
      fontSize: '1.6em',
      lineHeight: '2.2em',
      marginLeft: '5em',

      '&:hover': {
        color: '#516BF6',
      },
      '&:focus': {
        color: '#516BF6',
      },
    },
    user: {
        display: 'flex',
        marginLeft: '12em',
        cursor: 'pointer',
        color: '#5E6676',

        '&:hover': {
            color: '#516BF6',
        },
        '&:focus': {
            color: '#516BF6',
        },
    },
    user__name: {
      fontWeight: 'inherit',
      fontSize: '1.6em',
      lineHeight: '2.2em',
      marginLeft: '1.25em',
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.down("xs")]: {
        display: 'none'
      }
    }
  }));

  export default useStyles;