import {
  addStoreTickets,
  addToStore,
  clearStoreCart,
  removeFromStore,
  subStoreTickets,
} from "@/store/CartSlice";
import { iOffer } from "@/app/products-data";
import { useDispatch, useSelector } from "@/store/hooks";

export const useCartItem = (product: iOffer) => {
  const { name, price } = product;

  const dispatch = useDispatch();

  const item = useSelector((state) => state.cart).items.find(
    (item) => item.name === name
  ) as iOffer;

  const itemQuantity = item ? item.quantity : 350;

  const itemSum = +(itemQuantity * price).toFixed(2);

  const addToCart = (tickets: number) => {
    dispatch(addToStore({ ...product, quantity: tickets }));
  };
  const removeFromCart = () => {
    dispatch(removeFromStore(item));
  };

  const addTickets = () => {
    dispatch(addStoreTickets(item));
  };

  const subTickets = () => {
    dispatch(subStoreTickets(item));
  };

  return {
    item,
    itemQuantity,
    itemSum,
    addToCart,
    removeFromCart,
    addTickets,
    subTickets,
  };
};

export const useCart = () => {
  const items = useSelector((state) => state.cart.items);

  const totalSum = items
    ? +items
        .reduce((prev, curr) => {
          return prev + curr.price * curr.quantity;
        }, 0)
        .toFixed(2)
    : 0;

  const discontedValue = useSelector(
    (state) => state.cart.discount.discountValue
  );

  const discontedMoney = totalSum * (discontedValue / 100);

  const discontedSum = totalSum - discontedMoney;

  const taxes = +(discontedSum * 0.2).toFixed(2);

  const finalSum = discontedSum + taxes;

  return {
    items,
    taxes,
    finalSum,
    totalSum,
    discontedSum,
    discontedMoney,
  };
};
