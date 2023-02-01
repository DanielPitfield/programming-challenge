// The words of the text are split by a delimiter of " " and therefore sometimes end with punctuation
export function getTrimmedWord(word: string): string {
  // Pattern of anything that's not a digit, letter, whitespace (alphanumeric)
  const regex = /[^\w\s\'-]/g;

  return word.replaceAll(regex, "");
}
