import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PostFormSchema, TPostFormSchema } from "./lib";

export const usePostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPostFormSchema>({
    resolver: zodResolver(PostFormSchema),
  });
  const onSubmit = (data: TPostFormSchema) => {
    console.log("daaaataaaa", data);
  };

  const field = {
    title: register("title"),
    description: register("description"),
  };

  return {
    field,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
