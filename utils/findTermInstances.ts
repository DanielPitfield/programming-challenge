import { isPronoun } from "./isPronoun";
import { findMatchingPronouns } from "./findMatchingPronouns";
import { Pronoun } from "../data/pronouns";

export function findTermInstances(text: string, terms: string): string[] {
  // The words of the text string
  const textWords: string[] = text.split(" ");
  const allTerms: string[] = terms.split(", ");

  return allTerms
    .map((term) => {
      if (isPronoun(term)) {
        // Any matching pronouns which are within the text
        return findMatchingPronouns(term as Pronoun).filter((pronoun) => textWords.some((word) => word === pronoun));
      }

      // Not a pronoun but the text has this term
      if (textWords.some((word) => word === term)) {
        return term;
      }

      // Term is not within text
      return [];
    })
    .flat();
}
