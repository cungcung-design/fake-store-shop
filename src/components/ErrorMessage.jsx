function ErrorMessage({ message }) {
  return (
    <div className="rounded-lg bg-red-100 p-6 text-center text-red-600">
      {message}
    </div>
  );
}

export default ErrorMessage;
