import { Pronoun, pronounGroups } from "../data/pronouns";

export function findMatchingPronouns(pronoun: Pronoun): readonly Pronoun[] {
  const matchingGroup = pronounGroups.find((group) => group.some((x) => x === pronoun || x === pronoun.toLowerCase()));

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return matchingGroup;
}
