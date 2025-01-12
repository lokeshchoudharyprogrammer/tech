import { Client } from "pg";

export async function getClient() {
    const client = new Client('postgresql://testApplication_owner:j7ZbdKWnSO2q@ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech/testApplication?sslmode=require');
    await client.connect();
    return client;
}   





// this is password =>j7ZbdKWnSO2q 
// this is username => testApplication_owner
// this is endpoint => ep-billowing-moon-a50q1b1l.us-east-2.aws.neon.tech
// this is database => testApplication
// this is sslmode => require
// this is port => 5432
