import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProducts();

  const {
    data: categories,
  } = useCategories();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        !category ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <ErrorMessage
        message={error.message}
      />
    );

  return (
    <>
      <Helmet>
        <title>Fake Store | Home</title>
        <meta
          name="description"
          content="Modern React ecommerce store"
        />
      </Helmet>

      <h1 className="mb-8 text-4xl font-bold">
        Fake Store
      </h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </>
  );
}

export default Home;
