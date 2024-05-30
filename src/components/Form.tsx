import { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export const Form = ({
  children,
  className,
  action,
  onSubmit,
}: {
  children: React.ReactNode;
  action: (e: FormData) => void;
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <form
      className={twMerge(
        "form p-5 text-center text-zinc-50 w-fit h-fit mx-auto rounded-xl border border-zinc-700",
        className
      )}
      action={action}
      onSubmit={(e) => onSubmit && handleSubmit(e)}
    >
      {children}
    </form>
  );
};
export const FormTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <>
      <p className={twMerge("text-2xl font-semibold font-sans", className)}>
        {title}
      </p>
      <hr className="mt-2 w-1/2 mx-auto" />
    </>
  );
};

export const FormInput = ({
  id,
  type,
  placeholder,
  className,
  name,
  onChange,
}: {
  id: string;
  type?: string;
  className?: string;
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      id={id}
      name={name || id}
      type={type || "text"}
      className={twMerge(
        "w-[14rem] p-1 px-2 h-8 bg-transparent border border-zinc-600 rounded-lg text-[18px] m-2",
        className
      )}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e)}
    />
  );
};

export const FormLabel = ({
  forId,
  label,
  className,
}: {
  forId: string;
  label: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("text-[18px] m-2", className)}>
      <label htmlFor={forId}>{label}</label>
    </div>
  );
};
