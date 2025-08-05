import {config} from "@/config";
import {
    buildWispClient,
    GetPostsResult,
    GetPostResult,
} from "@wisp-cms/client";
import {BlogPosting, WithContext} from "schema-dts";

export const wisp = buildWispClient({
    blogId: config.wisp.blogId,
});



export type {GetPostsResult, GetPostResult};
