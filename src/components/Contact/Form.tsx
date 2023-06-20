"use client";

import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

export function Form() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <article className="grid ">
      <label htmlFor="name" className="text-xs font-bold text-base-text">
        Nome:
      </label>
      <input
        {...register("name", { required: true })}
        type="text"
        id="name"
        aria-label="Nome"
        title="Insira seu nome"
        placeholder="Insira seu nome"
        className="h-12 rounded-md bg-base-input mt-3 px-4"
      />
      {errors.name && (
        <span role="alert" className="text-red-600 text-sm">
          O campo nome é obrigatório
        </span>
      )}

      <label htmlFor="phone" className="text-xs mt-9 font-bold text-base-text">
        Telefone:
      </label>
      <InputMask
        {...register("tel", { required: true })}
        mask=" (99) 9999-99999"
        maskChar={null}
        id="phone"
        aria-label="Telefone"
        title="Insira seu telefone"
        placeholder="Insira seu telefone"
        className="h-12 rounded-md bg-base-input mt-3 px-4"
      />
      {errors.tel && (
        <span role="alert" className="text-red-600 text-sm">
          O campo telefone é obrigatório
        </span>
      )}

      <label htmlFor="email" className="text-xs mt-9 font-bold text-base-text">
        Email:
      </label>

      <input
        {...register("email", { required: true })}
        type="email"
        id="email"
        aria-label="Email"
        title="Insira seu email"
        placeholder="Insira seu email"
        className="h-12 rounded-md bg-base-input mt-3 px-4"
      />
      {errors.email && (
        <span role="alert" className="text-red-600 text-sm">
          O campo email é obrigatório
        </span>
      )}

      <label
        htmlFor="message"
        className="text-xs mt-9 font-bold text-base-text"
      >
        Mensagem:
      </label>
      <textarea
        {...register("message", { required: true })}
        id="message"
        aria-label="Mensagem"
        title="Insira sua mensagem"
        placeholder="Insira sua mensagem"
        className="h-60 rounded-md bg-base-input mt-3 px-4 pt-2"
      />
      {errors.message && (
        <span role="alert" className="text-red-600 text-sm">
          O campo mensagem é obrigatório
        </span>
      )}
    </article>
  );
}
