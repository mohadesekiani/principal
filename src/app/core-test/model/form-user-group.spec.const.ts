import { ItemTypeEnum } from "src/app/core/model/enum/itemType"


export class formUserGroupConst {
    static get SomeFormUserGroup() {
        return {
            id: '', description: 'test for description', name: 'm4 k4'
        }

    }
    static get SomeInvalidFormUserGroup() {
        return {
            id: '',
            description: null,
            name: 'k$ m%'
        }

    }
    static get defaultFormUserGroup() {
        return {
            id: null,
            description: null,
            name: null,
            type:ItemTypeEnum.UserGroup
        }

    }
    static get FormUserGroupWithParams() {
        return {
            id: '123', description: 'test for description', name: 'Doe John',type:ItemTypeEnum.UserGroup
        }

    }
}