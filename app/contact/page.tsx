import { ContactField } from "@/components/ui/ContactTexts";
import { contactFields } from "@/Data/ContactField";
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col  px-5 py-8">
      <div className="w-full ">
        <h1 className="text-[3.2rem] leading-[0.3rem] mt-[6rem] font-bold text-center text-text mb-8">
          Contact Me
        </h1>
        <div className="mt-[12rem] max-w-4xl flex flex-col gap-24 mx-auto px-4">
          {contactFields.map((field) => (
            <ContactField
              key={field.id}
              id={field.id}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              maxWidth={field.maxWidth}
              question={field.question}
              required={field.required}
              rows={field.rows}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-emerald-700 border-emerald-400/20 border-2 rounded-full  mt-[12rem] hover:border-emerald-400/80 transition-all hover:bg-emerald-900 hover:cursor-pointer px-16 py-4 text-yellow-50 text-[1.6rem] mx-auto max-w-2xl">
            Send Your Message
          </button>
        </div>
      </div>
    </div>
  );
}
export const metadata = {
  title: "Contact | Raeef Chowdhury",
  description: "If you want to have any discussions with me, contact me here.",
  keywords: ["Developer Contact Section", "Zod Validation"],
  openGraph: {
    title: "Contact | Raeef Chowdhury",
    description: "How to contact Raeef Chowdhury",
    type: "website",
    url: "https://raeef-chowdhury.vercel.app/contact",
  },
};
