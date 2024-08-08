import Ladder from "@/types/Ladder";
import getRowByUserIdAndTable from "./geRowByUserIdAndTable";

type RawLadder = Record<string, string | number | undefined> | null;

export default async function getLadderByUserId(
  userId: string
): Promise<Ladder | null> {
  const rawLadder = (await getRowByUserIdAndTable(
    userId,
    "ladders"
  )) as RawLadder;

  return normalizeRow(rawLadder);
}

function normalizeRow(row: RawLadder): Ladder | null {
  if (!row) {
    return null;
  }

  const newRow = JSON.parse(JSON.stringify(row));

  for (const key in newRow) {
    if (newRow.hasOwnProperty(key)) {
      const newKey = key.replace(/_([a-z])/g, (_match, letter) =>
        letter.toUpperCase()
      );
      console.log(newKey);
      newRow[newKey] = newRow[key];
      delete newRow[key];
    }
  }

  return newRow;
}
