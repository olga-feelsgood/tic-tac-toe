import { GameSymbol } from './gameSymbol'
import { clsx } from 'clsx'

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-grey-400 m-0 flex items-center justify-center bg-transparent text-xl",
        isWinner & "bg-red-200"
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}