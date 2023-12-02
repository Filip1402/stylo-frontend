import { ChangeEvent, Dispatch, HTMLInputTypeAttribute } from "react";

export interface Product {
  id: string;
  manufacturer: string;
  model: string;
  price: number;
  type: string;
  categories: string;
  variants: Array<ProductVariants>;

  available?: boolean;
}

export interface ProductVariants {
  sku: string;
  color: string;
  images?: Array<string>;
  sizes: Array<{ size: number; quantity: number }>;
}

export interface Color {
  name: string;
  hexValue: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  red?: boolean;
  grey?: boolean;
  form?: string;
}

export interface HeaderItem {
  name: string;
  id: string;
}

export interface FooterItem {
  type: string;
  title: string;
  content: { url: string; text: string }[];
}

export interface LayoutData {
  layout: {
    header: Array<HeaderItem>;
    footer: {
      footerText: string;
      footerContent: {
        data: Array<FooterItem>;
      };
    };
  };
}

export interface InputProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  value?: string | number;
  name: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ColorItemSelectorProps {
  setSelectedColors: Dispatch<React.SetStateAction<Color[]>>;
  isGrid?: boolean;
  allowMoreSelections?: boolean;
  selectedColors: Array<Color>;
  colors: Array<Color>;
}

export interface ShoeSizeSelectorProps {
  setSelectedShoeSizes: React.Dispatch<React.SetStateAction<number[]>>;
  isGrid?: boolean;
  singleSelection?: boolean;
  sizes: Array<number>;
}

export interface FootwareTypeProps {
  title: string;
  image: string;
}

export interface CarouselProps {
  images: Array<string>;
}
