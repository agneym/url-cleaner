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
    min-width: 100%;
    max-width: 20rem;
    position: relative;
    top: -5rem;
  }

  .input {
    background-color: var(--color-background);
    border: 1px solid aliceblue;
    padding: 4px 8px;
    max-width: 100%;
    border-radius: 0.35rem;
  }
</style>

<script>
</script>