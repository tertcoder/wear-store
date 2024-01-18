import supabase from "./supabase";

interface CartInterface {
  id: string;
  added_at: Date;
  user_id: string;
  shoe_id: string;
}

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

export async function loadInCart(): Promise<CartInterface[]> {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData!.user!.id;
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Cart items cannot be loaded!");

  return data;
}
