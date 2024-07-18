import { GameCell } from './gameCell'
import { GameInfo } from './gameInfo'
import ResetButon from './resetButon';
import { useGameState } from './useGameState';


export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell
  } = useGameState();

  return (
    <div className="font-sans flex flex-col items-center w-48 mx-auto my-[100px] p-5 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButon onClick={resetGame} />
    </div>
  )
}