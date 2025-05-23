function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3D9FFA] text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-[120px] font-bold leading-none drop-shadow-md">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Oops! Page not found</h2>
        <p className="text-lg mb-8">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-[#3D9FFA] px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-gray-100 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
