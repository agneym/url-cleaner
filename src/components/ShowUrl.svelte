<section class="container">
  <h2 class="heading">Your cleaned URL</h2>
  <p>{url}</p>
  <button class="button" type="button" on:click={copyToClipboard}
    >Copy to Clipboard</button
  >
</section>

<script>
  import {notifications} from '../lib/notifications.js';

  export let url;

  async function copyToClipboard() {
    if (!navigator.clipboard) {
      notifications.danger("We could not access the clipboard. Sorry.");
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      notifications.success("Copied to the clipboard");
    } catch (err) {
      notifications.danger('Failed to copy!', err)
    }
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;
  }
  .heading {
    color: #5f6368;
  }
  .button {
    all: unset;
    cursor: pointer;
  }
</style>
