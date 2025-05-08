export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
  response: string;
  createdAt: Date;
  status: "pending" | "resolved" | "archived";
  updatedAt: Date;
  isRead: boolean;
  isReplied: boolean;
  isArchived: boolean;
  isDeleted: boolean;
}
