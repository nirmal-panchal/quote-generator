import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const QuoteModal = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState();
  const [cat, setCat] = useState("inspirational");

  const categories = [
    "inspirational",
    "love",
    "friendship",
    "life",
    "science",
    "nature",
    "future",
  ];

  const fetchQuote = async () => {
    setLoading(true);
    const res = await axios.get(
      // `https://api.quotable.io/random`
      `https://api.quotable.io/random?tags=${cat}`
    );
    setLoading(false);
    if (res) {
      setQuote(res.data);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [cat]);

  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md w-96 text-white">
      <h1 className="text-2xl font-semibold mb-4">Quote Generator</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block my-2 font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);
          }}
          className="w-full px-3 py-2 border cursor-pointer rounded bg-gray-700 text-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="m-4 flex gap-5 flex-col">
        {quote ? (
          <>
            <p className="italic">&quot;{quote.content}&quot;</p>
            <p className="text-gray-400 text-right">— {quote.author}</p>
          </>
        ) : (
          <div className="flex items-center justify-center m-5">
            <ClipLoader size={16} color="#fff" />
          </div>
        )}
      </div>
      <button
        onClick={fetchQuote}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors rounded w-full"
      >
        {loading ? <ClipLoader size={16} color="#fff" /> : "Generate"}
      </button>
    </div>
  );
};

export default QuoteModal;
