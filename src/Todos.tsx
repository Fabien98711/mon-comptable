// src/pages/Todos.tsx
import { useState, useEffect } from "react";
import supabase from "./utils/supabase";

type Todo = {
  id: number;
  title: string;
  // ajoute ici les colonnes de ta table
};

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await supabase.from("todos").select();
      if (data && data.length > 0) {
        setTodos(data);
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default Todos;
