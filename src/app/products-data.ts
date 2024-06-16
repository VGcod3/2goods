import { notFound } from "next/navigation";

export interface iOffer {
  name: string;
  href: string;
  image: string;
  title: string;
  price: number;
  sold: number;
  quantity: number;
}

export const offers: iOffer[] = [
  {
    name: "dyson",
    href: "/product/dyson",
    image: "/dyson.png",
    title: "WIN A DYSON SUPERSONIC HAIR DRYER!",
    price: 4.99,
    sold: 72,
    quantity: 0,
  },
  {
    name: "makita",
    href: "/product/makita",
    image: "/makita.png",
    title: "WIN THIS MASSIVE 13PC MAKITA TOOL BUNDLE!",
    price: 4.99,
    sold: 31,
    quantity: 0,
  },
];

export const useDataFromSlug = (slug: string) => {
  const product = offers.find((offer) => offer.name === slug);

  if (!product) {
    notFound();
  }

  return product;
};
