export interface IChatParams {
  primaryUser: number;
  secondaryUser: number;
}

export interface IChatInsertion extends IChatParams {
  content: string;
}
