import config from "../config/config";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";

export class Service{
    client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.Databases.createRow(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId
            })
            
        } catch (error) {
            throw error;
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.Databases.updateRow(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
                title,content,featuredImage,status
            })           
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try { 
            await this.Databases.deleteRow(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.Databases.getRow(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.Databases.listRows(config.appwriteDatabaseId,config.appwriteCollectionId,queries)   
            
        } catch (error) {
            throw error;
        }   
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),{file})
            
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(config.appwriteBucketId,fileId);
            return true;
        }catch(error){
            throw error;
        }
    }

    getFilePreview(){
        return this.bucket.getFilePreview(config.appwriteBucketId,{fileId})
    }
}

const service = new Service();
export default service;