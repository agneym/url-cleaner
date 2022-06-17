<script>
  import Form from "../components/Form.svelte";
  import ShowUrl from "../components/ShowUrl.svelte";
  let cleanedUrl;

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
    cleanedUrl = cleanUrl(url);
  }
</script>

<svelte:head>
  <title>URL Cleaner</title>
</svelte:head>

<main class="container">
  <h1 class="title">URL Cleaner</h1>
  {#if !cleanedUrl}
    <Form on:submit={handleUrl} />
  {:else}
    <ShowUrl url={cleanedUrl} />
  {/if}
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
