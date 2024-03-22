import { Form } from "react-bootstrap";
import { FieldError, UseFormRegister } from "react-hook-form";

interface ChatboxInputFieldProps {
    name: string,
    label: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>,
    error?: FieldError,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any,
}

const ChatboxInputField = ({ name, label, register, error, ...props }: ChatboxInputFieldProps) => {
  return (
    <>
      <Form.Check 
          {...props}
          {...register(name, { value: true })} 
          label={label}
          id={name + "-checkbox"}
          type="checkbox"
          isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
          {error?.message}
      </Form.Control.Feedback>
    </>
  )
}

export default ChatboxInputField;
