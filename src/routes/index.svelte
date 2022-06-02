<svelte:head>
  <title>URL Cleaner</title>
</svelte:head>

<main class="container">
  <h1 class="title">URL Cleaner</h1>
  <Form />
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
</style>

<script>
  import Form from "../components/Form.svelte";
</script>