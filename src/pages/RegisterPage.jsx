import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header";

import { RegisterContextProvider } from "../context/RegisterContext";

const signUpFormSchema = z.object({
  email: z.string().email("Format Email Belum Sesuai"),
  username: z.string().min(4, "Username Harus 4 Karakter Atau Lebih"),
  password: z.string().min(8, "Password Harus 8 Karakter Atau Lebih"),
});

const RegisterPage = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const registerUser = (data) => {
    alert(`Register Success With Email : ${data.email}`);
    console.log(data);
  };

  return (
    <RegisterContextProvider
      value={{
        title: "REGISTER",
      }}
    >
      <Header />
      <div className="container mx-auto p-4 max-w-[500px] mt-20">
        <Card className="bg-slate-950">
          <CardHeader className="font-semibold text-xl tracking-widest text-white justify-center">
            Register Account!
          </CardHeader>
          <Divider />
          <CardBody>
            <form
              onSubmit={form.handleSubmit(registerUser)}
              className="flex flex-col gap-4"
            >
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      type="email"
                      label="Email"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Username"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      type="password"
                      label="Password"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <Button
                type="submit"
                className="bg-slate-800 text-white tracking-wider"
              >
                Sign Up
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </RegisterContextProvider>
  );
};

export default RegisterPage;
