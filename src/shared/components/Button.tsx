import type { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = function ({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={className.concat(
        " ",
        `px-4 py-2 rounded-full cursor-pointer transition-shadow duration-300 ease-in-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`,
      )}
    >
      {children}
    </button>
  );
};
