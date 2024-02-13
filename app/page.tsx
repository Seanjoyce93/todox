import Todo from "./components/todo";

export default function Home() {
  return (
    <main className=" p-1 mt-2 box-border ">
      <section className="flex flex-col  item-center gap-2">
        <Todo text="hello world" completed />
        <Todo text="hello world" completed />
      </section>
    </main>
  );
}
