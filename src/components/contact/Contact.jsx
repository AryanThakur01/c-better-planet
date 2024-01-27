"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Contact = () => {
  const router = useRouter();
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Enter Your Name"),
    email: Yup.string().email().required("Enter Your Email"),
    contact: Yup.string().required("Enter your contact"),
    subject: Yup.string().required("Enter A subject"),
    message: Yup.string().required("Enter A Message"),
  });
  const initialValues = {
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  };
  const submitHandler = (values) => {
    let body = `Name=${values.name}%0D%0AEmail=${values.email}%0D%0AContact=${values.contact}%0D%0AMessage=${values.message}`;
    router.push(
      `mailto:support@cyberjagriti.org?subject=${values.subject}&body=${body}`,
    );
  };
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 my-20 gap-8">
      <div className="hidden md:block h-[48rem] overflow-hidden rounded-xl">
        <Image src={assets.ContactSide} className="min-h-[48rem]" />
      </div>
      <div className="md:p-16 p-8 rounded-2xl shadow bg-secondary/80">
        <h2 className="text-2xl font-bold mb-8">Let’s join our community</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={submitHandler}
        >
          {({}) => (
            <Form className="flex flex-col gap-4 text-primary">
              <InputField
                className="col-span-1 md:col-span-2"
                uni="name"
                placeholder="Enter Your Name"
                inputClass="rounded-full"
              />
              <InputField
                className="col-span-1 md:col-span-2"
                uni="email"
                placeholder="Enter Your Email"
                inputClass="rounded-full"
              />
              <InputField
                className="col-span-1 md:col-span-2"
                uni="contact"
                type="number"
                placeholder="Enter Your Contact"
                inputClass="rounded-full"
              />
              <InputField
                className="col-span-1 md:col-span-2"
                uni="subject"
                placeholder="Enter Your Subject"
                inputClass="rounded-full"
              />
              <InputField
                className="col-span-1 md:col-span-2"
                uni="message"
                placeholder="Type in your message"
                inputClass="rounded-2xl resize-none"
                as="textarea"
              />
              <button
                type="submit"
                className="w-48 rounded-full border-primary border p-2 flex gap-2 items-center"
              >
                <span className="bg-primary text-white rounded-full p-1">
                  <ChevronsRight />
                </span>
                <span>Send A Message</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
