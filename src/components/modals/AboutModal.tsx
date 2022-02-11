import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the game Wordle 
        <a 
           href="https://github.com/shamayn/wordle"
           className="underline font-bold"> modified for Singlish
        </a> -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here. 
        </a>
        {' '} <br></br>
        <a 
          href="https://twitter.com/shamayn"
          className="underline font-bold">Sha-Mayn
        </a> ownself make one. With love.
      </p>

    </BaseModal>
  )
}
