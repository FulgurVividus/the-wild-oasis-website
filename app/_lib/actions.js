"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

// signIn and signOut actions

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

// other actions

export async function updateGuestAction(formData) {
  const session = await auth();

  if (!session) {
    throw new Error(`You must be logged in`);
  }

  // specify the KEY, the one that was given as the "name" in the form
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error(`Please provide a valid national ID`);
  }

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
}