import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { InputField } from "../components/input";

import './Contact.css';

const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .email("Invalid email address")
    .matches(/@/, 'Email must contain "@" symbol'),
  message: yup.string().required(),
}).required();

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
     reset(); 
  };

  return (
    <div className="blog-form-container">
      <h1>Contact Me</h1>
      <Link to="/">
        <button className="but">Go back</button>
      </Link>
      <br />
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <InputField id="name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <InputField id="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <br />
          <InputField id="message" {...register("message")} />
          <p>{errors.message?.message}</p>
        </div>
        <button className="ton" type="submit">Submit</button>
      </form>
    </div>
  );
};