"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import dayjs from "dayjs";
import { z } from "zod";
import { useCart } from "@/lib/useCart";
import { FormFieldItem } from "./FormFieldItem";
import { formFields } from "./formFields";
import { ShoppingCartIcon } from "lucide-react";
import { BasketItem } from "../BasketItem";
import Link from "next/link";
import { useSwapPayment } from "./sendSwapPayment";

function validateExpiryDate(value: string): boolean {
  if (!/^\d{2}\/\d{2}$/.test(value)) return false;

  const [m, y] = value.split("/");
  const month = parseInt(m);
  const year = parseInt(y);

  const currentYear = parseInt(dayjs().format("YY"));

  const currentMonth = parseInt(dayjs().format("MM"));

  if (year < currentYear) {
    return false;
  }

  if (year === currentYear && month < currentMonth) {
    return false;
  }

  return true;
}

const formSchema = z.object({
  email: z
    .string({
      message: "Invalid email address",
    })
    .email("Invalid email address"),
  cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: "Invalid card number",
  }),
  expiry: z.string().refine((value) => true, {
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
  country: z.string({
    message: "State is required",
  }),
  phone: z
    .string({
      message: "Phone is required",
    })
    .refine((value) => /^\d{10}$/.test(value), {
      message: "Invalid phone number",
    }),
  zip: z.string({
    message: "Zip is required",
  }),
  fullName: z
    .string({
      message: "Full name is required",
    })
    .refine((value) => /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(value), {
      message: "Invalid full name",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export const CheckoutForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: "johndoe@gmail.com",
    //   fullName: "John Doe",
    //   cardNumber: "5123450000000008",
    //   expiry: "01/39",
    //   cvc: "100",
    //   address: "123 Main St",
    //   city: "New York",
    //   country: "US",
    //   zip: "10001",
    //   phone: "1234567890",
    // },
  });

  const { sendPayment, message } = useSwapPayment();

  // 2. Define a submit handler.
  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    sendPayment({
      cardNumber: values.cardNumber,
      cardHolder: values.fullName,
      cardMonth: values.expiry.split("/")[0],
      cardYear: values.expiry.split("/")[1],
      cardCvv: values.cvc,
      email: values.email,
      address: values.address,
      city: values.city,
      zip: values.zip,
      country: values.country,
      amount: String(finalSum * 100),
      redirect: "https://sweeps-two.vercel.app/",
      firstName: values.fullName.split(" ")[0],
      lastName: values.fullName.split(" ")[1],
      phone: values.phone,
    });
  }

  const { items, totalSum, finalSum, taxes } = useCart();

  return (
    <Form {...form}>
      <div className="grid grid-cols-12 mt-20">
        <div className="col-span-12 lg:col-span-6 w-full flex flex-col gap-4 p-6 ">
          <h1 className="h1-text text-transparent bg-clip-text bg-gradient-to-r from-land-violet to-land-primary text-center lg:text-left lg:hidden">
            CHECKOUT
          </h1>

          {items.length > 0 ? (
            items.map((item, i) => <BasketItem key={i} {...item} />)
          ) : (
            <div className="border-4 p-6 bg-white shadow-xl rounded-3xl gap-6 flex flex-col">
              <p className="h2-text text-center text-land-secondary">
                No items in the basket
              </p>
              <Link href="/">
                <Button
                  variant={"gradient"}
                  size={"sm"}
                  className="h-16 w-full h2-text flex gap-2"
                >
                  <ShoppingCartIcon size={28} />
                  Go to shop
                </Button>
              </Link>
            </div>
          )}

          <div className="flex w-full justify-between">
            <p className="h2-text">Subtotal:</p>
            <p className="h2-text">$ {totalSum}</p>
          </div>
          <div className="flex w-full justify-between border-b-2 border-black">
            <p className="r1-text">Taxes:</p>
            <p className="r1-text pb-4">$ {taxes}</p>
          </div>
          <div className="flex w-full justify-between">
            <p className="r1-text">Total:</p>
            <p className="r1-text">$ {finalSum}</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-6 col-span-12 lg:col-span-6 p-6 lg:order-first">
          <h1 className="h1-text text-white text-center lg:text-left hidden lg:block">
            CHECKOUT
          </h1>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-6">
              {formFields.map((ff, i) => (
                <FormFieldItem props={ff} formControl={form.control} key={i} />
              ))}
            </div>

            <Button
              variant={"gradient"}
              size={"sm"}
              className="h-16 w-full h2-text gap-3 mt-5"
            >
              Pay $ {finalSum}
            </Button>

            {message && (
              <p className="r2-text flex justify-center mt-5 text-center text-red-500">
                {message}
              </p>
            )}

            <p className="r2-text flex lg:hidden justify-center mt-5 text-center">
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </div>
    </Form>
  );
};
