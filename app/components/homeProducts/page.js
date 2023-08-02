async function getDatass() {
  const res = await fetch(
    "https://api.unsplash.com/search/photos?page=1&query=product&client_id=mKOKSCK-Xmx2T1I44qL36pwccOQa_0ZmdXbC4A_E1kc"
  );

  return res.json();
}

export default async function HomeProducts() {
  const todos = await getDatass();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-center mb-8">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {todos.results?.map((product) => (
            <a key={product.id} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.urls.raw}
                  alt={product.urls.raw}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.description}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
