import { PrismaClient } from '@prisma/client';
import { PrismaMssql } from '@prisma/adapter-mssql';

let prisma: PrismaClient | null = null;

export function getPrisma() {
  if (prisma) return prisma;

  const dbConfig = {
    server: process.env.DB_SERVER || '',
    database: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '1433'),
    options: {
      encrypt: true,
      trustServerCertificate: false,
    },
  };

  if (!dbConfig.server) {
    console.warn('DB_SERVER is not set. Prisma calls will fail.');
  }

  const adapter = new PrismaMssql(dbConfig);
  prisma = new PrismaClient({ adapter });
  return prisma;
}

export default getPrisma;
