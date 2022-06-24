<script global>
  import "@picocss/pico/css/pico.min.css";
  import "../global.css";
  import Toast from "../components/Toast.svelte";

  function setupDarkModeDefault() {
    if (typeof window === "undefined") {
      return;
    }
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  setupDarkModeDefault();
</script>

<svelte:head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧹</text></svg>"
  />
</svelte:head>
<div class="box">
  <slot />
</div>
<Toast />

<style>
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
  }
</style>
