export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowedErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  totalWords: number;
  words: string[];
}

type ScrambleWordAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" };

const GAME_WORDS = [
  "EFÍMERA",
  "ECUÁNIME",
  "ESTUPEFACTO",
  "ATURDIR",
  "TELEDIARIO",
  "BALANCÍN",
  "HORTICULTOR",
  "ASENTAR",
  "SELLOS",
  "ESTRIBOS",
  "VASTO",
  "LÚGUBRE",
  "INQUIRIR",
  "CAPULLO",
  "INFLIGIR",
  "BASTIDOR",
  "MITÍN",
];

/** Esta función mezcla el arreglo para que siempre sea aleatorio. */
const shuffleArray = function (array: string[]) {
  return array.sort(() => Math.random() - 0.5);
};

/** Esta función mezcla las letras de la palabra. */
const scrambleWord = function (word: string = "") {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = function (): ScrambleWordsState {
  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowedErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    totalWords: shuffledWords.length,
    words: shuffledWords,
  };
};

export function scrambleWordsReducer(
  state: ScrambleWordsState,
  action: ScrambleWordAction,
): ScrambleWordsState {
  /** Esta función mezcla las letras de la palabra. */
  const scrambleWord = function (word: string = "") {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case "CHECK_ANSWER": {
      if (state.guess !== state.currentWord) {
        const updatedErrorCounter = state.errorCounter + 1;

        return {
          ...state,
          errorCounter: updatedErrorCounter,
          guess: "",
          isGameOver: updatedErrorCounter === state.maxAllowedErrors,
        };
      }

      const updatedPoints = state.points + 1;
      const updatedWords = state.words.filter(
        (word) => word !== state.currentWord,
      );

      const newWordIndex = Math.round(
        Math.random() * (updatedWords.length - 1),
      );

      return {
        ...state,
        currentWord: updatedWords[newWordIndex],
        guess: "",
        points: updatedPoints,
        scrambledWord: scrambleWord(updatedWords[newWordIndex]),
        words: updatedWords,
      };
    }

    default:
      return state;
  }
}
