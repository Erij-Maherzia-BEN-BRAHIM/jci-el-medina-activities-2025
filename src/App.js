import "./App.css";
import { mockData } from "./data/index";
import { MonthlySection } from "./components/MonthlySection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-row justify-between items-stretch gap-x-3">
            <div>
              <h1 className="text-4xl font-bold text-[#0A0F29]">
                JCI El Médina
              </h1>
              <p className="text-[#414042] mt-2">Activities & Events 2025</p>
            </div>
            {/* <img
              src="elMedina.jpg"
              alt="JCI El Médina Logo"
              className="w-20 h-auto object-contain"
            /> */}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {mockData.map((monthData, index) => (
          <MonthlySection key={index} data={monthData} />
        ))}
      </main>
      <footer className="mt-10 py-4 bg-white border-t text-center text-[#414042]">
        <p>
          💻 Developed by{" "}
          <a
            href="https://www.linkedin.com/in/erij-maherzia-ben-brahim-04784a112/"
            className="text-[#0A0F29] font-bold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Erij Maherzia BEN BRAHIM
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
