import { caseSensitivePronouns, Pronoun, pronounGroups } from "../data/pronouns";

export function findMatchingPronouns(term: string): readonly Pronoun[] {
  const newTerm: string = caseSensitivePronouns.some((pronoun) => pronoun === term) ? term : term.toLowerCase();
  const matchingGroup = pronounGroups.find((group) => group.some((pronoun) => pronoun === newTerm));

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return matchingGroup;
}
