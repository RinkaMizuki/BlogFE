import { forwardRef } from "react";

const ValidateError = forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <span
      {...props}
      ref={ref}
      className="text-[#ff5656] font-normal text-sm absolute"
    ></span>
  )
});

export default ValidateError;
