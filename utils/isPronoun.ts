import { pronounGroups } from "../data/pronouns";

// Is the term in any of the pronoun groups?
export function isPronoun(term: string): boolean {
  const newTerm: string = term === "I" ? term : term.toLowerCase();

  return pronounGroups.some((group) => group.pronouns.some((pronoun) => pronoun === newTerm));
}
