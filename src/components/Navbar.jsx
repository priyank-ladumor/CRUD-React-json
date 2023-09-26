import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readUser } from "../store/slices";
import { searchUser } from "../store/slices";
const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, []);

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  const allusers = useSelector((state) => state.crud.users);
  const count = allusers?.length;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "rgba(22,22,22,0.9)" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CRUD
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Create post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/read">
                All post ({count})
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
