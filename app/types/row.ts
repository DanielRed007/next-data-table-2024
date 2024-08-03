export type Cell = {
  type: string;
  value: string | number | boolean;
};

export type Row = {
  [key: string]: Cell;
};
