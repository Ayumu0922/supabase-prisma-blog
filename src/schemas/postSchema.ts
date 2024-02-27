import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, { message: "ユーザ名は2文字以上" }),
  title: z.string().min(2, { message: "タイトルは2文字以上" }),
  content: z
    .string()
    .min(2, { message: "内容は2文字以上" })
    .max(140, { message: "140文字以内" }),
});
