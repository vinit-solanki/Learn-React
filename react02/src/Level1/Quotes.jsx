import React, { useEffect, useState } from 'react';

const quote_api = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = 'eZqXQzVHTCzL5e18pQiJtQ==STqZ00ZDYbQG59xs';

function Quotes() {
  const [quote, setQuote] = useState('Loading...');
  const [author,setAuthor] = useState('')
  async function getQuote() {
    try {
      const response = await fetch(quote_api, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setTimeout(()=>setQuote(jsonResponse[0].quote),200)
      setTimeout(()=>setAuthor(jsonResponse[0].author),200)
    } catch (e) {
      console.error('Failed to fetch quote:', e);
      console.log('Failed to fetch quote. Please try again later.');
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="w-full h-full items-center text-justify justify-between flex flex-col bg-white bg-opacity-10 rounded-lg p-4 text-center items-center gap-y-3">
      <div className="bg-gray-800 bg-opacity-40 rounded-lg p-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">Inspiration Hub</h1>
        <p className="text-justify text-xl italic text-gray-300 mb-6">"{quote}" <br /> ~ {author}</p>
        <button
          onClick={getQuote}
          className="px-6 py-3 bg-black-600 hover:bg-none border-2 text-white font-semibold rounded-md shadow-md transition duration-300"
        >
          Get a New Quote
        </button>
      </div>
      <div className="w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
    </div>
  );
}

export default Quotes;
