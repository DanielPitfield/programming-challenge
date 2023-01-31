import { PronounGroup, pronounGroups } from "../data/pronouns";
import { isPronoun } from "./isPronoun";

export function findTermInstances(text: string, terms: string): string[] {
  const allTerms: string[] = terms.split(", ");

  return allTerms
    .map((term) => {
      // The term is a pronoun
      if (isPronoun(term)) {
        // Find the group of matching pronouns
        const matchingGroup: PronounGroup | undefined = pronounGroups.find((group) =>
          group.pronouns.some((pronoun) => pronoun === term)
        );

        if (!matchingGroup) {
          return [];
        }

        // Return only those which are within the text
        return matchingGroup.pronouns.filter((pronoun) => text.includes(pronoun));
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
