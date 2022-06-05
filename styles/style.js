import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textTransform: 'uppercase',
        background:'linear-gradient(90deg, rgba(136,136,142,1) 0%, rgba(121,9,109,1) 35%, rgba(106,0,255,1) 100%)',
        [theme.breakpoints.up('md')]: {
            color: 'yellow',
        }
    }
}));