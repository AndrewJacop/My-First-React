"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToggleSwitch } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [pSwitch, setPSwitch] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  return (
    <>
      <form
        className="flex flex-col max-w-md gap-4 m-auto mt-10"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          alert(`Welcome Backn ${data.email}`);
          navigate("/");
        })}
      >
        <div>
          <div className="block mb-2">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="text"
            placeholder="name@domain.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.com$/i,
                message: "Invalid email pattern",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            type={pSwitch ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <ToggleSwitch
            className="mt-5"
            checked={pSwitch}
            label="Show Pasword"
            onChange={setPSwitch}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
