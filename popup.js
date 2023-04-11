const loremIpsumWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
    'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit',
    'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
    'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
    'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id',
    'est', 'laborum'
];

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSentence() {
    const sentenceLength = randomInteger(5, 15);
    const sentenceWords = [];

    for (let i = 0; i < sentenceLength; i++) {
        const randomWord = loremIpsumWords[randomInteger(0, loremIpsumWords.length - 1)];
        sentenceWords.push(randomWord);
    }

    const sentence = sentenceWords.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

function generateParagraph(numSentences) {
    const sentences = [];

    for (let i = 0; i < numSentences; i++) {
        sentences.push(generateSentence());
    }

    return sentences.join(' ');
}

function generateLoremIpsum(numParagraphs, numSentences) {
    const paragraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
        paragraphs.push(generateParagraph(numSentences));
    }

    return paragraphs.join('\n\n');
}

function updateLoremIpsum() {
    const numParagraphs = parseInt(document.getElementById('num-paragraphs').value);
    const numSentences = parseInt(document.getElementById('num-sentences').value);
    const loremText = generateLoremIpsum(numParagraphs, numSentences);
    document.getElementById('lorem-text').innerText = loremText;
}

document.getElementById('generate-btn').addEventListener('click', updateLoremIpsum);

document.getElementById('copy-btn').addEventListener('click', () => {
    const text = document.getElementById('lorem-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }, () => {
        alert('Error copying text');
    });
});

// Generate the default Lorem Ipsum text
updateLoremIpsum();