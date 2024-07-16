import { iFormField } from "./FormFieldItem";

export const formFields: iFormField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    className: "col-span-12",
  },
  {
    name: "fullName",
    label: "Card holder",
    type: "text",
    className: "col-span-12",
  },
  {
    name: "cardNumber",
    label: "Card number",
    type: "number",
    className: "col-span-12",
  },
  {
    name: "expiry",
    label: "MM/YY",
    type: "text",
    className: "col-span-6",
  },
  {
    name: "cvc",
    label: "CVC",
    type: "text",
    className: "col-span-6",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    className: "col-span-12",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    className: "col-span-12",
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    className: "col-span-12",
  },
  {
    name: "phone",
    label: "Phone",
    type: "phone",
    className: 'col-span-12'
  },
  {
    name: "zip",
    label: "Zip",
    type: "text",
    className: "col-span-12",
  },
];
