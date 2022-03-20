import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="NASIL OYNANIR?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        HANDLE'ı tahmin et! 6 hakkın var. Her tahminden sonra, harflerin rengi
        tahmininin kelimeye ne kadar yakın olduğuna göre renk değiştrecek.
        Türkçe kelimeler tahmin olarak kabul edilecek ancak cevap her zaman
        Hande Erçel'le ilgili bir kelime olacak!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="M" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        K harfinin yeri cevapta da aynı yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ş" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="İ" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        R harfi cevapta var ancak şu an yanlış yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="S" />
        <Cell isRevealing={true} isCompleted={true} value="İ" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        İ harfi cevabın herhangi bir yerinde yok.
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Her gün yeni bir HANDLE kelimesi bul!
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a href="https://twitter.com/shamayn" className="underline font-bold">
          @shamayn
        </a>{' '}
        ownself make one. Inspired by{' '}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline font-bold"
        >
          Wordle
        </a>
        .
      </p>
    </BaseModal>
  )
}
