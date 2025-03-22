import { useState, useEffect } from "react";
import axios from "axios";
import { Skip, SkipDisplay } from "./types/skip";
import { SkipComponent } from "./components/skip-component";

function App(): JSX.Element {
  const [skips, setSkips] = useState<SkipDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<SkipDisplay | null>(null);

  useEffect(() => {
    const fetchSkips = async (): Promise<void> => {
      try {
        const response = await axios.get<Skip[]>(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        // Transform response data to display format
        const displaySkips: SkipDisplay[] = response.data.map((skip) => ({
          id: skip.id,
          size: skip.size,
          pricePerWeek: skip.price_before_vat,
          isPrivateOnly: skip.size > 10,
          hirePeriod: skip.hire_period_days,
        }));
        setSkips(displaySkips);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch skip options. Please try again later.");
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-red-500 text-center">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-lg xs:text-2xl font-bold text-white mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-sm xs:text-md text-gray-400">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipComponent
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 bg-dark-900/70 backdrop-blur-sm border-t border-dark-700 duration-300 ${
          selectedSkip ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xs xs:text-sm text-gray-400">
              {selectedSkip?.size}
            </span>
            <span className="text-sm xs:text-2xl text-blue-500 ml-4 mr-1">
              £
            </span>
            <span className="text-gray-400 text-xs xs:text-sm text-gray-400">
              7 day hire
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-dark-600 hover:bg-dark-400 text-xs xs:text-base text-white rounded-lg ">
              Back
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white text-xs xs:text-base rounded-lg hover:bg-blue-700 flex items-center">
              <span>Continue</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
