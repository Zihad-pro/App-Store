import React, { use, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const PageDetails = () => {
  const {user}=use(AuthContext);
  const [install, setInstall] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const allItem = [
    ...(data.Education || []),
    ...(data.Health || []),
    ...(data.Productivity || []),
    ...(data.Trending || []),
  ];

  const singleItem = allItem.find((item) => String(item.id) === id);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const userFeedback = e.target.name.value;
    setFeedback(userFeedback);
    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-br min-h-screen text-gray-800 p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={singleItem.thumbnail}
          alt="App Logo"
          className="w-20 h-20 rounded-2xl shadow-md border-2 border-indigo-300"
        />
        <div>
          <h1 className="text-3xl font-extrabold">{singleItem.name}</h1>
          <p className="text-sm text-gray-500">{singleItem.developer}</p>
          <p className="text-sm text-gray-600">
            {singleItem.category} •{" "}
            <span className="text-yellow-500 font-semibold">
              {singleItem.rating}★
            </span>
          </p>
        </div>
        <button
          onClick={() => setInstall(!install)}
          className="btn btn-primary ml-auto px-6 py-2 bg-primary1 border-none text-white shadow hover:bg-orange-400"
        >
          {install ? "Unstall" : "Install"}
        </button>
      </div>
      <h2 className="text-2xl font-bold pb-5">Screenshort</h2>
      <div className="rounded-xl overflow-hidden mb-6 shadow-xl grid grid-cols-2 gap-4">
        <img
          src={singleItem.banner}
          alt="App Banner"
          className="rounded-xl w-full object-cover border border-indigo-100"
        />
        <img
          src={singleItem.banner}
          alt="App Banner"
          className="rounded-xl w-full object-cover border border-indigo-100"
        />
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl p-5 shadow-md mb-5 border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">📝 Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {singleItem.description}
        </p>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl p-5 shadow-md mb-5 border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">✨ Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {singleItem.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Downloads */}
      <div className="bg-white rounded-xl p-5 shadow-md mb-5 border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">📈 Downloads</h2>
        <p className="text-gray-700">
          {singleItem.downloads.toLocaleString()}+ downloads
        </p>
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-xl p-5 shadow-md mb-5 border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">🌟 User Reviews</h2>

        {singleItem.reviews?.map((review, index) => (
          <div key={index} className="border-t border-gray-200 pt-3 mt-3">
            <p className="font-semibold flex items-center gap-1">
              <CgProfile size={26} />
              {review.user}
            </p>
            <p className="text-sm text-gray-700 italic">"{review.comment}"</p>
            <p className="text-xs text-gray-500">Rating: {review.rating}★</p>
          </div>
        ))}
        {/* Display Feedback */}
        {feedback && (
          <div className="mt-4 text-green-900 rounded-md">
            <p className="font-semibold flex items-center gap-1">
              {user ? (
                <img className="w-8 rounded-full" src={user.photoURL} />
              ) : (
                <CgProfile />
              )}
              {user.displayName}
            </p>
            <p className="text-gray-800 italic">"{feedback}"</p>
            <p className="text-xs text-gray-500">Rating: {rating}★</p>
          </div>
        )}
        {/* Review Form */}
        {install && (
          <div className="pt-5 space-y-1">
            <p className="text-xl font-semibold">Rating the app and Review</p>

            {/* Rating Inputs */}
            <div className="rating">
              {[1, 2, 3, 4, 5].map((num) => (
                <input
                  key={num}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${num} star`}
                  onChange={() => setRating(num)}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-3">
              <input
                type="text"
                name="name"
                placeholder="State your feedback"
                className="input input-xl w-6/12"
                required
              />
              <button className="btn bg-primary1 hover:bg-orange-400 text-white text-xl p-7 relative -left-1 rounded-md">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageDetails;
