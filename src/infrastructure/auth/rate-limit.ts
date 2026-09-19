// ponytail: per-process limits suit one server; use shared storage before running multiple replicas.
const attempts = new Map<string, { count: number; until: number }>();

export function allowAuthAttempt(key: string, now = Date.now()) {
  for (const [id, attempt] of attempts)
    if (attempt.until <= now) attempts.delete(id);
  const attempt = attempts.get(key);
  if (attempt) return ++attempt.count <= 8;
  if (attempts.size >= 10000) return false;
  attempts.set(key, { count: 1, until: now + 15 * 60 * 1000 });
  return true;
}
