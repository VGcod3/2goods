import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { CONSTANTS } from "@/store/CartSlice";
import { iOffer } from "./products-data";
import { useCart, useCartItem } from "@/lib/useCart";

export const TicketNumberPicker = ({ product }: { product: iOffer }) => {
  const { min, max, step, defaultValue } = CONSTANTS;

  const [tickets, setTickets] = useState(defaultValue);

  const { addToCart } = useCartItem(product);

  const handleTicketChange = (value: number) => {
    if (value < min) {
      setTickets(min);
    } else if (value > max) {
      setTickets(max);
    } else {
      setTickets(value);
    }
  };

  return (
    <div className="bg-white w-full rounded-[30px] flex flex-col justify-between">
      <div className="flex flex-col justify-between p-4 gap-2">
        <h4 className="h2-text text-land-gray">How many tickets?</h4>
        <div className="h-16 w-full flex items-center">
          <Slider
            defaultValue={[tickets]}
            min={min}
            max={max}
            step={step}
            onValueChange={(value) => setTickets(value[0])}
          />
        </div>

        <div className="w-full rounded-xl flex justify-evenly items-center">
          <Button
            size="square"
            variant={"gradient"}
            className="transition-all"
            onClick={() => handleTicketChange(tickets - step)}
          >
            <MinusIcon size={24} />
          </Button>
          <span className="r1-text">Tickets: {tickets}</span>
          <Button
            size="square"
            variant={"gradient"}
            className="transition-all"
            onClick={() => handleTicketChange(tickets + step)}
          >
            <PlusIcon size={24} />
          </Button>
        </div>
      </div>
      <Link href="/basket">
        <Button
          className="h-16 w-full rounded-b-[30px] rounded-t-none bg-land-secondary flex justify-center gap-2 text-white border-none shadow-none hover:shadow-none focus-visible:shadow-none"
          onClick={() => addToCart(tickets)}
        >
          <ShoppingCartIcon size={28} />
          Add tickets to cart
        </Button>
      </Link>
    </div>
  );
};
