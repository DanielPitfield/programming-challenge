export const pronounGroups = [
  ["I", "me", "my", "mine", "myself"],
  ["we", "us", "our", "ours", "ourselves"],
  ["you", "your", "yourself"],
] as const;

export type Pronoun = typeof pronounGroups[number][number];

export const caseSensitivePronouns: Pronoun[] = ["I"]