declare namespace App.Data {
export type SharedData = {
user: App.Data.UserData;
};
export type UserData = {
name: string;
email: string;
createdAt: string | null;
updatedAt: string | null;
};
}
