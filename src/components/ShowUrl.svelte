<section class="box">
  <h2 class="heading">Your cleaned URL</h2>
  <p class="url-display">{url}</p>
  <div class="btn-box">
    <button class="button outline contrast" type="button" on:click={copyToClipboard}
    >Copy to clipboard</button
  >
    <button class="button outline contrast" type="button" on:click={shareUrl}>Share</button>
  </div>
  <button class="button" on:click={clearUrl}>Clean another URL</button>
</section>

<script>
  import { createEventDispatcher } from 'svelte';

  import { notifications } from "../lib/notifications.js";

  const dispatch = createEventDispatcher();

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
      notifications.danger("Failed to copy!", err);
    }
  }

  async function shareUrl() {
    try {
      await navigator.share({ url });
    } catch(err) {
      notifications.danger("Failed to share!", err);
    }
  }

  function clearUrl() {
    dispatch("clear");
  }
</script>

<style>
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;
  }
  .url-display {
    font-size: 14px;
    color: white;
    white-space: normal;
    word-break: break-all;
  }
  .btn-box {
    display: flex; 
    gap: 10px;
  }
</style>
