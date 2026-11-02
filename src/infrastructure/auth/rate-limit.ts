// ponytail: per-process limits suit one server; use shared storage before running multiple replicas.
const attempts = new Map<string, { count: number; until: number }>();

export type RateLimit = { max: number; windowMs: number };

const authLimit: RateLimit = { max: 8, windowMs: 15 * 60 * 1000 };
export const waitlistLimit: RateLimit = { max: 5, windowMs: 10 * 60 * 1000 };

export function allowAttempt(
  key: string,
  { max, windowMs }: RateLimit,
  now = Date.now(),
) {
  for (const [id, attempt] of attempts)
    if (attempt.until <= now) attempts.delete(id);
  const attempt = attempts.get(key);
  if (attempt) return ++attempt.count <= max;
  if (attempts.size >= 10000) return false;
  attempts.set(key, { count: 1, until: now + windowMs });
  return true;
}

export function allowAuthAttempt(key: string, now = Date.now()) {
  return allowAttempt(`auth:${key}`, authLimit, now);
}
