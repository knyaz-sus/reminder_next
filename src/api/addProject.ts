export const addProject = async (name: string, userId?: string) => {
  try {
    if (!name || !userId) return;
    await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/projects/add`, {
      method: "post",
      credentials: "include",
    });
  } catch (e) {
    console.log(e);
  }
};
