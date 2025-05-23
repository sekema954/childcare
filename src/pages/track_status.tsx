import { useState } from "react";

const TrackStatus = () => {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      setError("Please enter your tracking ID or email.");
      setStatus(null);
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Mocked response
      if (trackingId === "example123") {
        setStatus("✅ Your referral is under review. We'll notify you shortly.");
      } else {
        setStatus("❌ No referral found with that ID or email.");
      }
    }, 2000);
  };

  return (
    <section className="mt-16 px-4 py-10 max-w-2xl mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-medium">Track Your Referral</h1>
        <p className="text-gray-600 mt-2">
          Enter your email or tracking ID to check the status of your referral.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Email or Tracking ID"
          className="w-full h-[55px] sm:h-[65px] border border-black rounded-md px-4 sm:px-5 text-base"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full max-w-[200px] mx-auto h-[55px] sm:h-[65px] border border-[#8F36FF] text-[#8F36FF] rounded-[40px] text-base sm:text-lg font-medium transition-all duration-[0.5s] hover:bg-[#8F36FF] hover:text-white"
        >
          {loading ? "Checking..." : "Check Status"}
        </button>
      </form>

      {status && (
        <div className="mt-8 text-center">
          <p className="text-lg font-medium">{status}</p>
        </div>
      )}
    </section>
  );
};

export default TrackStatus;
