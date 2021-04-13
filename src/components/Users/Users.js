import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { CircularProgress, TextField, Button, Typography } from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './styles.css';
import { getUsers, getUsersByName, getCountUsers, deleteUser } from '../../actions/users';
import { Link } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import Pagination from 'react-paginating';
import { useHistory } from "react-router-dom";

const Users = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});
  const [countUsers, setCountUsers] = useState({});
  const [numUsersToAdd, setNumUsersToAdd] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUsername] = useState(null);
  const userPerPage = 10;
  const limit = 10;
  const pageCount = 10;
  const total = 100;
  const doMoke = () => { history.push("/moke/" + numUsersToAdd); }
  let history = useHistory();

  useEffect(() => {
    const fecthData = async () => {
      setUsers(await dispatch(getUsers(currentPage, userPerPage)))
    }
    fecthData();
  }, [dispatch]);
  const handlePageChange = async (page, e) => {
    setCurrentPage(page);
    setUsers(await dispatch(getUsers(page, userPerPage)));
  }
  const handleGetUsername = (e) => { setUsername(e.target.value); }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers(dispatch(await getUsersByName(currentPage, userPerPage, username)));
  };

  getCountUsers().then(val => { setCountUsers(val.data) });
  useEffect(() => { setTimeout(() => { setNumUsersToAdd(100 - countUsers); }, 1500) }, [numUsersToAdd]);

  const columns = [
    //{dataField:"username",text:"Username"},
    { field: 'id', hide: true }, { field: 'Username', width: 160 }, { field: 'Gender' }, { field: 'Birthday', width: 160 },
    { field: 'News' }, { field: 'Email', width: 250 },
    {
      field: "Details",
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          return params.getValue(fields[0]);
        }
        return <Link to={`/user/details/${onClick()}`} className={classes.btnDetails}> <MoreHorizIcon fontSize="small" /> </Link>;
      }
    },
    {
      field: "Update",
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          return params.getValue(fields[0]);
        };
        return <Link className={classes.btnUpdate} to={`/update/${onClick()}`}  > <UpdateIcon fontSize="small" /> </Link>
      }
    },
    {
      field: "Delete",
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          dispatch(deleteUser(params.getValue(fields[0])));
        };
        return <Button className={classes.btnDelete} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) { onClick(); window.location.reload(false); } }}><DeleteIcon fontSize="small" /></Button>;
      }
    }
  ];
  return (
    <div className={classes.caontainer} style={{ height: 500, width: '100%' }}>
      {
        numUsersToAdd > 0 ?
          <Button size="large" className={classes.btnLoad} onClick={() => { doMoke() }}  >
            <GetAppIcon fontSize="large" />
            {
              numUsersToAdd === 1 ? "Load " + numUsersToAdd + " User"
                : numUsersToAdd > 1 ? "Load " + numUsersToAdd + " Users"
                  : null
            }
          </Button>
          : null
      }
      <br /><br />
      {
        !users.length ? <CircularProgress /> :
          <>
            <Typography variant="h6">Search by Username</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <TextField name="username" variant="outlined" label={"Username"} fullWidth onChange={(e) => handleGetUsername(e)}></TextField>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Search</Button>
            </form>
            <DataGrid
              className={classes.dataGrid}
              columns={columns}
              rows={
                users.map((user) => ({
                  id: user._id,
                  Username: user.username,
                  Gender: user.gender,
                  Birthday: user.dob,
                  News: user.news === "true" ? "Oui" : "Non",
                  Email: user.email,
                }))
              }
              pageSize={10}
              components={{
                Toolbar: GridToolbar,
              }}
            />
            <div className={classes.form}>
              <ul>
              </ul>
              <Pagination
                className="bg-red"
                total={total}
                limit={limit}
                pageCount={pageCount}
                currentPage={currentPage}
              >
                {({
                  pages,
                  currentPage,
                  hasNextPage,
                  hasPreviousPage,
                  previousPage,
                  nextPage,
                  totalPages,
                  getPageItemProps
                }) => (
                  <div>
                    <button
                      {...getPageItemProps({
                        pageValue: 1,
                        onPageChange: handlePageChange
                      })}
                    >
                      first
                   </button>
                    {hasPreviousPage && (
                      <button
                        {...getPageItemProps({
                          pageValue: previousPage,
                          onPageChange: handlePageChange
                        })}
                      >
                        {'<'}
                      </button>
                    )}
                    {pages.map(page => {
                      let activePage = null;
                      if (currentPage === page) {
                        activePage = { backgroundColor: '#fdce09' };
                      }
                      return (
                        <button
                          {...getPageItemProps({
                            pageValue: page,
                            key: page,
                            style: activePage,
                            onPageChange: handlePageChange
                          })}
                        >
                          {page}
                        </button>
                      );
                    })}
                    {hasNextPage && (
                      <button
                        {...getPageItemProps({
                          pageValue: nextPage,
                          onPageChange: handlePageChange
                        })}
                      >
                        {'>'}
                      </button>
                    )}
                    <button
                      {...getPageItemProps({
                        pageValue: totalPages,
                        onPageChange: handlePageChange
                      })}
                    >
                      last
              </button>
                  </div>
                )}
              </Pagination>
            </div>
          </>
      }
    </div>
  );
};

export default Users;
