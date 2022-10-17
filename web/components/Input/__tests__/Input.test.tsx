import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { IAuthInputFormProps } from "../../../types/LPinterface";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});
test("should return isValid correctly with resolvery", async () => {
  let isValidValue = false;
  const Component = () => {
    const {
      register,
      formState: { isValid },
    } = useForm<IAuthInputFormProps>({
      mode: "onChange",
      resolver: zodResolver(formSchema),
    });
    isValidValue = isValid;
    return (
      <Input
        type="email"
        id="register-email"
        register={register}
        name="email"
      />
    );
  };

  render(<Component />);
  expect(isValidValue).toBeFalsy();
  const element = screen.getByTestId(/input-test/i);
  fireEvent.input(element, {
    target: {
      value: "test@test.com",
    },
  });
  await waitFor(() => expect(isValidValue).toBeTruthy());
  // const element = screen.getByTestId(/input-test/i);
  // expect(element).toBeInTheDocument();
});
