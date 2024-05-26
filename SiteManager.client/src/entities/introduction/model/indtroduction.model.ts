import { UserType } from "../../../shared/types";

export type Introduction = {
    id: string;
    title: string;
    url: string;
    userId: string;
    userName: string;
    userType: UserType;
}