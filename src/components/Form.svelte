<form class="container" on:submit|preventDefault={onSubmit}>
  <input class="input" type="url" placeholder="Enter URL" name="url" />
  <button class="button" type="submit">Clean</button>
</form>

<style>
  .container {
    --rounded: 0.35rem;
    display: flex;
  }

  .container:focus-within {
    outline: 1px solid hsl(0deg 0% 100% / 20%);
    border-radius: var(--rounded);
  }

  .input {
    background-color: var(--color-background);
    border: 1px solid #5f6368;
    padding: 4px 8px;
    max-width: 100%;
    font-size: 18px;
    border-top-left-radius: var(--rounded);
    border-bottom-left-radius: var(--rounded);
    border-right-width: 0;
  }

  .input {
    outline: none;
  }

  .button {
    border-top-right-radius: var(--rounded);
    border-bottom-right-radius: var(--rounded);
    padding: 6px 8px;
    background-color: #303134;
    border: 1px solid #5f6368;
    box-shadow: none;
    cursor: pointer;
    color: #e8eaed;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
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