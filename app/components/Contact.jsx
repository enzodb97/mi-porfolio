"use client"
import Image from 'next/image';
import { assets, serviceData } from "../assets/assets";
import React, {useState} from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "KEY_EMAIL_SECRET");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-collectRoutesUsingEdgeRuntime.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Lato">Contactame</h4>
      <h2 className="text-center text-5xl font-Montserrat">Contacto </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Lato">
        Connect with me
      </p>

      <form onSubmit={onSubmit} className="max-w-2x1 mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name='name'
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name='email'
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          name='message'
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now <Image src={assets.right_arrow_white} alt="arrow" className="w-4"/>
        </button>
        <p className='mt-4'>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
