import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button show={false}>Sign up</Button>
      <Button show={true}>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ show, children }) {
  const theme = useContext(ThemeContext);
  if (!show) return null;

  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
