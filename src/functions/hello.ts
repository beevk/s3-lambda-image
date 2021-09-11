import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return {
            statusCode: 200,
            body: 'Hello Bivek',
        };
    } catch (err) {
        console.error(err);
        throw new Error('An error occurred');
    }
};
