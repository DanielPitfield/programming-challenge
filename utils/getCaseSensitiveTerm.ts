import { caseSensitivePronouns } from "../data/pronouns";

export function getCaseSensitiveTerm(term: string): string {
  return caseSensitivePronouns.some((pronoun) => pronoun === term) ? term : term.toLowerCase();
}
