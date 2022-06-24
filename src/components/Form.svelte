<form class="box" on:submit|preventDefault={onSubmit}>
  <input class="input" type="url" placeholder="Enter URL" name="url" required />
  <button class="button" type="submit" aria-label="Clean"> 
    <CleanIcon />
  </button>
</form>

<style>
  .box {
    --rounded: 0.35rem;
    --spacing: 0;
    display: flex;
    margin: 0 auto;
  }

  .box:focus-within {
    outline: 1px solid hsl(0deg 0% 100% / 20%);
    border-radius: var(--rounded);
  }

  .input {
    background-color: var(--color-background);
    border: 1px solid #5f6368;
    padding: 4px 8px;
    max-width: 100%;
    font-size: 18px;
    border-radius: 0;
    border-top-left-radius: var(--rounded);
    border-bottom-left-radius: var(--rounded);
    border-right-width: 0;
    flex-grow: 1;
    outline: none;
  }

  .button {
    border: 1px solid var(--primary);
    border-top-right-radius: var(--rounded);
    border-bottom-right-radius: var(--rounded);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0 15px;
    background-color: var(--primary);
    box-shadow: none;
    cursor: pointer;
    color: white;
    width: auto;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import CleanIcon from "../icons/clean.svelte";
  
  const dispatch = createEventDispatcher();

  function extractFields(event) {
    const formEl = event.target;
    const formData = new FormData(formEl);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    formEl.reset();
    return data;
  }

  function onSubmit(event) {
    const data = extractFields(event);
    const { url } = data;
    dispatch("submit", url);
  }
</script>