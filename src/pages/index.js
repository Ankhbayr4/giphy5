import { useEffect, useState } from "react";
const url =
  "https://api.giphy.com/v1/gifs/trending?api_key=ikWNkxOywqUHt7UwEMEuR02aVgPWyUi3&limit=25&offset=0&rating=g&bundle=messaging_non_clips";

const Page = () => {
  const [gifs, setGifs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // huudasruu oroh ued treding gif-uudig avchirch gifs ruu hadgalah
  useEffect(() => {
    const getGifs = async () => {
      const respose = await fetch(url);
      const { data } = await respose.json();

      setGifs(data);
    };

    getGifs();
  }, []);

  const handleChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = async () => {
    const respose = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=ikWNkxOywqUHt7UwEMEuR02aVgPWyUi3&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );

    const { data } = await respose.json();
    setGifs(data);
  };

  return (
    <div>
      <div>
        <h1>Page</h1>
        <input
          placeholder="search"
          value={searchValue}
          onChange={handleChangeSearchInput}
        />
        <button className="py-2 px-4 bg-blue-200" onClick={onSubmit}>
          search
        </button>

        <div className="grid grid-cols-3">
          {gifs.map((gif) => {
            return <img key={gif.id} src={gif.images.original.url} alt="gif" />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
