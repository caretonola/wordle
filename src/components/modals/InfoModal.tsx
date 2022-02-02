import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the WORD-LEH! in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.

        English words are accepted as guesses, but the answer will always be in Singlish!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" status="correct" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="A" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter M is in the word in the right spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="J" status="present" />
        <Cell value="A" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="H" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter H is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
