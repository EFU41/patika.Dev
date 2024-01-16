import React, { useState, useEffect } from "react";

function App() {
  const [paragraphCount, setParagraphCount] = useState(2);
  const [responseType, setResponseType] = useState("html");
  const [generatedParagraphs, setGeneratedParagraphs] = useState("");

  useEffect(() => {
    const apiUrl = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphCount}&format=${responseType}`;

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => setGeneratedParagraphs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [paragraphCount, responseType]);

  return (
    <div className="App">
      <h1>Paragraph Generator</h1>

      <label>
        Paragraph Count:
        <input
          type="number"
          value={paragraphCount}
          onChange={(e) => setParagraphCount(e.target.value)}
          min="1"
        />
      </label>

      <label>
        Response Type:
        <select
          value={responseType}
          onChange={(e) => setResponseType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="html">HTML</option>
        </select>
      </label>

      <div
        className="generated-paragraphs"
        dangerouslySetInnerHTML={{ __html: generatedParagraphs }}
      ></div>
    </div>
  );
}

export default App;
