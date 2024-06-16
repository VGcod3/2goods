"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { FormFieldItem, iFormField } from "./FormFieldItem";

import dayjs from "dayjs";
import { z } from "zod";
import { useCart } from "@/lib/useCart";

const formFields: iFormField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    className: "col-span-12",
  },
  {
    name: "name",
    label: "Name",
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
    label: "Expiry",
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
    name: "state",
    label: "State",
    type: "text",
    className: "col-span-12",
  },
  {
    name: "zip",
    label: "Zip",
    type: "text",
    className: "col-span-12",
  },
];

const formSchema = z.object({
  email: z
    .string({
      message: "Invalid email address",
    })
    .email("Invalid email address"),
  name: z.string({
    message: "Name is required",
  }),
  cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: "Invalid card number",
  }),
  expiry: z
    .string()
    .refine((value) => dayjs(dayjs(value).format("MM/YY")).isValid(), {
      message: "Invalid expiry date",
    }),
  cvc: z.string().refine((value) => /^\d{3}$/.test(value), {
    message: "Invalid cvc",
  }),
  address: z.string({
    message: "Address is required",
  }),
  city: z.string({
    message: "City is required",
  }),
  state: z.string({
    message: "State is required",
  }),
  zip: z.string({
    message: "Zip is required",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export const CheckoutForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { finalSum } = useCart();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-6">
          {formFields.map((ff, i) => (
            <FormFieldItem props={ff} formControl={form.control} key={i} />
          ))}
        </div>

        <div className="items-top flex gap-2 p-2 my-3 items-center">
          <Checkbox id="billing" />
          <div className=" leading-none">
            <label
              htmlFor="billing"
              className="r1-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-none"
            >
              Billing address is the same as shipping address
            </label>
          </div>
        </div>
        <Button
          variant={"gradient"}
          size={"sm"}
          className="h-16 w-full h2-text gap-3 flex lg:hidden"
        >
          Pay $ {finalSum}
        </Button>
        <p className="r2-text flex lg:hidden justify-center mt-5 text-center">
          Payment details stored in plain text
        </p>
      </form>
    </Form>
  );
};
