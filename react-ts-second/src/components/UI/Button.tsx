import React, { type ComponentPropsWithoutRef } from "react";

type ButtomProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const isAnchorProps = (
  props: ButtomProps | AchorProps
): props is AchorProps => {
  return "href" in props;
};

const Button = (props: ButtomProps | AchorProps) => {
  // const { el, ...otherProps } = props;
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
};

export default Button;
