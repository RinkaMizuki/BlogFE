import { ForwardedRef, ReactNode, forwardRef } from "react";
import { Link } from "react-router-dom";

interface Props {
  onClick: () => Promise<void> | void;
  disabled?: boolean;
  children: ReactNode;
  propsPass?: any;
  to?: string;
  state?: object | null;
  href?: string;
  className?: string | undefined;
}

const Button = forwardRef(({ onClick, disabled = false, href = "", children, state = null, to = "", className = "", ...propsPass }: Props, ref: ForwardedRef<HTMLAnchorElement>) => {

  let Cpn: any = 'button';

  const props = {
    onClick,
    //Những prop k lường trước được khi nào nó có
    ...propsPass,
  } as any;

  if (to) {
    props.to = to;
    props.state = state;
    Cpn = Link;
  } else if (href) {
    props.href = href;
    Cpn = 'a';
  } else if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  } else {
    props.type = 'button';
  }
  return (
    <Cpn
      {...props}
      ref={ref}
      disabled={disabled}
      className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-none ${className} ${disabled ? "cursor-not-allowed opacity-50 hover:bg-indigo-500" : ""}`}
    >
      {children}
    </Cpn>
  )
});

export default Button;
