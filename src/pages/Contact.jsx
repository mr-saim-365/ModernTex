import { useState } from "react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinBold } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !cellNumber || !message) {
      setStatus("error");
      return;
    }

    const serviceId = "service_rmw1h2s";
    const templateId = "template_f6exg3r";
    const publicKey = "1T9xbZKxb37vbLUVd";

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: cellNumber,
      to_name: "Saim",
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("Email sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setCellNumber("");
    } catch (error) {
      setStatus(`Error sending email. Please try again ${error}.`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="w-[90%] mx-auto">
          <div className="h-[70vh]">
            <img
              src="/images/contact.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />

  
          </div>
          <div className="mt-[8rem]  mb-20">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 flex flex-col justify-center py-8 px-4 2xl:p-8 rounded-lg shadow-lg  bg-[linear-gradient(to_top_right,_#f48221_50%,_#faa749_95%)] w-full lg:w-[40%]">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6 ">Get in Touch</h2>
                  <p className="mb-8">
                    Any questions? We would love to hear from you!
                  </p>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="bg-white text-black p-3 rounded-full">
                        <FaPhoneAlt size={20} />
                      </div>
                      <p className=" text-[15px]">+92 324 8270610</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white text-black p-3 rounded-full">
                        <LuMail size={20} />
                      </div>
                      <p className=" text-[15px]">Natalia@ahdenim.net</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white text-black p-3 rounded-full">
                        <PiMapPinBold size={20} />
                      </div>
                      <p className="text-[15px]">
                        Plot No. 19/5, Sector No. 12-C North Karachi,
                        <br />
                        Industrial Area, Karachi Pakistan.75850
                      </p>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <div className="bg-white text-black p-2 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                        <FaFacebookF size={20} />
                      </div>
                      <div className="bg-white text-black p-2 rounded-full hover:bg-green-600 hover:text-white transition cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-5 h-5"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904.1050144316846!2d67.08705906963222!3d24.985838714209358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzA5LjAiTiA2N8KwMDUnMTUuNyJF!5e0!3m2!1sen!2s!4v1739060046969!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full lg:w-[60%] 2xl:w-[70%] h-[570px]  2xl:h-[60vh]"
                ></iframe>
              </div>

              <div className=" text-[#4d4d4d] flex-1 shadow-lg p-8 rounded w-full mx-0 lg:w-[50%] lg:mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="p-3 border rounded-lg w-full focus:outline-gray-400 "
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="p-3 border rounded-lg w-full focus:outline-gray-400"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border rounded-lg focus:outline-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={cellNumber}
                    onChange={(e) => setCellNumber(e.target.value)}
                    className="p-3 border rounded-lg focus:outline-gray-400"
                  />

                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-3 border rounded-lg resize-none focus:outline-gray-400"
                  ></textarea>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    Send Message <FiSend />
                  </button>

                  {status && (
                    <p
                      className={`text-center mt-4 ${
                        status.includes("success")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
