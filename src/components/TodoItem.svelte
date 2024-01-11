<script>
  export let index;
  export let todo;
  export let editTodo;
  export let removeTodo;
</script>

<div class="todo">
  <p>
    {index + 1}. {todo}
  </p>
  <div class="actions">
    <button>
      <i class="far fa-edit" on:click={() => editTodo(index)}></i>
    </button>
    <button>
      <i class="far fa-trash-alt" on:click={() => removeTodo(index)}></i>
    </button>
  </div>
</div>

<style>
  .todo {
    padding: 8px;

    border-radius: 4px;
    background: transparent;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .actions {
    display: flex;
    gap: 4px;
    font-size: 1.2rem;
    margin-left: auto;
  }

  .actions button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .actions button {
    padding: 8px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
  }
</style>
