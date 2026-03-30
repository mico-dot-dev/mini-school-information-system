export const Role = {
  SuperAdmin: "SuperAdmin",
  Admin: "Admin",
  Encoder: "Encoder",
} as const;

export type Role = (typeof Role)[keyof typeof Role];
