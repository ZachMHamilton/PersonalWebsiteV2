import { Home, Experience, Portfolio, Contact } from './components';

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Home />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
