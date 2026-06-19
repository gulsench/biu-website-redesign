"use client";

import { useEffect, useState } from "react";
import { Tiles } from "./Tiles";

/**
 * Fixed viewport grid used site-wide. Matches the Hero tile wash with a
 * right-weighted mask so content stays readable on the left.
 */
const TILE = 48;

export function BoxedBackground() {
  // `cols` (horizontal columns) and `rows` (vertical tiles per column) sized
  // to fully cover the viewport, with a couple extra to avoid edge gaps.
  const [grid, setGrid] = useState({ cols: 30, rows: 18 });

  useEffect(() => {
    const updateGrid = () => {
      setGrid({
        cols: Math.ceil(window.innerWidth / TILE) + 2,
        rows: Math.ceil(window.innerHeight / TILE) + 2,
      });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_30%,black_85%)]"
      aria-hidden
    >
      <div className="pointer-events-auto flex h-full justify-end">
        <Tiles rows={grid.cols} cols={grid.rows} />
      </div>
    </div>
  );
}
