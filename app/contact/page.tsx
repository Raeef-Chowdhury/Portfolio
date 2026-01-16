"use client";

import { useState } from "react";
import { ContactField } from "@/components/ui/ContactTexts";
import { contactFields } from "@/Data/ContactField";
import { Github, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      setFormData({ name: "", contact: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-5 py-8">
      {" "}
      <style>
        {`
        @keyframes animate-slide-in {
          from {
            transform: translateY(-10rem);
            opacity: 0;
          }
          to {
            transform: translateY(10rem);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: animate-slide-in 0.5s ease-out forwards;
        }
      `}
      </style>
      <div className="w-full">
        <h1 className="text-[3.2rem] leading-[0.3rem] mt-[6rem] font-bold text-center text-text mb-8">
          Contact Me
        </h1>
        {isSuccess && (
          <div className="absolute top-[10%] right-[50%] translate-x-[50%] bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium text-[1.8rem]">
              Message sent successfully!
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-[12rem] max-w-4xl flex flex-col gap-24 mx-auto px-4">
            {contactFields.map((field) => (
              <ContactField
                key={field.id}
                {...field}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
              />
            ))}
          </div>
          {isLoading && (
            <div className="flex justify-center w-full mt-[4rem] text-[2.4rem] text-slate-400">
              Please wait while the message is being sent...
            </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-700 border-emerald-400/20 border-2 rounded-full mt-[12rem] hover:border-emerald-400/80 transition-all hover:bg-emerald-900 hover:cursor-pointer px-16 py-4 text-yellow-50 text-[1.6rem] mx-auto max-w-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Your Message"}
            </button>
          </div>
        </form>
      </div>{" "}
      <div className="mt-64 mb-18 pt-8">
        <p className="text-center text-slate-400 text-[4.8rem] mb-24">
          Prefer to reach out directly?
        </p>
        <div className="flex flex-wrap  justify-around max-w-[844px] mx-auto ">
          <a
            href="mailto:raeefchowdhury@23gmail.com"
            className="flex flex-col group  items-center gap-2 text-emerald-400 transition duration-300 group"
          >
            <Mail className="w-18 h-18 group-hover:scale-125 group-hover:text-emerald-300 transition-transform" />
            <span className="text-[2.4rem] group-hover:text-emerald-300 text-text">
              raeefchowdhury@23gmail.com
            </span>
          </a>
          <a
            href="https://github.com/raeef-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group  items-center gap-2 text-emerald-400 transition duration-300 group"
          >
            <Github className="w-18 h-18 group-hover:scale-125 group-hover:text-emerald-300 transition-transform" />
            <span className="text-[2.4rem] group-hover:text-emerald-300 text-text">
              Raeef-Chowdhury
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
