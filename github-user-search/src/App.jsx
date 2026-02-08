import './App.css'
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          GitHub User Search
        </h1>
        <p className="mt-2 text-lg opacity-90">
          Find GitHub profiles instantly
        </p>
      </header>

      <main className="py-10">
        <Search />
      </main>
    </div>
  );
}

export default App