export type PronounGroup = { name: string; pronouns: string[] };

export const pronounGroups: PronounGroup[] = [
  { name: "firstPersonSingular", pronouns: ["I", "me", "my", "mine", "myself"] },
  { name: "firstPersonPlural", pronouns: ["we", "us", "our", "ours", "ourselves"] },
  { name: "secondPersonSingular", pronouns: ["you", "your", "yourself"] },
];
