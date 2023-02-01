// The words of the text are split by a delimiter of " " and therefore sometimes end with punctuation
export function getTrimmedWord(word: string): string {
  // What punctuation WITHIN words should be matched (and therefore kept)?
  const punctuationExceptions: string[] = ["-", "_"];
  // Pattern of anything that's not a digit, letter, whitespace (or included in the above exceptions)
  const regex = new RegExp(`[^\\w\\s\\${punctuationExceptions.join("")}]`, "g");

  return word.replaceAll(regex, "");
}
