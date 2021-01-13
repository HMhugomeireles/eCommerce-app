export interface IUser {
    _id: String;
    name: String;
    email: String;
    password: String;
    active: Boolean;
}


export interface Roles {
    _id: String;
    roleType: "sys" | "admin" | "moderator" | "user" | "default"
}