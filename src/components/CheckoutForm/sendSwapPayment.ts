import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { getUserIP } from "./getUserIp";

const sendSchema = z.object({
  cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: "Invalid card number",
  }),
  cardHolder: z.string(),
  cardYear: z.string().refine((value) => /^\d{4}$/.test(value), {
    message: "Invalid year",
  }),
  cardMonth: z.string().refine((value) => /^\d{2}$/.test(value), {
    message: "Invalid month",
  }),
  cardCvv: z.string().refine((value) => /^\d{3}$/.test(value), {
    message: "Invalid cvv",
  }),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  zip: z.string(),
  country: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),

  amount: z.string(),
  redirect: z.string(),
});

type SendSchema = z.infer<typeof sendSchema>;

export const useSwapPayment = () => {
  const [message, setMessage] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [statusCheckInterval, setStatusCheckInterval] =
    useState<NodeJS.Timeout>();

  const [userIP, setUserIP] = useState("");

  useEffect(() => {
    const fetchIP = async () => {
      const ip = await getUserIP();
      setUserIP(ip);
    };

    fetchIP();
  }, []);

  const sendPayment = async (data: SendSchema) => {
    const swapData = {
      swap: {
        debit_currency: "USD",
        credit_currency: "USDX",
        debit_amount: data.amount, // $100.00 у форматі без десяткової точки
        topup_debit_account_provider: "MC_KH",
        redirect_url: data.redirect,
      },
      card: {
        number: data.cardNumber,
        holder: data.cardHolder,
        year: data.cardYear,
        month: data.cardMonth,
        cvv: data.cardCvv,
      },
      billing: {
        email: data.email,
        address: data.address,
        city: data.city,
        zip: data.zip,
        country: data.country,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
      },
      device: {
        accept_header: "application/json",
        user_agent: navigator.userAgent,
        language: navigator.language,
        screen_height: window.screen.height.toString(),
        screen_width: window.screen.width.toString(),
        time_zone: new Date().getTimezoneOffset().toString(),
        ip: userIP, // IP адреса клієнта. Можливо, потрібно використовувати сторонній сервіс для отримання IP.
      },
    };

    try {
      const response = await axios.post(
        "https://staging.banking.embily.com/api/v2/swaps",
        swapData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      console.log("Payment Response:", response.data);

      const threedUrl = response.data.data.payment_intention.threed_url;
      const invoiceId = response.data.data.invoice.uuid;

      setPaymentId(invoiceId);

      window.location.href = threedUrl; // Переадресація користувача для 3DS верифікації
    } catch (error) {
      console.error("Payment Error:", error);
      setMessage("Payment failed. Enter valid data and please try again.");
    }
  };

  const checkPaymentStatus = useCallback(async () => {
    if (paymentId) {
      try {
        const response = await axios.get(
          `http://localhost:5000/payment-status/${paymentId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        );
        setMessage(`Payment status: ${response.data.status}`);

        if (
          response.data.status === "SUCCESS" ||
          response.data.status === "FAILED"
        ) {
          clearInterval(statusCheckInterval);
        }
      } catch (error) {
        console.error("Status Check Error:", error);
        setMessage("Error checking payment status.");
      }
    }
  }, [paymentId]);

  useEffect(() => {
    if (paymentId) {
      const interval = setInterval(checkPaymentStatus, 5000); // Перевірка кожні 5 секунд
      setStatusCheckInterval(interval);

      return () => clearInterval(interval); // Очищення інтервалу при розмонтуванні компонента
    }
  }, [paymentId, checkPaymentStatus]);

  return {
    message,
    sendPayment,
    paymentId,
    checkPaymentStatus,
  };
};
