import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';

const AddDoctor = () => {
   const { register, handleSubmit, watch, formState: { errors },
   } = useForm();

   const { data, isLoading, refetch } = useQuery('specialty', () =>
      fetch(`http://localhost:5000/specialty`).then(res =>
         res.json()));


		// imgbb
		const imgbbAPIKey ='ef8e2adcf82ba9b088feff829df4d6bf';
   const onSubmit = async data => {
      // console.log(e.image[0].name)
			const image = data.image[0];
			const formData = new FormData();
			formData.append('image', image);
			const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
			fetch(url,{
				method:'POST',
				body:formData
			})
			.then(res => res.json())
			.then(result =>{
				if(result.success){
					const img = result.data.url;
					const doctor = {
						name:data.name,
						email:data.email,
						specialty:data.specialty,
						img:img
					}
					// send doctor data to database
					console.log(doctor);
				}
			})
   }
   if (isLoading) {
      return <Loading></Loading>
   }
   return (
      <div className="">
         <div className="text-slate-500  font-semibold text-2xl text-center"> <h1>Add Doctor</h1> </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Doctor Name'
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                  {...register("name", {
                     required: {
                        value: true,
                        message: "Name is Required",
                     },
                  }
                  )}
               />
               <label className="">
                  {errors.name?.type === "required" && (
                     <span className="text-red-500 text-sm pt-2">
                        {errors.name.message}
                     </span>
                  )}
               </label>
            </div>
            <div className="py-3">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                  placeholder='Email'
                  {...register("email", {
                     required: {
                        value: true,
                        message: "Email is Required",
                     },
                  }
                  )}
               />
               <label className="">
                  {errors.email?.type === "required" && (
                     <span className="text-red-500 text-sm pt-2">
                        {errors.email.message}
                     </span>
                  )}
               </label>
            </div>
            <div className="py-3">
               <select name="specialty" className="select shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-info text-gray-600 "
                  {...register("specialty", {
                     required: {
                        value: true,
                        message: "specialty is Required",
                     },
                  }
                  )}
               >
                  {
                     data.map((u) => <option value={u.name} key={u._id}>{u.name}</option>)
                  }
               </select>
            </div>
						<div className="py-3">
               <label htmlFor="image">Select Images</label>
               <input
                  type="file"
                  name="image"
                  id="image"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success text-black"
                  {...register("image", {
                     required: {
                        value: true,
                        message: "Image is Required",
                     },
                  }
                  )}
               />
               <label className="">
                  {errors.image?.type === "required" && (
                     <span className="text-red-500 text-sm pt-2">
                        {errors.image.message}
                     </span>
                  )}
               </label>
            </div>
            <button
               className="btn font-bold bg-gradient-to-r from-emerald-400 to-sky-400 border-0 rounded text-slate-100 w-full hoverBtnSpacing"
            >
               Add Now
            </button>
         </form>
      </div>
   );
};

export default AddDoctor;