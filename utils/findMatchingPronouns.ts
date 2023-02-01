import { caseSensitivePronouns, Pronoun, pronounGroups } from "../data/pronouns";

function getAlternativeCasePronouns(pronouns: readonly Pronoun[]): string[] {
  return (
    pronouns
      // Pronouns are readonly, so make a copy
      .slice()
      // Only those which are NOT case sensitive
      .filter((pronoun) => !caseSensitivePronouns.some((x) => x === pronoun))
      // Map to alternative casing
      .map((pronoun) => {
        // Is the pronoun specified as lower case in the data structure?
        const isPronounLowerCase: boolean = pronoun === pronoun.toLowerCase() && pronoun !== pronoun.toUpperCase();

        return isPronounLowerCase ? 
        // Capitalise first letter
        `${pronoun[0].toUpperCase()}${pronoun.substring(1)}`
        // Otherwise, convert to lower case
        : pronoun.toLowerCase();
      })
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
  return (matchingGroup.slice() as string[]).concat(getAlternativeCasePronouns(matchingGroup));
}
