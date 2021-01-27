export type ProjectType = {
  _id: string;
  name: string;
  url?: string;
  github?: string;
  completed: boolean;
  featured: boolean;
  description: string;
  status: Status;
};

export enum Status {
  Ongoing = 'ongoing',
  Planing = 'planing',
  Completed = 'completed'
}
