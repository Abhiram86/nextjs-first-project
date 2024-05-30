"use client";

import { Submit } from "@/actions/submit";
import { Form, FormInput, FormLabel, FormTitle } from "@/components/Form";

export default function Add() {
  return (
    <section className="mt-8 w-fit mx-auto scale-90 md:scale-95 lg:scale-100">
      <Form
        className="border border-zinc-900 shadow-lg shadow-zinc-900"
        action={Submit}
      >
        <FormTitle title="Create Todo" />
        <div className="flex flex-row justify-center items-center gap-x-2 mt-2 xxs:flex-col">
          <FormLabel label="title" forId="title" />
          <FormInput id="title" onChange={() => {}} placeholder="title" />
        </div>
        <div className="flex flex-row items-center mt-2">
          <FormLabel label="body" forId="body" />
          <FormInput id="body" onChange={() => {}} placeholder="title" />
        </div>
        <button
          className="w-full bg-zinc-200 mt-3 py-1 text-zinc-900 rounded-md text-xl font-semibold hover:bg-zinc-400 transition-all duration-150 tracking-wide active:scale-105"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </section>
  );
}
