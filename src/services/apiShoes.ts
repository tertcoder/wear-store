import { shoesInterface } from "../utils/data";
import supabase from "./supabase";

export async function getAllShoes(): Promise<shoesInterface[]> {
  const { data, error } = await supabase.from("shoes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products cannot be loaded!");
  }
  return data;
}

export async function getShoesForHomePage(): Promise<shoesInterface[]> {
  const { data, error } = await supabase
    .from("shoes")
    .select("*")
    .order("random", { referencedTable: "shoes", ascending: false })
    .limit(6);

  if (error) {
    console.error(error);
    throw new Error("Products cannot be loaded!");
  }
  return data;
}
