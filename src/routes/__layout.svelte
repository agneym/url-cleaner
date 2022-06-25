<script global>
  import "@picocss/pico/css/pico.min.css";
  import "../global.css";
  import Toast from "../components/Toast.svelte";
  import Footer from "../components/Footer.svelte";

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
<div class="main">
  <div class="box">
    <slot />
  </div>
  <Footer />
</div>
<Toast />

<style>
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    flex: 1;
  }
</style>
