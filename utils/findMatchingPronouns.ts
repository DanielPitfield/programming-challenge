import { PronounGroup, pronounGroups } from "../data/pronouns";

export function findMatchingPronouns(term: string): string[] {
  const matchingGroup: PronounGroup | undefined = pronounGroups.find((group) =>
    group.pronouns.some((pronoun) => pronoun === term)
  );

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return matchingGroup.pronouns;
}
