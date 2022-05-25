export interface AuthUser {
  name: string;
  email: string;
  password: string; // TODO. that is not secure to keep password in runtime!
}
