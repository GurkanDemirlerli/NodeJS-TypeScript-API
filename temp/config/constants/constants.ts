class Constants {

    static DB_CONNECTION_STRING: string = "mongodb://localhost/TsApi";
    static ServerSecret: string = "My-Secret";
}
Object.seal(Constants);
export = Constants;

