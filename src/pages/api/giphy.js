const Page = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getGifs = async () => {
      const respose = await fetch(url);
      const { data } = await respose.json();

      setGifs(data);
    };

    getGifs();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      <div className="grid grid-cols-3">
        {gifs.map((gif) => {
          return (
            <img key={gif.id} src={gif.images.downsized_medium.url} alt="gif" />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
