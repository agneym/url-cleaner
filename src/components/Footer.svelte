<footer class="footer">
  <ul class="items">
    <li>
      <a href="https://github.com/agneym/url-cleaner">Source</a>
    </li>
    <li>
      <a href="http://blog.agney.dev/">Blog</a>
    </li>
    <li>
      <a href="https://github.com/sponsors/agneym">Donate</a>
    </li>
  </ul>
</footer>

<style>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 40px;
  }
  .items {
    --typography-spacing-vertical: 10px;
    display: flex;
    gap: 0 24px;
  }
  .items > li {
    list-style: none;
  }
  ul li::before {
    content: "\200B";
  }
  a {
    font-size: 14px;
    color: inherit;
  }
</style>
