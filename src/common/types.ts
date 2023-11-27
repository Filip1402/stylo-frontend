import { ChangeEvent, Dispatch, HTMLInputTypeAttribute } from "react";

export interface Product {
  manufacturer: string;
  type: string;
  model: string;
  image: string;
  price: number;
  available?: boolean;
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

export interface FooterItem {
  type: string;
  title: string;
  content: { url: string; text: string }[];
}

export interface FooterResponse {
  data: Array<FooterItem>;
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
}
