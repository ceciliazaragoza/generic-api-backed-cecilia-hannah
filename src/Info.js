export default function Info({ query, data }) {
  return !query || !data ? (
    <p></p>
  ) : !data?.collection.items || data?.collection.items.length === 0 ? (
    <p className="error-message">No images for: {query}</p>
  ) : (
    <main>
      <h2 className="image-name">Results for: {query}</h2>
      <div className="grid-container">
        {data.collection.items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-container">
              <div>{item.data[0].title}</div>
              <div>
                <img
                  className="nasa-image"
                  src={item.links[0].href}
                  alt={item.data[0].description}
                />
              </div>
              {item.data[0].description !== item.data[0].title && (
                <div>{item.data[0].description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
