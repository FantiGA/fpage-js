import { Dispatch, SetStateAction } from "react";

interface ButtonClass {
  base: string;
  disabled?: string;
  active?: string;
  hover?: string;
}

interface TextClass {
  base: string;
}

interface InputClass {
  base: string;
  active?: string;
  hover?: string;
}

interface IconClass {
  fill?: string;
  width?: string;
  height?: string;
}

interface OptionClassNames {
  turnPageButton?: ButtonClass;
  pageButton?: ButtonClass;
  dots?: TextClass;
  formText?: TextClass;
  formInput?: InputClass;
  formButton?: ButtonClass;
  icon?: IconClass;
}

export interface PageChangeEvent<T> extends Dispatch<SetStateAction<T>> {}

export interface PaginationProps {
  current: number;
  total: number;
  pageSetup: number;
  mode: string;
  onPageChange: PageChangeEvent<number>;
  classNames?: OptionClassNames;
}
