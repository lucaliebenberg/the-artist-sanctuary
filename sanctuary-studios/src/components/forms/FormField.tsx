import { cn } from "@/lib/cn";

interface FormFieldBaseProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends FormFieldBaseProps {
  type: "text" | "email" | "tel" | "url";
  placeholder?: string;
}

interface TextareaFieldProps extends FormFieldBaseProps {
  type: "textarea";
  placeholder?: string;
  rows?: number;
}

interface SelectFieldProps extends FormFieldBaseProps {
  type: "select";
  options: { value: string; label: string }[];
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const baseInputClasses =
  "w-full rounded-lg border border-sand bg-white px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 transition-colors focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta";

export function FormField(props: FormFieldProps) {
  const { label, name, required, className } = props;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-medium text-charcoal">
        {label}
        {required && <span className="ml-0.5 text-terracotta">*</span>}
      </label>
      {props.type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={props.placeholder}
          rows={props.rows ?? 5}
          className={baseInputClasses}
        />
      ) : props.type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          className={baseInputClasses}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={props.type}
          required={required}
          placeholder={props.placeholder}
          className={baseInputClasses}
        />
      )}
    </div>
  );
}
