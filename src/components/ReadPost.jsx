import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, readUser } from "../store/slices";
import ViewModal from "./ViewModal";

const ReadPost = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.crud);
  const [deletepost, setdeletepost] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    if (users) {
      setdeletepost(users);
    }
  }, [users]);

  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = (postid) => {
    const Delete = deletepost.filter((ele, id) => {
      return ele.id !== postid;
    });
    setdeletepost(Delete);
    dispatch(deletePost(postid));
    dispatch(readUser());
  };

  return (
    <div>
      {loading ? (
        <>Loading........</>
      ) : 
      (
        users &&
        Array.from(deletepost)
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.username.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((ele, eleid) => (
            <div className="card w-50 mx-auto mt-4" key={eleid}>
              <div className="card-body">
                <h5 className="card-title">{ele?.username}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele?.email}
                </h6>
                <p className="card-text">{ele?.age}</p>
                <p className="card-text">{ele?.city}</p>
                <p className="card-text">{ele?.gender}</p>
                {ele.images.map((item, index) => (
                  <li style={{ listStyle: "none" }} key={index}>
                    <img
                      className="mt-2"
                      src={item?.image}
                      alt="images"
                      width={100}
                    />
                  </li>
                ))}
                <div className="d-flex mt-3 justify-content-center align-items-center">
                  <div className="me-3">
                    <ViewModal setId={() => setId(ele.id)} id={id} />
                  </div>

                  <NavLink to={`/${ele.id}`} className="card-link">
                    <button className="btn btn-primary">Edit</button>
                  </NavLink>
                  <NavLink to="" className="card-link">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(ele.id)}
                    >
                      Delete
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default ReadPost;
