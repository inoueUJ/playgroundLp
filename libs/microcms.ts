import { createClient } from "microcms-js-sdk";

// 環境変数にMICROCMS_SERVICE_DOMAINがない場合はエラーを返す
if(!process.env.MICROCMS_SERVICE_DOMAIN){
    throw new Error("MICROCMS_SERVICE_DOMAIN is not set");
}

// 環境変数にMICROCMS_API_KEYがない場合はエラーを返す
if(!process.env.MICROCMS_API_KEY){
    throw new Error("MICROCMS_API_KEY is not set");
}

// 環境変数にMICROCMS_API_KEYがある場合はクライアントを作成する
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});