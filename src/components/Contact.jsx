import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formId = "1cHdFHYMuuBWz_KWvJO_amwGrnX2rIOvlJjfCoPkTuB0"; // Replace with your Google Form ID
      const entryName = "entry.1452060743"; 
      const entryEmail = "entry.502302252";
      const formData = new FormData();
      formData.append(entryName, name);
      formData.append(entryEmail, email);
  
      try {
        await fetch(`https://docs.google.com/forms/d/${formId}/formResponse`, {
          method: "POST",
          mode: "no-cors", 
          body: formData,
        });
  
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

  return (
    <div className="max-w-md mx-auto my-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <p className="text-green-500">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
