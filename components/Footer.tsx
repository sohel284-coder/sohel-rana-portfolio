export function Footer() {
  return (
    <footer className="container footer">
      <a className="wordmark" href="/#home">
        sohel<span>.</span>
      </a>
      <span>© {new Date().getFullYear()} Sohel Rana</span>
      <a href="/#home">Back to top ↑</a>
    </footer>
  );
}
