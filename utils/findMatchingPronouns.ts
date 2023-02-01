import { caseSensitivePronouns, Pronoun, pronounGroups } from "../data/pronouns";

/* TODO: Alternative case
Don't assume pronouns are always specified as lowercase in the data structure
If the pronoun is specified as uppercase but is not case sensitive, map to lower case and vice versa
*/
function getUpperCasePronouns(pronouns: readonly Pronoun[]): string[] {
  return (
    pronouns
      // Pronouns are readonly, so make a copy
      .slice()
      // Only those which are NOT case sensitive
      .filter((pronoun) => !caseSensitivePronouns.some((x) => x === pronoun))
      // Capitalise first letter
      .map((pronoun) => `${pronoun[0].toUpperCase()}${pronoun.substring(1)}`)
  );
}

export function findMatchingPronouns(pronoun: Pronoun): string[] {
  const matchingGroup: readonly Pronoun[] | undefined = pronounGroups.find((group) =>
    group.some((x) => x === pronoun || x === pronoun.toLowerCase())
  );

  // If the term couldn't be found within a group
  if (!matchingGroup) {
    return [];
  }

  // All matching pronouns
  return (matchingGroup.slice() as string[]).concat(getUpperCasePronouns(matchingGroup));
}
