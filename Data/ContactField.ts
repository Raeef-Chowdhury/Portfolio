export interface ContactFieldType {
  id: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  question: string;
  placeholder: string;
  required: boolean;
  rows?: number;
  maxWidth?: string;
}

export const contactFields: ContactFieldType[] = [
  {
    id: "name",
    name: "name",
    type: "text",
    question: "Who am I talking to?",
    placeholder: "your name...",
    required: true,
    maxWidth: "max-w-lg",
  },
  {
    id: "contact",
    name: "contact",
    type: "email",
    question: "Where should I send my reply?",
    placeholder: "Your email or number please...",
    required: true,
    maxWidth: "max-w-lg",
  },
  {
    id: "message",
    name: "message",
    type: "textarea",
    question: "What would you like to discuss?",
    placeholder: "Type your message here...",
    required: true,
    rows: 2,
    maxWidth: "max-w-[70%]",
  },
];
