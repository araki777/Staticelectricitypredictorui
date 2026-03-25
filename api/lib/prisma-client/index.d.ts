
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clothes
 * 
 */
export type clothes = $Result.DefaultSelection<Prisma.$clothesPayload>
/**
 * Model materials
 * 
 */
export type materials = $Result.DefaultSelection<Prisma.$materialsPayload>
/**
 * Model incidents
 * 
 */
export type incidents = $Result.DefaultSelection<Prisma.$incidentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clothes
 * const clothes = await prisma.clothes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clothes
   * const clothes = await prisma.clothes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clothes`: Exposes CRUD operations for the **clothes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clothes
    * const clothes = await prisma.clothes.findMany()
    * ```
    */
  get clothes(): Prisma.clothesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidents`: Exposes CRUD operations for the **incidents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incidents.findMany()
    * ```
    */
  get incidents(): Prisma.incidentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    clothes: 'clothes',
    materials: 'materials',
    incidents: 'incidents'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clothes" | "materials" | "incidents"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clothes: {
        payload: Prisma.$clothesPayload<ExtArgs>
        fields: Prisma.clothesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clothesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clothesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          findFirst: {
            args: Prisma.clothesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clothesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          findMany: {
            args: Prisma.clothesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>[]
          }
          create: {
            args: Prisma.clothesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          createMany: {
            args: Prisma.clothesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clothesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          update: {
            args: Prisma.clothesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          deleteMany: {
            args: Prisma.clothesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clothesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clothesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clothesPayload>
          }
          aggregate: {
            args: Prisma.ClothesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClothes>
          }
          groupBy: {
            args: Prisma.clothesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClothesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clothesCountArgs<ExtArgs>
            result: $Utils.Optional<ClothesCountAggregateOutputType> | number
          }
        }
      }
      materials: {
        payload: Prisma.$materialsPayload<ExtArgs>
        fields: Prisma.materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findFirst: {
            args: Prisma.materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findMany: {
            args: Prisma.materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          create: {
            args: Prisma.materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          createMany: {
            args: Prisma.materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          update: {
            args: Prisma.materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          deleteMany: {
            args: Prisma.materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      incidents: {
        payload: Prisma.$incidentsPayload<ExtArgs>
        fields: Prisma.incidentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incidentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incidentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          findFirst: {
            args: Prisma.incidentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incidentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          findMany: {
            args: Prisma.incidentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>[]
          }
          create: {
            args: Prisma.incidentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          createMany: {
            args: Prisma.incidentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.incidentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          update: {
            args: Prisma.incidentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          deleteMany: {
            args: Prisma.incidentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.incidentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.incidentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incidentsPayload>
          }
          aggregate: {
            args: Prisma.IncidentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidents>
          }
          groupBy: {
            args: Prisma.incidentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.incidentsCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    clothes?: clothesOmit
    materials?: materialsOmit
    incidents?: incidentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClothesCountOutputType
   */

  export type ClothesCountOutputType = {
    materials: number
  }

  export type ClothesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ClothesCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * ClothesCountOutputType without action
   */
  export type ClothesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothesCountOutputType
     */
    select?: ClothesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClothesCountOutputType without action
   */
  export type ClothesCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clothes
   */

  export type AggregateClothes = {
    _count: ClothesCountAggregateOutputType | null
    _min: ClothesMinAggregateOutputType | null
    _max: ClothesMaxAggregateOutputType | null
  }

  export type ClothesMinAggregateOutputType = {
    id: string | null
    userName: string | null
    name: string | null
    category: string | null
    advice: string | null
    imageUrl: string | null
    createdAt: string | null
  }

  export type ClothesMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    name: string | null
    category: string | null
    advice: string | null
    imageUrl: string | null
    createdAt: string | null
  }

  export type ClothesCountAggregateOutputType = {
    id: number
    userName: number
    name: number
    category: number
    advice: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type ClothesMinAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    category?: true
    advice?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ClothesMaxAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    category?: true
    advice?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ClothesCountAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    category?: true
    advice?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ClothesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clothes to aggregate.
     */
    where?: clothesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clothes to fetch.
     */
    orderBy?: clothesOrderByWithRelationInput | clothesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clothesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clothes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clothes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clothes
    **/
    _count?: true | ClothesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClothesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClothesMaxAggregateInputType
  }

  export type GetClothesAggregateType<T extends ClothesAggregateArgs> = {
        [P in keyof T & keyof AggregateClothes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClothes[P]>
      : GetScalarType<T[P], AggregateClothes[P]>
  }




  export type clothesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clothesWhereInput
    orderBy?: clothesOrderByWithAggregationInput | clothesOrderByWithAggregationInput[]
    by: ClothesScalarFieldEnum[] | ClothesScalarFieldEnum
    having?: clothesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClothesCountAggregateInputType | true
    _min?: ClothesMinAggregateInputType
    _max?: ClothesMaxAggregateInputType
  }

  export type ClothesGroupByOutputType = {
    id: string
    userName: string | null
    name: string
    category: string | null
    advice: string | null
    imageUrl: string | null
    createdAt: string
    _count: ClothesCountAggregateOutputType | null
    _min: ClothesMinAggregateOutputType | null
    _max: ClothesMaxAggregateOutputType | null
  }

  type GetClothesGroupByPayload<T extends clothesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClothesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClothesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClothesGroupByOutputType[P]>
            : GetScalarType<T[P], ClothesGroupByOutputType[P]>
        }
      >
    >


  export type clothesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    name?: boolean
    category?: boolean
    advice?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    materials?: boolean | clothes$materialsArgs<ExtArgs>
    _count?: boolean | ClothesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothes"]>



  export type clothesSelectScalar = {
    id?: boolean
    userName?: boolean
    name?: boolean
    category?: boolean
    advice?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type clothesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "name" | "category" | "advice" | "imageUrl" | "createdAt", ExtArgs["result"]["clothes"]>
  export type clothesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | clothes$materialsArgs<ExtArgs>
    _count?: boolean | ClothesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clothesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clothes"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string | null
      name: string
      category: string | null
      advice: string | null
      imageUrl: string | null
      createdAt: string
    }, ExtArgs["result"]["clothes"]>
    composites: {}
  }

  type clothesGetPayload<S extends boolean | null | undefined | clothesDefaultArgs> = $Result.GetResult<Prisma.$clothesPayload, S>

  type clothesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clothesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClothesCountAggregateInputType | true
    }

  export interface clothesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clothes'], meta: { name: 'clothes' } }
    /**
     * Find zero or one Clothes that matches the filter.
     * @param {clothesFindUniqueArgs} args - Arguments to find a Clothes
     * @example
     * // Get one Clothes
     * const clothes = await prisma.clothes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clothesFindUniqueArgs>(args: SelectSubset<T, clothesFindUniqueArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clothes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clothesFindUniqueOrThrowArgs} args - Arguments to find a Clothes
     * @example
     * // Get one Clothes
     * const clothes = await prisma.clothes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clothesFindUniqueOrThrowArgs>(args: SelectSubset<T, clothesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesFindFirstArgs} args - Arguments to find a Clothes
     * @example
     * // Get one Clothes
     * const clothes = await prisma.clothes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clothesFindFirstArgs>(args?: SelectSubset<T, clothesFindFirstArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesFindFirstOrThrowArgs} args - Arguments to find a Clothes
     * @example
     * // Get one Clothes
     * const clothes = await prisma.clothes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clothesFindFirstOrThrowArgs>(args?: SelectSubset<T, clothesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clothes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clothes
     * const clothes = await prisma.clothes.findMany()
     * 
     * // Get first 10 Clothes
     * const clothes = await prisma.clothes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clothesWithIdOnly = await prisma.clothes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clothesFindManyArgs>(args?: SelectSubset<T, clothesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clothes.
     * @param {clothesCreateArgs} args - Arguments to create a Clothes.
     * @example
     * // Create one Clothes
     * const Clothes = await prisma.clothes.create({
     *   data: {
     *     // ... data to create a Clothes
     *   }
     * })
     * 
     */
    create<T extends clothesCreateArgs>(args: SelectSubset<T, clothesCreateArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clothes.
     * @param {clothesCreateManyArgs} args - Arguments to create many Clothes.
     * @example
     * // Create many Clothes
     * const clothes = await prisma.clothes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clothesCreateManyArgs>(args?: SelectSubset<T, clothesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clothes.
     * @param {clothesDeleteArgs} args - Arguments to delete one Clothes.
     * @example
     * // Delete one Clothes
     * const Clothes = await prisma.clothes.delete({
     *   where: {
     *     // ... filter to delete one Clothes
     *   }
     * })
     * 
     */
    delete<T extends clothesDeleteArgs>(args: SelectSubset<T, clothesDeleteArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clothes.
     * @param {clothesUpdateArgs} args - Arguments to update one Clothes.
     * @example
     * // Update one Clothes
     * const clothes = await prisma.clothes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clothesUpdateArgs>(args: SelectSubset<T, clothesUpdateArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clothes.
     * @param {clothesDeleteManyArgs} args - Arguments to filter Clothes to delete.
     * @example
     * // Delete a few Clothes
     * const { count } = await prisma.clothes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clothesDeleteManyArgs>(args?: SelectSubset<T, clothesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clothes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clothes
     * const clothes = await prisma.clothes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clothesUpdateManyArgs>(args: SelectSubset<T, clothesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clothes.
     * @param {clothesUpsertArgs} args - Arguments to update or create a Clothes.
     * @example
     * // Update or create a Clothes
     * const clothes = await prisma.clothes.upsert({
     *   create: {
     *     // ... data to create a Clothes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clothes we want to update
     *   }
     * })
     */
    upsert<T extends clothesUpsertArgs>(args: SelectSubset<T, clothesUpsertArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clothes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesCountArgs} args - Arguments to filter Clothes to count.
     * @example
     * // Count the number of Clothes
     * const count = await prisma.clothes.count({
     *   where: {
     *     // ... the filter for the Clothes we want to count
     *   }
     * })
    **/
    count<T extends clothesCountArgs>(
      args?: Subset<T, clothesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClothesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clothes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClothesAggregateArgs>(args: Subset<T, ClothesAggregateArgs>): Prisma.PrismaPromise<GetClothesAggregateType<T>>

    /**
     * Group by Clothes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clothesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clothesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clothesGroupByArgs['orderBy'] }
        : { orderBy?: clothesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clothesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClothesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clothes model
   */
  readonly fields: clothesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clothes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clothesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends clothes$materialsArgs<ExtArgs> = {}>(args?: Subset<T, clothes$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clothes model
   */
  interface clothesFieldRefs {
    readonly id: FieldRef<"clothes", 'String'>
    readonly userName: FieldRef<"clothes", 'String'>
    readonly name: FieldRef<"clothes", 'String'>
    readonly category: FieldRef<"clothes", 'String'>
    readonly advice: FieldRef<"clothes", 'String'>
    readonly imageUrl: FieldRef<"clothes", 'String'>
    readonly createdAt: FieldRef<"clothes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clothes findUnique
   */
  export type clothesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter, which clothes to fetch.
     */
    where: clothesWhereUniqueInput
  }

  /**
   * clothes findUniqueOrThrow
   */
  export type clothesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter, which clothes to fetch.
     */
    where: clothesWhereUniqueInput
  }

  /**
   * clothes findFirst
   */
  export type clothesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter, which clothes to fetch.
     */
    where?: clothesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clothes to fetch.
     */
    orderBy?: clothesOrderByWithRelationInput | clothesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clothes.
     */
    cursor?: clothesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clothes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clothes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clothes.
     */
    distinct?: ClothesScalarFieldEnum | ClothesScalarFieldEnum[]
  }

  /**
   * clothes findFirstOrThrow
   */
  export type clothesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter, which clothes to fetch.
     */
    where?: clothesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clothes to fetch.
     */
    orderBy?: clothesOrderByWithRelationInput | clothesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clothes.
     */
    cursor?: clothesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clothes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clothes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clothes.
     */
    distinct?: ClothesScalarFieldEnum | ClothesScalarFieldEnum[]
  }

  /**
   * clothes findMany
   */
  export type clothesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter, which clothes to fetch.
     */
    where?: clothesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clothes to fetch.
     */
    orderBy?: clothesOrderByWithRelationInput | clothesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clothes.
     */
    cursor?: clothesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clothes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clothes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clothes.
     */
    distinct?: ClothesScalarFieldEnum | ClothesScalarFieldEnum[]
  }

  /**
   * clothes create
   */
  export type clothesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * The data needed to create a clothes.
     */
    data: XOR<clothesCreateInput, clothesUncheckedCreateInput>
  }

  /**
   * clothes createMany
   */
  export type clothesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clothes.
     */
    data: clothesCreateManyInput | clothesCreateManyInput[]
  }

  /**
   * clothes update
   */
  export type clothesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * The data needed to update a clothes.
     */
    data: XOR<clothesUpdateInput, clothesUncheckedUpdateInput>
    /**
     * Choose, which clothes to update.
     */
    where: clothesWhereUniqueInput
  }

  /**
   * clothes updateMany
   */
  export type clothesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clothes.
     */
    data: XOR<clothesUpdateManyMutationInput, clothesUncheckedUpdateManyInput>
    /**
     * Filter which clothes to update
     */
    where?: clothesWhereInput
    /**
     * Limit how many clothes to update.
     */
    limit?: number
  }

  /**
   * clothes upsert
   */
  export type clothesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * The filter to search for the clothes to update in case it exists.
     */
    where: clothesWhereUniqueInput
    /**
     * In case the clothes found by the `where` argument doesn't exist, create a new clothes with this data.
     */
    create: XOR<clothesCreateInput, clothesUncheckedCreateInput>
    /**
     * In case the clothes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clothesUpdateInput, clothesUncheckedUpdateInput>
  }

  /**
   * clothes delete
   */
  export type clothesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
    /**
     * Filter which clothes to delete.
     */
    where: clothesWhereUniqueInput
  }

  /**
   * clothes deleteMany
   */
  export type clothesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clothes to delete
     */
    where?: clothesWhereInput
    /**
     * Limit how many clothes to delete.
     */
    limit?: number
  }

  /**
   * clothes.materials
   */
  export type clothes$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    cursor?: materialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * clothes without action
   */
  export type clothesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clothes
     */
    select?: clothesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clothes
     */
    omit?: clothesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clothesInclude<ExtArgs> | null
  }


  /**
   * Model materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsAvgAggregateOutputType = {
    id: number | null
    percent: number | null
  }

  export type MaterialsSumAggregateOutputType = {
    id: number | null
    percent: number | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: number | null
    clothingId: string | null
    name: string | null
    percent: number | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: number | null
    clothingId: string | null
    name: string | null
    percent: number | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    clothingId: number
    name: number
    percent: number
    _all: number
  }


  export type MaterialsAvgAggregateInputType = {
    id?: true
    percent?: true
  }

  export type MaterialsSumAggregateInputType = {
    id?: true
    percent?: true
  }

  export type MaterialsMinAggregateInputType = {
    id?: true
    clothingId?: true
    name?: true
    percent?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    clothingId?: true
    name?: true
    percent?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    clothingId?: true
    name?: true
    percent?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to aggregate.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithAggregationInput | materialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _avg?: MaterialsAvgAggregateInputType
    _sum?: MaterialsSumAggregateInputType
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: number
    clothingId: string
    name: string
    percent: number
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clothingId?: boolean
    name?: boolean
    percent?: boolean
    clothes?: boolean | clothesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>



  export type materialsSelectScalar = {
    id?: boolean
    clothingId?: boolean
    name?: boolean
    percent?: boolean
  }

  export type materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clothingId" | "name" | "percent", ExtArgs["result"]["materials"]>
  export type materialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothes?: boolean | clothesDefaultArgs<ExtArgs>
  }

  export type $materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materials"
    objects: {
      clothes: Prisma.$clothesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clothingId: string
      name: string
      percent: number
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type materialsGetPayload<S extends boolean | null | undefined | materialsDefaultArgs> = $Result.GetResult<Prisma.$materialsPayload, S>

  type materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materials'], meta: { name: 'materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {materialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialsFindUniqueArgs>(args: SelectSubset<T, materialsFindUniqueArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialsFindFirstArgs>(args?: SelectSubset<T, materialsFindFirstArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends materialsFindManyArgs>(args?: SelectSubset<T, materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {materialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends materialsCreateArgs>(args: SelectSubset<T, materialsCreateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {materialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialsCreateManyArgs>(args?: SelectSubset<T, materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Materials.
     * @param {materialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends materialsDeleteArgs>(args: SelectSubset<T, materialsDeleteArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {materialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialsUpdateArgs>(args: SelectSubset<T, materialsUpdateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {materialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialsDeleteManyArgs>(args?: SelectSubset<T, materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialsUpdateManyArgs>(args: SelectSubset<T, materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materials.
     * @param {materialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends materialsUpsertArgs>(args: SelectSubset<T, materialsUpsertArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends materialsCountArgs>(
      args?: Subset<T, materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialsGroupByArgs['orderBy'] }
        : { orderBy?: materialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materials model
   */
  readonly fields: materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothes<T extends clothesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clothesDefaultArgs<ExtArgs>>): Prisma__clothesClient<$Result.GetResult<Prisma.$clothesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the materials model
   */
  interface materialsFieldRefs {
    readonly id: FieldRef<"materials", 'Int'>
    readonly clothingId: FieldRef<"materials", 'String'>
    readonly name: FieldRef<"materials", 'String'>
    readonly percent: FieldRef<"materials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * materials findUnique
   */
  export type materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findUniqueOrThrow
   */
  export type materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findFirst
   */
  export type materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findFirstOrThrow
   */
  export type materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findMany
   */
  export type materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials create
   */
  export type materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to create a materials.
     */
    data: XOR<materialsCreateInput, materialsUncheckedCreateInput>
  }

  /**
   * materials createMany
   */
  export type materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
  }

  /**
   * materials update
   */
  export type materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to update a materials.
     */
    data: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
    /**
     * Choose, which materials to update.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials updateMany
   */
  export type materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * materials upsert
   */
  export type materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The filter to search for the materials to update in case it exists.
     */
    where: materialsWhereUniqueInput
    /**
     * In case the materials found by the `where` argument doesn't exist, create a new materials with this data.
     */
    create: XOR<materialsCreateInput, materialsUncheckedCreateInput>
    /**
     * In case the materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
  }

  /**
   * materials delete
   */
  export type materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter which materials to delete.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials deleteMany
   */
  export type materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to delete
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to delete.
     */
    limit?: number
  }

  /**
   * materials without action
   */
  export type materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
  }


  /**
   * Model incidents
   */

  export type AggregateIncidents = {
    _count: IncidentsCountAggregateOutputType | null
    _avg: IncidentsAvgAggregateOutputType | null
    _sum: IncidentsSumAggregateOutputType | null
    _min: IncidentsMinAggregateOutputType | null
    _max: IncidentsMaxAggregateOutputType | null
  }

  export type IncidentsAvgAggregateOutputType = {
    humidity: number | null
    temperature: number | null
  }

  export type IncidentsSumAggregateOutputType = {
    humidity: number | null
    temperature: number | null
  }

  export type IncidentsMinAggregateOutputType = {
    id: string | null
    userName: string | null
    date: string | null
    time: string | null
    humidity: number | null
    temperature: number | null
    clothing: string | null
  }

  export type IncidentsMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    date: string | null
    time: string | null
    humidity: number | null
    temperature: number | null
    clothing: string | null
  }

  export type IncidentsCountAggregateOutputType = {
    id: number
    userName: number
    date: number
    time: number
    humidity: number
    temperature: number
    clothing: number
    _all: number
  }


  export type IncidentsAvgAggregateInputType = {
    humidity?: true
    temperature?: true
  }

  export type IncidentsSumAggregateInputType = {
    humidity?: true
    temperature?: true
  }

  export type IncidentsMinAggregateInputType = {
    id?: true
    userName?: true
    date?: true
    time?: true
    humidity?: true
    temperature?: true
    clothing?: true
  }

  export type IncidentsMaxAggregateInputType = {
    id?: true
    userName?: true
    date?: true
    time?: true
    humidity?: true
    temperature?: true
    clothing?: true
  }

  export type IncidentsCountAggregateInputType = {
    id?: true
    userName?: true
    date?: true
    time?: true
    humidity?: true
    temperature?: true
    clothing?: true
    _all?: true
  }

  export type IncidentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incidents to aggregate.
     */
    where?: incidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentsOrderByWithRelationInput | incidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incidents
    **/
    _count?: true | IncidentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentsMaxAggregateInputType
  }

  export type GetIncidentsAggregateType<T extends IncidentsAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidents[P]>
      : GetScalarType<T[P], AggregateIncidents[P]>
  }




  export type incidentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incidentsWhereInput
    orderBy?: incidentsOrderByWithAggregationInput | incidentsOrderByWithAggregationInput[]
    by: IncidentsScalarFieldEnum[] | IncidentsScalarFieldEnum
    having?: incidentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentsCountAggregateInputType | true
    _avg?: IncidentsAvgAggregateInputType
    _sum?: IncidentsSumAggregateInputType
    _min?: IncidentsMinAggregateInputType
    _max?: IncidentsMaxAggregateInputType
  }

  export type IncidentsGroupByOutputType = {
    id: string
    userName: string
    date: string
    time: string
    humidity: number | null
    temperature: number | null
    clothing: string | null
    _count: IncidentsCountAggregateOutputType | null
    _avg: IncidentsAvgAggregateOutputType | null
    _sum: IncidentsSumAggregateOutputType | null
    _min: IncidentsMinAggregateOutputType | null
    _max: IncidentsMaxAggregateOutputType | null
  }

  type GetIncidentsGroupByPayload<T extends incidentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentsGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentsGroupByOutputType[P]>
        }
      >
    >


  export type incidentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    date?: boolean
    time?: boolean
    humidity?: boolean
    temperature?: boolean
    clothing?: boolean
  }, ExtArgs["result"]["incidents"]>



  export type incidentsSelectScalar = {
    id?: boolean
    userName?: boolean
    date?: boolean
    time?: boolean
    humidity?: boolean
    temperature?: boolean
    clothing?: boolean
  }

  export type incidentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "date" | "time" | "humidity" | "temperature" | "clothing", ExtArgs["result"]["incidents"]>

  export type $incidentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "incidents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      date: string
      time: string
      humidity: number | null
      temperature: number | null
      clothing: string | null
    }, ExtArgs["result"]["incidents"]>
    composites: {}
  }

  type incidentsGetPayload<S extends boolean | null | undefined | incidentsDefaultArgs> = $Result.GetResult<Prisma.$incidentsPayload, S>

  type incidentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<incidentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentsCountAggregateInputType | true
    }

  export interface incidentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incidents'], meta: { name: 'incidents' } }
    /**
     * Find zero or one Incidents that matches the filter.
     * @param {incidentsFindUniqueArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends incidentsFindUniqueArgs>(args: SelectSubset<T, incidentsFindUniqueArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incidents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {incidentsFindUniqueOrThrowArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends incidentsFindUniqueOrThrowArgs>(args: SelectSubset<T, incidentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsFindFirstArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends incidentsFindFirstArgs>(args?: SelectSubset<T, incidentsFindFirstArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsFindFirstOrThrowArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends incidentsFindFirstOrThrowArgs>(args?: SelectSubset<T, incidentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incidents.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incidents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentsWithIdOnly = await prisma.incidents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends incidentsFindManyArgs>(args?: SelectSubset<T, incidentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incidents.
     * @param {incidentsCreateArgs} args - Arguments to create a Incidents.
     * @example
     * // Create one Incidents
     * const Incidents = await prisma.incidents.create({
     *   data: {
     *     // ... data to create a Incidents
     *   }
     * })
     * 
     */
    create<T extends incidentsCreateArgs>(args: SelectSubset<T, incidentsCreateArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {incidentsCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incidents = await prisma.incidents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends incidentsCreateManyArgs>(args?: SelectSubset<T, incidentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incidents.
     * @param {incidentsDeleteArgs} args - Arguments to delete one Incidents.
     * @example
     * // Delete one Incidents
     * const Incidents = await prisma.incidents.delete({
     *   where: {
     *     // ... filter to delete one Incidents
     *   }
     * })
     * 
     */
    delete<T extends incidentsDeleteArgs>(args: SelectSubset<T, incidentsDeleteArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incidents.
     * @param {incidentsUpdateArgs} args - Arguments to update one Incidents.
     * @example
     * // Update one Incidents
     * const incidents = await prisma.incidents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends incidentsUpdateArgs>(args: SelectSubset<T, incidentsUpdateArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {incidentsDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incidents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends incidentsDeleteManyArgs>(args?: SelectSubset<T, incidentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incidents = await prisma.incidents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends incidentsUpdateManyArgs>(args: SelectSubset<T, incidentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incidents.
     * @param {incidentsUpsertArgs} args - Arguments to update or create a Incidents.
     * @example
     * // Update or create a Incidents
     * const incidents = await prisma.incidents.upsert({
     *   create: {
     *     // ... data to create a Incidents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incidents we want to update
     *   }
     * })
     */
    upsert<T extends incidentsUpsertArgs>(args: SelectSubset<T, incidentsUpsertArgs<ExtArgs>>): Prisma__incidentsClient<$Result.GetResult<Prisma.$incidentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incidents.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends incidentsCountArgs>(
      args?: Subset<T, incidentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentsAggregateArgs>(args: Subset<T, IncidentsAggregateArgs>): Prisma.PrismaPromise<GetIncidentsAggregateType<T>>

    /**
     * Group by Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends incidentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incidentsGroupByArgs['orderBy'] }
        : { orderBy?: incidentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, incidentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the incidents model
   */
  readonly fields: incidentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incidents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incidentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the incidents model
   */
  interface incidentsFieldRefs {
    readonly id: FieldRef<"incidents", 'String'>
    readonly userName: FieldRef<"incidents", 'String'>
    readonly date: FieldRef<"incidents", 'String'>
    readonly time: FieldRef<"incidents", 'String'>
    readonly humidity: FieldRef<"incidents", 'Float'>
    readonly temperature: FieldRef<"incidents", 'Float'>
    readonly clothing: FieldRef<"incidents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * incidents findUnique
   */
  export type incidentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter, which incidents to fetch.
     */
    where: incidentsWhereUniqueInput
  }

  /**
   * incidents findUniqueOrThrow
   */
  export type incidentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter, which incidents to fetch.
     */
    where: incidentsWhereUniqueInput
  }

  /**
   * incidents findFirst
   */
  export type incidentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter, which incidents to fetch.
     */
    where?: incidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentsOrderByWithRelationInput | incidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incidents.
     */
    cursor?: incidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incidents.
     */
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * incidents findFirstOrThrow
   */
  export type incidentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter, which incidents to fetch.
     */
    where?: incidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentsOrderByWithRelationInput | incidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incidents.
     */
    cursor?: incidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incidents.
     */
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * incidents findMany
   */
  export type incidentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter, which incidents to fetch.
     */
    where?: incidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentsOrderByWithRelationInput | incidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incidents.
     */
    cursor?: incidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incidents.
     */
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * incidents create
   */
  export type incidentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * The data needed to create a incidents.
     */
    data: XOR<incidentsCreateInput, incidentsUncheckedCreateInput>
  }

  /**
   * incidents createMany
   */
  export type incidentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incidents.
     */
    data: incidentsCreateManyInput | incidentsCreateManyInput[]
  }

  /**
   * incidents update
   */
  export type incidentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * The data needed to update a incidents.
     */
    data: XOR<incidentsUpdateInput, incidentsUncheckedUpdateInput>
    /**
     * Choose, which incidents to update.
     */
    where: incidentsWhereUniqueInput
  }

  /**
   * incidents updateMany
   */
  export type incidentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incidents.
     */
    data: XOR<incidentsUpdateManyMutationInput, incidentsUncheckedUpdateManyInput>
    /**
     * Filter which incidents to update
     */
    where?: incidentsWhereInput
    /**
     * Limit how many incidents to update.
     */
    limit?: number
  }

  /**
   * incidents upsert
   */
  export type incidentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * The filter to search for the incidents to update in case it exists.
     */
    where: incidentsWhereUniqueInput
    /**
     * In case the incidents found by the `where` argument doesn't exist, create a new incidents with this data.
     */
    create: XOR<incidentsCreateInput, incidentsUncheckedCreateInput>
    /**
     * In case the incidents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incidentsUpdateInput, incidentsUncheckedUpdateInput>
  }

  /**
   * incidents delete
   */
  export type incidentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
    /**
     * Filter which incidents to delete.
     */
    where: incidentsWhereUniqueInput
  }

  /**
   * incidents deleteMany
   */
  export type incidentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incidents to delete
     */
    where?: incidentsWhereInput
    /**
     * Limit how many incidents to delete.
     */
    limit?: number
  }

  /**
   * incidents without action
   */
  export type incidentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incidents
     */
    select?: incidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incidents
     */
    omit?: incidentsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClothesScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    name: 'name',
    category: 'category',
    advice: 'advice',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type ClothesScalarFieldEnum = (typeof ClothesScalarFieldEnum)[keyof typeof ClothesScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    clothingId: 'clothingId',
    name: 'name',
    percent: 'percent'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const IncidentsScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    date: 'date',
    time: 'time',
    humidity: 'humidity',
    temperature: 'temperature',
    clothing: 'clothing'
  };

  export type IncidentsScalarFieldEnum = (typeof IncidentsScalarFieldEnum)[keyof typeof IncidentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type clothesWhereInput = {
    AND?: clothesWhereInput | clothesWhereInput[]
    OR?: clothesWhereInput[]
    NOT?: clothesWhereInput | clothesWhereInput[]
    id?: StringFilter<"clothes"> | string
    userName?: StringNullableFilter<"clothes"> | string | null
    name?: StringFilter<"clothes"> | string
    category?: StringNullableFilter<"clothes"> | string | null
    advice?: StringNullableFilter<"clothes"> | string | null
    imageUrl?: StringNullableFilter<"clothes"> | string | null
    createdAt?: StringFilter<"clothes"> | string
    materials?: MaterialsListRelationFilter
  }

  export type clothesOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    advice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    materials?: materialsOrderByRelationAggregateInput
  }

  export type clothesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: clothesWhereInput | clothesWhereInput[]
    OR?: clothesWhereInput[]
    NOT?: clothesWhereInput | clothesWhereInput[]
    userName?: StringNullableFilter<"clothes"> | string | null
    name?: StringFilter<"clothes"> | string
    category?: StringNullableFilter<"clothes"> | string | null
    advice?: StringNullableFilter<"clothes"> | string | null
    imageUrl?: StringNullableFilter<"clothes"> | string | null
    createdAt?: StringFilter<"clothes"> | string
    materials?: MaterialsListRelationFilter
  }, "id">

  export type clothesOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    advice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: clothesCountOrderByAggregateInput
    _max?: clothesMaxOrderByAggregateInput
    _min?: clothesMinOrderByAggregateInput
  }

  export type clothesScalarWhereWithAggregatesInput = {
    AND?: clothesScalarWhereWithAggregatesInput | clothesScalarWhereWithAggregatesInput[]
    OR?: clothesScalarWhereWithAggregatesInput[]
    NOT?: clothesScalarWhereWithAggregatesInput | clothesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"clothes"> | string
    userName?: StringNullableWithAggregatesFilter<"clothes"> | string | null
    name?: StringWithAggregatesFilter<"clothes"> | string
    category?: StringNullableWithAggregatesFilter<"clothes"> | string | null
    advice?: StringNullableWithAggregatesFilter<"clothes"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"clothes"> | string | null
    createdAt?: StringWithAggregatesFilter<"clothes"> | string
  }

  export type materialsWhereInput = {
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    id?: IntFilter<"materials"> | number
    clothingId?: StringFilter<"materials"> | string
    name?: StringFilter<"materials"> | string
    percent?: IntFilter<"materials"> | number
    clothes?: XOR<ClothesScalarRelationFilter, clothesWhereInput>
  }

  export type materialsOrderByWithRelationInput = {
    id?: SortOrder
    clothingId?: SortOrder
    name?: SortOrder
    percent?: SortOrder
    clothes?: clothesOrderByWithRelationInput
  }

  export type materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    clothingId?: StringFilter<"materials"> | string
    name?: StringFilter<"materials"> | string
    percent?: IntFilter<"materials"> | number
    clothes?: XOR<ClothesScalarRelationFilter, clothesWhereInput>
  }, "id">

  export type materialsOrderByWithAggregationInput = {
    id?: SortOrder
    clothingId?: SortOrder
    name?: SortOrder
    percent?: SortOrder
    _count?: materialsCountOrderByAggregateInput
    _avg?: materialsAvgOrderByAggregateInput
    _max?: materialsMaxOrderByAggregateInput
    _min?: materialsMinOrderByAggregateInput
    _sum?: materialsSumOrderByAggregateInput
  }

  export type materialsScalarWhereWithAggregatesInput = {
    AND?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    OR?: materialsScalarWhereWithAggregatesInput[]
    NOT?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"materials"> | number
    clothingId?: StringWithAggregatesFilter<"materials"> | string
    name?: StringWithAggregatesFilter<"materials"> | string
    percent?: IntWithAggregatesFilter<"materials"> | number
  }

  export type incidentsWhereInput = {
    AND?: incidentsWhereInput | incidentsWhereInput[]
    OR?: incidentsWhereInput[]
    NOT?: incidentsWhereInput | incidentsWhereInput[]
    id?: StringFilter<"incidents"> | string
    userName?: StringFilter<"incidents"> | string
    date?: StringFilter<"incidents"> | string
    time?: StringFilter<"incidents"> | string
    humidity?: FloatNullableFilter<"incidents"> | number | null
    temperature?: FloatNullableFilter<"incidents"> | number | null
    clothing?: StringNullableFilter<"incidents"> | string | null
  }

  export type incidentsOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    clothing?: SortOrderInput | SortOrder
  }

  export type incidentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: incidentsWhereInput | incidentsWhereInput[]
    OR?: incidentsWhereInput[]
    NOT?: incidentsWhereInput | incidentsWhereInput[]
    userName?: StringFilter<"incidents"> | string
    date?: StringFilter<"incidents"> | string
    time?: StringFilter<"incidents"> | string
    humidity?: FloatNullableFilter<"incidents"> | number | null
    temperature?: FloatNullableFilter<"incidents"> | number | null
    clothing?: StringNullableFilter<"incidents"> | string | null
  }, "id">

  export type incidentsOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    clothing?: SortOrderInput | SortOrder
    _count?: incidentsCountOrderByAggregateInput
    _avg?: incidentsAvgOrderByAggregateInput
    _max?: incidentsMaxOrderByAggregateInput
    _min?: incidentsMinOrderByAggregateInput
    _sum?: incidentsSumOrderByAggregateInput
  }

  export type incidentsScalarWhereWithAggregatesInput = {
    AND?: incidentsScalarWhereWithAggregatesInput | incidentsScalarWhereWithAggregatesInput[]
    OR?: incidentsScalarWhereWithAggregatesInput[]
    NOT?: incidentsScalarWhereWithAggregatesInput | incidentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"incidents"> | string
    userName?: StringWithAggregatesFilter<"incidents"> | string
    date?: StringWithAggregatesFilter<"incidents"> | string
    time?: StringWithAggregatesFilter<"incidents"> | string
    humidity?: FloatNullableWithAggregatesFilter<"incidents"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"incidents"> | number | null
    clothing?: StringNullableWithAggregatesFilter<"incidents"> | string | null
  }

  export type clothesCreateInput = {
    id: string
    userName?: string | null
    name: string
    category?: string | null
    advice?: string | null
    imageUrl?: string | null
    createdAt: string
    materials?: materialsCreateNestedManyWithoutClothesInput
  }

  export type clothesUncheckedCreateInput = {
    id: string
    userName?: string | null
    name: string
    category?: string | null
    advice?: string | null
    imageUrl?: string | null
    createdAt: string
    materials?: materialsUncheckedCreateNestedManyWithoutClothesInput
  }

  export type clothesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    materials?: materialsUpdateManyWithoutClothesNestedInput
  }

  export type clothesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    materials?: materialsUncheckedUpdateManyWithoutClothesNestedInput
  }

  export type clothesCreateManyInput = {
    id: string
    userName?: string | null
    name: string
    category?: string | null
    advice?: string | null
    imageUrl?: string | null
    createdAt: string
  }

  export type clothesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type clothesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type materialsCreateInput = {
    name: string
    percent: number
    clothes: clothesCreateNestedOneWithoutMaterialsInput
  }

  export type materialsUncheckedCreateInput = {
    id?: number
    clothingId: string
    name: string
    percent: number
  }

  export type materialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    clothes?: clothesUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clothingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type materialsCreateManyInput = {
    clothingId: string
    name: string
    percent: number
  }

  export type materialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type materialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clothingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type incidentsCreateInput = {
    id: string
    userName?: string
    date: string
    time: string
    humidity?: number | null
    temperature?: number | null
    clothing?: string | null
  }

  export type incidentsUncheckedCreateInput = {
    id: string
    userName?: string
    date: string
    time: string
    humidity?: number | null
    temperature?: number | null
    clothing?: string | null
  }

  export type incidentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clothing?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type incidentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clothing?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type incidentsCreateManyInput = {
    id: string
    userName?: string
    date: string
    time: string
    humidity?: number | null
    temperature?: number | null
    clothing?: string | null
  }

  export type incidentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clothing?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type incidentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clothing?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MaterialsListRelationFilter = {
    every?: materialsWhereInput
    some?: materialsWhereInput
    none?: materialsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type materialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clothesCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    category?: SortOrder
    advice?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type clothesMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    category?: SortOrder
    advice?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type clothesMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    category?: SortOrder
    advice?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClothesScalarRelationFilter = {
    is?: clothesWhereInput
    isNot?: clothesWhereInput
  }

  export type materialsCountOrderByAggregateInput = {
    id?: SortOrder
    clothingId?: SortOrder
    name?: SortOrder
    percent?: SortOrder
  }

  export type materialsAvgOrderByAggregateInput = {
    id?: SortOrder
    percent?: SortOrder
  }

  export type materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    clothingId?: SortOrder
    name?: SortOrder
    percent?: SortOrder
  }

  export type materialsMinOrderByAggregateInput = {
    id?: SortOrder
    clothingId?: SortOrder
    name?: SortOrder
    percent?: SortOrder
  }

  export type materialsSumOrderByAggregateInput = {
    id?: SortOrder
    percent?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type incidentsCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    clothing?: SortOrder
  }

  export type incidentsAvgOrderByAggregateInput = {
    humidity?: SortOrder
    temperature?: SortOrder
  }

  export type incidentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    clothing?: SortOrder
  }

  export type incidentsMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    clothing?: SortOrder
  }

  export type incidentsSumOrderByAggregateInput = {
    humidity?: SortOrder
    temperature?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type materialsCreateNestedManyWithoutClothesInput = {
    create?: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput> | materialsCreateWithoutClothesInput[] | materialsUncheckedCreateWithoutClothesInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutClothesInput | materialsCreateOrConnectWithoutClothesInput[]
    createMany?: materialsCreateManyClothesInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type materialsUncheckedCreateNestedManyWithoutClothesInput = {
    create?: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput> | materialsCreateWithoutClothesInput[] | materialsUncheckedCreateWithoutClothesInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutClothesInput | materialsCreateOrConnectWithoutClothesInput[]
    createMany?: materialsCreateManyClothesInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type materialsUpdateManyWithoutClothesNestedInput = {
    create?: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput> | materialsCreateWithoutClothesInput[] | materialsUncheckedCreateWithoutClothesInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutClothesInput | materialsCreateOrConnectWithoutClothesInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutClothesInput | materialsUpsertWithWhereUniqueWithoutClothesInput[]
    createMany?: materialsCreateManyClothesInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutClothesInput | materialsUpdateWithWhereUniqueWithoutClothesInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutClothesInput | materialsUpdateManyWithWhereWithoutClothesInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type materialsUncheckedUpdateManyWithoutClothesNestedInput = {
    create?: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput> | materialsCreateWithoutClothesInput[] | materialsUncheckedCreateWithoutClothesInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutClothesInput | materialsCreateOrConnectWithoutClothesInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutClothesInput | materialsUpsertWithWhereUniqueWithoutClothesInput[]
    createMany?: materialsCreateManyClothesInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutClothesInput | materialsUpdateWithWhereUniqueWithoutClothesInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutClothesInput | materialsUpdateManyWithWhereWithoutClothesInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type clothesCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<clothesCreateWithoutMaterialsInput, clothesUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: clothesCreateOrConnectWithoutMaterialsInput
    connect?: clothesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clothesUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<clothesCreateWithoutMaterialsInput, clothesUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: clothesCreateOrConnectWithoutMaterialsInput
    upsert?: clothesUpsertWithoutMaterialsInput
    connect?: clothesWhereUniqueInput
    update?: XOR<XOR<clothesUpdateToOneWithWhereWithoutMaterialsInput, clothesUpdateWithoutMaterialsInput>, clothesUncheckedUpdateWithoutMaterialsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type materialsCreateWithoutClothesInput = {
    name: string
    percent: number
  }

  export type materialsUncheckedCreateWithoutClothesInput = {
    id?: number
    name: string
    percent: number
  }

  export type materialsCreateOrConnectWithoutClothesInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput>
  }

  export type materialsCreateManyClothesInputEnvelope = {
    data: materialsCreateManyClothesInput | materialsCreateManyClothesInput[]
  }

  export type materialsUpsertWithWhereUniqueWithoutClothesInput = {
    where: materialsWhereUniqueInput
    update: XOR<materialsUpdateWithoutClothesInput, materialsUncheckedUpdateWithoutClothesInput>
    create: XOR<materialsCreateWithoutClothesInput, materialsUncheckedCreateWithoutClothesInput>
  }

  export type materialsUpdateWithWhereUniqueWithoutClothesInput = {
    where: materialsWhereUniqueInput
    data: XOR<materialsUpdateWithoutClothesInput, materialsUncheckedUpdateWithoutClothesInput>
  }

  export type materialsUpdateManyWithWhereWithoutClothesInput = {
    where: materialsScalarWhereInput
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyWithoutClothesInput>
  }

  export type materialsScalarWhereInput = {
    AND?: materialsScalarWhereInput | materialsScalarWhereInput[]
    OR?: materialsScalarWhereInput[]
    NOT?: materialsScalarWhereInput | materialsScalarWhereInput[]
    id?: IntFilter<"materials"> | number
    clothingId?: StringFilter<"materials"> | string
    name?: StringFilter<"materials"> | string
    percent?: IntFilter<"materials"> | number
  }

  export type clothesCreateWithoutMaterialsInput = {
    id: string
    userName?: string | null
    name: string
    category?: string | null
    advice?: string | null
    imageUrl?: string | null
    createdAt: string
  }

  export type clothesUncheckedCreateWithoutMaterialsInput = {
    id: string
    userName?: string | null
    name: string
    category?: string | null
    advice?: string | null
    imageUrl?: string | null
    createdAt: string
  }

  export type clothesCreateOrConnectWithoutMaterialsInput = {
    where: clothesWhereUniqueInput
    create: XOR<clothesCreateWithoutMaterialsInput, clothesUncheckedCreateWithoutMaterialsInput>
  }

  export type clothesUpsertWithoutMaterialsInput = {
    update: XOR<clothesUpdateWithoutMaterialsInput, clothesUncheckedUpdateWithoutMaterialsInput>
    create: XOR<clothesCreateWithoutMaterialsInput, clothesUncheckedCreateWithoutMaterialsInput>
    where?: clothesWhereInput
  }

  export type clothesUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: clothesWhereInput
    data: XOR<clothesUpdateWithoutMaterialsInput, clothesUncheckedUpdateWithoutMaterialsInput>
  }

  export type clothesUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type clothesUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type materialsCreateManyClothesInput = {
    name: string
    percent: number
  }

  export type materialsUpdateWithoutClothesInput = {
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type materialsUncheckedUpdateWithoutClothesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }

  export type materialsUncheckedUpdateManyWithoutClothesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}