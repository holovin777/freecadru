import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Привет</h1>
      <p>
        Мы в руководстве по эксплуатации FreeCad
        <br />
        <p><a href="/tutorial">Начнем</a></p>
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Manual",
  meta: [
    {
      name: "description",
      content: "Manual site description",
    },
  ],
};
