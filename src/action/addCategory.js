"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URI}api/categories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Category added successfully");
    revalidatePath("/admin/categories");
  }
};

export const getCategories = async () => {
  try {
      let category = await fetch(`${process.env.BASE_URI}api/categories`,{
        cache : "no-cache"
      });
      category = await category.json();
      return category.categories;
  } catch (error) {
      console.error("Error fetching categories:", error);
  }
};