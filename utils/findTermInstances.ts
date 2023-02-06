import { isPronoun } from "./isPronoun";
import { findMatchingPronouns } from "./findMatchingPronouns";
import { Pronoun } from "../data/pronouns";
import { getTrimmedWord } from "./getTrimmedWord";

export function findTermInstances(text: string, terms: string): string[] {
  // The words of the text string
  const textWords: string[] = text.split(" ").map((word) => getTrimmedWord(word));
  const allTerms: string[] = terms.split(", ");

  const mappedTerms: string[] = allTerms
    .map((term) => {
      if (isPronoun(term)) {
        // Any matching pronouns which are within the text
        return findMatchingPronouns(term as Pronoun);
      }

      // Not a pronoun but the text has this term
      if (textWords.some((word) => word === term)) {
        return [term];
      }

      // Term is not within text
      return [];
    })
    .flat();

  return textWords.filter((textWord) => mappedTerms.some((term) => term === textWord));
}
