import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  btnLoadUsers: {
    color: '#251988',
    width: '200px',
    height: '100px',
    padding: '0 16px 8px 16px',
    justifyContent: 'space-between',
    cursor: 'default'
  },
  btnDetails: {
    color: '#0E00FE',
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnUpdate: {
    color: '#EEB200',
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnDelete: {
    color: '#EF0022',
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  caontainer: {
    marginTop: '100px',
  },
  dataGrid: {
    borderColor: 'blue',
    borderStyle: 'solid',
  },
  paper: {
  },
  form: {
    width: '55%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(2),

  },
  buttonSubmit: {
    width: '402px',
    margin: '10px 10px ',
  },
  btnLoad: {
    color: '#E81E22',
  }
}));