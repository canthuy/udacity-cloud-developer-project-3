import * as dotenv from 'dotenv';
dotenv.config();
export const config = {
  username: 'postgres',
  password: '123456789',
  database: 'udacity-project-3',
  host: 'cloud-developer-project-3.c8rvoqkrvypi.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  aws_region: 'us-east-1',
  aws_profile: 'default',
  aws_media_bucket: 'udacity-project-3-dev',
  url: 'http://localhost:8100',
  jwt: {
    secret: 'testing',
  },
};
