import { pronounGroups } from "../data/pronouns";

// Is the term in any of the pronoun groups?
export function isPronoun(term: string): boolean {
  return pronounGroups.some((group) => group.some((pronoun) => pronoun === term || pronoun === term.toLowerCase()));
}
