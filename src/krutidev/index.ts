const hindiWords1 = [
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ,",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "म",
  "य",
  "र",
  "ल",
  "व",
  "श",
  "ष",
  "स",
  "ह",
];

const englishWords1 = [
  "k",
  "Ka",
  "ga",
  "Ga",
  "D",
  "ca",
  "C",
  "ja",
  "Ja",
  "Pa",
  "o",
  "O",
  "D",
  "Z",
  "Na",
  "ta",
  "Ta",
  "d",
  "Ya",
  "na",
  "pa",
  "f",
  "ba",
  "Ba",
  "ma",
  "ya",
  "r",
  "la",
  "va",
  "Sa",
  "Va",
  "sa",
  "h",
];

const unicodeMatra = ["a", "i", "aI", "u", "U", "&", "e", "E", "ae", "aE", "/", ":"]
const matra = ["ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "ं", "ः"];

export function convertToAMS(input: string) {
  let output = withHindi(input);
  output = withMatra(output);

  return output
}

export function withHindi(input: string) {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const index = hindiWords1.indexOf(input[i]);

    if (index !== -1) {
      output += englishWords1[index];
    } else {
      output += input[i];
    }
  }

  return output;
}

export function withMatra(input: string) {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const index = matra.indexOf(input[i]);

    if (index !== -1) {
      output += unicodeMatra[index];
    } else {
      output += input[i];
    }
  }

  return output;
}
