import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PostFormSchema, TPostFormSchema } from "./lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePost } from "../../services/create-post";

export const usePostForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPostFormSchema>({
    resolver: zodResolver(PostFormSchema),
  });

  const { mutate: save, isSuccess,data } = useMutation({
    mutationFn: CreatePost,
    onSuccess: () => {
      console.log('success');
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  console.log(data)

  const onSubmit = (data: TPostFormSchema) => {
    const body = {
      userId: new Date().getTime(),
      id: new Date().getTime(),
      title: data.title,
      body: data.description,
    };
    save(body);
    if (isSuccess) reset();
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
