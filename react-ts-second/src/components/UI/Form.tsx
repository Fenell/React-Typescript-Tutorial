import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithRef,
  type FormEvent,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("CLEARING");
          form.current?.reset();
        },
      };
    });
    const hanleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form onSubmit={hanleSubmitForm} {...otherProps} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
