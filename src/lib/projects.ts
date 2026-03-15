export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  slug: string;
}

export const PROJECTS: Project[] = [
  {
    id: "viona",
    name: "Viona",
    shortDescription: "Yapay zekâ destekli misafir deneyimi platformu",
    slug: "viona",
  },
];
