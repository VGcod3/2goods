import { Input } from "./ui/input";
import { FormField, FormItem, FormControl, FormMessage } from "./ui/form";

export const FormFieldItem = ({
  props,
  formControl,
}: {
  props: iFormField;
  formControl: any;
}) => {
  return (
    <FormField
      control={formControl}
      name={props.name}
      render={({ field }) => (
        <FormItem className={props.className}>
          <FormControl>
            <Input
              style={{
                boxShadow: "inset 0 0px 18px 0 rgb(0 0 0 / 0.17)",
                color: "black",
              }}
              className="w-full h-16 rounded-full p-6 text-xl placeholder:text-black"
              placeholder={props.label}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export interface iFormField {
  name: string;
  label: string;
  type: "email" | "text" | "number";
  className: string;
}
