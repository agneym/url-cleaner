<div class="container">
  <slot></slot>
</div>

<style>
  .container {
    display: grid;
    height: 100%;
    place-content: center;
  }
</style>

<script global>
  import "../global.css";
</script>