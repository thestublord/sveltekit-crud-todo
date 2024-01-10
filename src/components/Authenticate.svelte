<script>
  import { auth } from "../lib/firebase/firebase";
  import { authHandlers } from "../store/store";

  let email = "";
  let password = "";
  let confirmPass = "";
  let error = false;
  let register = false;
  let authenticating = false;

  async function handleAuthenticate() {
    if (authenticating) {
      return;
    }

    if (!email || !password || (register && !confirmPass)) {
      alert("Please fill out all fields");
      error = true;
      return;
    }

    authenticating = true;

    try {
      if (!register) {
        await authHandlers.login(email, password);
      } else {
        await authHandlers.signup(email, password, confirmPass);
      }
    } catch (err) {
      console.log("Error", err);
      error = true;
      authenticating = false;
    }
  }

  function handleRegister() {
    register = !register;
  }
</script>

<div class="authContainer">
  <form>
    <h1>{register ? "Register" : "Login"}</h1>
    {#if error}
      <p class="error">The information you have entered is not correct</p>
    {/if}

    <label>
      <p class={email ? "above" : "center"}>Email</p>
      <input bind:value={email} type="email" placeholder="Email" />
    </label>
    <label>
      <p class={password ? "above" : "center"}>Password</p>

      <input bind:value={password} type="password" placeholder="Password" />
    </label>
    {#if register}
      <label>
        <p class={confirmPass ? "above" : "center"}>Confirm Password</p>
        <input
          bind:value={confirmPass}
          type="password"
          placeholder="Confrim Password"
        />
      </label>
    {/if}

    <button on:click={handleAuthenticate} type="button" class="submitBtn">
      {#if authenticating}
        Authenticating...
        <i class="fas fa-spinner fa-spin spin"></i>
      {:else}
        Submit
      {/if}
    </button>
  </form>
  <div class="options">
    <p>Or</p>
    {#if register}
      <div>
        <p>Already have an account</p>
        <p on:click={handleRegister} on:keydown={() => {}}>Login</p>
      </div>
    {:else}
      <div>
        <p>Don't have an account</p>
        <p on:click={handleRegister} on:keydown={() => {}}>Register</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .authContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  form,
  .options {
    width: 100%;
    max-width: 400px;
    margin-top: 24px;
  }

  form input {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  form input {
    border: none;
    background: transparent;
    color: white;
    padding: 16px;
  }

  form input:focus {
    outline: none;
    border: none;
  }

  form label {
    position: relative;
    border: rgb(16, 97, 97) 1px solid;
    border-radius: 4px;
  }

  form label:focus-within {
    border: rgb(36, 175, 175) 2px solid;
  }

  form button {
    border: none;
    background: rgb(16, 97, 97);
    color: white;
    padding: 14px 0px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    display: grid;
    place-items: center;
    display: grid;
    place-items: center;
  }

  form button:hover {
    background: rgb(16, 97, 97, 0.8);
  }

  .above,
  .center {
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
    border-radius: 4px;
    color: white;
    padding: 0 6px;
    font-size: 0.8rem;
  }

  .above {
    top: 0;
    left: 24px;
    background: rgb(16, 97, 97);
    border: 1px solid rgb(16, 97, 97);
    font-size: 0.7rem;
  }

  .center {
    top: 50%;
    left: 6px;
    border: 1px solid transparent;
    opacity: 0;
  }

  .error {
    color: red;
    font-size: 0.8rem;
    text-align: center;
  }

  .options {
    padding: 14px 0px;
    overflow: hidden;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .options > p {
    position: relative;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    padding: 0 14px;
  }

  .options > p::after,
  .options > p::before {
    position: absolute;
    content: "";
    width: 100vw;
    height: 1px;
    background: white;
    top: 50%;
    transform: translateY(-50%);
  }

  .options > p::after {
    right: 100%;
  }

  .options > p::before {
    left: 100%;
  }

  .options > div {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 14px;
  }

  .options > div p:last-of-type {
    color: rgb(47, 156, 156);
    cursor: pointer;
  }

  .options > div p:last-of-type:hover {
    text-decoration: underline;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
