<form class="container" on:submit|preventDefault={onSubmit}>
  <input class="input" type="url" placeholder="Enter URL" name="url" />
  <button class="button" type="submit">Clean</button>
</form>

<style>
  .container {
    display: flex;
  }

  .input {
    background-color: var(--color-background);
    border: 1px solid aliceblue;
    padding: 4px 8px;
    max-width: 100%;
    border-top-left-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;
    border-right-width: 0;
  }

  .button {
    border-top-right-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;
    padding: 6px 8px;
    text-transform: uppercase;
    background-color: var(--primary-background);
    border-color: aliceblue;
    cursor: pointer;
  }
</style>

<script>
  function extractFields(event) {
    const formData = new FormData(event.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    return data;
  }

  function onSubmit(event) {
    const data = extractFields(event);
    const { url } = data;
    cleanUrl(url);
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
</script>