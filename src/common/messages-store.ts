import { IMessage } from "@zalo/extension-sdk";

export type IMessageGroup = {
  date: number;
  msgs: IMessage[];
};

export interface IMessageStore {
  loading: boolean;
  errorMessage: string;
  groups: IMessageGroup[];
}
