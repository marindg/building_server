import pool from "@/database/database";
import fs from "fs";
import path from "path";

interface IQueryProps {
  fileName: string;
  folder: string;
  params?: any;
}

export async function execute({
  fileName,
  folder,
  params,
}: IQueryProps) {
  const queryPath = path.join(
    __dirname,
    "..",
    "database",
    "queries",
    folder,
    `${fileName}.sql`
  );

  const query = fs.readFileSync(queryPath, {
    encoding: "utf-8",
  });

  console.log(`querie: ${fileName}.sql`);

  const { rows } = await pool.query(query, params);

  return rows;
}
