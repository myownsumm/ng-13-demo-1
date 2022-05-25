export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
}

export interface Repo {
  full_name: string;
  owner: Owner;
}

export interface ReposResponse {
  items: Repo[];
}
