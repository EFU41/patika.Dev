import React, { useState, useEffect } from "react";

function TypingApp() {
  const [referenceText, setReferenceText] = useState("merhaba");
  const [input, setInput] = useState("");
  const [inputCorrect, setInputCorrect] = useState(0);
  const [inputIncorrect, setInputIncorrect] = useState(0);
  const [isBackspacePressed, setIsBackspacePressed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);
  const [seconds, setSeconds] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);

    // Eğer timer başlamadıysa ve input boş değilse, timer'ı başlat
    if (!timerStarted && inputValue !== "") {
      setTimerStarted(true);
      startTimer();
    }
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          // Süre dolduğunda sonuçları göster
          console.log("Correct Count:", inputCorrect);
          console.log("Incorrect Count:", inputIncorrect);
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const renderTextWithColor = () => {
    return referenceText.split("").map((char, index) => (
      <span
        key={index}
        style={{
          color:
            input[index] === char
              ? "green" // Eşleşiyorsa yeşil
              : input[index] === undefined
              ? "inherit" // Boşsa orijinal rengi
              : "red", // Farklıysa kırmızı
        }}
      >
        {char}
      </span>
    ));
  };

  const nextWord = () => {
    const texts = [
      "",
      "Kariyer ",
      "hedefim ",
      "spor ",
      "sektöründe ",
      "antrenörlük ",
      "pozisyonunda ",
      "yer ",
      "alarak ",
      "sporculara ",
      "ve ",
      "diğer ",
      "bireylere ",
      "kendilerini ",
      "geliştirmeleri ",
      "konusunda ",
      "yardımcı ",
      "olmaktır ",
      "Spor ",
      "bilimleri ",
      "fakültesi ",
      "son ",
      "sınıf ",
      "öğrencisi ",
      "olarak ",
      "lisanlı ",
      "olarak ",
      "basketbol ",
      "futbol ",
      "ve ",
      "yüzme ",
      "branşlarında ",
      "aktif ",
      "olarak ",
      "yer ",
      "aldım ",
      "Üç ",
      "yıllık ",
      "Personel ",
      "Trainer ",
      "deneyimimle ",
      "spor ",
      "salonlarında ",
      "çalışma ",
      "tecrübesi ",
      "kazandım ",
      "ve ",
      "son ",
      "bir ",
      "senedir ",
      "XBody ",
      "SlimWorld ",
      "firmasında ",
      "antrenörlük ",
      "yapmaktayım ",
    ].map((text) => text.toLowerCase()); // Gelen metinleri küçük harfe çevir

    const nextIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(nextIndex);
    setReferenceText(texts[nextIndex]);
    setSeconds(texts[nextIndex + 1]);
    setThird(texts[nextIndex + 2]);
    setFourth(texts[nextIndex + 3]);
  };

  useEffect(() => {
    let correctCount = inputCorrect;
    let incorrectCount = inputIncorrect;

    if (!isBackspacePressed) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== referenceText[i]) {
          incorrectCount++;
          break;
        }
      }
    }

    if (input === referenceText) {
      correctCount++;
      setInputCorrect(correctCount);
      setInput("");
      nextWord();
    }

    setInputIncorrect(incorrectCount);
    setIsBackspacePressed(false);
  }, [input]);

  const handleBackspacePress = () => {
    setIsBackspacePressed(true);
  };

  console.log("Correct Count:", inputCorrect);
  console.log("Incorrect Count:", inputIncorrect);
  console.log("Input:", input.length);

  if (timeRemaining <= 0) {
    // Süre dolduğunda sonuçları göster
    return (
      <div className="container">
        <h2>Time's up!</h2>
        <p>Correct Count: {inputCorrect}</p>
        <p>Incorrect Count: {inputIncorrect}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="text-center">
        {renderTextWithColor()} {seconds} {third} {fourth}
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleBackspacePress();
            }
          }}
        />
      </div>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
}

export default TypingApp;
