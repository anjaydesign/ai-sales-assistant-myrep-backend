import 'dotenv/config';

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  appBaseUrl: process.env.APP_BASE_URL || '',
  testMode: (process.env.TEST_MODE || 'true').toLowerCase() === 'true',
  jwtSecret: process.env.JWT_SECRET || '',
  databaseUrl: process.env.DATABASE_URL || '',
  facebook: {
    appId: process.env.FACEBOOK_APP_ID || '',
    appSecret: process.env.FACEBOOK_APP_SECRET || '',
    pageId: process.env.FACEBOOK_PAGE_ID || '',
    pageAccessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN || ''
  },
  storage: {
    url: process.env.STORAGE_URL || '',
    key: process.env.STORAGE_KEY || '',
    secret: process.env.STORAGE_SECRET || ''
  }
};