import pool from "@/database/database";
import fs from "fs";
import path from "path";

export async function execute(
  fileName: string,
  params: any[] = []
) {
  const queryPath = path.join(
    __dirname,
    "..",
    "database",
    "queries",
    `${fileName}.sql`
  );

  const query = fs.readFileSync(queryPath, {
    encoding: "utf-8",
  });

  const { rows } = await pool.query(query, params);

  return rows;
}
