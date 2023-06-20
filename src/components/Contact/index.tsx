"use client";

import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./Form";
import { HeaderContact } from "./HeaderContact";

const newFormValidationSchema = zod.object({
  name: zod.string().min(1, "Nome"),
  tel: zod.string().min(1, "Telefone"),
  email: zod.string().min(1, "Email"),
  message: zod.string().min(1, "Deixe sua mensagem"),
});

type NewFormData = zod.infer<typeof newFormValidationSchema>;

export default function Contact() {
  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
  });

  const { handleSubmit, reset } = newForm;

  const onSubmit = async (data: NewFormData) => {
    console.log(data);
    reset();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <FormProvider {...newForm}>
      <section className="mx-auto max-w-[1120px]">
        <HeaderContact />
        <form onSubmit={handleSubmit(onSubmit)} className="pc:px-32 mob:px-4 tablet:px-4 pc:pt-20 mob:pt-14 tablet:pt-14">
          <div className="p-10 bg-white shadow-custom shadow rounded-md mb-28">
            <Form />
            <div className="flex pc:justify-end mob:justify-center tablet:justify-center">
              <button
                className="flex justify-center items-center px-16 py-3 pc:w-fit mob:w-full tablet:w-full rounded-md bg-purple-500 uppercase mt-6 tracking-widest font-bold"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
