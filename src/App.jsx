import { Home, Experience, Portfolio, Contact, Nav } from './components';

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Nav />
      <Home />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
