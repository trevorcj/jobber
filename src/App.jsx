import JobList from "./components/JobList";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          Jobber <span>.</span>
        </h1>
      </header>

      <JobList />
    </div>
  );
}

export default App;
