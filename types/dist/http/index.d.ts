export declare namespace httpModel {
    interface request {
        method: string;
        option: option;
    }
    interface method {
        method: string;
    }
    interface option {
        method?: string;
        hostname: string;
        port: string | number;
        path?: string;
        header?: any;
        data?: any;
        __timeout?: number;
    }
    interface httpResult {
        err?: string;
        data?: any;
    }
}
export declare class Http {
    private static instance;
    /**
     * Instance 获取Logger单例
     */
    static readonly Instance: Http;
    /**
     * 接口请求，GET方式
     * @param option
     */
    private get(option);
    /**
     * 接口请求，POST方式
     * @param option
     */
    private post(option);
    /**
     * 请求数据
     * @param httpData
     * @returns {string}
     */
    request(httpData: httpModel.request): Promise<httpModel.httpResult>;
}
declare const i: Http;
export default i;
