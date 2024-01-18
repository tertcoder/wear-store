import supabase from "./supabase";

export async function insertInCart({
  shoe_id,
  user_id,
}: {
  user_id: string;
  shoe_id: string;
}) {
  const { error } = await supabase.from("cart").insert({ shoe_id, user_id });

  if (error) throw new Error("Not added to cart. Try again!");
}
