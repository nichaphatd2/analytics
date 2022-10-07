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
  prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  .then((users) => {
    prisma.$disconnect();
    console.dir(users, { depth: null });
    res.status(200).json({ users });
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    res.status(400).json({ users: null });
  });
}
