export type UserStatus = "active" | "inactive" | "banned";

export type UserProfile = {
  name: string;
  email: string;
  age?: number;
};