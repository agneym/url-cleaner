<script>
  import Head from "../components/Head.svelte";
  import Form from "../components/Form.svelte";
  import ShowUrl from "../components/ShowUrl.svelte";
  let cleanedUrl;

  function clearUrl() {
    cleanedUrl = null;
  }

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

<Head />
<div class="box">
  <header>
    <h1 class="title">URL Cleaner</h1>
  </header>
  <main>
    {#if !cleanedUrl}
      <Form on:submit={handleUrl} />
    {:else}
      <ShowUrl url={cleanedUrl} on:clear={clearUrl} />
    {/if}
  </main>
</div>

<style>
  .box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    min-width: 100%;
  }
  .title {
    color: var(--primary);
  }
</style>
