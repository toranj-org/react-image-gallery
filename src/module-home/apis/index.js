import * as MockClient from "./mock";
import * as ApiClient from "./api";


function serviceClient() {
    return process.env.NODE_ENV === "test" ? MockClient : ApiClient;
}

export default serviceClient;