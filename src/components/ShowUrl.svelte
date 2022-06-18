<script>
  import { notifications } from "../lib/notifications.js";

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
</script>

<section class="box">
  <h2 class="heading">Your cleaned URL</h2>
  <p>{url}</p>
  <div class="btn-box">
    <button class="button outline secondary" type="button" on:click={copyToClipboard}
    >Copy to clipboard</button
  >
    <button class="button outline secondary" type="button">Share</button>
  </div>
  <button class="btn">Clean another URL</button>
</section>

<style>
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;
  }
  .heading {
    color: #5f6368;
  }
  .btn-box {
    display: flex; 
    gap: 10px;
  }
</style>
