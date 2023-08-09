import { MouseEventHandler } from "react";
export interface NavListProps {
  title: string;
  href: string;
}

export interface SwitcherProps {
  isChecked?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface NavbarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  status: boolean;
  checked?: boolean;
  handleTheme?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MiniNavProps {
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  animation: boolean;
  checked?: boolean;
  handleTheme?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MiniNavListProps {
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  title: string;
  href: string;
  status: boolean;
}

export interface GreetingBoxProps {
  content: string;
  style: string;
}

export interface SkillBoxProps {
  pageStatus: number;
}
