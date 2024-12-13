import { supabase } from "@/lib/createSupabase";

export const fetchProjects = async (userId?: string) => {
  if (!userId) return;
  try {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*")
      .eq("admin_id", userId);
    if (error) throw error;
    return projects;
  } catch (e) {
    console.log(e);
  }
};
