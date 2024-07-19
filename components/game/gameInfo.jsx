import { GameSymbol } from "./gameSymbol";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="mb-2.5 text-xl leading-6">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2.5 text-xl leading-6">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2.5 text-xl leading-6">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
