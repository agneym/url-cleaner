<svelte:head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧹</text></svg>">
</svelte:head>
<div class="box">
  <slot></slot>
</div>
<Toast />

<style>
  .box {
    display: grid;
    height: 100%;
    place-content: center;
  }
</style>

<script global>
  import "@picocss/pico/css/pico.min.css";
  import "../global.css";
  import Toast from '../components/Toast.svelte'; 
</script>