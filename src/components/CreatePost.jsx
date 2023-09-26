// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createUser } from "../store/slices/index";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// const schema = yup.object().shape({
//   username: yup.string().min(4).required(),
//   email: yup.string().email().required("Please Enter your Email"),
//   images: yup
//     .mixed()
//     .test("required", "You need to provide a file", (value) => {
//       return value && value.length;
//     })
//     .test("fileSize", "The file is too large", (value, context) => {
//       return value && value[0] && value[0].size <= 200000;
//     }),
//   age: yup.number().min(16).required(),
//   gender: yup.string().required(),
//   city: yup.string().required(),
// });
// const CreatePost = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   var imagesvalue = [];
//   const dispatch = useDispatch();

//   const [images, setimages] = useState([]);

//   const onSubmitbtn = (data) => {
//     console.log("fhsgcjsvxchjbgfhjcgxb");
//     // const item = {
//     //   // username: data.username,
//     //   // // images: images,
//     //   // city: data.city,
//     //   // gender: data.gender,
//     //   // email:data.email,
//     //   // age:data.age
//     // };

//     // dispatch(createUser(data));

//     try {
//       reset();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // const onChangeImage = (e) => {
//   //   try {
//   //     for (let i = 0; i < e.target.files.length; i++) {
//   //       var reader = new FileReader();
//   //       reader.readAsDataURL(e.target.files[i]);
//   //       reader.onload = (readerEvent) => {
//   //         var imageBaseValue = readerEvent.target.result;
//   //         imagesvalue.push({ image: imageBaseValue, id: i });
//   //         console.log(images, "image in for loop");
//   //       };
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const uploadimages = () => {
//   //   setimages(imagesvalue);
//   // };

//   // const deleteimg = (deleteimgid) => {
//   //   const handleDelete = images.filter((item, id) => item.id !== deleteimgid);
//   //   setimages(handleDelete);
//   //   console.log(images);
//   // };

//   return (
//     <div
//       style={{ height: "92vh", width: "100%" }}
//       className="d-flex align-items-center"
//     >
//       <div
//         className="w-50 mx-auto border p-5"
//         style={{
//           background: "whitesmoke",
//           boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//         }}
//       >
//         <form onSubmit={handleSubmit(onSubmitbtn)}>
//           <div className="mb-3"></div>
//           {/* <input
//             accept=".jpg,.jpeg,.png"
//             multiple
//             type="file"
//             onChange={onChangeImage}
//           />
//           <button onClick={uploadimages}>add image</button>

//           {images &&
//             images.map((item, index) => {
//               return (
//                 <div className="col-3 d-flex">
//                   <div className="card">
//                     <img src={item.image} alt="img-preview" width={200} />
//                     <button onClick={() => deleteimg(item.id)}>remove</button>
//                   </div>
//                 </div>
//               );
//             })} */}
//           <div className="mb-3 ">
//             <label htmlFor="exampleInputUsername1" className="form-label">
//               Username
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               autoComplete="off"
//               {...register("username")}
//             />
//             <p style={{ color: "red" }}>{errors.username?.message}</p>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               autoComplete="off"
//               {...register("email")}
//             />
//             <p style={{ color: "red" }}>{errors.email?.message}</p>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputAge" className="form-label">
//               Age
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               autoComplete="off"
//               {...register("age")}
//             />
//             <p style={{ color: "red" }}>{errors.age?.message}</p>
//           </div>
//           <div className="d-flex align-items-center">
//             <label className="form-check-label" htmlFor="flexRadioDefault2">
//               Gender
//             </label>
//             <div className="form-check m-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 value="Male"
//                 autoComplete="off"
//                 {...register("gender")}
//                 defaultChecked
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 Male
//               </label>
//             </div>
//             <div className="form-check m-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 value="Female"
//                 autoComplete="off"
//                 {...register("gender")}
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 Female
//               </label>
//             </div>
//             <p style={{ color: "red" }}>{errors.gender?.message}</p>
//           </div>
//           <label className="mb-3">city</label>
//           <select
//             className="form-select form-select-lg mb-3"
//             autoComplete="off"
//             {...register("city")}
//             aria-label=".form-select-lg example"
//             placeholder="city"
//           >
//             <option value="Surat">Surat</option>
//             <option value="Bardoli">Bardoli</option>
//             <option value="Navsari">Navsari</option>
//           </select>
//           <p style={{ color: "red" }}>{errors.city?.message}</p>
//           <button type="submit" className="btn btn-outline-dark">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreatePost;

// // import { useForm } from "react-hook-form";
// // import { yupResolver } from '@hookform/resolvers/yup'
// // import * as yup from "yup";

// // const schema = yup.object({
// //   name: yup.string().required("Attribute name is required"),
// //   g_name: yup.string().required("Attribute Group is required"),
// // })

// // const AddProduct = () => {
// //   const [imageBase, setImagesBase] = useState([])
// //   const { register, reset, handleSubmit, formState: { errors }, control } = useForm({
// //     resolver: yupResolver(schema)
// //   })
// //   const formatImage = (e) => {
// //     try {
// //       var images = [];
// //       for (let i = 0; i < e.target.files.length; i++) {
// //         var reader = new FileReader();
// //         reader.readAsDataURL(e.target.files[i]);
// //         reader.onload = async(readerEvent) => {
// //           var imageBaseValue = await readerEvent.target.result
// //           images.push({ image: imageBaseValue, id: i });
// //           console.log(images,"image in for loop");
// //         };
// //       }
// //       console.log(images.length, "images");
// //       console.log(images, "images");
// //       setImagesBase(images)
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   // console.log(imageBase, "image base value");
// //   return (
// //     <>

// //       <div className="container">
// //         <div className="row">
// //           <div className="col-10 mx-auto Product">
// //             <form>

// //               <input class="form-control" type="file" id="formFileMultiple" multiple accept="image/jpeg, image/png" onChange={formatImage} ></input>
// //               {
// //                 imageBase.length !== 0 ?
// //                   imageBase.map((val, index) => {
// //                     return (
// //                       <>
// //                         <img src={val.image} alt="product" width={100} height={100} />
// //                       </>
// //                     )
// //                   }) : <><h1>no data</h1></>
// //               }
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </>

// //   )
// // }

// // export default AddProduct
