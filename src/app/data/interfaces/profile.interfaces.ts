export interface IProfile {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  subscribers: IProfile[];
  description: string;
  stack: string[];
  avatarUrl: string | null;
}


