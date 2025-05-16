import React, { useState } from "react";

export default function SchoolPortalWidget() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#eef4fb]">
      <div className="rounded-2xl bg-white shadow-xl px-6 py-10 w-[360px] text-center">
        <img
          src="/assets/logo.png"
          alt="Inicijativa logo"
          className="mx-auto h-12 mb-4"
        />
        <h2 className="font-semibold text-lg mb-2">Slobodno pitajte –</h2>
        <ul className="text-left text-sm text-gray-700 mb-4 list-disc list-inside">
          <li>Što Inicijativu čini drugačijom?</li>
          <li>Kako moj tim može govoriti engleski s povjerenjem?</li>
          <li>Što je Callan metoda?</li>
        </ul>
        <form onSubmit={handleSubmit} className="mb-2">
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm outline-none"
              placeholder="Vaša poruka..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 text-sm font-medium"
            >
              Pošalji
            </button>
          </div>
        </form>
        {error && (
          <p className="text-sm text-red-600 mt-2">
            Došlo je do greške. Pokušajte ponovno.
          </p>
        )}
        <a
          href="https://calendly.com/inicijativa-testing/company-calls"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md w-full"
        >
          📅 Zakažite poziv
        </a>
        <p className="text-xs text-gray-400 mt-3">powered by VoiceLayer</p>
      </div>
    </div>
  );
}