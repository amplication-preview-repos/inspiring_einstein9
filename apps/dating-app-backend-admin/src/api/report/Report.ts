export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reason: string | null;
  status?: "Option1" | null;
  reportedBy: string | null;
  reportedUser: string | null;
};
