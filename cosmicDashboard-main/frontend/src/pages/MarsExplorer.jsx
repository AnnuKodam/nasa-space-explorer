import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMarsPhotos } from "../api/nasaApi";
import { Loader, Loader2 } from "lucide-react";

const MarsExplorer = () => {
  const [filters, setFilters] = useState({
    rover: "curiosity",
    sol: 1000,
    camera: "fhaz",
  });
  const { data, error, isFetching, refetch, isInitialLoading } = useQuery({
    queryKey: ["marsPhotos", filters.rover, filters.sol, filters.camera],
    queryFn: () => fetchMarsPhotos(filters),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  const photos = data?.data?.photos || [];

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
        Mars Rover Explorer
      </h1>
      <p className="text-gray-400 mb-8">
        Select a rover, camera, and Martian sol (day) to see photos.
      </p>
      <form
        onSubmit={handleSearch}
        className="bg-gray-800 p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        <div>
          <label
            htmlFor="rover"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Rover
          </label>
          <select
            id="rover"
            value={filters.rover}
            onChange={(e) => setFilters({ ...filters, rover: e.target.value })}
            className="w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 h-10"
          >
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="camera"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Camera
          </label>
          <select
            id="camera"
            value={filters.camera}
            onChange={(e) => setFilters({ ...filters, camera: e.target.value })}
            className="w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 h-10"
          >
            <option value="FHAZ">Front Hazard</option>
            <option value="RHAZ">Rear Hazard</option>
            <option value="MAST">Mast Camera</option>
            <option value="NAVCAM">Navigation Camera</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sol"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Martian Sol
          </label>
          <input
            type="number"
            id="sol"
            value={filters.sol}
            onChange={(e) =>
              setFilters({ ...filters, sol: parseInt(e.target.value) || 0 })
            }
            className="w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 h-10 px-3"
          />
        </div>
        <button
          type="submit"
          disabled={isFetching}
          className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-gray-500"
        >
          {isFetching ? "Fetching..." : "Fetch Photos"}
        </button>
      </form>

      {isFetching && <Loader />}
      {error && <ErrorDisplay message={error.message} />}

      {!isFetching && photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={photo.img_src}
                alt={`Mars photo ${photo.id}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-sm text-gray-300">
                <p>
                  <strong>Camera:</strong> {photo.camera.full_name}
                </p>
                <p>
                  <strong>Earth Date:</strong> {photo.earth_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isFetching && photos.length === 0 && !isInitialLoading && !error && (
        <p className="text-center text-gray-400 py-10">
          No photos found for the current selection. Try fetching some!
        </p>
      )}
    </div>
  );
};

export default MarsExplorer;
