// enums

enum Roles {
    SUPER_ADMIN,
    ADMIN,
    MANAGER,
    SELLER,
    CUSTOMER
}

let user_role: Roles = Roles.ADMIN;

// wrong
// let user_role2: Roles = "ADMIN";

let sendMessage = (role: Roles) => {
    switch (role) {
        case Roles.SUPER_ADMIN:
            console.log("Hello super admin");
            break;
        case Roles.ADMIN:
            console.log("Hello admin");
            break;
        case Roles.MANAGER:
            console.log("Hello manager");
            break;
        case Roles.SELLER:
            console.log("Hello seller");
            break;
        case Roles.CUSTOMER:
            console.log("Hello customer");
            break;
    }
}

sendMessage(Roles.CUSTOMER);