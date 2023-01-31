import { Pronoun, pronounGroups } from "../data/pronouns";
import { getCaseSensitiveTerm } from "./getCaseSensitiveTerm";

export function findMatchingPronouns(term: string): readonly Pronoun[] {
  const matchingGroup = pronounGroups.find((group) => group.some((pronoun) => pronoun === getCaseSensitiveTerm(term)));

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return matchingGroup;
}
