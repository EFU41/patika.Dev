import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const sampleMarkdown = `
# Markdown Önizleyici Uygulaması

Bu, Markdown önizleyici uygulamasının örnek içeriğidir. Markdown dilini kullanarak metin biçimlendirme yapabilirsiniz.

## Başlıklar
Markdown'da başlıklar şu şekilde oluşturulur:
\`\`\`
# Bu bir başlık 1
## Bu bir başlık 2
### Bu bir başlık 3
\`\`\`

## Liste Öğeleri
Markdown'da sıralı ve sırasız liste öğeleri şu şekildedir:
\`\`\`
- Sırasız liste öğesi 1
- Sırasız liste öğesi 2

1. Sıralı liste öğesi 1
2. Sıralı liste öğesi 2
\`\`\`

## Kod Blokları
Kod blokları üç ters işaret (\`\`\`) arasına yazılarak oluşturulur:
\`\`\`javascript
function example() {
  console.log("Merhaba, dünya!");
}
\`\`\`
`;

function App() {
  const [markdown, setMarkdown] = useState(sampleMarkdown);
  const [originalMarkdown, setOriginalMarkdown] = useState(sampleMarkdown);
  const [isExampleShown, setIsExampleShown] = useState(false);

  const showExample = () => {
    if (!isExampleShown) {
      // İlk tıklamada bilgi yazısını göster
      setOriginalMarkdown(markdown);
      setMarkdown(sampleMarkdown);
      setIsExampleShown(true);
    } else {
      // İkinci tıklamada yazıları geri getir
      setMarkdown(originalMarkdown);
      setIsExampleShown(false);
    }
  };

  return (
    <div className="App">
      <button className="example-button" onClick={showExample}>
        ?
      </button>
      <div className="editor">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Markdown metni girin..."
        />
      </div>
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
