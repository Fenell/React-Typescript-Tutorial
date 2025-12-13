import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

interface BaseProps {
  chilldren: ReactNode;
  textOnly: boolean;
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
    const { textOnly, chilldren, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {chilldren}
      </Link>
    );
  }
  const { textOnly, chilldren, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {chilldren}
    </button>
  );
};

export default Button;
