import { pronounGroups } from "../data/pronouns";

// Is the term in any of the pronoun groups?
export function isPronoun(term: string): boolean {
  return pronounGroups.some((group) => group.pronouns.some((pronoun) => pronoun === term));
}
