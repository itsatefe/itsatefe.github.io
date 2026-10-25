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
