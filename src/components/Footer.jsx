function Footer() {
  return (
    <footer className="bg-slate-100 mt-10">
      <div className="container mx-auto p-6 text-center text-gray-600">
        © {new Date().getFullYear()} Fake Store Shop
      </div>
    </footer>
  );
}

export default Footer;
