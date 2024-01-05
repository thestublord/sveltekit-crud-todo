<script>
  let todos = ["Learn Svelte", "Learn SvelteKit", "Learn SvelteKit Fullstack"];
</script>

<div class="mainContainer">
  <div class="headerContainer">
    <h1>Todo List</h1>
    <button
      ><i class="far fa-save"></i>
      <p>Save</p></button
    >
  </div>

  <main>
    {#each todos as todo, index}
      <div class="todo">
        {index + 1}. {todo}
      </div>
    {/each}
  </main>

  <div class="enterTodo">
    <input type="text" placeholder="Enter Todo" />
    <button>Add</button>
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

  .enterTodo {
    display: flex;
    gap: 24px;
    align-items: center;
    border: 1px solid white;
  }

  .enterTodo input {
    flex: 1;
    padding: 8px;
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
