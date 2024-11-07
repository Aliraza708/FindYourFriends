"use server";

export const getUsers = async () => {
  try {
      let users = await fetch(`${process.env.BASE_URI}api/users`,{
        cache : "no-cache"
      });
      users = await users.json();
      return users.users;
  } catch (error) {
      console.error("Error fetching users:", error);
  }
};