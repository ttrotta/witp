import { z } from "zod";
import { isMeshId } from "@/shared/anatomy";

const meshId = z.string().refine(isMeshId);
const httpUrl = z.url({ protocol: /^https?$/ });

export const createPostSchema = z.object({
  title: z.string().trim().min(5).max(150),
  content: z.string().trim().min(20).max(10000),
  meshId,
  imageUrl: httpUrl.nullish(),
});

export const listPostsSchema = z.object({
  meshId: meshId.optional(),
  cursor: z.uuid().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  sort: z.enum(["recent", "top"]).default("recent"),
});

export const createCommentSchema = z.object({
  postId: z.uuid(),
  parentId: z.uuid().nullish(),
  content: z.string().trim().min(1).max(2000),
});

export const toggleLikeSchema = z
  .object({
    postId: z.uuid().nullish(),
    commentId: z.uuid().nullish(),
  })
  .refine(({ postId, commentId }) => Boolean(postId) !== Boolean(commentId));

export const createBlogEntrySchema = z.object({
  title: z.string().trim().min(10).max(200),
  content: z.string().trim().min(100).max(50000),
  // Tags are normalized here because Tag.name and BlogEntryTag are both unique.
  tags: z
    .array(z.string().trim().toLowerCase().min(2).max(30))
    .min(1)
    .max(10)
    .transform((tags) => [...new Set(tags)]),
  isPublic: z.boolean().default(true),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type ListPostsInput = z.infer<typeof listPostsSchema>;
export type CreateCommentInput = z.infer<typeof createCommentSchema>;
export type ToggleLikeInput = z.infer<typeof toggleLikeSchema>;
export type CreateBlogEntryInput = z.infer<typeof createBlogEntrySchema>;
