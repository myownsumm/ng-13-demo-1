export interface Repo {
  full_name: string;
  owner: object; // TODO. Specify Owner type
}

export interface ReposResponse {
  items: Repo[];
}
