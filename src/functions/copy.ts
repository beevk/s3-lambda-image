import { S3Event } from 'aws-lambda';

interface ReturnDataInterface {
    statusCode: number;
    data: string;
}

// AWS expects this structure of export
export const handler = async (event: S3Event): Promise<void> => {
    try {
        // Do whatever you need here
        const bucket = event.Records[0].s3.bucket.name;
        const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
        // const params = {
        //     Bucket: bucket,
        //     Key: key,
        // };
        console.log(`file added: ${bucket} ${key} ${event}`);
    } catch (err) {
        const message = "Oops! Something happened.";
        console.error(message, err);
        throw new Error(message);
    }
};
