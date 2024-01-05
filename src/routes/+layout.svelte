<div class="mainContainer">
  <slot />
</div>

<style>
  .mainContainer {
    min-height: 100vh;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
