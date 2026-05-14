import type { MainRepo } from "@/components/data/repos";

export type LanguageStat = {
  name: string;
  bytes: number;
  pct: number;
  color: string;
};

export type RepoWithLanguages = MainRepo & {
  languages: LanguageStat[];
  /** false si el fetch falló o el repo no devolvió lenguajes. */
  ok: boolean;
};

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  "C#": "#178600",
  Java: "#b07219",
  Python: "#3572a5",
  Astro: "#ff5a03",
  Handlebars: "#f7931e",
  PHP: "#4f5d95",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Vue: "#41b883",
  Pascal: "#e3f171",
};

export function getColorForLanguage(name: string): string {
  return LANGUAGE_COLORS[name] ?? "var(--portfolio-accent)";
}

/**
 * Pide los lenguajes de un repo a la API de GitHub.
 * Nunca lanza: ante token ausente, repo privado, 404 o error de red
 * devuelve `{}` para que el build no se rompa.
 */
async function fetchRepoLanguages(
  slug: string
): Promise<Record<string, number>> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`https://api.github.com/repos/${slug}/languages`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return {};
    return (await res.json()) as Record<string, number>;
  } catch {
    return {};
  }
}

export async function getReposWithLanguages(
  repos: MainRepo[]
): Promise<RepoWithLanguages[]> {
  return Promise.all(
    repos.map(async (repo) => {
      const raw = await fetchRepoLanguages(repo.slug);
      const total = Object.values(raw).reduce((a, b) => a + b, 0);
      const languages: LanguageStat[] =
        total === 0
          ? []
          : Object.entries(raw)
              .map(([name, bytes]) => ({
                name,
                bytes,
                pct: (bytes / total) * 100,
                color: getColorForLanguage(name),
              }))
              .sort((a, b) => b.bytes - a.bytes);
      return { ...repo, languages, ok: total > 0 };
    })
  );
}
