import Field from "./field";
import { BoardContainer, BoardGrid } from "./Board.styled";

type PropsType = {
  boardState: string[][];
  handleMove: (x: number, y: number) => void;
};

const Board = ({ boardState, handleMove }: PropsType) => {
  return (
    <BoardContainer>
      <BoardGrid>
        {boardState.map((row, i) =>
          row.map((fieldValue, j) => (
              <Field
                fieldValue={fieldValue}
                arrayXIndex={i}
                arrayYIndex={j}
								handleMove={handleMove}
                key={Math.random()}
              />
          ))
        )}
      </BoardGrid>
    </BoardContainer>
  );
};

export default Board;
