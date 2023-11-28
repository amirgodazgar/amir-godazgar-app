import { Input } from "../input";
import { usePostForm } from "./use-post-form";
import { TextArea } from "../text-area";
import { Button } from "../button";

const PostForm = () => {
  const { onSubmit, field, errors } = usePostForm();
  return (
    <div className="flex flex-col gap-4 px-8 py-6 overflow-hidden border border-stroke rounded-lg bg-white shadow-default w-[40%] mb-4 mt-1">
      <div>
        <h1 className="text-xl text-slate-800 font-bold">Create a new post</h1>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
        <div>
          <Input register={field.title} label="Title" />
          {errors.title && (
            <p className="text-meta-1">{`${errors?.title?.message}`}</p>
          )}
        </div>
        <div>
          <TextArea register={field.description} label="Description" />
          {errors.description && (
            <p className="text-meta-1">{`${errors?.description?.message}`}</p>
          )}
        </div>
        <div>
          <Button label="CREATE A NEW POST" />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
