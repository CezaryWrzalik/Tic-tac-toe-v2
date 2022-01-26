import Field from "./field";

import classes from "./board.module.css";

type PropsType = {
  boardState: string[][];
  handleMove: (x: number, y: number) => void;
};

const Board = ({ boardState, handleMove }: PropsType) => {
  return (
    <div className={classes.boardBackground}>
      <div className={classes.boardGrid}>
        {boardState.map((row, i) =>
          row.map((fieldValue, j) => (
              <Field
                fieldValue={fieldValue}
                arrayXIndex={i}
                arrayYIndex={j}
								handlePlayerMove={handleMove}
                key={Math.random()}
              />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
