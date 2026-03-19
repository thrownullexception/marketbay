export enum StorePermissions {
    ViewOrders = "ov",
    ProcessOrders = "op",
    ManageProducts = "pm",
    ViewAnalytics = "av",
    ManagePromotions = "rm",
    ViewPayouts = "pv",
    ManageTeam = "tm",
    EditStore = "es",
    RespondToMessages = "rs",
}

export const STORE_PERMISSION_CONFIG: Record<StorePermissions, {
    label: string;
}> = {
    [StorePermissions.EditStore]: {
        label: "Can Edit Store"
    },
    [StorePermissions.ManageProducts]: {
        label: "Can Manage Products"
    },
    [StorePermissions.ManagePromotions]: {
        label: "Can Manage Promotions"
    },
    [StorePermissions.ManageTeam]: {
        label: "Can Manage Team"
    }
}