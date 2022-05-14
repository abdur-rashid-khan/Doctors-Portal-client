import React from "react";
import "./ContactFrom.css";

const ContactFrom = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 py-6">
        <div
          className="text-center  m-auto w-full sm:w-96 p-4 rounded shadow"
          id="contactFrom"
        >
          <div className="header py-4">
            <h3 className="text-xl text-teal-400 font-bold">Contact Us</h3>
            <h1 className="text-3xl pt-1 text-white py-4">
              Stay connected with us
            </h1>
          </div>
          <form>
            <div className="">
            <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                name="subject"
                id="subject"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 p-3 bg-transparent rounded input-success"
                placeholder="Subject"
                required
              />
            </div>
            <div className="py-3">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-teal-500 rounded-md bg-transparent pl-2 pt-2 input-success"
                placeholder="Comment"
                defaultValue={""}
                required
              />
            </div>
            <button className="btn btn-primary font-bold bg-gradient-to-r from-emerald-400 to-sky-400 border-0 hoverBtnSpacing rounded w-full">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
