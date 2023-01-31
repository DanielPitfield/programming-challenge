import { isPronoun } from "./isPronoun";
import { findMatchingPronouns } from "./findMatchingPronouns";

export function findTermInstances(text: string, terms: string): string[] {
  const allTerms: string[] = terms.split(", ");

  return allTerms
    .map((term) => {
      if (isPronoun(term)) {
        // Any matching pronouns which are within the text
        return findMatchingPronouns(term).filter((pronoun) => text.includes(pronoun));
      }

      // Not a pronoun but the text contains this term
      if (text.includes(term)) {
        return [term];
      }

      // Term is not within text
      return [];
    })
    .flat();
}
