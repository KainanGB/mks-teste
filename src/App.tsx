import { useState } from "react";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { Container } from "./global/Global";

function App() {
  return (
    <Container>
      <Navbar />
      <Cards />
      <Footer />
    </Container>
  );
}

export default App;
