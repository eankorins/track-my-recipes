import { createRouter } from "./context";
import { z } from "zod";
import { rule } from "postcss";

export const userRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      try {
        return await ctx.prisma.user.findMany({
          select: {
            name: true,
            email: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
      email: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        await ctx.prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
