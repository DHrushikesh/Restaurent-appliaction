import { useDispatch } from 'react-redux';
import Cards from './RestaurentCards';
import SearchBar from './Searchbar';
import { useEffect, useState } from 'react';
// import { AddtoStore } from '../assests/RestaurantsSLice';

function Body() {
  // const selector = useSelector((state) => state.Restarants);
  const dispatch = useDispatch();
  const [originalRestaurants, setOriginalRestaurants] = useState([]); // Full list
  const [SearchedRestaurent, SetSearchedRestaurent] = useState([]); // Filtered list
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        if (!response.ok) {
          throw new Error("Data fetch failed");
        }
        const maindata = await response.json(); // Store the fetched data
        setOriginalRestaurants(maindata); // Store the full original data
        SetSearchedRestaurent(maindata); // Set the initial filtered list
        // dispatch(AddtoStore(maindata)); // Update Redux store
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    }

    fetchData();
  }, [dispatch]);

  function SearchFunction(value) {
    console.log(value);
    if (value.trim() === "") {
      // If search is empty, restore the original list
      SetSearchedRestaurent(originalRestaurants);
    } else {
      // Perform filtering based on search input
      const filteredRestaurants = originalRestaurants.filter((res) =>
        res.name.toLowerCase().includes(value.toLowerCase())
      );
      SetSearchedRestaurent(filteredRestaurants);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span>Loading...</span> {/* You can replace this with a spinner */}
      </div>
    );
  }

  if (!Array.isArray(SearchedRestaurent)) {
    return <div>Error: Data is not an array</div>;
  }

  return (
    <>
      <SearchBar SearchFunction={SearchFunction} />

      {/* Cards */}
      <div className="w-2/3 min-h-screen mx-auto my-4 px-10 flex flex-wrap rounded-lg">
        {SearchedRestaurent.map(res => {
          return <Cards key={res.id} resDetails={res} />;
        })}
      </div>
    </>
  );
}

export default Body;
