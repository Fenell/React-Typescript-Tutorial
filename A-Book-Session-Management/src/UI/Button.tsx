import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

interface BaseProps {
  children: ReactNode;
  textOnly?: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };

type ButtonLinkProps = BaseProps & LinkProps & { to: string };

const isRouteLink = (
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps => {
  return "to" in props;
};

const Button = (props: ButtonProps | ButtonLinkProps) => {
  if (isRouteLink(props)) {
    const { textOnly, children, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  const { textOnly, children, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
