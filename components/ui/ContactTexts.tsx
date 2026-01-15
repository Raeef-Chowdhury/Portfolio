// ContactField.tsx (Updated Component)
"use client";

import Image from "next/image";
import { ContactFieldType } from "@/Data/ContactField";
import ProfileImg from "@/Images/Profile-NoBackground.png";

interface ContactFieldProps extends ContactFieldType {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function ContactField({
  id,
  name,
  type,
  placeholder,
  maxWidth,
  question,
  rows,
  required,
  value,
  onChange,
}: ContactFieldProps) {
  return (
    <div className="space-y-12">
      <div className="flex items-start gap-3">
        <Image
          className="w-18 h-18 rounded-full flex-shrink-0"
          src={ProfileImg}
          alt="Profile"
        />
        <div className="py-3 px-6 rounded-md bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border-2 border-slate-700">
          <p className="text-[1.8rem] leading-relaxed tracking-[0.2rem] text-yellow-50">
            {question}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        {type === "textarea" ? (
          <textarea
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className={`w-full ${maxWidth} resize-none bg-slate-800/30 border border-slate-700 text-right text-[1.8rem] text-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500`}
            placeholder={placeholder}
          />
        ) : (
          <input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={`w-full ${maxWidth} bg-slate-800/30 border border-slate-700 text-right text-[1.8rem] text-slate-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-slate-500`}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
