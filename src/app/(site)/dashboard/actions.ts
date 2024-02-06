"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createRouteHandlerClient({ cookies });

export async function getContinents() {
const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase.from("continents").select("*")
  console.log("res continents", data);

  if (error) {
    console.log("res continents", error);

    return {
      error: true,
      data: false,
    };
  } else {
    return {
      error: false,
      data: data,
    };
  }
}
export async function getCountries() {
const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase.from("countries").select("*")
  console.log("res countries", data);

  if (error) {
    console.log("res countries", error);

    return {
      error: true,
      data: false,
    };
  } else {
    return {
      error: false,
      data: data,
    };
  }
}
export async function getProducts(country_id:any) {
const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase.from("products").select("*").eq('country_id',country_id)
  console.log("res products", data);

  if (error) {
    console.log("res products", error);

    return {
      error: true,
      data: false,
    };
  } else {
    return {
      error: false,
      data: data,
    };
  }
}
export const signOut = async()=>{
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.signOut()    
}