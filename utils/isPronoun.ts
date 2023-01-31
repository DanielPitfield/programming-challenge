import { pronounGroups } from "../data/pronouns";
import { getCaseSensitiveTerm } from "./getCaseSensitiveTerm";

// Is the term in any of the pronoun groups?
export function isPronoun(term: string): boolean {
  return pronounGroups.some((group) => group.some((pronoun) => pronoun === getCaseSensitiveTerm(term)));
}
