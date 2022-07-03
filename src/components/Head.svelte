<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title}>
  <meta name="description" content={description}>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content={url}>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:image" content={metaImage}>

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta name="twitter:creator" content="@agneymenon">
  <meta property="twitter:url" content={url}>
  <meta property="twitter:title" content={title}>
  <meta property="twitter:description" content={description}>
  <meta property="twitter:image" content={metaImage}>
</svelte:head>

<script>
  let title = "URL Cleaner";
  let description = "Remove the Pesky query parameters from your URLs. Leave them short and simple instead of revealing trade secrets.";
  let url = "https://clean-url.agney.dev/";
  let metaImage = `${url}meta.jpg`;
</script>