import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface ILPFooterLinkProps {
  link: string;
  title: string;
  underline?: boolean;
}
export interface ILPHeroProps {
  bgVideo?: string;
}

export interface ILPToastProps {
  justifySelfEnd?: boolean;
  textContent: string;
}
export interface IInputProps {
  type: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<IInputFormProps>;
  name: "email" | "password" | "firstName" | "lastName";
  errors?: string;
  icon?: ReactNode;
}
export interface IInputFormProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}
export interface IFormErrorProps {
  msg?: string;
}
export interface ILPFeatureProps {
  f?: string;
}
export interface ILPFaqProps {
  f?: string;
}
export interface ILPEndProps {
  f?: string;
}
export interface ILPIndexProps {
  f?: string;
}
export interface ILPBodyProps {
  f?: string;
}
export interface ILPFooterProps {
  f?: string;
}
export interface ILPStatsProps {
  f?: string;
}
export interface ILPSocialProofProps {
  f?: string;
}
export interface ILPNavbarProps {
  f?: string;
}
