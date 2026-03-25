// Prisma クライアントの遅延・動的初期化
// SWA 本番環境で @prisma/client の静的 import が起動クラッシュを引き起こすため、
// 完全に動的 import に切り替え

let prisma: any = null;

export async function getPrisma() {
  if (prisma) return prisma;

  try {
    const { PrismaClient } = await import("./prisma-client");
    const { PrismaMssql } = await import("@prisma/adapter-mssql");

    const dbConfig = {
      server: process.env.DB_SERVER || "",
      database: process.env.DB_NAME || "",
      user: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || "",
      port: parseInt(process.env.DB_PORT || "1433"),
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    };

    if (!dbConfig.server) {
      console.warn("DB_SERVER is not set. Database operations will fail.");
    }

    const adapter = new PrismaMssql(dbConfig);
    prisma = new PrismaClient({ adapter });
    return prisma;
  } catch (error: any) {
    console.error("Failed to initialize Prisma:", error);
    throw new Error(`Database is not available: ${error?.message || String(error)}`);
  }
}

export default getPrisma;
