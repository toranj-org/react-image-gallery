import * as MockClient from "./mock";
import * as ApiClient from "./real";

export const ServiceClient = () => {
    return process.env.NODE_ENV === "development" ? MockClient : ApiClient;
}