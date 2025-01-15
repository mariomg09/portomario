import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const experiences = await prisma.experience.findMany({
    include: {
      positions: true,
    },
  });
  const formattedExperiences = experiences.map((exp) => ({
    ...exp,
    tag: exp.tag.split(","),
  }));
  return new Response(JSON.stringify(formattedExperiences), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(req) {
  const { title, positions, image, tag, gitUrl, previewUrl } = await req.json();
  const newExperience = await prisma.experience.create({
    data: {
      title,
      positions: {
        create: positions,
      },
      image,
      tag: tag.join(","), // Convert tag array to comma-separated string
      gitUrl,
      previewUrl,
    },
  });
  return new Response(JSON.stringify(newExperience), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
