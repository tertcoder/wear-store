import supabase from "./supabase";

export async function loginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function signupApi({
  firstname,
  lastname,
  email,
  password,
}: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstname,
        lastname,
      },
    },
  });

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function logoutApi() {
  supabase.auth.signOut;
}
