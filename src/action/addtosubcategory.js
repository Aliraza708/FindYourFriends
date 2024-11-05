"use server";

import { revalidatePath } from "next/cache";

export const addSubCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URI}api/subcategories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("SubCategory added successfully");
    revalidatePath("/admin/subcategories");
  }
};

export const getSubCategories = async (category) => {
  try {
    let url;
  if (category) {
    url = `${process.env.BASE_URI}api/subcategories?catgories=${category}`;
  } else {
    url = `${process.env.BASE_URI}api/subcategories`;
  }
  
  let subcategories = await fetch(url,{
    cache : "no-cache"
  });
    subcategories = await subcategories.json();
    return subcategories.subcatgories;
  } catch (error) {
      console.error("Error fetching subcategories:", error);
  }
};
