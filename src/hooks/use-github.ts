import { useQuery } from "@tanstack/react-query";

const USERNAME = "itsatefe";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics: string[];
};

export type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30&type=owner`,
  );
  if (!res.ok) throw new Error("GitHub API error");
  return res.json();
}

async function fetchUser(): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`);
  if (!res.ok) throw new Error("GitHub API error");
  return res.json();
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 15,
  });
}

export function useGitHubUser() {
  return useQuery({
    queryKey: ["github-user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 15,
  });
}

export type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

async function fetchContributions(year: number | "last"): Promise<Contribution[]> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`,
  );
  if (!res.ok) throw new Error("GitHub contributions API error");
  const data = await res.json();
  return data.contributions as Contribution[];
}

export function useGitHubContributions(year: number | "last") {
  return useQuery({
    queryKey: ["github-contributions", year],
    queryFn: () => fetchContributions(year),
    staleTime: 1000 * 60 * 30,
  });
}
