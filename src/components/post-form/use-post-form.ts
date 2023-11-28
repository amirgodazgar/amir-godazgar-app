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

  const { mutate: save } = useMutation({
    mutationFn: CreatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const onSubmit = (data: TPostFormSchema) => {
    const body = {
      userId: new Date().getTime(),
      id: new Date().getTime(),
      title: data.title,
      body: data.description,
    };
    save(body);
    reset();
  };

  const field = {
    title: register("title"),
    description: register("description"),
  };

  return {
    field,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
