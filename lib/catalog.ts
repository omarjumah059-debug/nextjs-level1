export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  lessons: number;
};
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

export const courses: Course[] = [
  {
    slug: "nextjs-foundations",
    title: "Next.js Foundations",
    category: "Web Development",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 18,
    description: "Build pages, layouts and routes with the App Router.",
  },
  {
    slug: "typescript-for-ui",
    title: "TypeScript for UI",
    category: "Frontend",
    level: "Intermediate",
    duration: "3 weeks",
    lessons: 14,
    description:
      "Make components safer without making the code harder to read.",
  },
  {
    slug: "product-design-basics",
    title: "Product Design Basics",
    category: "Design",
    level: "Beginner",
    duration: "2 weeks",
    lessons: 10,
    description: "Turn a rough idea into a clear and useful interface.",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Starter notebook",
    price: 14,
    category: "Learning tools",
    stock: 24,
  },
  {
    id: 2,
    name: "Focus planner",
    price: 18,
    category: "Stationery",
    stock: 11,
  },
  { id: 3, name: "Course bundle", price: 49, category: "Digital", stock: 80 },
];

export function findCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
export function findProduct(id: number) {
  return products.find((product) => product.id === id);
}
