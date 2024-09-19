import { ButtonHTMLAttributes } from "react";

export interface GradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: JSX.Element;
  className?: string;
}
