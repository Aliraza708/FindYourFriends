"use server";

import { revalidatePath } from "next/cache";

export const addSubCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URI}api/subcategories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Category added successfully");
    revalidatePath("/admin/subcategories");
  }
};

export const getSubCategories = async (Category) => {
  try {
    let url;
  if (Category) {
    url = `${process.env.BASE_URI}api/subcategories?category=${Category}`;
  } else {
    url = `${process.env.BASE_URI}api/subcategories`;
  }
  
  let subcategories = await fetch(url,{
    cache : "no-cache"
  });
    subcategories = await subcategories.json();
    console.log(subcategories,"<====")
    return subcategories.subcatgories;
  } catch (error) {
      console.error("Error fetching subcategories:", error);
  }
};
