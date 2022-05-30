import * as MockClient from "./mock";
import * as ApiClient from "./real";

export const ServiceClient = () => {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
        return MockClient;
    }

    return ApiClient;
}