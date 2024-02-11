import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getFeaturedReview() {
  const reviews = await getAllFiles();
  return reviews[0];
}

export async function getReviews(slug: string) {
  const text: any = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(text);
  const { title, date, image } = data;
  const body = marked(content);
  return { slug, title, date, image, body };
}

export async function getAllFiles() {
  const filesArr = await getStaticPages();
  const reviews = [];
  for (const filesArray of filesArr) {
    const review = await getReviews(filesArray);
    reviews.push(review);
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
}

export async function getStaticPages() {
  const files: any = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
