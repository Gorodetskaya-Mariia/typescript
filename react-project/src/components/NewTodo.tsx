import React, { useRef } from 'react';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  }

  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor='todo-text'>Todo text</label>
      <input type='text' id='todo-text' ref={textInputRef}></input>
      <button type='submit'>Add Todo</button>
    </div>
  </form>
};

export default NewTodo;