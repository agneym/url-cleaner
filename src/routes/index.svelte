<svelte:head>
  <title>URL Cleaner</title>
</svelte:head>

<main class="container">
  <h1 class="title">URL Cleaner</h1>
  <Form on:submit={handleUrl} />
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

  /**
   * Remove any query parameters from the URL.
   * @param url {string}
   */
  function cleanUrl(url) {
    const urlObj = new URL(url);
    urlObj.search = "";
    return urlObj.toString();
  }

  function handleUrl(event) {
    const { detail: url } = event;
    const cleanedUrl = cleanUrl(url);
  }
</script>