<script>
  import TodoItem from "../../components/TodoItem.svelte";
  import { db } from "../../lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
  import { getDoc, doc, setDoc } from "firebase/firestore";

  let todoList = [];
  let currTodo = "";
  let error = false;

  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });

  function addTodo() {
    error = false;
    if (!currTodo) {
      error = true;
    }

    todoList = [...todoList, currTodo];
    currTodo = "";
  }

  function editTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    currTodo = todoList[index];
    todoList = newTodoList;
  }

  function removeTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    todoList = newTodoList;
  }

  async function saveTodos() {
    try {
      const userRef = doc(db, "users", $authStore.user.uid);
      await setDoc(
        userRef,
        {
          todos: todoList,
        },
        { merge: true },
      );
    } catch (err) {
      console.log("there was an error saving todos");
    }
  }
</script>

{#if !$authStore.loading}
  <div class="mainContainer">
    <div class="headerContainer">
      <h1>Todo List</h1>
      <div class="headerBtns">
        <button on:click={saveTodos}>
          <i class="far fa-save"></i>
          <p>Save</p>
        </button>
        <button on:click={authHandlers.logout}>
          <i class="far fa-sign-out-alt"></i>
          <p>Logout</p>
        </button>
      </div>
    </div>

    <main>
      {#if todoList.length === 0}
        <p class="center">No Todos</p>
      {/if}
      {#each todoList as todo, index}
        <TodoItem {todo} {index} {editTodo} {removeTodo} />
      {/each}
    </main>

    <div class={`enterTodo ${error ? "errorBorder" : ""}`}>
      <input bind:value={currTodo} type="text" placeholder="Enter Todo" />
      <button on:click={addTodo}>Add</button>
    </div>
  </div>
{/if}

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
