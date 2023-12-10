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
  // const { data, error } = await supabase.from("shoes").select("*").limit(6);
  const { data, error } = await supabase
    .from("shoes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error(error);
    throw new Error("Products cannot be loaded!");
  }
  return data;
}
export async function getLatestShoe(): Promise<shoesInterface[]> {
  const { data, error } = await supabase
    .from("shoes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error(error);
    throw new Error("Latest Product cannot be loaded!");
  }

  return data;
}

export async function getBrands() {
  const { data, error } = await supabase.from("brands").select("*");

  if (error) {
    console.error(error);
    throw new Error("Brands cannot be loaded!");
  }

  return data;
}
