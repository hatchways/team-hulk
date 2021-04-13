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
      padding: '0 9em',
      [theme.breakpoints.down("sm")]: {
        fontSize: '9px',
        padding: '0 5em',
      }
    },
    navbar__logo: {
      opacity: '0.3',
      fontSize: '2.6em',
      flexGrow: 1,
      justifyContent: 'flex-start'
    },
    navbar__link: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      fontWeight: 'inherit',
      fontSize: '1.6em',
      lineHeight: '2.2em',
      marginLeft: '5em',

      [theme.breakpoints.down("sm")]: {
        marginLeft: '4em',
      },

      '&:hover': {
        color: theme.palette.primary.light,
      },
      '&:focus': {
        color: theme.palette.primary.light,
      },
    },
    navbar__link_selected: {
      color: theme.palette.primary.light
    },
    user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        marginLeft: '12em',
        cursor: 'pointer',
        color: theme.palette.text.secondary,

        [theme.breakpoints.down("sm")]: {
          marginLeft: '5em',
        },

        '&:hover': {
            color: theme.palette.primary.light,
        },
        '&:focus': {
            color: theme.palette.primary.light,
        },
    },
    user__name: {
      fontWeight: 'inherit',
      fontSize: '1.6em',
      lineHeight: '2.2em',
      marginLeft: '1.25em',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    },
    popover__link: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      fontWeight: 'inherit',
      fontSize: '1em',
      lineHeight: '2.2em',

      '&:hover': {
        color: theme.palette.primary.light,
      },
      '&:focus': {
        color: theme.palette.primary.light,
      },
    },
    sectionDesktop: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down("xs")]: {
        display: 'none'
      }
    },
    sectionMobile: {
      display: 'none',
      alignItems: 'center',
      [theme.breakpoints.down("xs")]: {
        display: 'flex'
      }
    }
  }));

  export default useStyles;