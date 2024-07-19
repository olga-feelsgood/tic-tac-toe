import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  //  массив cells - текущее состояние игрового поля
  // например, const cells = ['X', null, 'O','X', 'O', null,'X', null, 'O']
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      //Ячейка с индексом a заполнена (не равна null или undefined).
      //Ячейка с индексом a содержит такое же значение, как ячейки с индексами b и c.
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    ) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined; //отобразить символ победителя
  //ничья в игре, фильтрует массив cells, оставляя только ненулевые значения
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
  //проверяет, входит ли заданный индекс в массив winnerSequence
  const getWinnerCell = (index) => winnerSequence?.includes(index);

  //функция для обновления состояния игры после каждого хода
  const toggleCell = (index) => {
    //проверяет, есть ли уже значение в ячейке с указанным index или есть ли победитель игры
    if (cells[index] || winnerSequence) {
      return;
    }
    //иначе создаем еопию массива для иммутабельности
    const cellsCopy = cells.slice();
    //записываем в ячейку текущий ход
    cellsCopy[index] = currentStep;
    //проверяем, не появился ли победитель при обновленном масиве
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const resetGame = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  return {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    toggleCell,
    resetGame,
    getWinnerCell,
  };
}
