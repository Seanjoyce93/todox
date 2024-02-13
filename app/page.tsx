import Todo from "./components/todo";

export default function Home() {
  return (
    <main className=" p-1 mt-2 box-border ">
      <h1 className="font-bold text-3xl mb-2">Todox</h1>
      <div className="border-b border-gray-200 mb-4 mt-2"></div>
      <section className="flex flex-col  item-center gap-2">
        <Todo text="hello world" completed />
        <Todo text="hello world" completed />
      </section>
    </main>
  );
}
