"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/categories`, {
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
      let category = await fetch("http://localhost:3000/api/categories");
      category = await category.json();
      console.log("Fetched Category Array:", category);
      return category.categories;
  } catch (error) {
      console.error("Error fetching categories:", error);
  }
};
