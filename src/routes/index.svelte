<svelte:head>
  <title>URL Cleaner</title>
</svelte:head>

<main class="container">
  <h1 class="title">URL Cleaner</h1>
  <input class="input" type="url" placeholder="Enter URL" />
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .input {
    all: unset;
    background-color: var(--color-background);
    border: 1px solid aliceblue;
    padding: 4px 8px;
    min-width: max(100%, 20rem);
    border-radius: 0.35rem;
  }
</style>

<script>
</script>