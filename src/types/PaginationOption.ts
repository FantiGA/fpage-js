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

export interface PaginationProps {
  current: number;
  total: number;
  per: number;
  type: "js" | "link";
  ext: string;
  mode: string;
  onPageChange: (page: number) => void;
  classNames?: OptionClassNames;
}
