// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post, PrismaClient, Profile, User } from '@prisma/client';
const prisma = new PrismaClient();

type Data = {
  users: (
    User & {
      posts: Post[];
      profile: Profile | null;
    }
  )[] | null
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let r = (Math.random() + 1).toString(36).substring(2, 10);
  prisma.user.create({
    data: {
      name: r,
      email: `${r}@prisma.io`,
      posts: {
        create: { title: `Hello ${r}` },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
  .then((user) => {
    prisma.$disconnect();
    console.dir(user, { depth: null });
    res.status(200).json({ users: null });
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    res.status(400).json({ users: null });
  });
}
