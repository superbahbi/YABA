import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IFormProps {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  firstName?: string;
  lastName?: string;
}
export const Form: React.FC<IFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormProps>();
  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    console.log(data);

    const response = await fetch("localhost:3010/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response);
    fetch("localhost:3010/");
  };
  console.log(watch("email")); // watch input value by passing the name of it
  return (
    <form
      className="grid py-12 "
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form-test"
    >
      {/* register your input into the hook by invoking the "register" function */}

      {/* include validation with required or other standard HTML validation rules */}

      <div className="form-control py-2 px-2">
        <label className="input-group">
          <span className="label-text w-32">first name</span>
          <input
            className="input-bordered input"
            type="text"
            {...register("firstName", { required: true })}
          />
        </label>
      </div>
      <div className="form-control py-2 px-2">
        <label className="input-group">
          <span className="label-text w-32">last name</span>
          <input
            className="input-bordered input"
            type="text"
            {...register("lastName", { required: true })}
          />
        </label>
      </div>
      <div className="form-control py-2 px-2">
        <label className="input-group">
          <span className="label-text w-32">email</span>
          <input
            className="input-bordered input"
            type="email"
            {...register("email", { required: true })}
          />
        </label>
      </div>
      <div className="form-control py-2 px-2">
        <label className="input-group">
          <span className="label-text w-32">password</span>
          <input
            className="input-bordered input"
            type="password"
            {...register("password", { required: true })}
          />
        </label>
      </div>
      <div className="form-control py-2 px-2">
        <label className="input-group">
          <span className="label-text w-32">confirm password</span>
          <input
            className="input-bordered input"
            type="password"
            {...register("passwordConfirm", { required: true })}
          />
        </label>
      </div>
      {/* errors will return when field validation fails  */}
      <div className="my-4 grid">
        <button className="btn-secondary btn">
          <input type="submit" value="poop" />
        </button>
        {errors.email && <span className="p-4">This field is required</span>}
      </div>
    </form>
  );
};
