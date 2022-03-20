export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const WIN_MESSAGES = ['Wah Congrats!', 'Eh, Not Bad!', 'Steady Sia!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters leh'
export const WORD_NOT_FOUND_MESSAGE =
  'Word not found leh. Try English or Singlish'
export const HARD_MODE_ALERT_MESSAGE =
  'Cheem Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}. Dun give up, try again tomorrow!`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = ''
export const GUESS_DISTRIBUTION_TEXT = 'TAHMİN DAĞILIMI'
export const NEW_WORD_TEXT = 'Yeni kelimeye kalan süre'
export const SHARE_TEXT = 'Paylaş'
export const TOTAL_TRIES_TEXT = 'Toplam deneme'
export const SUCCESS_RATE_TEXT = 'Başarı oranı'
export const CURRENT_STREAK_TEXT = 'Galibiyet serisi'
export const BEST_STREAK_TEXT = 'En iyi galibiyet serisi'
export const DEFAULT_DEFINITION_TEXT = 'Her gün yeni bir Handle çözün!'
