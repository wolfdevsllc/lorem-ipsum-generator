const loremIpsumWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSentence() {
  const sentenceLength = randomInteger(5, 15);
  const sentenceWords = [];

  for (let i = 0; i < sentenceLength; i++) {
    const randomWord =
      loremIpsumWords[randomInteger(0, loremIpsumWords.length - 1)];
    sentenceWords.push(randomWord);
  }

  const sentence = sentenceWords.join(" ");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

function generateParagraph(numSentences) {
  const sentences = [];

  for (let i = 0; i < numSentences; i++) {
    sentences.push(generateSentence());
  }

  return sentences.join(" ");
}

function generateLoremIpsum(numParagraphs, numSentences, maxWords = null) {
  const paragraphs = [];
  let totalWords = 0;

  for (let i = 0; i < numParagraphs; i++) {
    const paragraph = generateParagraph(numSentences);
    const paragraphWords = countWords(paragraph);

    if (maxWords && totalWords + paragraphWords > maxWords) {
      // If adding this paragraph would exceed max words, truncate it
      const remainingWords = maxWords - totalWords;
      if (remainingWords > 0) {
        const truncatedParagraph = truncateToWords(paragraph, remainingWords);
        paragraphs.push(truncatedParagraph);
      }
      break;
    }

    paragraphs.push(paragraph);
    totalWords += paragraphWords;

    if (maxWords && totalWords >= maxWords) {
      break;
    }
  }

  return paragraphs.join("\n\n");
}

function truncateToWords(text, maxWords) {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(" ") + ".";
}

function countWords(text) {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

function updateWordCount(text) {
  const wordCount = countWords(text);
  const wordCountElement = document.getElementById("word-count");
  wordCountElement.textContent = `${wordCount} word${
    wordCount !== 1 ? "s" : ""
  }`;
}

function updateLoremIpsum() {
  const generateBtn = document.getElementById("generate-btn");

  // Add generating animation
  generateBtn.classList.add("generating");

  // Small delay to show the animation
  setTimeout(() => {
    const numParagraphs = parseInt(
      document.getElementById("num-paragraphs").value
    );
    const numSentences = parseInt(
      document.getElementById("num-sentences").value
    );
    const maxWordsValue = document.getElementById("max-words").value;
    const maxWords = maxWordsValue ? parseInt(maxWordsValue) : null;

    // Validate inputs
    if (numParagraphs < 1 || numParagraphs > 20) {
      alert("Please enter a number of paragraphs between 1 and 20");
      generateBtn.classList.remove("generating");
      return;
    }

    if (numSentences < 1 || numSentences > 15) {
      alert("Please enter a number of sentences between 1 and 15");
      generateBtn.classList.remove("generating");
      return;
    }

    if (maxWords !== null && (maxWords < 50 || maxWords > 1000)) {
      alert(
        "Please enter a max words value between 50 and 1000, or leave empty for no limit"
      );
      generateBtn.classList.remove("generating");
      return;
    }

    const loremText = generateLoremIpsum(numParagraphs, numSentences, maxWords);
    document.getElementById("lorem-text").textContent = loremText;
    updateWordCount(loremText);

    generateBtn.classList.remove("generating");
  }, 300);
}

function copyToClipboard() {
  const text = document.getElementById("lorem-text").textContent;
  const copyBtn = document.getElementById("copy-btn");

  if (!text.trim()) {
    alert("No text to copy. Please generate some text first.");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Add visual feedback
      copyBtn.classList.add("copied");

      // Remove the feedback after animation
      setTimeout(() => {
        copyBtn.classList.remove("copied");
      }, 2000);
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.classList.remove("copied");
        }, 2000);
      } catch (err) {
        alert("Error copying text. Please select and copy manually.");
      }

      document.body.removeChild(textArea);
    });
}

// Event listeners
document
  .getElementById("generate-btn")
  .addEventListener("click", updateLoremIpsum);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

// Add input validation and real-time feedback
document
  .getElementById("num-paragraphs")
  .addEventListener("input", function (e) {
    const value = parseInt(e.target.value);
    if (value > 20) e.target.value = 20;
    if (value < 1) e.target.value = 1;
  });

document
  .getElementById("num-sentences")
  .addEventListener("input", function (e) {
    const value = parseInt(e.target.value);
    if (value > 15) e.target.value = 15;
    if (value < 1) e.target.value = 1;
  });

document.getElementById("max-words").addEventListener("input", function (e) {
  const value = e.target.value;
  if (value !== "" && value !== null) {
    const numValue = parseInt(value);
    if (numValue > 1000) e.target.value = 1000;
    if (numValue < 50) e.target.value = 50;
  }
});

// Add keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    updateLoremIpsum();
  }

  if (
    (e.ctrlKey || e.metaKey) &&
    e.key === "c" &&
    e.target.id !== "lorem-text"
  ) {
    const selectedText = window.getSelection().toString();
    if (!selectedText) {
      e.preventDefault();
      copyToClipboard();
    }
  }
});

// Generate the default Lorem Ipsum text on load
updateLoremIpsum();
