import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets found</h2>
      ) : (
        pets &&
        pets.map(({ id, name, animal, breed, images, city, state }) => (
          <Pet
            key={id}
            name={name}
            animal={animal}
            breed={breed}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
