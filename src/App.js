import Pokemon from "./components/pokemon";

function App() {
  return (
    <Container>
      <SiteBranding>今日は、ポケモン！</SiteBranding>
      <p> ^ (( Hello, Pokemon! )) ^</p>
      <Pokemon />
    </Container>
  );
}

function Container({ children }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "red",
      }}
    >
      {children}
    </div>
  );
}

function SiteBranding({ children }) {
  return <h1 className="site-branding">{children}</h1>;
}

export default App;
