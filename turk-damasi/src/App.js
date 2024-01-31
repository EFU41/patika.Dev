import React, { useState, useEffect } from "react";
import Board from "./components/Board";

const App = () => {
  const [squares, setSquares] = useState(intialState);
  const [blackStones, setBlackStones] = useState([]);
  const [whiteStones, setWhiteStones] = useState([]);
  const [player, setPlayer] = useState("white");
  const [selectdStone, setSelectdStone] = useState();
  const [whiteStonesMove, setWhiteStonesMove] = useState([]);
  const [blackStonesMove, setBlackStonesMove] = useState([]);
  const [selectdStoneMove, setSelectdStoneMove] = useState();
  console.log("seç", selectdStoneMove);
  const handleClick = (row, col, info) => {
    /////////////OYNANILACAK TAŞI SEÇME /////////////////////////////
    console.log("row:", row, "col:", col, "info:", info);

    const isWhitePlayer = player === "white";
    const isBlackPlayer = player === "black";
    const isWhiteStone = info[0].value === "stone_white";
    const isBlackStone = info[0].value === "stone_black";

    if ((isWhitePlayer && isWhiteStone) || (isBlackPlayer && isBlackStone)) {
      setSelectdStone({
        row,
        col,
        value: info[0].value,
        status: info[0].status,
      });
    } else {
      setSelectdStone();
    }

    const stonesMove = isWhitePlayer ? whiteStonesMove : blackStonesMove;

    if (stonesMove.length > 0) {
      if (stonesMove.some((move) => move.row === row && move.col === col)) {
        console.log("oynaması zorunlu taşı seçti");
        // Burada setSelectStone veya başka bir işlem yapabilirsiniz.
      } else {
        setSelectdStone();
      }
    }

    /////////////////////SEÇİLEN TAŞIN HAREKET ALANI //////////////////////////
    if (player === "white" && info[0].value === "stone_white") {
      if (info[0].value !== "stone_none") {
        let rightValue, leftValue, topValue, bottomValue;
        let rightValue2, leftValue2, topValue2, bottomValue2;

        // Sağ kontrolü
        if (col + 1 < squares[row].length) {
          rightValue = squares[row][col + 1][0].value;
        }

        // Sol kontrolü
        if (col - 1 >= 0) {
          leftValue = squares[row][col - 1][0].value;
        }

        // Üst kontrolü
        if (row - 1 >= 0) {
          topValue = squares[row - 1][col][0].value;
        }

        // Alt kontrolü
        if (row + 1 < squares.length) {
          bottomValue = squares[row + 1][col][0].value;
        }

        ///// arkaları/////
        // Sağ kontrolü
        if (col + 1 < squares[row].length - 1) {
          rightValue2 = squares[row][col + 2][0].value;
        }

        // Sol kontrolü
        if (col - 1 >= 1) {
          leftValue2 = squares[row][col - 2][0].value;
        }

        // Üst kontrolü
        if (row - 1 >= 1) {
          topValue2 = squares[row - 2][col][0].value;
        }

        // Alt kontrolü
        if (row + 1 < squares.length - 1) {
          bottomValue2 = squares[row + 2][col][0].value;
        }

        let a = [];
        let b = [];

        if (player === "white") {
          // Sağ
          if (rightValue === "stone_none") {
            a.push({
              row: row,
              col: col + 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Sol
          if (leftValue === "stone_none") {
            a.push({
              row: row,
              col: col - 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Üst

          if (topValue === "stone_none") {
            a.push({
              row: row - 1,
              col: col,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }
          //////////////////// yenecek taş varsa ////////////////
          if (rightValue === "stone_black") {
            if (rightValue2 === "stone_none") {
              b.push({
                row: row,
                col: col + 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (leftValue === "stone_black") {
            if (leftValue2 === "stone_none") {
              b.push({
                row: row,
                col: col - 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (topValue === "stone_black") {
            if (topValue2 === "stone_none") {
              b.push({
                row: row - 2,
                col: col,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          setSelectdStoneMove();
          if (b.length === 0) {
            setSelectdStoneMove(a);
          } else {
            setSelectdStoneMove(b);
          }
        } else {
          // Sağ

          if (rightValue === "stone_none") {
            a.push({
              row: row,
              col: col + 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Sol
          if (leftValue === "stone_none") {
            a.push({
              row: row,
              col: col - 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Alt
          if (bottomValue === "stone_none") {
            a.push({
              row: row + 1,
              col: col,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }
          //////////////////// yenecek taş varsa ////////////////
          if (rightValue === "stone_white") {
            if (rightValue2 === "stone_none") {
              b.push({
                row: row,
                col: col + 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }

          if (leftValue === "stone_white") {
            if (leftValue2 === "stone_none") {
              b.push({
                row: row,
                col: col - 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (bottomValue === "stone_white") {
            if (bottomValue2 === "stone_none") {
              b.push({
                row: row + 2,
                col: col,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }

          setSelectdStoneMove();
          if (b.length === 0) {
            setSelectdStoneMove(a);
          } else {
            setSelectdStoneMove(b);
          }
        }
      }
    } else if (info[0].value === "stone_black" && player === "black") {
      if (info[0].value !== "stone_none") {
        let rightValue, leftValue, topValue, bottomValue;
        let rightValue2, leftValue2, topValue2, bottomValue2;

        // Sağ kontrolü
        if (col + 1 < squares[row].length) {
          rightValue = squares[row][col + 1][0].value;
        }

        // Sol kontrolü
        if (col - 1 >= 0) {
          leftValue = squares[row][col - 1][0].value;
        }

        // Üst kontrolü
        if (row - 1 >= 0) {
          topValue = squares[row - 1][col][0].value;
        }

        // Alt kontrolü
        if (row + 1 < squares.length) {
          bottomValue = squares[row + 1][col][0].value;
        }

        ///// arkaları/////
        // Sağ kontrolü
        if (col + 1 < squares[row].length - 1) {
          rightValue2 = squares[row][col + 2][0].value;
        }

        // Sol kontrolü
        if (col - 1 >= 1) {
          leftValue2 = squares[row][col - 2][0].value;
        }

        // Üst kontrolü
        if (row - 1 >= 1) {
          topValue2 = squares[row - 2][col][0].value;
        }

        // Alt kontrolü
        if (row + 1 < squares.length - 1) {
          bottomValue2 = squares[row + 2][col][0].value;
        }

        let a = [];
        let b = [];

        if (player === "white") {
          // Sağ
          if (rightValue === "stone_none") {
            a.push({
              row: row,
              col: col + 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Sol
          if (leftValue === "stone_none") {
            a.push({
              row: row,
              col: col - 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Üst

          if (topValue === "stone_none") {
            a.push({
              row: row - 1,
              col: col,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }
          //////////////////// yenecek taş varsa ////////////////
          if (rightValue === "stone_black") {
            if (rightValue2 === "stone_none") {
              b.push({
                row: row,
                col: col + 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (leftValue === "stone_black") {
            if (leftValue2 === "stone_none") {
              b.push({
                row: row,
                col: col - 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (topValue === "stone_black") {
            if (topValue2 === "stone_none") {
              b.push({
                row: row - 2,
                col: col,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          setSelectdStoneMove();
          if (b.length === 0) {
            setSelectdStoneMove(a);
          } else {
            setSelectdStoneMove(b);
          }
        } else {
          // Sağ

          if (rightValue === "stone_none") {
            a.push({
              row: row,
              col: col + 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Sol
          if (leftValue === "stone_none") {
            a.push({
              row: row,
              col: col - 1,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }

          // Alt
          if (bottomValue === "stone_none") {
            a.push({
              row: row + 1,
              col: col,
              // Diğer bilgileri de ekleyebilirsiniz
            });
          }
          //////////////////// yenecek taş varsa ////////////////
          if (rightValue === "stone_white") {
            if (rightValue2 === "stone_none") {
              b.push({
                row: row,
                col: col + 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }

          if (leftValue === "stone_white") {
            if (leftValue2 === "stone_none") {
              b.push({
                row: row,
                col: col - 2,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }
          if (bottomValue === "stone_white") {
            if (bottomValue2 === "stone_none") {
              b.push({
                row: row + 2,
                col: col,
                // Diğer bilgileri de ekleyebilirsiniz
              });
            }
          }

          setSelectdStoneMove();
          if (b.length === 0) {
            setSelectdStoneMove(a);
          } else {
            setSelectdStoneMove(b);
          }
        }
      }
    }

    //////////////////// TAŞI HAREKET ETTİRME //////////////// TAŞI YEME///////////////
    if (selectdStoneMove !== undefined && selectdStoneMove !== null) {
      // Eğer tıklanan hücre selectdStoneMove array'inde bulunan hücrelerden biriyle eşleşiyorsa devam et
      if (
        selectdStoneMove.some((move) => move.row === row && move.col === col)
      ) {
        if (selectdStone !== null && selectdStone !== undefined) {
          const newRowValue =
            squares[selectdStone.row][selectdStone.col][0].value;
          const newStatus =
            squares[selectdStone.row][selectdStone.col][0].status;
          const newRowValue2 = squares[row][col][0].value;
          const newStatus2 = squares[row][col][0].status;

          // Önce mevcut state'in bir kopyasını alalım
          const updatedState = squares.map((row) =>
            row.map((cell) => [...cell])
          );

          if (info[0].value === "stone_none") {
            // Değiştirmek istediğimiz elemanın bilgilerini güncelleyelim
            updatedState[row][col][0].value = newRowValue;
            updatedState[row][col][0].status = newStatus;
            updatedState[selectdStone.row][selectdStone.col][0].value =
              newRowValue2;
            updatedState[selectdStone.row][selectdStone.col][0].status =
              newStatus2;

            /////////// STONES EAT /////////////////
            const eatStones = (start, end, axis) => {
              let consecutiveStones = 0;

              for (let i = start + 1; i < end; i++) {
                if (
                  squares[axis === "col" ? row : i][axis === "col" ? i : col][0]
                    .value === "stone_white" ||
                  squares[axis === "col" ? row : i][axis === "col" ? i : col][0]
                    .value === "stone_black"
                ) {
                  consecutiveStones++;
                }
              }

              if (consecutiveStones >= 2) {
                console.log("en az iki taş var");
              } else {
                for (let i = start + 1; i < end; i++) {
                  // Belirli bir koşulu sağlayan hücreleri silmek için sadece sütunu güncelle
                  squares[axis === "col" ? row : i][
                    axis === "col" ? i : col
                  ][0].value = "stone_none";
                  squares[axis === "col" ? row : i][
                    axis === "col" ? i : col
                  ][0].status = null;
                }
              }
            };

            // sağa giderken silme
            if (selectdStone.row === row && selectdStone.col < col) {
              eatStones(selectdStone.col, col, "col");
            }

            // sola giderken silme
            if (selectdStone.row === row && selectdStone.col > col) {
              eatStones(col, selectdStone.col, "col");
            }

            // Aşağı giderken silme
            if (selectdStone.col === col && selectdStone.row < row) {
              eatStones(selectdStone.row, row, "row");
            }

            // yukarı giderken silme
            if (selectdStone.col === col && selectdStone.row > row) {
              eatStones(row, selectdStone.row, "row");
            }

            setSquares(updatedState);
            setSelectdStone();
            setSelectdStoneMove();

            if (player === "white") {
              setPlayer("black");
            } else {
              setPlayer("white");
            }
          }
        }
      }
    }

    /////////// WHİTE STONES THAT MUST BE MOVED ////////////////////////////////

    const resultWhiteStones = whiteStones.filter((whiteStone) => {
      // whiteStone'nun row ve col bilgilerini al
      const { row: whiteRow, col: whiteCol } = whiteStone;

      // Belirli bir kritere göre kontrol et (örneğin, sağında, solunda, önünde veya arkasında bir blackStone olup olmadığını kontrol etme)
      const isConditionMet = blackStones.some((blackStone) => {
        // blackStone'nun row ve col bilgilerini al
        const { row: blackRow, col: blackCol } = blackStone;

        // Karşılaştırma kriterini burada belirleyin (örneğin, sağında, solunda, önünde veya arkasında bir blackStone olup olmadığını kontrol etme)
        const isRightOfBlackStone =
          whiteRow === blackRow && whiteCol === blackCol - 1;
        const isLeftOfBlackStone =
          whiteRow === blackRow && whiteCol === blackCol + 1;
        const isAboveBlackStone =
          whiteRow === blackRow + 1 && whiteCol === blackCol;
        const isBelowBlackStone =
          whiteRow === blackRow - 1 && whiteCol === blackCol;

        return (
          isRightOfBlackStone ||
          isLeftOfBlackStone ||
          isAboveBlackStone ||
          isBelowBlackStone
        );
      });

      // Belirli bir kritere göre kontrol edilen whiteStone'ları seç
      return isConditionMet;
    });

    setWhiteStonesMove(resultWhiteStones);

    //////////////////// BLACK STONES THAT MUST BE MOVED //////////////////////////////////

    const resultBlackStones = blackStones.filter((blackStone) => {
      // whiteStone'nun row ve col bilgilerini al
      const { row: whiteRow, col: whiteCol } = blackStone;

      // Belirli bir kritere göre kontrol et (örneğin, sağında, solunda, önünde veya arkasında bir blackStone olup olmadığını kontrol etme)
      const isConditionMet = whiteStones.some((whiteStone) => {
        // blackStone'nun row ve col bilgilerini al
        const { row: blackRow, col: blackCol } = whiteStone;

        // Karşılaştırma kriterini burada belirleyin (örneğin, sağında, solunda, önünde veya arkasında bir blackStone olup olmadığını kontrol etme)
        const isRightOfBlackStone =
          whiteRow === blackRow && whiteCol === blackCol - 1;
        const isLeftOfBlackStone =
          whiteRow === blackRow && whiteCol === blackCol + 1;
        const isAboveBlackStone =
          whiteRow === blackRow + 1 && whiteCol === blackCol;
        const isBelowBlackStone =
          whiteRow === blackRow - 1 && whiteCol === blackCol;

        return (
          isRightOfBlackStone ||
          isLeftOfBlackStone ||
          isAboveBlackStone ||
          isBelowBlackStone
        );
      });

      // Belirli bir kritere göre kontrol edilen whiteStone'ları seç
      return isConditionMet;
    });

    setBlackStonesMove(resultBlackStones);
  };

  useEffect(() => {
    //siyah taşların konumu
    const blackStonesData = squares.flatMap((row, rowIndex) => {
      return row
        .flatMap((square, colIndex) => {
          if (square[0].value === "stone_black") {
            // Eğer değer "stone_white" ise, ilgili bilgilerle bir nesne oluştur
            return {
              row: rowIndex,
              col: colIndex,
              value: square[0].value,
              status: square[0].status,
            };
          } else {
            // Eğer değer "stone_white" değilse, null değeri döndür
            return null;
          }
        })
        .filter(Boolean); // null değerleri filtrele
    });

    setBlackStones(blackStonesData);
    // Beyaz taşların konumu
    const whiteStonesData = squares.flatMap((row, rowIndex) => {
      return row
        .flatMap((square, colIndex) => {
          if (square[0].value === "stone_white") {
            // Eğer değer "stone_white" ise, ilgili bilgilerle bir nesne oluştur
            return {
              row: rowIndex,
              col: colIndex,
              value: square[0].value,
              status: square[0].status,
            };
          } else {
            // Eğer değer "stone_white" değilse, null değeri döndür
            return null;
          }
        })
        .filter(Boolean); // null değerleri filtrele
    });

    setWhiteStones(whiteStonesData);

    //////Zorun TAŞ OYNAM KONTROLÜ /////////////
    if (
      selectdStone !== undefined &&
      selectdStone !== null &&
      whiteStonesMove.length > 0 &&
      player === "white"
    ) {
      if (
        whiteStonesMove.some(
          (move) =>
            move.row === selectdStone.row && move.col === selectdStone.col
        )
      ) {
        console.log("Doğru taşı seçtiniz.");
        // Burada setSelectStone veya başka bir işlem yapabilirsiniz.
      } else {
        console.log("oynama zorunlu taşınız var");
        setSelectdStone();
        setSelectdStoneMove();
      }
    }

    ////////// DAMA TAŞINA DÖNÜŞ ////////////
  }, [squares, selectdStone, whiteStonesMove, player]);

  return (
    <div className="App">
      <h1>Türk Daması Oyunu</h1>
      <Board
        squares={squares}
        onClick={handleClick}
        selectedStoneMove={selectdStoneMove}
      />
    </div>
  );
};

export default App;

const intialState = [
  [
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
  ],
  [
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
  ],
  [
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
    [{ cell: false, value: "stone_black", status: true }],
    [{ cell: true, value: "stone_black", status: true }],
  ],
  [
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
  ],
  [
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
  ],
  [
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
  ],
  [
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
    [{ cell: false, value: "stone_white", status: true }],
    [{ cell: true, value: "stone_white", status: true }],
  ],
  [
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
    [{ cell: true, value: "stone_none", status: null }],
    [{ cell: false, value: "stone_none", status: null }],
  ],
];
