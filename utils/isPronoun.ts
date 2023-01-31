import { caseSensitivePronouns, pronounGroups } from "../data/pronouns";

// Is the term in any of the pronoun groups?
export function isPronoun(term: string): boolean {
  const newTerm: string = caseSensitivePronouns.some((pronoun) => pronoun === term) ? term : term.toLowerCase();
  return pronounGroups.some((group) => group.some((pronoun) => pronoun === newTerm));
}
