import { isPronoun } from "./isPronoun";
import { findMatchingPronouns } from "./findMatchingPronouns";
import { Pronoun } from "../data/pronouns";
import { getTrimmedWord } from "./getTrimmedWord";

export function findTermInstances(text: string, terms: string): string[] {
  // The words of the text string
  const textWords: string[] = text.split(" ").map((word) => getTrimmedWord(word));

  // The terms to match/look for in the text
  const allTerms: string[] = terms.split(", ");
  // Remove any duplicate or repeated terms
  const uniqueTerms: Set<string> = new Set(allTerms);

  const mappedTerms: string[] = Array.from(uniqueTerms)
    .map((term) => {
      if (isPronoun(term)) {
        // Any matching pronouns which are within the text
        return findMatchingPronouns(term as Pronoun);
      }

      // Not a pronoun but the text has this term
      if (textWords.some((word) => word === term)) {
        return term;
      }

      // Term is not within text
      return [];
    })
    .flat();

  // Different pronouns may have been mapped to the same pronoun group
  const uniqueMappedTerms: Set<string> = new Set(mappedTerms);

  return textWords.filter((textWord) => Array.from(uniqueMappedTerms).some((term) => term === textWord));
}
