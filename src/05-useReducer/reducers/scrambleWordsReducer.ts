export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowedErrors: number;
  maxSkips: number;
  points: number;
  // preEstablishedWords: string[];
  scrambledWord: string;
  skipCounter: number;
  totalWords: number;
  words: string[];
}

type ScrambleWordAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "RESTART_GAME"; payload: ScrambleWordsState };

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
  // const preEstablishedWords = [...GAME_WORDS];
  // const shuffledWords = shuffleArray([...preEstablishedWords]);
  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowedErrors: 3,
    maxSkips: 3,
    points: 0,
    // preEstablishedWords: [...preEstablishedWords],
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    // totalWords: [...preEstablishedWords].length,
    totalWords: [...GAME_WORDS].length,
    words: shuffledWords,
  };
};

export function scrambleWordsReducer(
  state: ScrambleWordsState,
  action: ScrambleWordAction,
): ScrambleWordsState {
  // /** Esta función mezcla el arreglo para que siempre sea aleatorio. */
  // const shuffleArray = (array: string[]) => {
  //   return array.sort(() => Math.random() - 0.5);
  // };

  /** Esta función mezcla las letras de la palabra. */
  const scrambleWord = (word: string = "") => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  /** Esta función establece el índice de la nueva palabra al azar */
  const removeWordFromWordList = (
    wordToRemove: string,
    words: string[],
  ): string[] => {
    const updatedWords = words.filter((word) => word !== wordToRemove);

    return updatedWords;
  };

  /** Esta función establece el índice de la nueva palabra al azar */
  const randomWordIndex = (words: string[]): number => {
    const newWordIndex = Math.round(Math.random() * (words.length - 1));

    return newWordIndex;
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
      const updatedWords = removeWordFromWordList(
        state.currentWord,
        state.words,
      );

      const newWordIndex = randomWordIndex(updatedWords);

      return {
        ...state,
        currentWord: updatedWords[newWordIndex],
        guess: "",
        points: updatedPoints,
        scrambledWord: scrambleWord(updatedWords[newWordIndex]),
        words: updatedWords,
      };
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state;

      const updatedWords = removeWordFromWordList(
        state.currentWord,
        state.words,
      );
      const newWordIndex = randomWordIndex(updatedWords);

      return {
        ...state,
        currentWord: updatedWords[newWordIndex],
        guess: "",
        scrambledWord: scrambleWord(updatedWords[newWordIndex]),
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
      };
    }

    // case "RESTART_GAME": {
    //   const restartedWords = shuffleArray(state.preEstablishedWords);
    //   const newWordIndex = randomWordIndex(restartedWords);

    //   return {
    //     ...state,
    //     currentWord: restartedWords[newWordIndex],
    //     errorCounter: 0,
    //     guess: "",
    //     isGameOver: false,
    //     points: 0,
    //     scrambledWord: scrambleWord(restartedWords[newWordIndex]),
    //     skipCounter: 0,
    //     words: restartedWords,
    //   };
    // }
    case "RESTART_GAME":
      return action.payload;
  }
}
