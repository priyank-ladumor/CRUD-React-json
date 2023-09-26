// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUser, readUser } from "../store/slices/index";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate, useParams } from "react-router-dom";

// const schema = yup.object({
//   username: yup
//     .string()
//     .min(4)
//     .matches(/^\S*$/, "No whitespaces allowed")
//     .required("please enter username"),
//   email: yup
//     .string()
//     .email()
//     .matches(/^\S*$/, "No whitespaces allowed")
//     .required("Please Enter your Email"),
//   age: yup
//     .number()
//     .typeError("please enter your age")
//     .min(16, "age must be above 16")
//     .required("please enter your age"),
//   gender: yup.string().required(),
//   city: yup.string().required(),
// });

// const Edit = () => {
//   const { refresh } = useSelector((state) => state.crud);
//   const { id } = useParams();

//   const navigate = useNavigate();
//   var imagesvalue = [];
//   var empty = [];
//   const [images, setimages] = useState([]);
//   const [updateData, setUpdateData] = useState();
//   const [imgsizeerr, setimgsizeerr] = useState();
//   const [imgerr, setimgerr] = useState();
//   const [imglenerr, setimglenerr] = useState();

//   const allusers = useSelector((state) => state.crud.users);

//   useEffect(() => {
//     if (id) {
//       const singleUser = allusers.filter((ele) => {
//         return ele.id == id;
//       });
//       setUpdateData(singleUser[0]);
//     }
//   }, []);

//   const preimg = updateData?.images;
//   useEffect(() => {
//     setimages(preimg);
//   }, [preimg]);

//   const newData = (e) => {
//     setUpdateData({ ...updateData, [e.target.name]: e.target.value });
//     console.log(updateData, "updateData");
//   };

//   const onReset = () => {
//     setUpdateData({ ...updateData, username: "", email: "", age: "" });
//     setimages(empty);
//   };

//   useEffect(() => {
//     setimages(empty);
//   }, [refresh]);

//   useEffect(() => {
//     if (images.length > 0) {
//       const rmv = "";
//       setimgerr(rmv);
//       setimglenerr(rmv);
//       // setimgsizeerr(rmv);
//     }
//     if (images.size <= 1100000) {
//       const rmv = "";
//       setimgsizeerr(rmv);
//     }
//   }, [images]);

//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     const item = {
//       id: id,
//       images: images,
//       email: data.email,
//       city: data.city,
//       gender: data.gender,
//       age: data.age,
//       username: data.username,
//     };
//     if (images.length > 0) {
//       console.log(item, "update");
//       dispatch(updateUser(item));
//       reset();
//       setimages(empty);
//       setTimeout(() => {
//         navigate("/read");
//       }, 500);
//       dispatch(readUser());
//     }
//   };

//   const uploadimages = (e) => {
//     try {
//       if (e.target.files.length > 3) {
//         const err3 = "Only 3 images accepted.";
//         setimglenerr(err3);
//       } else {
//         for (let i = 0; i < e.target.files.length; i++) {
//           if (e.target.files[i].size <= 2500000) {
//             var reader = new FileReader();
//             reader.readAsDataURL(e.target.files[i]);
//             reader.onload = (readerEvent) => {
//               var imageBaseValue = readerEvent.target.result;
//               imagesvalue.push({ image: imageBaseValue, id: i });
//               // setimages(imagesvalue);
//             };
//           } else {
//             toast.error("Image size must be of 2MB or less", {
//               position: "top-right",
//               autoClose: 4000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "light",
//             });
//             // const err = "Image size must be of 1MB or less";
//             // setimgsizeerr(err);
//           }
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addImg = () => {
//     setimages(imagesvalue);
//   };

//   const errorImg = () => {
//     if (images.length === 0) {
//       const err2 = "You need to provide an image";
//       setimgerr(err2);
//     }
//   };

//   const deleteimg = (deleteimgid) => {
//     const handleDelete = images.filter((item, id) => item.id !== deleteimgid);
//     setimages(handleDelete);
//   };

//   return (
//     <>
//       <div style={{ width: "100%" }} className="d-flex ">
//         <div
//           className="w-50 mx-auto border p-5"
//           style={{
//             background: "whitesmoke",
//             boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//             marginTop: "100px",
//           }}
//         >
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-3">
//               {/* <label htmlFor="uploadimg" className="btn btn-outline-dark">
//                 Add Images
//               </label> */}
//               <input
//                 accept=".jpg,.jpeg,.png"
//                 multiple
//                 type="file"
//                 id="uploadimg"
//                 // style={{ display: "none" }}
//                 onChange={uploadimages}
//               />
//               <button className="btn btn-outline-primary" onClick={addImg}>
//                 Add Images
//               </button>
//               {(imglenerr || imgerr) && (
//                 <p style={{ color: "red" }}>{imgerr || imglenerr}</p>
//               )}
//             </div>
//             {images &&
//               images.map((item, index) => {
//                 return (
//                   <div className="row" key={index}>
//                     <div className="col-8">
//                       <img
//                         className="mt-2"
//                         src={item.image}
//                         alt="img-preview"
//                         style={{ width: "100%" }}
//                       />
//                       <button
//                         className="btn btn-danger col-12"
//                         onClick={() => deleteimg(item.id)}
//                       >
//                         remove
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}

//             <div className="mb-3 ">
//               <label htmlFor="exampleInputUsername1" className="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 autoComplete="off"
//                 {...register("username")}
//                 value={updateData && updateData?.username}
//                 onChange={newData}
//               />
//               <p style={{ color: "red" }}>{errors.username?.message}</p>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 autoComplete="off"
//                 {...register("email")}
//                 value={updateData && updateData?.email}
//                 onChange={newData}
//               />
//               <p style={{ color: "red" }}>{errors.email?.message}</p>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="exampleInputAge" className="form-label">
//                 Age
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 autoComplete="off"
//                 {...register("age")}
//                 value={updateData && updateData?.age}
//                 onChange={newData}
//               />
//               <p style={{ color: "red" }}>{errors.age?.message}</p>
//             </div>

//             <div className="d-flex align-items-center">
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 Gender
//               </label>
//               <div className="form-check m-3">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="Male"
//                   checked={updateData && updateData?.gender === "Male"}
//                   autoComplete="off"
//                   {...register("gender")}
//                   defaultChecked
//                   onChange={newData}
//                 />
//                 <label className="form-check-label" htmlFor="flexRadioDefault2">
//                   Male
//                 </label>
//               </div>
//               <div className="form-check m-3">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="Female"
//                   autoComplete="off"
//                   {...register("gender")}
//                   onChange={newData}
//                   checked={updateData && updateData?.gender === "Female"}
//                 />
//                 <label className="form-check-label" htmlFor="flexRadioDefault2">
//                   Female
//                 </label>
//               </div>
//               <p style={{ color: "red" }}>{errors.gender?.message}</p>
//             </div>

//             <label className="mb-3">city</label>
//             <select
//               className="form-select form-select-lg mb-3"
//               autoComplete="off"
//               {...register("city")}
//               aria-label=".form-select-lg example"
//               placeholder="city"
//               onChange={newData}
//             >
//               <option
//                 value="Surat"
//                 selected={updateData && updateData?.city === "Surat"}
//               >
//                 Surat
//               </option>
//               <option
//                 value="Bardoli"
//                 selected={updateData && updateData?.city === "Bardoli"}
//               >
//                 Bardoli
//               </option>
//               <option
//                 value="Navsari"
//                 selected={updateData && updateData?.city === "Navsari"}
//               >
//                 Navsari
//               </option>
//             </select>
//             <p style={{ color: "red" }}>{errors.city?.message}</p>
//             <div className="d-flex justify-content-between">
//               <button
//                 type="submit"
//                 onClick={errorImg}
//                 className="btn btn-primary"
//               >
//                 Submit
//               </button>
//               <input
//                 className="btn btn-secondary"
//                 type="reset"
//                 onClick={onReset}
//                 value="Reset"
//               />
//             </div>
//             <ToastContainer />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Edit;
