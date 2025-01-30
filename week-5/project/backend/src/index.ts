import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { cors } from "hono/cors";
import userRouter from "./routes/user";
import blogRouter from "./routes/blog";

// @ts-ignore
type Variable = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  message: string;
};

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variable: Variable;
}>();

app.use(cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/", async (c) => {
  return c.text("Hello Hono!");
});

export default app;
