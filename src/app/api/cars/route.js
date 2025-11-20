import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/data/cars.json");
  const data = await fs.readFile(filePath, "utf8");
  const cars = JSON.parse(data);

  return Response.json(cars);
}
