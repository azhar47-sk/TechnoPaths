import axiosInstance from './axiosInstance';

// Fetch All Projects
export const getProjects = async () => {
    const response = await axiosInstance.get("/api/projects");
    return response.data;
}

// Add a new project
export const addProject = async (projectData) => {
  const response = await axiosInstance.post("/api/projects", projectData);
  console.log(response.data);
  return response.data;
};