import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email"),
  password: varchar("password"),
  status: boolean("status").default(true).notNull(),
});

export type Users = InferModel<typeof usersTable>;
export type NewUsers = InferModel<typeof usersTable, "insert">; // insert type

// export const db = drizzle(sql);

// import {
//   pgTable,
//   serial,
//   text,
//   varchar,
//   timestamp,
//   boolean,
// } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import { InferModel } from "drizzle-orm";
// import { sql } from "@vercel/postgres";

export const todoTable = pgTable("todo", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: varchar("description"),
  status: boolean("status").default(true).notNull(),
});

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type

export const db = drizzle(sql);
