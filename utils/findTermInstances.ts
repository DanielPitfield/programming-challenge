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
        // TODO: Clean/trim textWords (split by space delimiter and can contain other punctuation)
        return textWords.filter(word => findMatchingPronouns(term as Pronoun).some(pronoun => pronoun === word));
      }

      // Not a pronoun but the text has this term
      if (textWords.some((word) => word === term)) {
        return textWords.filter((word) => word === term);
      }

      // Term is not within text
      return [];
    })
    .flat();
}
