import { PronounGroup, pronounGroups } from "../data/pronouns";

export function findMatchingPronouns(term: string): string[] {
  const newTerm: string = term === "I" ? term : term.toLowerCase();

  const matchingGroup: PronounGroup | undefined = pronounGroups.find((group) =>
    group.pronouns.some((pronoun) => pronoun === newTerm)
  );

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return matchingGroup.pronouns;
}
