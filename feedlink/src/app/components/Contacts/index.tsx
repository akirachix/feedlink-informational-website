"use client";

import React, { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contacts() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3fwfrff", 
        "template_luq0y3e", 
        form.current,
        "w06dCkmX6ccnlj4p-" 
      )
      .then(
        (result) => {
          alert("Message sent!");
          form.current && form.current.reset();
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div
      id="contacts"
      className="min-h-screen bg-white flex flex-col items-center pt-10 px-4 md:px-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-[var(--primary-color)] text-center">
        Get in Touch
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 items-stretch">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-6">
            Send us a message
          </h2>
          <div className="flex-1 border-[5px] border-[var(--primary-color)] px-10 py-8 bg-white h-full">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 h-full"
            >
              <div>
                <p className="text-2xl font-bold mb-2">First name:</p>
                <input
                  name="first_name"
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-medium text-gray-700 placeholder:text-gray-400 outline-none focus:border-[var(--primary-color)] transition"
                  required
                />
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">Last name:</p>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-medium text-gray-700 placeholder:text-gray-400 outline-none focus:border-[var(--primary-color)] transition"
                  required
                />
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">Email:</p>
                <input
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-medium text-gray-700 placeholder:text-gray-400 outline-none focus:border-[var(--primary-color)] transition"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-2xl font-bold mb-2">Message:</p>
                <textarea
                  name="message"
                  placeholder="Text......"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg font-medium text-gray-700 placeholder:text-gray-400 outline-none focus:border-[var(--primary-color)] transition resize-none flex-grow"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-[var(--primary-color)] hover:bg-brand-green text-white text-lg font-bold rounded-md py-3 shadow-sm cursor-pointer transition"
              >
                <Send size={22} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-6">
            Contact Information
          </h2>
          <div className="flex-1 border-[5px] border-[var(--secondary-color)] px-10 py-8 bg-white h-full">
            <p className="text-2xl font-normal mb-8 leading-relaxed">
              Have questions about our platform? Need support? Want to partner
              with us? We're here to help and would love to hear from you.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Phone
                  className="w-6 h-6 text-[var(--primary-color)]"
                  strokeWidth={2}
                />
                <div>
                  <p className="text-lg font-normal">Call Us</p>
                  <p className="text-lg font-normal">+254 717641949</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="w-6 h-6 text-[var(--primary-color)]"
                  strokeWidth={2}
                />
                <div>
                  <p className="text-lg font-normal">Email Us</p>
                  <p className="text-lg font-normal">feedlink7@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.google.com/maps/place/AkiraChix,+Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin
                    className="w-7 h-7 text-[var(--primary-color)]"
                    strokeWidth={2}
                  />
                </a>
                <div>
                  <p className="text-lg font-normal">Location</p>
                  <p className="text-lg font-normal">Karen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
