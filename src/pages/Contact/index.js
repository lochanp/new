import React, { useRef, useState } from 'react';
import Hey1 from '../../assets/images/hey.png';
import { motion, useElementScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setloading] = useState(false);
  //template_6vv9mt4
  //service_u0smdzj
  //HThU3e5g6481_XlGc
  const handleChange = e => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        'service_u0smdzj',
        'template_6vv9mt4',
        {
          from_name: form.name,
          to_name: 'Lochan',
          from_email: form.email,
          to_email: 'lochan.potdar1998@gmail.com',
          message: form.message
        },
        'HThU3e5g6481_XlGc'
      )
      .then(() => {
        setloading(false);
        toast.success('Thank you, for sending a message will get back to you as soon as possible!', {
          duration: 4000
        });
        setform({
          name: '',
          email: '',
          message: ''
        });
      })
      .error(error => {
        setloading(false);
        console.log(error);
        toast.error('Oops Something went please try again later 😓', {
          duration: 4000
        });
      });
  };

  return (
    <div id='contact' className='contact-page'>
      <div className='flex flex-col justify-center items-center heading-container'>
        <p className='tracking-wider text-xl text-gray-600 heading-intro'>CONTACT</p>
        <p className='text-[#E48586] md:text-[60px] sm:text-[50px] xs:text-[40px] drop-shadow-md heading'>
          Get in touch
        </p>
      </div>
      <div className='flex justify-center w-full contact-bg'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 shadow-card shadow-[#d2a2aa] w-[70%] rounded-xl p-10 mb-[150px] contact-form'
        >
          <label className='flex flex-col'>
            <span className='text-gray-600 font-bold mb-4 tracking-wide text-[18px]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='py-4 px-6  placeholder:text-gray-600 rounded-log outline-none border-[1px] border-[#d2a2aa] rounded-lg dark-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-600 font-bold mb-4 tracking-wide text-[18px]'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='py-4 px-6  placeholder:text-gray-600 rounded-log outline-none border-[1px] border-[#d2a2aa] rounded-lg dark-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-600 font-bold mb-4 tracking-wide text-[18px]'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter your message'
              className='py-4 px-6  placeholder:text-gray-600 rounded-log outline-none border-[1px] border-[#d2a2aa] rounded-lg dark-input'
            />
          </label>
          <button className='py-3 px-8 outline-none w-full text-white bg-[#f0b5b6] font-bold text-[20px] rounded-lg'>
            {loading ? 'Sending..' : 'Send'}
          </button>
        </form>
      </div>
      <Toaster />
      {/* <div className='main'>
        <div className='info-container'>
          <p className='info'>
            Get In Touch.
            <br /> I am always up for a discussion
          </p>
          <div className='mail'>
            <a href='mailto:lochan.potdar1998@gmail.com'>Send me a Mail</a>
          </div>
        </div>
        <div className='img-container'>
          <img className='hey-1' src={Hey1} alt=''></img>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
