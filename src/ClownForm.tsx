import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

interface ClownFormProps {
  addClown: (clown: Clown) => void;
}

interface Clown {
  name: string;
  type: string;
  image: string;
}

const ClownForm: React.FC<ClownFormProps> = ({ addClown }) => {
  const { register, handleSubmit, reset } = useForm<Clown>();

  const onSubmit = (data: Clown) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newClown = {
        ...data,
        image: reader.result as string,
      };
      addClown(newClown);
      reset();
    };
    if (data.image) {
      reader.readAsDataURL(data.image[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input {...register("name", { required: true })} />
      </div>
      <div>
        <label>Type</label>
        <input {...register("type", { required: true })} />
      </div>
      <div>
        <label>Profile Picture</label>
        <input type="file" {...register("image", { required: true })} />
      </div>
      <button type="submit">Add Clown</button>
    </form>
  );
};

export default ClownForm;
