function CategoryFilter({
  categories,
  selected,
  onChange,
}) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border p-3"
    >
      <option value="">All Categories</option>

      {categories?.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
