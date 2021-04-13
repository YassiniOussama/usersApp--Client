import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  button: {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '16px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: ' 4px 2px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
  },
  button2: {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #4CAF50',
  },
  navBar: {
    margin: '30px ',
    position: 'absolute',
    top: '0',
    right: '0',
    listStyleType: 'none',
    margin: '0px',
    display: 'inline-block',
    width: '100%',
  },
  image: {
    height: '40px',
    witht: '50px'
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    fontSize: '25px',
    textDecoration: 'none',
    marginLeft: '15px',
    flexGrow: 3,
  },
}));