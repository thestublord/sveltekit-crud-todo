<script>
  let todos = [];
  let currTodo = "";
  let error = false;

  function addTodo() {
    error = false;
    if (!currTodo) {
      error = true;
    }

    todos = [...todos, currTodo];
    currTodo = "";
  }

  function editTodo(index) {
    let newTodoList = [...todos].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    currTodo = todos[index];
    todos = newTodoList;
  }

  function removeTodo(index) {
    let newTodoList = [...todos].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    todos = newTodoList;
  }
</script>

<div class="mainContainer">
  <div class="headerContainer">
    <h1>Todo List</h1>
    <div class="headerBtns">
      <button>
        <i class="far fa-save"></i>
        <p>Save</p>
      </button>
      <button>
        <i class="far fa-sign-out-alt"></i>
        <p>Logout</p>
      </button>
    </div>
  </div>

  <main>
    {#if todos.length === 0}
      <p class="center">No Todos</p>
    {/if}
    {#each todos as todo, index}
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
    {/each}
  </main>

  <div class={`enterTodo ${error ? "errorBorder" : ""}`}>
    <input bind:value={currTodo} type="text" placeholder="Enter Todo" />
    <button on:click={addTodo}>Add</button>
  </div>
</div>

<style>
  .mainContainer {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 24px;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerBtns {
    display: flex;
    gap: 8px;
  }

  .headerContainer button {
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

  .headerContainer button i {
    font-size: 1.2rem;
  }

  .headerContainer button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .headerContainer button:focus {
    outline: none;
    border: none;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

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

  .enterTodo {
    display: flex;
    gap: 24px;
    align-items: center;
    border: 1px solid white;
  }

  .enterTodo.errorBorder {
    border: 1px solid red !important;
  }

  .enterTodo input {
    flex: 1;
    padding: 14px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: white;
  }

  .enterTodo input:focus {
    outline: none;
    border: none;
  }

  .enterTodo button {
    padding: 0 28px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: white;
    cursor: pointer;
  }

  .enterTodo button:focus {
    outline: none;
    border: none;
  }

  .enterTodo button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .todo {
    padding: 8px;

    border-radius: 4px;
    background: transparent;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
