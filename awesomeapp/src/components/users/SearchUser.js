import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//import UpdateIcon from '@material-ui/icons/Update';
import VisibilityIcon from '@material-ui/icons/Visibility';
//import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//import Button from '@material-ui/core/Button';
const SearchUser = () => {
  const [users, setUser] = useState ([]);
  const [search, setSearch] = useState ('');
  const [filterUsers, setFilterUsers] = useState ([]);
  useEffect (() => {
    loadUsers ();
  }, []);
  useEffect (
    () => {
      setFilterUsers (
        users.filter (user =>
          user.name.toLowerCase ().includes (search.toLowerCase ())
        )
      );
    },
    [search, users]
  );
  //
  const loadUsers = async () => {
    const result = await axios.get ('http://localhost:3003/users');
    setUser (result.data.reverse ());
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Search Page</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={e => setSearch (e.target.value)}
        />

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map ((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/${user.id}`}
                  >
                    <VisibilityIcon />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchUser;
