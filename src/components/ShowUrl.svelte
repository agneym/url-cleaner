<section class="box">
  <h2 class="heading">Your URL 🔗</h2>
  <button class="clear-button" type="button" on:click={copyToClipboard}>
    <p>{url}</p>
  </button>
  <div class="btn-box">
    <button class="button outline" type="button" on:click={shareUrl}>
      <ShareIcon />
      Share
    </button>
    <button class="button" type="button" on:click={clearUrl}>
Clean another URL
  </button>
  </div>
</section>

<script>
  import { createEventDispatcher } from 'svelte';
  import ShareIcon from "../icons/share.svelte";

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
  .heading {
    --typography-spacing-vertical: 20px;
    color: var(--text-default);
  }
  .clear-button {
    font-size: 14px;
    white-space: normal;
    word-break: break-all;
    all: unset;
    cursor: pointer;
  }
  .clear-button > p {
    color: var(--default-text);
  }
  .btn-box {
    display: flex; 
    gap: 10px;
    width: min(100%, 24rem);
  }
  .btn-box > .button {
    flex-grow: 1;
  }
</style>
