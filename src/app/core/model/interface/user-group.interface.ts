import { ItemTypeEnum } from "../enum/itemType";

export interface IUserGroup {
    id:string,
    description: string | null,
    name: string | null,
    type:ItemTypeEnum.UserGroup
}