
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model Follows
 * 
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>
/**
 * Model BodyPart
 * 
 */
export type BodyPart = $Result.DefaultSelection<Prisma.$BodyPartPayload>
/**
 * Model Condition
 * 
 */
export type Condition = $Result.DefaultSelection<Prisma.$ConditionPayload>
/**
 * Model ConditionBodyPart
 * 
 */
export type ConditionBodyPart = $Result.DefaultSelection<Prisma.$ConditionBodyPartPayload>
/**
 * Model PainRecord
 * 
 */
export type PainRecord = $Result.DefaultSelection<Prisma.$PainRecordPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model BlogEntry
 * 
 */
export type BlogEntry = $Result.DefaultSelection<Prisma.$BlogEntryPayload>
/**
 * Model BlogEntryTag
 * 
 */
export type BlogEntryTag = $Result.DefaultSelection<Prisma.$BlogEntryTagPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MEDICAL_EXPERT: 'MEDICAL_EXPERT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.FollowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyPart`: Exposes CRUD operations for the **BodyPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyParts
    * const bodyParts = await prisma.bodyPart.findMany()
    * ```
    */
  get bodyPart(): Prisma.BodyPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.condition`: Exposes CRUD operations for the **Condition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conditions
    * const conditions = await prisma.condition.findMany()
    * ```
    */
  get condition(): Prisma.ConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conditionBodyPart`: Exposes CRUD operations for the **ConditionBodyPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConditionBodyParts
    * const conditionBodyParts = await prisma.conditionBodyPart.findMany()
    * ```
    */
  get conditionBodyPart(): Prisma.ConditionBodyPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.painRecord`: Exposes CRUD operations for the **PainRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PainRecords
    * const painRecords = await prisma.painRecord.findMany()
    * ```
    */
  get painRecord(): Prisma.PainRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogEntry`: Exposes CRUD operations for the **BlogEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogEntries
    * const blogEntries = await prisma.blogEntry.findMany()
    * ```
    */
  get blogEntry(): Prisma.BlogEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogEntryTag`: Exposes CRUD operations for the **BlogEntryTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogEntryTags
    * const blogEntryTags = await prisma.blogEntryTag.findMany()
    * ```
    */
  get blogEntryTag(): Prisma.BlogEntryTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
    User: 'User',
    UserProfile: 'UserProfile',
    UserSettings: 'UserSettings',
    Follows: 'Follows',
    BodyPart: 'BodyPart',
    Condition: 'Condition',
    ConditionBodyPart: 'ConditionBodyPart',
    PainRecord: 'PainRecord',
    Post: 'Post',
    Comment: 'Comment',
    Like: 'Like',
    BlogEntry: 'BlogEntry',
    BlogEntryTag: 'BlogEntryTag',
    Tag: 'Tag'
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
      modelProps: "user" | "userProfile" | "userSettings" | "follows" | "bodyPart" | "condition" | "conditionBodyPart" | "painRecord" | "post" | "comment" | "like" | "blogEntry" | "blogEntryTag" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>
        fields: Prisma.FollowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
      BodyPart: {
        payload: Prisma.$BodyPartPayload<ExtArgs>
        fields: Prisma.BodyPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          findFirst: {
            args: Prisma.BodyPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          findMany: {
            args: Prisma.BodyPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>[]
          }
          create: {
            args: Prisma.BodyPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          createMany: {
            args: Prisma.BodyPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>[]
          }
          delete: {
            args: Prisma.BodyPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          update: {
            args: Prisma.BodyPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          deleteMany: {
            args: Prisma.BodyPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>[]
          }
          upsert: {
            args: Prisma.BodyPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyPartPayload>
          }
          aggregate: {
            args: Prisma.BodyPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyPart>
          }
          groupBy: {
            args: Prisma.BodyPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyPartCountArgs<ExtArgs>
            result: $Utils.Optional<BodyPartCountAggregateOutputType> | number
          }
        }
      }
      Condition: {
        payload: Prisma.$ConditionPayload<ExtArgs>
        fields: Prisma.ConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findFirst: {
            args: Prisma.ConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findMany: {
            args: Prisma.ConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          create: {
            args: Prisma.ConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          createMany: {
            args: Prisma.ConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          delete: {
            args: Prisma.ConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          update: {
            args: Prisma.ConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          deleteMany: {
            args: Prisma.ConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          upsert: {
            args: Prisma.ConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          aggregate: {
            args: Prisma.ConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCondition>
          }
          groupBy: {
            args: Prisma.ConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConditionCountArgs<ExtArgs>
            result: $Utils.Optional<ConditionCountAggregateOutputType> | number
          }
        }
      }
      ConditionBodyPart: {
        payload: Prisma.$ConditionBodyPartPayload<ExtArgs>
        fields: Prisma.ConditionBodyPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConditionBodyPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConditionBodyPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          findFirst: {
            args: Prisma.ConditionBodyPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConditionBodyPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          findMany: {
            args: Prisma.ConditionBodyPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>[]
          }
          create: {
            args: Prisma.ConditionBodyPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          createMany: {
            args: Prisma.ConditionBodyPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConditionBodyPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>[]
          }
          delete: {
            args: Prisma.ConditionBodyPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          update: {
            args: Prisma.ConditionBodyPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          deleteMany: {
            args: Prisma.ConditionBodyPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConditionBodyPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConditionBodyPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>[]
          }
          upsert: {
            args: Prisma.ConditionBodyPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionBodyPartPayload>
          }
          aggregate: {
            args: Prisma.ConditionBodyPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConditionBodyPart>
          }
          groupBy: {
            args: Prisma.ConditionBodyPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConditionBodyPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConditionBodyPartCountArgs<ExtArgs>
            result: $Utils.Optional<ConditionBodyPartCountAggregateOutputType> | number
          }
        }
      }
      PainRecord: {
        payload: Prisma.$PainRecordPayload<ExtArgs>
        fields: Prisma.PainRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PainRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PainRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          findFirst: {
            args: Prisma.PainRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PainRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          findMany: {
            args: Prisma.PainRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>[]
          }
          create: {
            args: Prisma.PainRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          createMany: {
            args: Prisma.PainRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PainRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>[]
          }
          delete: {
            args: Prisma.PainRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          update: {
            args: Prisma.PainRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          deleteMany: {
            args: Prisma.PainRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PainRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PainRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>[]
          }
          upsert: {
            args: Prisma.PainRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainRecordPayload>
          }
          aggregate: {
            args: Prisma.PainRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePainRecord>
          }
          groupBy: {
            args: Prisma.PainRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PainRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PainRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PainRecordCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      BlogEntry: {
        payload: Prisma.$BlogEntryPayload<ExtArgs>
        fields: Prisma.BlogEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          findFirst: {
            args: Prisma.BlogEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          findMany: {
            args: Prisma.BlogEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>[]
          }
          create: {
            args: Prisma.BlogEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          createMany: {
            args: Prisma.BlogEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>[]
          }
          delete: {
            args: Prisma.BlogEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          update: {
            args: Prisma.BlogEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          deleteMany: {
            args: Prisma.BlogEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>[]
          }
          upsert: {
            args: Prisma.BlogEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryPayload>
          }
          aggregate: {
            args: Prisma.BlogEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogEntry>
          }
          groupBy: {
            args: Prisma.BlogEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogEntryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogEntryCountAggregateOutputType> | number
          }
        }
      }
      BlogEntryTag: {
        payload: Prisma.$BlogEntryTagPayload<ExtArgs>
        fields: Prisma.BlogEntryTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogEntryTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogEntryTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          findFirst: {
            args: Prisma.BlogEntryTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogEntryTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          findMany: {
            args: Prisma.BlogEntryTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>[]
          }
          create: {
            args: Prisma.BlogEntryTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          createMany: {
            args: Prisma.BlogEntryTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogEntryTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>[]
          }
          delete: {
            args: Prisma.BlogEntryTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          update: {
            args: Prisma.BlogEntryTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          deleteMany: {
            args: Prisma.BlogEntryTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogEntryTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogEntryTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>[]
          }
          upsert: {
            args: Prisma.BlogEntryTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogEntryTagPayload>
          }
          aggregate: {
            args: Prisma.BlogEntryTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogEntryTag>
          }
          groupBy: {
            args: Prisma.BlogEntryTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogEntryTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogEntryTagCountArgs<ExtArgs>
            result: $Utils.Optional<BlogEntryTagCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
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
    user?: UserOmit
    userProfile?: UserProfileOmit
    userSettings?: UserSettingsOmit
    follows?: FollowsOmit
    bodyPart?: BodyPartOmit
    condition?: ConditionOmit
    conditionBodyPart?: ConditionBodyPartOmit
    painRecord?: PainRecordOmit
    post?: PostOmit
    comment?: CommentOmit
    like?: LikeOmit
    blogEntry?: BlogEntryOmit
    blogEntryTag?: BlogEntryTagOmit
    tag?: TagOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    followers: number
    following: number
    painRecords: number
    posts: number
    comments: number
    likes: number
    blogEntries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    painRecords?: boolean | UserCountOutputTypeCountPainRecordsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    blogEntries?: boolean | UserCountOutputTypeCountBlogEntriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPainRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PainRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogEntryWhereInput
  }


  /**
   * Count Type BodyPartCountOutputType
   */

  export type BodyPartCountOutputType = {
    painRecords: number
    posts: number
    conditions: number
  }

  export type BodyPartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    painRecords?: boolean | BodyPartCountOutputTypeCountPainRecordsArgs
    posts?: boolean | BodyPartCountOutputTypeCountPostsArgs
    conditions?: boolean | BodyPartCountOutputTypeCountConditionsArgs
  }

  // Custom InputTypes
  /**
   * BodyPartCountOutputType without action
   */
  export type BodyPartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPartCountOutputType
     */
    select?: BodyPartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BodyPartCountOutputType without action
   */
  export type BodyPartCountOutputTypeCountPainRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PainRecordWhereInput
  }

  /**
   * BodyPartCountOutputType without action
   */
  export type BodyPartCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * BodyPartCountOutputType without action
   */
  export type BodyPartCountOutputTypeCountConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionBodyPartWhereInput
  }


  /**
   * Count Type ConditionCountOutputType
   */

  export type ConditionCountOutputType = {
    bodyParts: number
  }

  export type ConditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bodyParts?: boolean | ConditionCountOutputTypeCountBodyPartsArgs
  }

  // Custom InputTypes
  /**
   * ConditionCountOutputType without action
   */
  export type ConditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionCountOutputType
     */
    select?: ConditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConditionCountOutputType without action
   */
  export type ConditionCountOutputTypeCountBodyPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionBodyPartWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    likes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    likes: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    likes?: boolean | CommentCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * Count Type BlogEntryCountOutputType
   */

  export type BlogEntryCountOutputType = {
    tags: number
  }

  export type BlogEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | BlogEntryCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * BlogEntryCountOutputType without action
   */
  export type BlogEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryCountOutputType
     */
    select?: BlogEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogEntryCountOutputType without action
   */
  export type BlogEntryCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogEntryTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    blogEntries: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogEntries?: boolean | TagCountOutputTypeCountBlogEntriesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBlogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogEntryTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    surname: string | null
    email: string | null
    passwordHash: string | null
    profilePicture: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    surname: string | null
    email: string | null
    passwordHash: string | null
    profilePicture: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    name: number
    surname: number
    email: number
    passwordHash: number
    profilePicture: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    surname?: true
    email?: true
    passwordHash?: true
    profilePicture?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    surname?: true
    email?: true
    passwordHash?: true
    profilePicture?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    surname?: true
    email?: true
    passwordHash?: true
    profilePicture?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    name: string | null
    surname: string | null
    email: string
    passwordHash: string
    profilePicture: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    passwordHash?: boolean
    profilePicture?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    painRecords?: boolean | User$painRecordsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    blogEntries?: boolean | User$blogEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    passwordHash?: boolean
    profilePicture?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    passwordHash?: boolean
    profilePicture?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    passwordHash?: boolean
    profilePicture?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "surname" | "email" | "passwordHash" | "profilePicture" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    painRecords?: boolean | User$painRecordsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    blogEntries?: boolean | User$blogEntriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      followers: Prisma.$FollowsPayload<ExtArgs>[]
      following: Prisma.$FollowsPayload<ExtArgs>[]
      painRecords: Prisma.$PainRecordPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      blogEntries: Prisma.$BlogEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string | null
      surname: string | null
      email: string
      passwordHash: string
      profilePicture: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    painRecords<T extends User$painRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$painRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogEntries<T extends User$blogEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$blogEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * User.painRecords
   */
  export type User$painRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    where?: PainRecordWhereInput
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    cursor?: PainRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PainRecordScalarFieldEnum | PainRecordScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.blogEntries
   */
  export type User$blogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    where?: BlogEntryWhereInput
    orderBy?: BlogEntryOrderByWithRelationInput | BlogEntryOrderByWithRelationInput[]
    cursor?: BlogEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogEntryScalarFieldEnum | BlogEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    description: string | null
    location: string | null
    website: string | null
    birthDate: Date | null
    userId: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    description: string | null
    location: string | null
    website: string | null
    birthDate: Date | null
    userId: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    description: number
    location: number
    website: number
    birthDate: number
    userId: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    description?: true
    location?: true
    website?: true
    birthDate?: true
    userId?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    description?: true
    location?: true
    website?: true
    birthDate?: true
    userId?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    description?: true
    location?: true
    website?: true
    birthDate?: true
    userId?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    description: string | null
    location: string | null
    website: string | null
    birthDate: Date | null
    userId: string
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    birthDate?: boolean
    userId?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "location" | "website" | "birthDate" | "userId", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      location: string | null
      website: string | null
      birthDate: Date | null
      userId: string
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly description: FieldRef<"UserProfile", 'String'>
    readonly location: FieldRef<"UserProfile", 'String'>
    readonly website: FieldRef<"UserProfile", 'String'>
    readonly birthDate: FieldRef<"UserProfile", 'DateTime'>
    readonly userId: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    theme: string | null
    language: string | null
    country: string | null
    userId: string | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    theme: string | null
    language: string | null
    country: string | null
    userId: string | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    theme: number
    language: number
    country: number
    userId: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    country?: true
    userId?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    country?: true
    userId?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    country?: true
    userId?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    theme: string
    language: string
    country: string | null
    userId: string
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    country?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    country?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    country?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    theme?: boolean
    language?: boolean
    country?: boolean
    userId?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "language" | "country" | "userId", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      theme: string
      language: string
      country: string | null
      userId: string
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly theme: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly country: FieldRef<"UserSettings", 'String'>
    readonly userId: FieldRef<"UserSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsMinAggregateOutputType = {
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowsMaxAggregateOutputType = {
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowsCountAggregateOutputType = {
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type FollowsMinAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowsMaxAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowsCountAggregateInputType = {
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type FollowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithAggregationInput | FollowsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: FollowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    followerId: string
    followingId: string
    createdAt: Date
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type FollowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type FollowsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type FollowsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type FollowsSelectScalar = {
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type FollowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"followerId" | "followingId" | "createdAt", ExtArgs["result"]["follows"]>
  export type FollowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follows"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      followerId: string
      followingId: string
      createdAt: Date
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }

  type FollowsGetPayload<S extends boolean | null | undefined | FollowsDefaultArgs> = $Result.GetResult<Prisma.$FollowsPayload, S>

  type FollowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface FollowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follows'], meta: { name: 'Follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowsFindUniqueArgs>(args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowsFindFirstArgs>(args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `followerId`
     * const followsWithFollowerIdOnly = await prisma.follows.findMany({ select: { followerId: true } })
     * 
     */
    findMany<T extends FollowsFindManyArgs>(args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
     */
    create<T extends FollowsCreateArgs>(args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowsCreateManyArgs>(args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowsCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `followerId`
     * const followsWithFollowerIdOnly = await prisma.follows.createManyAndReturn({
     *   select: { followerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowsCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
     */
    delete<T extends FollowsDeleteArgs>(args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowsUpdateArgs>(args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowsDeleteManyArgs>(args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowsUpdateManyArgs>(args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowsUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `followerId`
     * const followsWithFollowerIdOnly = await prisma.follows.updateManyAndReturn({
     *   select: { followerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowsUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends FollowsUpsertArgs>(args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
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
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follows model
   */
  readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follows model
   */
  interface FollowsFieldRefs {
    readonly followerId: FieldRef<"Follows", 'String'>
    readonly followingId: FieldRef<"Follows", 'String'>
    readonly createdAt: FieldRef<"Follows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows create
   */
  export type FollowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
  }

  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follows createManyAndReturn
   */
  export type FollowsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follows update
   */
  export type FollowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follows updateManyAndReturn
   */
  export type FollowsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
  }

  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
  }


  /**
   * Model BodyPart
   */

  export type AggregateBodyPart = {
    _count: BodyPartCountAggregateOutputType | null
    _min: BodyPartMinAggregateOutputType | null
    _max: BodyPartMaxAggregateOutputType | null
  }

  export type BodyPartMinAggregateOutputType = {
    id: string | null
    name: string | null
    meshId: string | null
    description: string | null
  }

  export type BodyPartMaxAggregateOutputType = {
    id: string | null
    name: string | null
    meshId: string | null
    description: string | null
  }

  export type BodyPartCountAggregateOutputType = {
    id: number
    name: number
    meshId: number
    description: number
    _all: number
  }


  export type BodyPartMinAggregateInputType = {
    id?: true
    name?: true
    meshId?: true
    description?: true
  }

  export type BodyPartMaxAggregateInputType = {
    id?: true
    name?: true
    meshId?: true
    description?: true
  }

  export type BodyPartCountAggregateInputType = {
    id?: true
    name?: true
    meshId?: true
    description?: true
    _all?: true
  }

  export type BodyPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyPart to aggregate.
     */
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     */
    orderBy?: BodyPartOrderByWithRelationInput | BodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyParts
    **/
    _count?: true | BodyPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyPartMaxAggregateInputType
  }

  export type GetBodyPartAggregateType<T extends BodyPartAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyPart[P]>
      : GetScalarType<T[P], AggregateBodyPart[P]>
  }




  export type BodyPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyPartWhereInput
    orderBy?: BodyPartOrderByWithAggregationInput | BodyPartOrderByWithAggregationInput[]
    by: BodyPartScalarFieldEnum[] | BodyPartScalarFieldEnum
    having?: BodyPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyPartCountAggregateInputType | true
    _min?: BodyPartMinAggregateInputType
    _max?: BodyPartMaxAggregateInputType
  }

  export type BodyPartGroupByOutputType = {
    id: string
    name: string
    meshId: string
    description: string | null
    _count: BodyPartCountAggregateOutputType | null
    _min: BodyPartMinAggregateOutputType | null
    _max: BodyPartMaxAggregateOutputType | null
  }

  type GetBodyPartGroupByPayload<T extends BodyPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyPartGroupByOutputType[P]>
            : GetScalarType<T[P], BodyPartGroupByOutputType[P]>
        }
      >
    >


  export type BodyPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    meshId?: boolean
    description?: boolean
    painRecords?: boolean | BodyPart$painRecordsArgs<ExtArgs>
    posts?: boolean | BodyPart$postsArgs<ExtArgs>
    conditions?: boolean | BodyPart$conditionsArgs<ExtArgs>
    _count?: boolean | BodyPartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyPart"]>

  export type BodyPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    meshId?: boolean
    description?: boolean
  }, ExtArgs["result"]["bodyPart"]>

  export type BodyPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    meshId?: boolean
    description?: boolean
  }, ExtArgs["result"]["bodyPart"]>

  export type BodyPartSelectScalar = {
    id?: boolean
    name?: boolean
    meshId?: boolean
    description?: boolean
  }

  export type BodyPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "meshId" | "description", ExtArgs["result"]["bodyPart"]>
  export type BodyPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    painRecords?: boolean | BodyPart$painRecordsArgs<ExtArgs>
    posts?: boolean | BodyPart$postsArgs<ExtArgs>
    conditions?: boolean | BodyPart$conditionsArgs<ExtArgs>
    _count?: boolean | BodyPartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BodyPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BodyPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BodyPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyPart"
    objects: {
      painRecords: Prisma.$PainRecordPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      conditions: Prisma.$ConditionBodyPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      meshId: string
      description: string | null
    }, ExtArgs["result"]["bodyPart"]>
    composites: {}
  }

  type BodyPartGetPayload<S extends boolean | null | undefined | BodyPartDefaultArgs> = $Result.GetResult<Prisma.$BodyPartPayload, S>

  type BodyPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyPartCountAggregateInputType | true
    }

  export interface BodyPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyPart'], meta: { name: 'BodyPart' } }
    /**
     * Find zero or one BodyPart that matches the filter.
     * @param {BodyPartFindUniqueArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyPartFindUniqueArgs>(args: SelectSubset<T, BodyPartFindUniqueArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyPartFindUniqueOrThrowArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyPartFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartFindFirstArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyPartFindFirstArgs>(args?: SelectSubset<T, BodyPartFindFirstArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartFindFirstOrThrowArgs} args - Arguments to find a BodyPart
     * @example
     * // Get one BodyPart
     * const bodyPart = await prisma.bodyPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyPartFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyParts
     * const bodyParts = await prisma.bodyPart.findMany()
     * 
     * // Get first 10 BodyParts
     * const bodyParts = await prisma.bodyPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyPartWithIdOnly = await prisma.bodyPart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyPartFindManyArgs>(args?: SelectSubset<T, BodyPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyPart.
     * @param {BodyPartCreateArgs} args - Arguments to create a BodyPart.
     * @example
     * // Create one BodyPart
     * const BodyPart = await prisma.bodyPart.create({
     *   data: {
     *     // ... data to create a BodyPart
     *   }
     * })
     * 
     */
    create<T extends BodyPartCreateArgs>(args: SelectSubset<T, BodyPartCreateArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyParts.
     * @param {BodyPartCreateManyArgs} args - Arguments to create many BodyParts.
     * @example
     * // Create many BodyParts
     * const bodyPart = await prisma.bodyPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyPartCreateManyArgs>(args?: SelectSubset<T, BodyPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyParts and returns the data saved in the database.
     * @param {BodyPartCreateManyAndReturnArgs} args - Arguments to create many BodyParts.
     * @example
     * // Create many BodyParts
     * const bodyPart = await prisma.bodyPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyParts and only return the `id`
     * const bodyPartWithIdOnly = await prisma.bodyPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyPartCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyPart.
     * @param {BodyPartDeleteArgs} args - Arguments to delete one BodyPart.
     * @example
     * // Delete one BodyPart
     * const BodyPart = await prisma.bodyPart.delete({
     *   where: {
     *     // ... filter to delete one BodyPart
     *   }
     * })
     * 
     */
    delete<T extends BodyPartDeleteArgs>(args: SelectSubset<T, BodyPartDeleteArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyPart.
     * @param {BodyPartUpdateArgs} args - Arguments to update one BodyPart.
     * @example
     * // Update one BodyPart
     * const bodyPart = await prisma.bodyPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyPartUpdateArgs>(args: SelectSubset<T, BodyPartUpdateArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyParts.
     * @param {BodyPartDeleteManyArgs} args - Arguments to filter BodyParts to delete.
     * @example
     * // Delete a few BodyParts
     * const { count } = await prisma.bodyPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyPartDeleteManyArgs>(args?: SelectSubset<T, BodyPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyParts
     * const bodyPart = await prisma.bodyPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyPartUpdateManyArgs>(args: SelectSubset<T, BodyPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyParts and returns the data updated in the database.
     * @param {BodyPartUpdateManyAndReturnArgs} args - Arguments to update many BodyParts.
     * @example
     * // Update many BodyParts
     * const bodyPart = await prisma.bodyPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyParts and only return the `id`
     * const bodyPartWithIdOnly = await prisma.bodyPart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BodyPartUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyPart.
     * @param {BodyPartUpsertArgs} args - Arguments to update or create a BodyPart.
     * @example
     * // Update or create a BodyPart
     * const bodyPart = await prisma.bodyPart.upsert({
     *   create: {
     *     // ... data to create a BodyPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyPart we want to update
     *   }
     * })
     */
    upsert<T extends BodyPartUpsertArgs>(args: SelectSubset<T, BodyPartUpsertArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartCountArgs} args - Arguments to filter BodyParts to count.
     * @example
     * // Count the number of BodyParts
     * const count = await prisma.bodyPart.count({
     *   where: {
     *     // ... the filter for the BodyParts we want to count
     *   }
     * })
    **/
    count<T extends BodyPartCountArgs>(
      args?: Subset<T, BodyPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyPartAggregateArgs>(args: Subset<T, BodyPartAggregateArgs>): Prisma.PrismaPromise<GetBodyPartAggregateType<T>>

    /**
     * Group by BodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyPartGroupByArgs} args - Group by arguments.
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
      T extends BodyPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyPartGroupByArgs['orderBy'] }
        : { orderBy?: BodyPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyPart model
   */
  readonly fields: BodyPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    painRecords<T extends BodyPart$painRecordsArgs<ExtArgs> = {}>(args?: Subset<T, BodyPart$painRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends BodyPart$postsArgs<ExtArgs> = {}>(args?: Subset<T, BodyPart$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conditions<T extends BodyPart$conditionsArgs<ExtArgs> = {}>(args?: Subset<T, BodyPart$conditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BodyPart model
   */
  interface BodyPartFieldRefs {
    readonly id: FieldRef<"BodyPart", 'String'>
    readonly name: FieldRef<"BodyPart", 'String'>
    readonly meshId: FieldRef<"BodyPart", 'String'>
    readonly description: FieldRef<"BodyPart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BodyPart findUnique
   */
  export type BodyPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter, which BodyPart to fetch.
     */
    where: BodyPartWhereUniqueInput
  }

  /**
   * BodyPart findUniqueOrThrow
   */
  export type BodyPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter, which BodyPart to fetch.
     */
    where: BodyPartWhereUniqueInput
  }

  /**
   * BodyPart findFirst
   */
  export type BodyPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter, which BodyPart to fetch.
     */
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     */
    orderBy?: BodyPartOrderByWithRelationInput | BodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyParts.
     */
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyParts.
     */
    distinct?: BodyPartScalarFieldEnum | BodyPartScalarFieldEnum[]
  }

  /**
   * BodyPart findFirstOrThrow
   */
  export type BodyPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter, which BodyPart to fetch.
     */
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     */
    orderBy?: BodyPartOrderByWithRelationInput | BodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyParts.
     */
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyParts.
     */
    distinct?: BodyPartScalarFieldEnum | BodyPartScalarFieldEnum[]
  }

  /**
   * BodyPart findMany
   */
  export type BodyPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter, which BodyParts to fetch.
     */
    where?: BodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyParts to fetch.
     */
    orderBy?: BodyPartOrderByWithRelationInput | BodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyParts.
     */
    cursor?: BodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyParts.
     */
    skip?: number
    distinct?: BodyPartScalarFieldEnum | BodyPartScalarFieldEnum[]
  }

  /**
   * BodyPart create
   */
  export type BodyPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyPart.
     */
    data: XOR<BodyPartCreateInput, BodyPartUncheckedCreateInput>
  }

  /**
   * BodyPart createMany
   */
  export type BodyPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyParts.
     */
    data: BodyPartCreateManyInput | BodyPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyPart createManyAndReturn
   */
  export type BodyPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * The data used to create many BodyParts.
     */
    data: BodyPartCreateManyInput | BodyPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyPart update
   */
  export type BodyPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyPart.
     */
    data: XOR<BodyPartUpdateInput, BodyPartUncheckedUpdateInput>
    /**
     * Choose, which BodyPart to update.
     */
    where: BodyPartWhereUniqueInput
  }

  /**
   * BodyPart updateMany
   */
  export type BodyPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyParts.
     */
    data: XOR<BodyPartUpdateManyMutationInput, BodyPartUncheckedUpdateManyInput>
    /**
     * Filter which BodyParts to update
     */
    where?: BodyPartWhereInput
    /**
     * Limit how many BodyParts to update.
     */
    limit?: number
  }

  /**
   * BodyPart updateManyAndReturn
   */
  export type BodyPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * The data used to update BodyParts.
     */
    data: XOR<BodyPartUpdateManyMutationInput, BodyPartUncheckedUpdateManyInput>
    /**
     * Filter which BodyParts to update
     */
    where?: BodyPartWhereInput
    /**
     * Limit how many BodyParts to update.
     */
    limit?: number
  }

  /**
   * BodyPart upsert
   */
  export type BodyPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyPart to update in case it exists.
     */
    where: BodyPartWhereUniqueInput
    /**
     * In case the BodyPart found by the `where` argument doesn't exist, create a new BodyPart with this data.
     */
    create: XOR<BodyPartCreateInput, BodyPartUncheckedCreateInput>
    /**
     * In case the BodyPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyPartUpdateInput, BodyPartUncheckedUpdateInput>
  }

  /**
   * BodyPart delete
   */
  export type BodyPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
    /**
     * Filter which BodyPart to delete.
     */
    where: BodyPartWhereUniqueInput
  }

  /**
   * BodyPart deleteMany
   */
  export type BodyPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyParts to delete
     */
    where?: BodyPartWhereInput
    /**
     * Limit how many BodyParts to delete.
     */
    limit?: number
  }

  /**
   * BodyPart.painRecords
   */
  export type BodyPart$painRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    where?: PainRecordWhereInput
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    cursor?: PainRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PainRecordScalarFieldEnum | PainRecordScalarFieldEnum[]
  }

  /**
   * BodyPart.posts
   */
  export type BodyPart$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * BodyPart.conditions
   */
  export type BodyPart$conditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    where?: ConditionBodyPartWhereInput
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    cursor?: ConditionBodyPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionBodyPartScalarFieldEnum | ConditionBodyPartScalarFieldEnum[]
  }

  /**
   * BodyPart without action
   */
  export type BodyPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyPart
     */
    select?: BodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyPart
     */
    omit?: BodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyPartInclude<ExtArgs> | null
  }


  /**
   * Model Condition
   */

  export type AggregateCondition = {
    _count: ConditionCountAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  export type ConditionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    recommendation: string | null
    severity: $Enums.Severity | null
  }

  export type ConditionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    recommendation: string | null
    severity: $Enums.Severity | null
  }

  export type ConditionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    recommendation: number
    severity: number
    _all: number
  }


  export type ConditionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    recommendation?: true
    severity?: true
  }

  export type ConditionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    recommendation?: true
    severity?: true
  }

  export type ConditionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    recommendation?: true
    severity?: true
    _all?: true
  }

  export type ConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Condition to aggregate.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conditions
    **/
    _count?: true | ConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConditionMaxAggregateInputType
  }

  export type GetConditionAggregateType<T extends ConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCondition[P]>
      : GetScalarType<T[P], AggregateCondition[P]>
  }




  export type ConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithAggregationInput | ConditionOrderByWithAggregationInput[]
    by: ConditionScalarFieldEnum[] | ConditionScalarFieldEnum
    having?: ConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConditionCountAggregateInputType | true
    _min?: ConditionMinAggregateInputType
    _max?: ConditionMaxAggregateInputType
  }

  export type ConditionGroupByOutputType = {
    id: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
    _count: ConditionCountAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  type GetConditionGroupByPayload<T extends ConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConditionGroupByOutputType[P]>
            : GetScalarType<T[P], ConditionGroupByOutputType[P]>
        }
      >
    >


  export type ConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    recommendation?: boolean
    severity?: boolean
    bodyParts?: boolean | Condition$bodyPartsArgs<ExtArgs>
    _count?: boolean | ConditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    recommendation?: boolean
    severity?: boolean
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    recommendation?: boolean
    severity?: boolean
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    recommendation?: boolean
    severity?: boolean
  }

  export type ConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "recommendation" | "severity", ExtArgs["result"]["condition"]>
  export type ConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bodyParts?: boolean | Condition$bodyPartsArgs<ExtArgs>
    _count?: boolean | ConditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Condition"
    objects: {
      bodyParts: Prisma.$ConditionBodyPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      recommendation: string
      severity: $Enums.Severity
    }, ExtArgs["result"]["condition"]>
    composites: {}
  }

  type ConditionGetPayload<S extends boolean | null | undefined | ConditionDefaultArgs> = $Result.GetResult<Prisma.$ConditionPayload, S>

  type ConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConditionCountAggregateInputType | true
    }

  export interface ConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Condition'], meta: { name: 'Condition' } }
    /**
     * Find zero or one Condition that matches the filter.
     * @param {ConditionFindUniqueArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConditionFindUniqueArgs>(args: SelectSubset<T, ConditionFindUniqueArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Condition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConditionFindUniqueOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConditionFindFirstArgs>(args?: SelectSubset<T, ConditionFindFirstArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conditions
     * const conditions = await prisma.condition.findMany()
     * 
     * // Get first 10 Conditions
     * const conditions = await prisma.condition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conditionWithIdOnly = await prisma.condition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConditionFindManyArgs>(args?: SelectSubset<T, ConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Condition.
     * @param {ConditionCreateArgs} args - Arguments to create a Condition.
     * @example
     * // Create one Condition
     * const Condition = await prisma.condition.create({
     *   data: {
     *     // ... data to create a Condition
     *   }
     * })
     * 
     */
    create<T extends ConditionCreateArgs>(args: SelectSubset<T, ConditionCreateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conditions.
     * @param {ConditionCreateManyArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConditionCreateManyArgs>(args?: SelectSubset<T, ConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conditions and returns the data saved in the database.
     * @param {ConditionCreateManyAndReturnArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conditions and only return the `id`
     * const conditionWithIdOnly = await prisma.condition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Condition.
     * @param {ConditionDeleteArgs} args - Arguments to delete one Condition.
     * @example
     * // Delete one Condition
     * const Condition = await prisma.condition.delete({
     *   where: {
     *     // ... filter to delete one Condition
     *   }
     * })
     * 
     */
    delete<T extends ConditionDeleteArgs>(args: SelectSubset<T, ConditionDeleteArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Condition.
     * @param {ConditionUpdateArgs} args - Arguments to update one Condition.
     * @example
     * // Update one Condition
     * const condition = await prisma.condition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConditionUpdateArgs>(args: SelectSubset<T, ConditionUpdateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conditions.
     * @param {ConditionDeleteManyArgs} args - Arguments to filter Conditions to delete.
     * @example
     * // Delete a few Conditions
     * const { count } = await prisma.condition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConditionDeleteManyArgs>(args?: SelectSubset<T, ConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conditions
     * const condition = await prisma.condition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConditionUpdateManyArgs>(args: SelectSubset<T, ConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conditions and returns the data updated in the database.
     * @param {ConditionUpdateManyAndReturnArgs} args - Arguments to update many Conditions.
     * @example
     * // Update many Conditions
     * const condition = await prisma.condition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conditions and only return the `id`
     * const conditionWithIdOnly = await prisma.condition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Condition.
     * @param {ConditionUpsertArgs} args - Arguments to update or create a Condition.
     * @example
     * // Update or create a Condition
     * const condition = await prisma.condition.upsert({
     *   create: {
     *     // ... data to create a Condition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Condition we want to update
     *   }
     * })
     */
    upsert<T extends ConditionUpsertArgs>(args: SelectSubset<T, ConditionUpsertArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionCountArgs} args - Arguments to filter Conditions to count.
     * @example
     * // Count the number of Conditions
     * const count = await prisma.condition.count({
     *   where: {
     *     // ... the filter for the Conditions we want to count
     *   }
     * })
    **/
    count<T extends ConditionCountArgs>(
      args?: Subset<T, ConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConditionAggregateArgs>(args: Subset<T, ConditionAggregateArgs>): Prisma.PrismaPromise<GetConditionAggregateType<T>>

    /**
     * Group by Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionGroupByArgs} args - Group by arguments.
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
      T extends ConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConditionGroupByArgs['orderBy'] }
        : { orderBy?: ConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Condition model
   */
  readonly fields: ConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Condition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bodyParts<T extends Condition$bodyPartsArgs<ExtArgs> = {}>(args?: Subset<T, Condition$bodyPartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Condition model
   */
  interface ConditionFieldRefs {
    readonly id: FieldRef<"Condition", 'String'>
    readonly name: FieldRef<"Condition", 'String'>
    readonly description: FieldRef<"Condition", 'String'>
    readonly recommendation: FieldRef<"Condition", 'String'>
    readonly severity: FieldRef<"Condition", 'Severity'>
  }
    

  // Custom InputTypes
  /**
   * Condition findUnique
   */
  export type ConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findUniqueOrThrow
   */
  export type ConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findFirst
   */
  export type ConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findFirstOrThrow
   */
  export type ConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findMany
   */
  export type ConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Conditions to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition create
   */
  export type ConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a Condition.
     */
    data: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
  }

  /**
   * Condition createMany
   */
  export type ConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condition createManyAndReturn
   */
  export type ConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condition update
   */
  export type ConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a Condition.
     */
    data: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
    /**
     * Choose, which Condition to update.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition updateMany
   */
  export type ConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conditions.
     */
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Conditions to update
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to update.
     */
    limit?: number
  }

  /**
   * Condition updateManyAndReturn
   */
  export type ConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * The data used to update Conditions.
     */
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Conditions to update
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to update.
     */
    limit?: number
  }

  /**
   * Condition upsert
   */
  export type ConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the Condition to update in case it exists.
     */
    where: ConditionWhereUniqueInput
    /**
     * In case the Condition found by the `where` argument doesn't exist, create a new Condition with this data.
     */
    create: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
    /**
     * In case the Condition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
  }

  /**
   * Condition delete
   */
  export type ConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter which Condition to delete.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition deleteMany
   */
  export type ConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conditions to delete
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to delete.
     */
    limit?: number
  }

  /**
   * Condition.bodyParts
   */
  export type Condition$bodyPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    where?: ConditionBodyPartWhereInput
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    cursor?: ConditionBodyPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionBodyPartScalarFieldEnum | ConditionBodyPartScalarFieldEnum[]
  }

  /**
   * Condition without action
   */
  export type ConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
  }


  /**
   * Model ConditionBodyPart
   */

  export type AggregateConditionBodyPart = {
    _count: ConditionBodyPartCountAggregateOutputType | null
    _min: ConditionBodyPartMinAggregateOutputType | null
    _max: ConditionBodyPartMaxAggregateOutputType | null
  }

  export type ConditionBodyPartMinAggregateOutputType = {
    conditionId: string | null
    bodyPartId: string | null
  }

  export type ConditionBodyPartMaxAggregateOutputType = {
    conditionId: string | null
    bodyPartId: string | null
  }

  export type ConditionBodyPartCountAggregateOutputType = {
    conditionId: number
    bodyPartId: number
    _all: number
  }


  export type ConditionBodyPartMinAggregateInputType = {
    conditionId?: true
    bodyPartId?: true
  }

  export type ConditionBodyPartMaxAggregateInputType = {
    conditionId?: true
    bodyPartId?: true
  }

  export type ConditionBodyPartCountAggregateInputType = {
    conditionId?: true
    bodyPartId?: true
    _all?: true
  }

  export type ConditionBodyPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConditionBodyPart to aggregate.
     */
    where?: ConditionBodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConditionBodyParts to fetch.
     */
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConditionBodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConditionBodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConditionBodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConditionBodyParts
    **/
    _count?: true | ConditionBodyPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConditionBodyPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConditionBodyPartMaxAggregateInputType
  }

  export type GetConditionBodyPartAggregateType<T extends ConditionBodyPartAggregateArgs> = {
        [P in keyof T & keyof AggregateConditionBodyPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConditionBodyPart[P]>
      : GetScalarType<T[P], AggregateConditionBodyPart[P]>
  }




  export type ConditionBodyPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionBodyPartWhereInput
    orderBy?: ConditionBodyPartOrderByWithAggregationInput | ConditionBodyPartOrderByWithAggregationInput[]
    by: ConditionBodyPartScalarFieldEnum[] | ConditionBodyPartScalarFieldEnum
    having?: ConditionBodyPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConditionBodyPartCountAggregateInputType | true
    _min?: ConditionBodyPartMinAggregateInputType
    _max?: ConditionBodyPartMaxAggregateInputType
  }

  export type ConditionBodyPartGroupByOutputType = {
    conditionId: string
    bodyPartId: string
    _count: ConditionBodyPartCountAggregateOutputType | null
    _min: ConditionBodyPartMinAggregateOutputType | null
    _max: ConditionBodyPartMaxAggregateOutputType | null
  }

  type GetConditionBodyPartGroupByPayload<T extends ConditionBodyPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConditionBodyPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConditionBodyPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConditionBodyPartGroupByOutputType[P]>
            : GetScalarType<T[P], ConditionBodyPartGroupByOutputType[P]>
        }
      >
    >


  export type ConditionBodyPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conditionId?: boolean
    bodyPartId?: boolean
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conditionBodyPart"]>

  export type ConditionBodyPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conditionId?: boolean
    bodyPartId?: boolean
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conditionBodyPart"]>

  export type ConditionBodyPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conditionId?: boolean
    bodyPartId?: boolean
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conditionBodyPart"]>

  export type ConditionBodyPartSelectScalar = {
    conditionId?: boolean
    bodyPartId?: boolean
  }

  export type ConditionBodyPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conditionId" | "bodyPartId", ExtArgs["result"]["conditionBodyPart"]>
  export type ConditionBodyPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }
  export type ConditionBodyPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }
  export type ConditionBodyPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    condition?: boolean | ConditionDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }

  export type $ConditionBodyPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConditionBodyPart"
    objects: {
      condition: Prisma.$ConditionPayload<ExtArgs>
      bodyPart: Prisma.$BodyPartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      conditionId: string
      bodyPartId: string
    }, ExtArgs["result"]["conditionBodyPart"]>
    composites: {}
  }

  type ConditionBodyPartGetPayload<S extends boolean | null | undefined | ConditionBodyPartDefaultArgs> = $Result.GetResult<Prisma.$ConditionBodyPartPayload, S>

  type ConditionBodyPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConditionBodyPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConditionBodyPartCountAggregateInputType | true
    }

  export interface ConditionBodyPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConditionBodyPart'], meta: { name: 'ConditionBodyPart' } }
    /**
     * Find zero or one ConditionBodyPart that matches the filter.
     * @param {ConditionBodyPartFindUniqueArgs} args - Arguments to find a ConditionBodyPart
     * @example
     * // Get one ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConditionBodyPartFindUniqueArgs>(args: SelectSubset<T, ConditionBodyPartFindUniqueArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConditionBodyPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConditionBodyPartFindUniqueOrThrowArgs} args - Arguments to find a ConditionBodyPart
     * @example
     * // Get one ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConditionBodyPartFindUniqueOrThrowArgs>(args: SelectSubset<T, ConditionBodyPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConditionBodyPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartFindFirstArgs} args - Arguments to find a ConditionBodyPart
     * @example
     * // Get one ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConditionBodyPartFindFirstArgs>(args?: SelectSubset<T, ConditionBodyPartFindFirstArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConditionBodyPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartFindFirstOrThrowArgs} args - Arguments to find a ConditionBodyPart
     * @example
     * // Get one ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConditionBodyPartFindFirstOrThrowArgs>(args?: SelectSubset<T, ConditionBodyPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConditionBodyParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConditionBodyParts
     * const conditionBodyParts = await prisma.conditionBodyPart.findMany()
     * 
     * // Get first 10 ConditionBodyParts
     * const conditionBodyParts = await prisma.conditionBodyPart.findMany({ take: 10 })
     * 
     * // Only select the `conditionId`
     * const conditionBodyPartWithConditionIdOnly = await prisma.conditionBodyPart.findMany({ select: { conditionId: true } })
     * 
     */
    findMany<T extends ConditionBodyPartFindManyArgs>(args?: SelectSubset<T, ConditionBodyPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConditionBodyPart.
     * @param {ConditionBodyPartCreateArgs} args - Arguments to create a ConditionBodyPart.
     * @example
     * // Create one ConditionBodyPart
     * const ConditionBodyPart = await prisma.conditionBodyPart.create({
     *   data: {
     *     // ... data to create a ConditionBodyPart
     *   }
     * })
     * 
     */
    create<T extends ConditionBodyPartCreateArgs>(args: SelectSubset<T, ConditionBodyPartCreateArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConditionBodyParts.
     * @param {ConditionBodyPartCreateManyArgs} args - Arguments to create many ConditionBodyParts.
     * @example
     * // Create many ConditionBodyParts
     * const conditionBodyPart = await prisma.conditionBodyPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConditionBodyPartCreateManyArgs>(args?: SelectSubset<T, ConditionBodyPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConditionBodyParts and returns the data saved in the database.
     * @param {ConditionBodyPartCreateManyAndReturnArgs} args - Arguments to create many ConditionBodyParts.
     * @example
     * // Create many ConditionBodyParts
     * const conditionBodyPart = await prisma.conditionBodyPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConditionBodyParts and only return the `conditionId`
     * const conditionBodyPartWithConditionIdOnly = await prisma.conditionBodyPart.createManyAndReturn({
     *   select: { conditionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConditionBodyPartCreateManyAndReturnArgs>(args?: SelectSubset<T, ConditionBodyPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConditionBodyPart.
     * @param {ConditionBodyPartDeleteArgs} args - Arguments to delete one ConditionBodyPart.
     * @example
     * // Delete one ConditionBodyPart
     * const ConditionBodyPart = await prisma.conditionBodyPart.delete({
     *   where: {
     *     // ... filter to delete one ConditionBodyPart
     *   }
     * })
     * 
     */
    delete<T extends ConditionBodyPartDeleteArgs>(args: SelectSubset<T, ConditionBodyPartDeleteArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConditionBodyPart.
     * @param {ConditionBodyPartUpdateArgs} args - Arguments to update one ConditionBodyPart.
     * @example
     * // Update one ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConditionBodyPartUpdateArgs>(args: SelectSubset<T, ConditionBodyPartUpdateArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConditionBodyParts.
     * @param {ConditionBodyPartDeleteManyArgs} args - Arguments to filter ConditionBodyParts to delete.
     * @example
     * // Delete a few ConditionBodyParts
     * const { count } = await prisma.conditionBodyPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConditionBodyPartDeleteManyArgs>(args?: SelectSubset<T, ConditionBodyPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConditionBodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConditionBodyParts
     * const conditionBodyPart = await prisma.conditionBodyPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConditionBodyPartUpdateManyArgs>(args: SelectSubset<T, ConditionBodyPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConditionBodyParts and returns the data updated in the database.
     * @param {ConditionBodyPartUpdateManyAndReturnArgs} args - Arguments to update many ConditionBodyParts.
     * @example
     * // Update many ConditionBodyParts
     * const conditionBodyPart = await prisma.conditionBodyPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConditionBodyParts and only return the `conditionId`
     * const conditionBodyPartWithConditionIdOnly = await prisma.conditionBodyPart.updateManyAndReturn({
     *   select: { conditionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConditionBodyPartUpdateManyAndReturnArgs>(args: SelectSubset<T, ConditionBodyPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConditionBodyPart.
     * @param {ConditionBodyPartUpsertArgs} args - Arguments to update or create a ConditionBodyPart.
     * @example
     * // Update or create a ConditionBodyPart
     * const conditionBodyPart = await prisma.conditionBodyPart.upsert({
     *   create: {
     *     // ... data to create a ConditionBodyPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConditionBodyPart we want to update
     *   }
     * })
     */
    upsert<T extends ConditionBodyPartUpsertArgs>(args: SelectSubset<T, ConditionBodyPartUpsertArgs<ExtArgs>>): Prisma__ConditionBodyPartClient<$Result.GetResult<Prisma.$ConditionBodyPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConditionBodyParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartCountArgs} args - Arguments to filter ConditionBodyParts to count.
     * @example
     * // Count the number of ConditionBodyParts
     * const count = await prisma.conditionBodyPart.count({
     *   where: {
     *     // ... the filter for the ConditionBodyParts we want to count
     *   }
     * })
    **/
    count<T extends ConditionBodyPartCountArgs>(
      args?: Subset<T, ConditionBodyPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConditionBodyPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConditionBodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConditionBodyPartAggregateArgs>(args: Subset<T, ConditionBodyPartAggregateArgs>): Prisma.PrismaPromise<GetConditionBodyPartAggregateType<T>>

    /**
     * Group by ConditionBodyPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionBodyPartGroupByArgs} args - Group by arguments.
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
      T extends ConditionBodyPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConditionBodyPartGroupByArgs['orderBy'] }
        : { orderBy?: ConditionBodyPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConditionBodyPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConditionBodyPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConditionBodyPart model
   */
  readonly fields: ConditionBodyPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConditionBodyPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConditionBodyPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    condition<T extends ConditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConditionDefaultArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bodyPart<T extends BodyPartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BodyPartDefaultArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConditionBodyPart model
   */
  interface ConditionBodyPartFieldRefs {
    readonly conditionId: FieldRef<"ConditionBodyPart", 'String'>
    readonly bodyPartId: FieldRef<"ConditionBodyPart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConditionBodyPart findUnique
   */
  export type ConditionBodyPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter, which ConditionBodyPart to fetch.
     */
    where: ConditionBodyPartWhereUniqueInput
  }

  /**
   * ConditionBodyPart findUniqueOrThrow
   */
  export type ConditionBodyPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter, which ConditionBodyPart to fetch.
     */
    where: ConditionBodyPartWhereUniqueInput
  }

  /**
   * ConditionBodyPart findFirst
   */
  export type ConditionBodyPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter, which ConditionBodyPart to fetch.
     */
    where?: ConditionBodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConditionBodyParts to fetch.
     */
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConditionBodyParts.
     */
    cursor?: ConditionBodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConditionBodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConditionBodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConditionBodyParts.
     */
    distinct?: ConditionBodyPartScalarFieldEnum | ConditionBodyPartScalarFieldEnum[]
  }

  /**
   * ConditionBodyPart findFirstOrThrow
   */
  export type ConditionBodyPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter, which ConditionBodyPart to fetch.
     */
    where?: ConditionBodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConditionBodyParts to fetch.
     */
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConditionBodyParts.
     */
    cursor?: ConditionBodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConditionBodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConditionBodyParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConditionBodyParts.
     */
    distinct?: ConditionBodyPartScalarFieldEnum | ConditionBodyPartScalarFieldEnum[]
  }

  /**
   * ConditionBodyPart findMany
   */
  export type ConditionBodyPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter, which ConditionBodyParts to fetch.
     */
    where?: ConditionBodyPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConditionBodyParts to fetch.
     */
    orderBy?: ConditionBodyPartOrderByWithRelationInput | ConditionBodyPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConditionBodyParts.
     */
    cursor?: ConditionBodyPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConditionBodyParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConditionBodyParts.
     */
    skip?: number
    distinct?: ConditionBodyPartScalarFieldEnum | ConditionBodyPartScalarFieldEnum[]
  }

  /**
   * ConditionBodyPart create
   */
  export type ConditionBodyPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * The data needed to create a ConditionBodyPart.
     */
    data: XOR<ConditionBodyPartCreateInput, ConditionBodyPartUncheckedCreateInput>
  }

  /**
   * ConditionBodyPart createMany
   */
  export type ConditionBodyPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConditionBodyParts.
     */
    data: ConditionBodyPartCreateManyInput | ConditionBodyPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConditionBodyPart createManyAndReturn
   */
  export type ConditionBodyPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * The data used to create many ConditionBodyParts.
     */
    data: ConditionBodyPartCreateManyInput | ConditionBodyPartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConditionBodyPart update
   */
  export type ConditionBodyPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * The data needed to update a ConditionBodyPart.
     */
    data: XOR<ConditionBodyPartUpdateInput, ConditionBodyPartUncheckedUpdateInput>
    /**
     * Choose, which ConditionBodyPart to update.
     */
    where: ConditionBodyPartWhereUniqueInput
  }

  /**
   * ConditionBodyPart updateMany
   */
  export type ConditionBodyPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConditionBodyParts.
     */
    data: XOR<ConditionBodyPartUpdateManyMutationInput, ConditionBodyPartUncheckedUpdateManyInput>
    /**
     * Filter which ConditionBodyParts to update
     */
    where?: ConditionBodyPartWhereInput
    /**
     * Limit how many ConditionBodyParts to update.
     */
    limit?: number
  }

  /**
   * ConditionBodyPart updateManyAndReturn
   */
  export type ConditionBodyPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * The data used to update ConditionBodyParts.
     */
    data: XOR<ConditionBodyPartUpdateManyMutationInput, ConditionBodyPartUncheckedUpdateManyInput>
    /**
     * Filter which ConditionBodyParts to update
     */
    where?: ConditionBodyPartWhereInput
    /**
     * Limit how many ConditionBodyParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConditionBodyPart upsert
   */
  export type ConditionBodyPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * The filter to search for the ConditionBodyPart to update in case it exists.
     */
    where: ConditionBodyPartWhereUniqueInput
    /**
     * In case the ConditionBodyPart found by the `where` argument doesn't exist, create a new ConditionBodyPart with this data.
     */
    create: XOR<ConditionBodyPartCreateInput, ConditionBodyPartUncheckedCreateInput>
    /**
     * In case the ConditionBodyPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConditionBodyPartUpdateInput, ConditionBodyPartUncheckedUpdateInput>
  }

  /**
   * ConditionBodyPart delete
   */
  export type ConditionBodyPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
    /**
     * Filter which ConditionBodyPart to delete.
     */
    where: ConditionBodyPartWhereUniqueInput
  }

  /**
   * ConditionBodyPart deleteMany
   */
  export type ConditionBodyPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConditionBodyParts to delete
     */
    where?: ConditionBodyPartWhereInput
    /**
     * Limit how many ConditionBodyParts to delete.
     */
    limit?: number
  }

  /**
   * ConditionBodyPart without action
   */
  export type ConditionBodyPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConditionBodyPart
     */
    select?: ConditionBodyPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConditionBodyPart
     */
    omit?: ConditionBodyPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionBodyPartInclude<ExtArgs> | null
  }


  /**
   * Model PainRecord
   */

  export type AggregatePainRecord = {
    _count: PainRecordCountAggregateOutputType | null
    _avg: PainRecordAvgAggregateOutputType | null
    _sum: PainRecordSumAggregateOutputType | null
    _min: PainRecordMinAggregateOutputType | null
    _max: PainRecordMaxAggregateOutputType | null
  }

  export type PainRecordAvgAggregateOutputType = {
    intensity: number | null
  }

  export type PainRecordSumAggregateOutputType = {
    intensity: number | null
  }

  export type PainRecordMinAggregateOutputType = {
    id: string | null
    intensity: number | null
    notes: string | null
    createdAt: Date | null
    userId: string | null
    bodyPartId: string | null
  }

  export type PainRecordMaxAggregateOutputType = {
    id: string | null
    intensity: number | null
    notes: string | null
    createdAt: Date | null
    userId: string | null
    bodyPartId: string | null
  }

  export type PainRecordCountAggregateOutputType = {
    id: number
    intensity: number
    notes: number
    createdAt: number
    userId: number
    bodyPartId: number
    _all: number
  }


  export type PainRecordAvgAggregateInputType = {
    intensity?: true
  }

  export type PainRecordSumAggregateInputType = {
    intensity?: true
  }

  export type PainRecordMinAggregateInputType = {
    id?: true
    intensity?: true
    notes?: true
    createdAt?: true
    userId?: true
    bodyPartId?: true
  }

  export type PainRecordMaxAggregateInputType = {
    id?: true
    intensity?: true
    notes?: true
    createdAt?: true
    userId?: true
    bodyPartId?: true
  }

  export type PainRecordCountAggregateInputType = {
    id?: true
    intensity?: true
    notes?: true
    createdAt?: true
    userId?: true
    bodyPartId?: true
    _all?: true
  }

  export type PainRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PainRecord to aggregate.
     */
    where?: PainRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PainRecords to fetch.
     */
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PainRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PainRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PainRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PainRecords
    **/
    _count?: true | PainRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PainRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PainRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PainRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PainRecordMaxAggregateInputType
  }

  export type GetPainRecordAggregateType<T extends PainRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePainRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePainRecord[P]>
      : GetScalarType<T[P], AggregatePainRecord[P]>
  }




  export type PainRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PainRecordWhereInput
    orderBy?: PainRecordOrderByWithAggregationInput | PainRecordOrderByWithAggregationInput[]
    by: PainRecordScalarFieldEnum[] | PainRecordScalarFieldEnum
    having?: PainRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PainRecordCountAggregateInputType | true
    _avg?: PainRecordAvgAggregateInputType
    _sum?: PainRecordSumAggregateInputType
    _min?: PainRecordMinAggregateInputType
    _max?: PainRecordMaxAggregateInputType
  }

  export type PainRecordGroupByOutputType = {
    id: string
    intensity: number
    notes: string | null
    createdAt: Date
    userId: string
    bodyPartId: string
    _count: PainRecordCountAggregateOutputType | null
    _avg: PainRecordAvgAggregateOutputType | null
    _sum: PainRecordSumAggregateOutputType | null
    _min: PainRecordMinAggregateOutputType | null
    _max: PainRecordMaxAggregateOutputType | null
  }

  type GetPainRecordGroupByPayload<T extends PainRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PainRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PainRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PainRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PainRecordGroupByOutputType[P]>
        }
      >
    >


  export type PainRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["painRecord"]>

  export type PainRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["painRecord"]>

  export type PainRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["painRecord"]>

  export type PainRecordSelectScalar = {
    id?: boolean
    intensity?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
  }

  export type PainRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intensity" | "notes" | "createdAt" | "userId" | "bodyPartId", ExtArgs["result"]["painRecord"]>
  export type PainRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }
  export type PainRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }
  export type PainRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }

  export type $PainRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PainRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bodyPart: Prisma.$BodyPartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * Valid range: 1-10. 
       */
      intensity: number
      notes: string | null
      createdAt: Date
      userId: string
      bodyPartId: string
    }, ExtArgs["result"]["painRecord"]>
    composites: {}
  }

  type PainRecordGetPayload<S extends boolean | null | undefined | PainRecordDefaultArgs> = $Result.GetResult<Prisma.$PainRecordPayload, S>

  type PainRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PainRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PainRecordCountAggregateInputType | true
    }

  export interface PainRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PainRecord'], meta: { name: 'PainRecord' } }
    /**
     * Find zero or one PainRecord that matches the filter.
     * @param {PainRecordFindUniqueArgs} args - Arguments to find a PainRecord
     * @example
     * // Get one PainRecord
     * const painRecord = await prisma.painRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PainRecordFindUniqueArgs>(args: SelectSubset<T, PainRecordFindUniqueArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PainRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PainRecordFindUniqueOrThrowArgs} args - Arguments to find a PainRecord
     * @example
     * // Get one PainRecord
     * const painRecord = await prisma.painRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PainRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PainRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PainRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordFindFirstArgs} args - Arguments to find a PainRecord
     * @example
     * // Get one PainRecord
     * const painRecord = await prisma.painRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PainRecordFindFirstArgs>(args?: SelectSubset<T, PainRecordFindFirstArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PainRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordFindFirstOrThrowArgs} args - Arguments to find a PainRecord
     * @example
     * // Get one PainRecord
     * const painRecord = await prisma.painRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PainRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PainRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PainRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PainRecords
     * const painRecords = await prisma.painRecord.findMany()
     * 
     * // Get first 10 PainRecords
     * const painRecords = await prisma.painRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const painRecordWithIdOnly = await prisma.painRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PainRecordFindManyArgs>(args?: SelectSubset<T, PainRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PainRecord.
     * @param {PainRecordCreateArgs} args - Arguments to create a PainRecord.
     * @example
     * // Create one PainRecord
     * const PainRecord = await prisma.painRecord.create({
     *   data: {
     *     // ... data to create a PainRecord
     *   }
     * })
     * 
     */
    create<T extends PainRecordCreateArgs>(args: SelectSubset<T, PainRecordCreateArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PainRecords.
     * @param {PainRecordCreateManyArgs} args - Arguments to create many PainRecords.
     * @example
     * // Create many PainRecords
     * const painRecord = await prisma.painRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PainRecordCreateManyArgs>(args?: SelectSubset<T, PainRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PainRecords and returns the data saved in the database.
     * @param {PainRecordCreateManyAndReturnArgs} args - Arguments to create many PainRecords.
     * @example
     * // Create many PainRecords
     * const painRecord = await prisma.painRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PainRecords and only return the `id`
     * const painRecordWithIdOnly = await prisma.painRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PainRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PainRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PainRecord.
     * @param {PainRecordDeleteArgs} args - Arguments to delete one PainRecord.
     * @example
     * // Delete one PainRecord
     * const PainRecord = await prisma.painRecord.delete({
     *   where: {
     *     // ... filter to delete one PainRecord
     *   }
     * })
     * 
     */
    delete<T extends PainRecordDeleteArgs>(args: SelectSubset<T, PainRecordDeleteArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PainRecord.
     * @param {PainRecordUpdateArgs} args - Arguments to update one PainRecord.
     * @example
     * // Update one PainRecord
     * const painRecord = await prisma.painRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PainRecordUpdateArgs>(args: SelectSubset<T, PainRecordUpdateArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PainRecords.
     * @param {PainRecordDeleteManyArgs} args - Arguments to filter PainRecords to delete.
     * @example
     * // Delete a few PainRecords
     * const { count } = await prisma.painRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PainRecordDeleteManyArgs>(args?: SelectSubset<T, PainRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PainRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PainRecords
     * const painRecord = await prisma.painRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PainRecordUpdateManyArgs>(args: SelectSubset<T, PainRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PainRecords and returns the data updated in the database.
     * @param {PainRecordUpdateManyAndReturnArgs} args - Arguments to update many PainRecords.
     * @example
     * // Update many PainRecords
     * const painRecord = await prisma.painRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PainRecords and only return the `id`
     * const painRecordWithIdOnly = await prisma.painRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PainRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PainRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PainRecord.
     * @param {PainRecordUpsertArgs} args - Arguments to update or create a PainRecord.
     * @example
     * // Update or create a PainRecord
     * const painRecord = await prisma.painRecord.upsert({
     *   create: {
     *     // ... data to create a PainRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PainRecord we want to update
     *   }
     * })
     */
    upsert<T extends PainRecordUpsertArgs>(args: SelectSubset<T, PainRecordUpsertArgs<ExtArgs>>): Prisma__PainRecordClient<$Result.GetResult<Prisma.$PainRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PainRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordCountArgs} args - Arguments to filter PainRecords to count.
     * @example
     * // Count the number of PainRecords
     * const count = await prisma.painRecord.count({
     *   where: {
     *     // ... the filter for the PainRecords we want to count
     *   }
     * })
    **/
    count<T extends PainRecordCountArgs>(
      args?: Subset<T, PainRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PainRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PainRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PainRecordAggregateArgs>(args: Subset<T, PainRecordAggregateArgs>): Prisma.PrismaPromise<GetPainRecordAggregateType<T>>

    /**
     * Group by PainRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainRecordGroupByArgs} args - Group by arguments.
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
      T extends PainRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PainRecordGroupByArgs['orderBy'] }
        : { orderBy?: PainRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PainRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPainRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PainRecord model
   */
  readonly fields: PainRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PainRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PainRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bodyPart<T extends BodyPartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BodyPartDefaultArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PainRecord model
   */
  interface PainRecordFieldRefs {
    readonly id: FieldRef<"PainRecord", 'String'>
    readonly intensity: FieldRef<"PainRecord", 'Int'>
    readonly notes: FieldRef<"PainRecord", 'String'>
    readonly createdAt: FieldRef<"PainRecord", 'DateTime'>
    readonly userId: FieldRef<"PainRecord", 'String'>
    readonly bodyPartId: FieldRef<"PainRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PainRecord findUnique
   */
  export type PainRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter, which PainRecord to fetch.
     */
    where: PainRecordWhereUniqueInput
  }

  /**
   * PainRecord findUniqueOrThrow
   */
  export type PainRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter, which PainRecord to fetch.
     */
    where: PainRecordWhereUniqueInput
  }

  /**
   * PainRecord findFirst
   */
  export type PainRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter, which PainRecord to fetch.
     */
    where?: PainRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PainRecords to fetch.
     */
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PainRecords.
     */
    cursor?: PainRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PainRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PainRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PainRecords.
     */
    distinct?: PainRecordScalarFieldEnum | PainRecordScalarFieldEnum[]
  }

  /**
   * PainRecord findFirstOrThrow
   */
  export type PainRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter, which PainRecord to fetch.
     */
    where?: PainRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PainRecords to fetch.
     */
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PainRecords.
     */
    cursor?: PainRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PainRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PainRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PainRecords.
     */
    distinct?: PainRecordScalarFieldEnum | PainRecordScalarFieldEnum[]
  }

  /**
   * PainRecord findMany
   */
  export type PainRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter, which PainRecords to fetch.
     */
    where?: PainRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PainRecords to fetch.
     */
    orderBy?: PainRecordOrderByWithRelationInput | PainRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PainRecords.
     */
    cursor?: PainRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PainRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PainRecords.
     */
    skip?: number
    distinct?: PainRecordScalarFieldEnum | PainRecordScalarFieldEnum[]
  }

  /**
   * PainRecord create
   */
  export type PainRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PainRecord.
     */
    data: XOR<PainRecordCreateInput, PainRecordUncheckedCreateInput>
  }

  /**
   * PainRecord createMany
   */
  export type PainRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PainRecords.
     */
    data: PainRecordCreateManyInput | PainRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PainRecord createManyAndReturn
   */
  export type PainRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PainRecords.
     */
    data: PainRecordCreateManyInput | PainRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PainRecord update
   */
  export type PainRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PainRecord.
     */
    data: XOR<PainRecordUpdateInput, PainRecordUncheckedUpdateInput>
    /**
     * Choose, which PainRecord to update.
     */
    where: PainRecordWhereUniqueInput
  }

  /**
   * PainRecord updateMany
   */
  export type PainRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PainRecords.
     */
    data: XOR<PainRecordUpdateManyMutationInput, PainRecordUncheckedUpdateManyInput>
    /**
     * Filter which PainRecords to update
     */
    where?: PainRecordWhereInput
    /**
     * Limit how many PainRecords to update.
     */
    limit?: number
  }

  /**
   * PainRecord updateManyAndReturn
   */
  export type PainRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * The data used to update PainRecords.
     */
    data: XOR<PainRecordUpdateManyMutationInput, PainRecordUncheckedUpdateManyInput>
    /**
     * Filter which PainRecords to update
     */
    where?: PainRecordWhereInput
    /**
     * Limit how many PainRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PainRecord upsert
   */
  export type PainRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PainRecord to update in case it exists.
     */
    where: PainRecordWhereUniqueInput
    /**
     * In case the PainRecord found by the `where` argument doesn't exist, create a new PainRecord with this data.
     */
    create: XOR<PainRecordCreateInput, PainRecordUncheckedCreateInput>
    /**
     * In case the PainRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PainRecordUpdateInput, PainRecordUncheckedUpdateInput>
  }

  /**
   * PainRecord delete
   */
  export type PainRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
    /**
     * Filter which PainRecord to delete.
     */
    where: PainRecordWhereUniqueInput
  }

  /**
   * PainRecord deleteMany
   */
  export type PainRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PainRecords to delete
     */
    where?: PainRecordWhereInput
    /**
     * Limit how many PainRecords to delete.
     */
    limit?: number
  }

  /**
   * PainRecord without action
   */
  export type PainRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PainRecord
     */
    select?: PainRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PainRecord
     */
    omit?: PainRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PainRecordInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bodyPartId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bodyPartId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    userId: number
    bodyPartId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bodyPartId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bodyPartId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bodyPartId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    bodyPartId: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bodyPartId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "createdAt" | "updatedAt" | "userId" | "bodyPartId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bodyPart?: boolean | BodyPartDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bodyPart: Prisma.$BodyPartPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      bodyPartId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bodyPart<T extends BodyPartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BodyPartDefaultArgs<ExtArgs>>): Prisma__BodyPartClient<$Result.GetResult<Prisma.$BodyPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly bodyPartId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
    parentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
    parentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    userId: number
    postId: number
    parentId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
    parentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
    parentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
    parentId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    userId: string
    postId: string
    parentId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    likes?: boolean | Comment$likesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "userId" | "postId" | "parentId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    likes?: boolean | Comment$likesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      userId: string
      postId: string
      parentId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Comment$likesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.likes
   */
  export type Comment$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    commentId: string | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    commentId: string | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    commentId: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    userId: string
    postId: string | null
    commentId: string | null
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "commentId", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string | null
      commentId: string | null
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Like$postArgs<ExtArgs> = {}>(args?: Subset<T, Like$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Like$commentArgs<ExtArgs> = {}>(args?: Subset<T, Like$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly postId: FieldRef<"Like", 'String'>
    readonly commentId: FieldRef<"Like", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like.post
   */
  export type Like$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Like.comment
   */
  export type Like$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model BlogEntry
   */

  export type AggregateBlogEntry = {
    _count: BlogEntryCountAggregateOutputType | null
    _min: BlogEntryMinAggregateOutputType | null
    _max: BlogEntryMaxAggregateOutputType | null
  }

  export type BlogEntryMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BlogEntryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BlogEntryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isPublic: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BlogEntryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BlogEntryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BlogEntryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BlogEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogEntry to aggregate.
     */
    where?: BlogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntries to fetch.
     */
    orderBy?: BlogEntryOrderByWithRelationInput | BlogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogEntries
    **/
    _count?: true | BlogEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogEntryMaxAggregateInputType
  }

  export type GetBlogEntryAggregateType<T extends BlogEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogEntry[P]>
      : GetScalarType<T[P], AggregateBlogEntry[P]>
  }




  export type BlogEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogEntryWhereInput
    orderBy?: BlogEntryOrderByWithAggregationInput | BlogEntryOrderByWithAggregationInput[]
    by: BlogEntryScalarFieldEnum[] | BlogEntryScalarFieldEnum
    having?: BlogEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogEntryCountAggregateInputType | true
    _min?: BlogEntryMinAggregateInputType
    _max?: BlogEntryMaxAggregateInputType
  }

  export type BlogEntryGroupByOutputType = {
    id: string
    title: string
    content: string
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: BlogEntryCountAggregateOutputType | null
    _min: BlogEntryMinAggregateOutputType | null
    _max: BlogEntryMaxAggregateOutputType | null
  }

  type GetBlogEntryGroupByPayload<T extends BlogEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogEntryGroupByOutputType[P]>
        }
      >
    >


  export type BlogEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | BlogEntry$tagsArgs<ExtArgs>
    _count?: boolean | BlogEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntry"]>

  export type BlogEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntry"]>

  export type BlogEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntry"]>

  export type BlogEntrySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BlogEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isPublic" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["blogEntry"]>
  export type BlogEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | BlogEntry$tagsArgs<ExtArgs>
    _count?: boolean | BlogEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$BlogEntryTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["blogEntry"]>
    composites: {}
  }

  type BlogEntryGetPayload<S extends boolean | null | undefined | BlogEntryDefaultArgs> = $Result.GetResult<Prisma.$BlogEntryPayload, S>

  type BlogEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogEntryCountAggregateInputType | true
    }

  export interface BlogEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogEntry'], meta: { name: 'BlogEntry' } }
    /**
     * Find zero or one BlogEntry that matches the filter.
     * @param {BlogEntryFindUniqueArgs} args - Arguments to find a BlogEntry
     * @example
     * // Get one BlogEntry
     * const blogEntry = await prisma.blogEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogEntryFindUniqueArgs>(args: SelectSubset<T, BlogEntryFindUniqueArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogEntryFindUniqueOrThrowArgs} args - Arguments to find a BlogEntry
     * @example
     * // Get one BlogEntry
     * const blogEntry = await prisma.blogEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryFindFirstArgs} args - Arguments to find a BlogEntry
     * @example
     * // Get one BlogEntry
     * const blogEntry = await prisma.blogEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogEntryFindFirstArgs>(args?: SelectSubset<T, BlogEntryFindFirstArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryFindFirstOrThrowArgs} args - Arguments to find a BlogEntry
     * @example
     * // Get one BlogEntry
     * const blogEntry = await prisma.blogEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogEntries
     * const blogEntries = await prisma.blogEntry.findMany()
     * 
     * // Get first 10 BlogEntries
     * const blogEntries = await prisma.blogEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogEntryWithIdOnly = await prisma.blogEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogEntryFindManyArgs>(args?: SelectSubset<T, BlogEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogEntry.
     * @param {BlogEntryCreateArgs} args - Arguments to create a BlogEntry.
     * @example
     * // Create one BlogEntry
     * const BlogEntry = await prisma.blogEntry.create({
     *   data: {
     *     // ... data to create a BlogEntry
     *   }
     * })
     * 
     */
    create<T extends BlogEntryCreateArgs>(args: SelectSubset<T, BlogEntryCreateArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogEntries.
     * @param {BlogEntryCreateManyArgs} args - Arguments to create many BlogEntries.
     * @example
     * // Create many BlogEntries
     * const blogEntry = await prisma.blogEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogEntryCreateManyArgs>(args?: SelectSubset<T, BlogEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogEntries and returns the data saved in the database.
     * @param {BlogEntryCreateManyAndReturnArgs} args - Arguments to create many BlogEntries.
     * @example
     * // Create many BlogEntries
     * const blogEntry = await prisma.blogEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogEntries and only return the `id`
     * const blogEntryWithIdOnly = await prisma.blogEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogEntry.
     * @param {BlogEntryDeleteArgs} args - Arguments to delete one BlogEntry.
     * @example
     * // Delete one BlogEntry
     * const BlogEntry = await prisma.blogEntry.delete({
     *   where: {
     *     // ... filter to delete one BlogEntry
     *   }
     * })
     * 
     */
    delete<T extends BlogEntryDeleteArgs>(args: SelectSubset<T, BlogEntryDeleteArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogEntry.
     * @param {BlogEntryUpdateArgs} args - Arguments to update one BlogEntry.
     * @example
     * // Update one BlogEntry
     * const blogEntry = await prisma.blogEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogEntryUpdateArgs>(args: SelectSubset<T, BlogEntryUpdateArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogEntries.
     * @param {BlogEntryDeleteManyArgs} args - Arguments to filter BlogEntries to delete.
     * @example
     * // Delete a few BlogEntries
     * const { count } = await prisma.blogEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogEntryDeleteManyArgs>(args?: SelectSubset<T, BlogEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogEntries
     * const blogEntry = await prisma.blogEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogEntryUpdateManyArgs>(args: SelectSubset<T, BlogEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEntries and returns the data updated in the database.
     * @param {BlogEntryUpdateManyAndReturnArgs} args - Arguments to update many BlogEntries.
     * @example
     * // Update many BlogEntries
     * const blogEntry = await prisma.blogEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogEntries and only return the `id`
     * const blogEntryWithIdOnly = await prisma.blogEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogEntry.
     * @param {BlogEntryUpsertArgs} args - Arguments to update or create a BlogEntry.
     * @example
     * // Update or create a BlogEntry
     * const blogEntry = await prisma.blogEntry.upsert({
     *   create: {
     *     // ... data to create a BlogEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogEntry we want to update
     *   }
     * })
     */
    upsert<T extends BlogEntryUpsertArgs>(args: SelectSubset<T, BlogEntryUpsertArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryCountArgs} args - Arguments to filter BlogEntries to count.
     * @example
     * // Count the number of BlogEntries
     * const count = await prisma.blogEntry.count({
     *   where: {
     *     // ... the filter for the BlogEntries we want to count
     *   }
     * })
    **/
    count<T extends BlogEntryCountArgs>(
      args?: Subset<T, BlogEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogEntryAggregateArgs>(args: Subset<T, BlogEntryAggregateArgs>): Prisma.PrismaPromise<GetBlogEntryAggregateType<T>>

    /**
     * Group by BlogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryGroupByArgs} args - Group by arguments.
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
      T extends BlogEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogEntryGroupByArgs['orderBy'] }
        : { orderBy?: BlogEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogEntry model
   */
  readonly fields: BlogEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends BlogEntry$tagsArgs<ExtArgs> = {}>(args?: Subset<T, BlogEntry$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BlogEntry model
   */
  interface BlogEntryFieldRefs {
    readonly id: FieldRef<"BlogEntry", 'String'>
    readonly title: FieldRef<"BlogEntry", 'String'>
    readonly content: FieldRef<"BlogEntry", 'String'>
    readonly isPublic: FieldRef<"BlogEntry", 'Boolean'>
    readonly createdAt: FieldRef<"BlogEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogEntry", 'DateTime'>
    readonly userId: FieldRef<"BlogEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogEntry findUnique
   */
  export type BlogEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntry to fetch.
     */
    where: BlogEntryWhereUniqueInput
  }

  /**
   * BlogEntry findUniqueOrThrow
   */
  export type BlogEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntry to fetch.
     */
    where: BlogEntryWhereUniqueInput
  }

  /**
   * BlogEntry findFirst
   */
  export type BlogEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntry to fetch.
     */
    where?: BlogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntries to fetch.
     */
    orderBy?: BlogEntryOrderByWithRelationInput | BlogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogEntries.
     */
    cursor?: BlogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogEntries.
     */
    distinct?: BlogEntryScalarFieldEnum | BlogEntryScalarFieldEnum[]
  }

  /**
   * BlogEntry findFirstOrThrow
   */
  export type BlogEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntry to fetch.
     */
    where?: BlogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntries to fetch.
     */
    orderBy?: BlogEntryOrderByWithRelationInput | BlogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogEntries.
     */
    cursor?: BlogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogEntries.
     */
    distinct?: BlogEntryScalarFieldEnum | BlogEntryScalarFieldEnum[]
  }

  /**
   * BlogEntry findMany
   */
  export type BlogEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntries to fetch.
     */
    where?: BlogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntries to fetch.
     */
    orderBy?: BlogEntryOrderByWithRelationInput | BlogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogEntries.
     */
    cursor?: BlogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntries.
     */
    skip?: number
    distinct?: BlogEntryScalarFieldEnum | BlogEntryScalarFieldEnum[]
  }

  /**
   * BlogEntry create
   */
  export type BlogEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogEntry.
     */
    data: XOR<BlogEntryCreateInput, BlogEntryUncheckedCreateInput>
  }

  /**
   * BlogEntry createMany
   */
  export type BlogEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogEntries.
     */
    data: BlogEntryCreateManyInput | BlogEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogEntry createManyAndReturn
   */
  export type BlogEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * The data used to create many BlogEntries.
     */
    data: BlogEntryCreateManyInput | BlogEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogEntry update
   */
  export type BlogEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogEntry.
     */
    data: XOR<BlogEntryUpdateInput, BlogEntryUncheckedUpdateInput>
    /**
     * Choose, which BlogEntry to update.
     */
    where: BlogEntryWhereUniqueInput
  }

  /**
   * BlogEntry updateMany
   */
  export type BlogEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogEntries.
     */
    data: XOR<BlogEntryUpdateManyMutationInput, BlogEntryUncheckedUpdateManyInput>
    /**
     * Filter which BlogEntries to update
     */
    where?: BlogEntryWhereInput
    /**
     * Limit how many BlogEntries to update.
     */
    limit?: number
  }

  /**
   * BlogEntry updateManyAndReturn
   */
  export type BlogEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * The data used to update BlogEntries.
     */
    data: XOR<BlogEntryUpdateManyMutationInput, BlogEntryUncheckedUpdateManyInput>
    /**
     * Filter which BlogEntries to update
     */
    where?: BlogEntryWhereInput
    /**
     * Limit how many BlogEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogEntry upsert
   */
  export type BlogEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogEntry to update in case it exists.
     */
    where: BlogEntryWhereUniqueInput
    /**
     * In case the BlogEntry found by the `where` argument doesn't exist, create a new BlogEntry with this data.
     */
    create: XOR<BlogEntryCreateInput, BlogEntryUncheckedCreateInput>
    /**
     * In case the BlogEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogEntryUpdateInput, BlogEntryUncheckedUpdateInput>
  }

  /**
   * BlogEntry delete
   */
  export type BlogEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
    /**
     * Filter which BlogEntry to delete.
     */
    where: BlogEntryWhereUniqueInput
  }

  /**
   * BlogEntry deleteMany
   */
  export type BlogEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogEntries to delete
     */
    where?: BlogEntryWhereInput
    /**
     * Limit how many BlogEntries to delete.
     */
    limit?: number
  }

  /**
   * BlogEntry.tags
   */
  export type BlogEntry$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    where?: BlogEntryTagWhereInput
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    cursor?: BlogEntryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogEntryTagScalarFieldEnum | BlogEntryTagScalarFieldEnum[]
  }

  /**
   * BlogEntry without action
   */
  export type BlogEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntry
     */
    select?: BlogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntry
     */
    omit?: BlogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryInclude<ExtArgs> | null
  }


  /**
   * Model BlogEntryTag
   */

  export type AggregateBlogEntryTag = {
    _count: BlogEntryTagCountAggregateOutputType | null
    _min: BlogEntryTagMinAggregateOutputType | null
    _max: BlogEntryTagMaxAggregateOutputType | null
  }

  export type BlogEntryTagMinAggregateOutputType = {
    blogEntryId: string | null
    tagId: string | null
  }

  export type BlogEntryTagMaxAggregateOutputType = {
    blogEntryId: string | null
    tagId: string | null
  }

  export type BlogEntryTagCountAggregateOutputType = {
    blogEntryId: number
    tagId: number
    _all: number
  }


  export type BlogEntryTagMinAggregateInputType = {
    blogEntryId?: true
    tagId?: true
  }

  export type BlogEntryTagMaxAggregateInputType = {
    blogEntryId?: true
    tagId?: true
  }

  export type BlogEntryTagCountAggregateInputType = {
    blogEntryId?: true
    tagId?: true
    _all?: true
  }

  export type BlogEntryTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogEntryTag to aggregate.
     */
    where?: BlogEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntryTags to fetch.
     */
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogEntryTags
    **/
    _count?: true | BlogEntryTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogEntryTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogEntryTagMaxAggregateInputType
  }

  export type GetBlogEntryTagAggregateType<T extends BlogEntryTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogEntryTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogEntryTag[P]>
      : GetScalarType<T[P], AggregateBlogEntryTag[P]>
  }




  export type BlogEntryTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogEntryTagWhereInput
    orderBy?: BlogEntryTagOrderByWithAggregationInput | BlogEntryTagOrderByWithAggregationInput[]
    by: BlogEntryTagScalarFieldEnum[] | BlogEntryTagScalarFieldEnum
    having?: BlogEntryTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogEntryTagCountAggregateInputType | true
    _min?: BlogEntryTagMinAggregateInputType
    _max?: BlogEntryTagMaxAggregateInputType
  }

  export type BlogEntryTagGroupByOutputType = {
    blogEntryId: string
    tagId: string
    _count: BlogEntryTagCountAggregateOutputType | null
    _min: BlogEntryTagMinAggregateOutputType | null
    _max: BlogEntryTagMaxAggregateOutputType | null
  }

  type GetBlogEntryTagGroupByPayload<T extends BlogEntryTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogEntryTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogEntryTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogEntryTagGroupByOutputType[P]>
            : GetScalarType<T[P], BlogEntryTagGroupByOutputType[P]>
        }
      >
    >


  export type BlogEntryTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blogEntryId?: boolean
    tagId?: boolean
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntryTag"]>

  export type BlogEntryTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blogEntryId?: boolean
    tagId?: boolean
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntryTag"]>

  export type BlogEntryTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blogEntryId?: boolean
    tagId?: boolean
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEntryTag"]>

  export type BlogEntryTagSelectScalar = {
    blogEntryId?: boolean
    tagId?: boolean
  }

  export type BlogEntryTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"blogEntryId" | "tagId", ExtArgs["result"]["blogEntryTag"]>
  export type BlogEntryTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type BlogEntryTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type BlogEntryTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogEntry?: boolean | BlogEntryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $BlogEntryTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogEntryTag"
    objects: {
      blogEntry: Prisma.$BlogEntryPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      blogEntryId: string
      tagId: string
    }, ExtArgs["result"]["blogEntryTag"]>
    composites: {}
  }

  type BlogEntryTagGetPayload<S extends boolean | null | undefined | BlogEntryTagDefaultArgs> = $Result.GetResult<Prisma.$BlogEntryTagPayload, S>

  type BlogEntryTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogEntryTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogEntryTagCountAggregateInputType | true
    }

  export interface BlogEntryTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogEntryTag'], meta: { name: 'BlogEntryTag' } }
    /**
     * Find zero or one BlogEntryTag that matches the filter.
     * @param {BlogEntryTagFindUniqueArgs} args - Arguments to find a BlogEntryTag
     * @example
     * // Get one BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogEntryTagFindUniqueArgs>(args: SelectSubset<T, BlogEntryTagFindUniqueArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogEntryTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogEntryTagFindUniqueOrThrowArgs} args - Arguments to find a BlogEntryTag
     * @example
     * // Get one BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogEntryTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogEntryTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEntryTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagFindFirstArgs} args - Arguments to find a BlogEntryTag
     * @example
     * // Get one BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogEntryTagFindFirstArgs>(args?: SelectSubset<T, BlogEntryTagFindFirstArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEntryTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagFindFirstOrThrowArgs} args - Arguments to find a BlogEntryTag
     * @example
     * // Get one BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogEntryTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogEntryTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogEntryTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogEntryTags
     * const blogEntryTags = await prisma.blogEntryTag.findMany()
     * 
     * // Get first 10 BlogEntryTags
     * const blogEntryTags = await prisma.blogEntryTag.findMany({ take: 10 })
     * 
     * // Only select the `blogEntryId`
     * const blogEntryTagWithBlogEntryIdOnly = await prisma.blogEntryTag.findMany({ select: { blogEntryId: true } })
     * 
     */
    findMany<T extends BlogEntryTagFindManyArgs>(args?: SelectSubset<T, BlogEntryTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogEntryTag.
     * @param {BlogEntryTagCreateArgs} args - Arguments to create a BlogEntryTag.
     * @example
     * // Create one BlogEntryTag
     * const BlogEntryTag = await prisma.blogEntryTag.create({
     *   data: {
     *     // ... data to create a BlogEntryTag
     *   }
     * })
     * 
     */
    create<T extends BlogEntryTagCreateArgs>(args: SelectSubset<T, BlogEntryTagCreateArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogEntryTags.
     * @param {BlogEntryTagCreateManyArgs} args - Arguments to create many BlogEntryTags.
     * @example
     * // Create many BlogEntryTags
     * const blogEntryTag = await prisma.blogEntryTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogEntryTagCreateManyArgs>(args?: SelectSubset<T, BlogEntryTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogEntryTags and returns the data saved in the database.
     * @param {BlogEntryTagCreateManyAndReturnArgs} args - Arguments to create many BlogEntryTags.
     * @example
     * // Create many BlogEntryTags
     * const blogEntryTag = await prisma.blogEntryTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogEntryTags and only return the `blogEntryId`
     * const blogEntryTagWithBlogEntryIdOnly = await prisma.blogEntryTag.createManyAndReturn({
     *   select: { blogEntryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogEntryTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogEntryTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogEntryTag.
     * @param {BlogEntryTagDeleteArgs} args - Arguments to delete one BlogEntryTag.
     * @example
     * // Delete one BlogEntryTag
     * const BlogEntryTag = await prisma.blogEntryTag.delete({
     *   where: {
     *     // ... filter to delete one BlogEntryTag
     *   }
     * })
     * 
     */
    delete<T extends BlogEntryTagDeleteArgs>(args: SelectSubset<T, BlogEntryTagDeleteArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogEntryTag.
     * @param {BlogEntryTagUpdateArgs} args - Arguments to update one BlogEntryTag.
     * @example
     * // Update one BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogEntryTagUpdateArgs>(args: SelectSubset<T, BlogEntryTagUpdateArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogEntryTags.
     * @param {BlogEntryTagDeleteManyArgs} args - Arguments to filter BlogEntryTags to delete.
     * @example
     * // Delete a few BlogEntryTags
     * const { count } = await prisma.blogEntryTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogEntryTagDeleteManyArgs>(args?: SelectSubset<T, BlogEntryTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEntryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogEntryTags
     * const blogEntryTag = await prisma.blogEntryTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogEntryTagUpdateManyArgs>(args: SelectSubset<T, BlogEntryTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEntryTags and returns the data updated in the database.
     * @param {BlogEntryTagUpdateManyAndReturnArgs} args - Arguments to update many BlogEntryTags.
     * @example
     * // Update many BlogEntryTags
     * const blogEntryTag = await prisma.blogEntryTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogEntryTags and only return the `blogEntryId`
     * const blogEntryTagWithBlogEntryIdOnly = await prisma.blogEntryTag.updateManyAndReturn({
     *   select: { blogEntryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogEntryTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogEntryTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogEntryTag.
     * @param {BlogEntryTagUpsertArgs} args - Arguments to update or create a BlogEntryTag.
     * @example
     * // Update or create a BlogEntryTag
     * const blogEntryTag = await prisma.blogEntryTag.upsert({
     *   create: {
     *     // ... data to create a BlogEntryTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogEntryTag we want to update
     *   }
     * })
     */
    upsert<T extends BlogEntryTagUpsertArgs>(args: SelectSubset<T, BlogEntryTagUpsertArgs<ExtArgs>>): Prisma__BlogEntryTagClient<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogEntryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagCountArgs} args - Arguments to filter BlogEntryTags to count.
     * @example
     * // Count the number of BlogEntryTags
     * const count = await prisma.blogEntryTag.count({
     *   where: {
     *     // ... the filter for the BlogEntryTags we want to count
     *   }
     * })
    **/
    count<T extends BlogEntryTagCountArgs>(
      args?: Subset<T, BlogEntryTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogEntryTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogEntryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogEntryTagAggregateArgs>(args: Subset<T, BlogEntryTagAggregateArgs>): Prisma.PrismaPromise<GetBlogEntryTagAggregateType<T>>

    /**
     * Group by BlogEntryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEntryTagGroupByArgs} args - Group by arguments.
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
      T extends BlogEntryTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogEntryTagGroupByArgs['orderBy'] }
        : { orderBy?: BlogEntryTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogEntryTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogEntryTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogEntryTag model
   */
  readonly fields: BlogEntryTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogEntryTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogEntryTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogEntry<T extends BlogEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogEntryDefaultArgs<ExtArgs>>): Prisma__BlogEntryClient<$Result.GetResult<Prisma.$BlogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogEntryTag model
   */
  interface BlogEntryTagFieldRefs {
    readonly blogEntryId: FieldRef<"BlogEntryTag", 'String'>
    readonly tagId: FieldRef<"BlogEntryTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogEntryTag findUnique
   */
  export type BlogEntryTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntryTag to fetch.
     */
    where: BlogEntryTagWhereUniqueInput
  }

  /**
   * BlogEntryTag findUniqueOrThrow
   */
  export type BlogEntryTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntryTag to fetch.
     */
    where: BlogEntryTagWhereUniqueInput
  }

  /**
   * BlogEntryTag findFirst
   */
  export type BlogEntryTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntryTag to fetch.
     */
    where?: BlogEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntryTags to fetch.
     */
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogEntryTags.
     */
    cursor?: BlogEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogEntryTags.
     */
    distinct?: BlogEntryTagScalarFieldEnum | BlogEntryTagScalarFieldEnum[]
  }

  /**
   * BlogEntryTag findFirstOrThrow
   */
  export type BlogEntryTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntryTag to fetch.
     */
    where?: BlogEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntryTags to fetch.
     */
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogEntryTags.
     */
    cursor?: BlogEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogEntryTags.
     */
    distinct?: BlogEntryTagScalarFieldEnum | BlogEntryTagScalarFieldEnum[]
  }

  /**
   * BlogEntryTag findMany
   */
  export type BlogEntryTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogEntryTags to fetch.
     */
    where?: BlogEntryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogEntryTags to fetch.
     */
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogEntryTags.
     */
    cursor?: BlogEntryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogEntryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogEntryTags.
     */
    skip?: number
    distinct?: BlogEntryTagScalarFieldEnum | BlogEntryTagScalarFieldEnum[]
  }

  /**
   * BlogEntryTag create
   */
  export type BlogEntryTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogEntryTag.
     */
    data: XOR<BlogEntryTagCreateInput, BlogEntryTagUncheckedCreateInput>
  }

  /**
   * BlogEntryTag createMany
   */
  export type BlogEntryTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogEntryTags.
     */
    data: BlogEntryTagCreateManyInput | BlogEntryTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogEntryTag createManyAndReturn
   */
  export type BlogEntryTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * The data used to create many BlogEntryTags.
     */
    data: BlogEntryTagCreateManyInput | BlogEntryTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogEntryTag update
   */
  export type BlogEntryTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogEntryTag.
     */
    data: XOR<BlogEntryTagUpdateInput, BlogEntryTagUncheckedUpdateInput>
    /**
     * Choose, which BlogEntryTag to update.
     */
    where: BlogEntryTagWhereUniqueInput
  }

  /**
   * BlogEntryTag updateMany
   */
  export type BlogEntryTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogEntryTags.
     */
    data: XOR<BlogEntryTagUpdateManyMutationInput, BlogEntryTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogEntryTags to update
     */
    where?: BlogEntryTagWhereInput
    /**
     * Limit how many BlogEntryTags to update.
     */
    limit?: number
  }

  /**
   * BlogEntryTag updateManyAndReturn
   */
  export type BlogEntryTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * The data used to update BlogEntryTags.
     */
    data: XOR<BlogEntryTagUpdateManyMutationInput, BlogEntryTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogEntryTags to update
     */
    where?: BlogEntryTagWhereInput
    /**
     * Limit how many BlogEntryTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogEntryTag upsert
   */
  export type BlogEntryTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogEntryTag to update in case it exists.
     */
    where: BlogEntryTagWhereUniqueInput
    /**
     * In case the BlogEntryTag found by the `where` argument doesn't exist, create a new BlogEntryTag with this data.
     */
    create: XOR<BlogEntryTagCreateInput, BlogEntryTagUncheckedCreateInput>
    /**
     * In case the BlogEntryTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogEntryTagUpdateInput, BlogEntryTagUncheckedUpdateInput>
  }

  /**
   * BlogEntryTag delete
   */
  export type BlogEntryTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    /**
     * Filter which BlogEntryTag to delete.
     */
    where: BlogEntryTagWhereUniqueInput
  }

  /**
   * BlogEntryTag deleteMany
   */
  export type BlogEntryTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogEntryTags to delete
     */
    where?: BlogEntryTagWhereInput
    /**
     * Limit how many BlogEntryTags to delete.
     */
    limit?: number
  }

  /**
   * BlogEntryTag without action
   */
  export type BlogEntryTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    blogEntries?: boolean | Tag$blogEntriesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogEntries?: boolean | Tag$blogEntriesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      blogEntries: Prisma.$BlogEntryTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogEntries<T extends Tag$blogEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$blogEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogEntryTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.blogEntries
   */
  export type Tag$blogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogEntryTag
     */
    select?: BlogEntryTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogEntryTag
     */
    omit?: BlogEntryTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogEntryTagInclude<ExtArgs> | null
    where?: BlogEntryTagWhereInput
    orderBy?: BlogEntryTagOrderByWithRelationInput | BlogEntryTagOrderByWithRelationInput[]
    cursor?: BlogEntryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogEntryTagScalarFieldEnum | BlogEntryTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    surname: 'surname',
    email: 'email',
    passwordHash: 'passwordHash',
    profilePicture: 'profilePicture',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    description: 'description',
    location: 'location',
    website: 'website',
    birthDate: 'birthDate',
    userId: 'userId'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    language: 'language',
    country: 'country',
    userId: 'userId'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const BodyPartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    meshId: 'meshId',
    description: 'description'
  };

  export type BodyPartScalarFieldEnum = (typeof BodyPartScalarFieldEnum)[keyof typeof BodyPartScalarFieldEnum]


  export const ConditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    recommendation: 'recommendation',
    severity: 'severity'
  };

  export type ConditionScalarFieldEnum = (typeof ConditionScalarFieldEnum)[keyof typeof ConditionScalarFieldEnum]


  export const ConditionBodyPartScalarFieldEnum: {
    conditionId: 'conditionId',
    bodyPartId: 'bodyPartId'
  };

  export type ConditionBodyPartScalarFieldEnum = (typeof ConditionBodyPartScalarFieldEnum)[keyof typeof ConditionBodyPartScalarFieldEnum]


  export const PainRecordScalarFieldEnum: {
    id: 'id',
    intensity: 'intensity',
    notes: 'notes',
    createdAt: 'createdAt',
    userId: 'userId',
    bodyPartId: 'bodyPartId'
  };

  export type PainRecordScalarFieldEnum = (typeof PainRecordScalarFieldEnum)[keyof typeof PainRecordScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bodyPartId: 'bodyPartId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId',
    parentId: 'parentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    commentId: 'commentId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const BlogEntryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BlogEntryScalarFieldEnum = (typeof BlogEntryScalarFieldEnum)[keyof typeof BlogEntryScalarFieldEnum]


  export const BlogEntryTagScalarFieldEnum: {
    blogEntryId: 'blogEntryId',
    tagId: 'tagId'
  };

  export type BlogEntryTagScalarFieldEnum = (typeof BlogEntryTagScalarFieldEnum)[keyof typeof BlogEntryTagScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    followers?: FollowsListRelationFilter
    following?: FollowsListRelationFilter
    painRecords?: PainRecordListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    blogEntries?: BlogEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    settings?: UserSettingsOrderByWithRelationInput
    followers?: FollowsOrderByRelationAggregateInput
    following?: FollowsOrderByRelationAggregateInput
    painRecords?: PainRecordOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    blogEntries?: BlogEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    followers?: FollowsListRelationFilter
    following?: FollowsListRelationFilter
    painRecords?: PainRecordListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    blogEntries?: BlogEntryListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: UuidFilter<"UserProfile"> | string
    description?: StringNullableFilter<"UserProfile"> | string | null
    location?: StringNullableFilter<"UserProfile"> | string | null
    website?: StringNullableFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    userId?: UuidFilter<"UserProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    description?: StringNullableFilter<"UserProfile"> | string | null
    location?: StringNullableFilter<"UserProfile"> | string | null
    website?: StringNullableFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserProfile"> | string
    description?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    userId?: UuidWithAggregatesFilter<"UserProfile"> | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: UuidFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    country?: StringNullableFilter<"UserSettings"> | string | null
    userId?: UuidFilter<"UserSettings"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    theme?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    country?: StringNullableFilter<"UserSettings"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserSettings"> | string
    theme?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    country?: StringNullableWithAggregatesFilter<"UserSettings"> | string | null
    userId?: UuidWithAggregatesFilter<"UserSettings"> | string
  }

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: UuidFilter<"Follows"> | string
    followingId?: UuidFilter<"Follows"> | string
    createdAt?: DateTimeFilter<"Follows"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowsOrderByWithRelationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    follower?: UserOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type FollowsWhereUniqueInput = Prisma.AtLeast<{
    followerId_followingId?: FollowsFollowerIdFollowingIdCompoundUniqueInput
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: UuidFilter<"Follows"> | string
    followingId?: UuidFilter<"Follows"> | string
    createdAt?: DateTimeFilter<"Follows"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "followerId_followingId">

  export type FollowsOrderByWithAggregationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowsCountOrderByAggregateInput
    _max?: FollowsMaxOrderByAggregateInput
    _min?: FollowsMinOrderByAggregateInput
  }

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    OR?: FollowsScalarWhereWithAggregatesInput[]
    NOT?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    followerId?: UuidWithAggregatesFilter<"Follows"> | string
    followingId?: UuidWithAggregatesFilter<"Follows"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follows"> | Date | string
  }

  export type BodyPartWhereInput = {
    AND?: BodyPartWhereInput | BodyPartWhereInput[]
    OR?: BodyPartWhereInput[]
    NOT?: BodyPartWhereInput | BodyPartWhereInput[]
    id?: UuidFilter<"BodyPart"> | string
    name?: StringFilter<"BodyPart"> | string
    meshId?: StringFilter<"BodyPart"> | string
    description?: StringNullableFilter<"BodyPart"> | string | null
    painRecords?: PainRecordListRelationFilter
    posts?: PostListRelationFilter
    conditions?: ConditionBodyPartListRelationFilter
  }

  export type BodyPartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    meshId?: SortOrder
    description?: SortOrderInput | SortOrder
    painRecords?: PainRecordOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    conditions?: ConditionBodyPartOrderByRelationAggregateInput
  }

  export type BodyPartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meshId?: string
    AND?: BodyPartWhereInput | BodyPartWhereInput[]
    OR?: BodyPartWhereInput[]
    NOT?: BodyPartWhereInput | BodyPartWhereInput[]
    name?: StringFilter<"BodyPart"> | string
    description?: StringNullableFilter<"BodyPart"> | string | null
    painRecords?: PainRecordListRelationFilter
    posts?: PostListRelationFilter
    conditions?: ConditionBodyPartListRelationFilter
  }, "id" | "meshId">

  export type BodyPartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    meshId?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BodyPartCountOrderByAggregateInput
    _max?: BodyPartMaxOrderByAggregateInput
    _min?: BodyPartMinOrderByAggregateInput
  }

  export type BodyPartScalarWhereWithAggregatesInput = {
    AND?: BodyPartScalarWhereWithAggregatesInput | BodyPartScalarWhereWithAggregatesInput[]
    OR?: BodyPartScalarWhereWithAggregatesInput[]
    NOT?: BodyPartScalarWhereWithAggregatesInput | BodyPartScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BodyPart"> | string
    name?: StringWithAggregatesFilter<"BodyPart"> | string
    meshId?: StringWithAggregatesFilter<"BodyPart"> | string
    description?: StringNullableWithAggregatesFilter<"BodyPart"> | string | null
  }

  export type ConditionWhereInput = {
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    id?: UuidFilter<"Condition"> | string
    name?: StringFilter<"Condition"> | string
    description?: StringFilter<"Condition"> | string
    recommendation?: StringFilter<"Condition"> | string
    severity?: EnumSeverityFilter<"Condition"> | $Enums.Severity
    bodyParts?: ConditionBodyPartListRelationFilter
  }

  export type ConditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    severity?: SortOrder
    bodyParts?: ConditionBodyPartOrderByRelationAggregateInput
  }

  export type ConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    name?: StringFilter<"Condition"> | string
    description?: StringFilter<"Condition"> | string
    recommendation?: StringFilter<"Condition"> | string
    severity?: EnumSeverityFilter<"Condition"> | $Enums.Severity
    bodyParts?: ConditionBodyPartListRelationFilter
  }, "id">

  export type ConditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    severity?: SortOrder
    _count?: ConditionCountOrderByAggregateInput
    _max?: ConditionMaxOrderByAggregateInput
    _min?: ConditionMinOrderByAggregateInput
  }

  export type ConditionScalarWhereWithAggregatesInput = {
    AND?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    OR?: ConditionScalarWhereWithAggregatesInput[]
    NOT?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Condition"> | string
    name?: StringWithAggregatesFilter<"Condition"> | string
    description?: StringWithAggregatesFilter<"Condition"> | string
    recommendation?: StringWithAggregatesFilter<"Condition"> | string
    severity?: EnumSeverityWithAggregatesFilter<"Condition"> | $Enums.Severity
  }

  export type ConditionBodyPartWhereInput = {
    AND?: ConditionBodyPartWhereInput | ConditionBodyPartWhereInput[]
    OR?: ConditionBodyPartWhereInput[]
    NOT?: ConditionBodyPartWhereInput | ConditionBodyPartWhereInput[]
    conditionId?: UuidFilter<"ConditionBodyPart"> | string
    bodyPartId?: UuidFilter<"ConditionBodyPart"> | string
    condition?: XOR<ConditionScalarRelationFilter, ConditionWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
  }

  export type ConditionBodyPartOrderByWithRelationInput = {
    conditionId?: SortOrder
    bodyPartId?: SortOrder
    condition?: ConditionOrderByWithRelationInput
    bodyPart?: BodyPartOrderByWithRelationInput
  }

  export type ConditionBodyPartWhereUniqueInput = Prisma.AtLeast<{
    conditionId_bodyPartId?: ConditionBodyPartConditionIdBodyPartIdCompoundUniqueInput
    AND?: ConditionBodyPartWhereInput | ConditionBodyPartWhereInput[]
    OR?: ConditionBodyPartWhereInput[]
    NOT?: ConditionBodyPartWhereInput | ConditionBodyPartWhereInput[]
    conditionId?: UuidFilter<"ConditionBodyPart"> | string
    bodyPartId?: UuidFilter<"ConditionBodyPart"> | string
    condition?: XOR<ConditionScalarRelationFilter, ConditionWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
  }, "conditionId_bodyPartId">

  export type ConditionBodyPartOrderByWithAggregationInput = {
    conditionId?: SortOrder
    bodyPartId?: SortOrder
    _count?: ConditionBodyPartCountOrderByAggregateInput
    _max?: ConditionBodyPartMaxOrderByAggregateInput
    _min?: ConditionBodyPartMinOrderByAggregateInput
  }

  export type ConditionBodyPartScalarWhereWithAggregatesInput = {
    AND?: ConditionBodyPartScalarWhereWithAggregatesInput | ConditionBodyPartScalarWhereWithAggregatesInput[]
    OR?: ConditionBodyPartScalarWhereWithAggregatesInput[]
    NOT?: ConditionBodyPartScalarWhereWithAggregatesInput | ConditionBodyPartScalarWhereWithAggregatesInput[]
    conditionId?: UuidWithAggregatesFilter<"ConditionBodyPart"> | string
    bodyPartId?: UuidWithAggregatesFilter<"ConditionBodyPart"> | string
  }

  export type PainRecordWhereInput = {
    AND?: PainRecordWhereInput | PainRecordWhereInput[]
    OR?: PainRecordWhereInput[]
    NOT?: PainRecordWhereInput | PainRecordWhereInput[]
    id?: UuidFilter<"PainRecord"> | string
    intensity?: IntFilter<"PainRecord"> | number
    notes?: StringNullableFilter<"PainRecord"> | string | null
    createdAt?: DateTimeFilter<"PainRecord"> | Date | string
    userId?: UuidFilter<"PainRecord"> | string
    bodyPartId?: UuidFilter<"PainRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
  }

  export type PainRecordOrderByWithRelationInput = {
    id?: SortOrder
    intensity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
    user?: UserOrderByWithRelationInput
    bodyPart?: BodyPartOrderByWithRelationInput
  }

  export type PainRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PainRecordWhereInput | PainRecordWhereInput[]
    OR?: PainRecordWhereInput[]
    NOT?: PainRecordWhereInput | PainRecordWhereInput[]
    intensity?: IntFilter<"PainRecord"> | number
    notes?: StringNullableFilter<"PainRecord"> | string | null
    createdAt?: DateTimeFilter<"PainRecord"> | Date | string
    userId?: UuidFilter<"PainRecord"> | string
    bodyPartId?: UuidFilter<"PainRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
  }, "id">

  export type PainRecordOrderByWithAggregationInput = {
    id?: SortOrder
    intensity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
    _count?: PainRecordCountOrderByAggregateInput
    _avg?: PainRecordAvgOrderByAggregateInput
    _max?: PainRecordMaxOrderByAggregateInput
    _min?: PainRecordMinOrderByAggregateInput
    _sum?: PainRecordSumOrderByAggregateInput
  }

  export type PainRecordScalarWhereWithAggregatesInput = {
    AND?: PainRecordScalarWhereWithAggregatesInput | PainRecordScalarWhereWithAggregatesInput[]
    OR?: PainRecordScalarWhereWithAggregatesInput[]
    NOT?: PainRecordScalarWhereWithAggregatesInput | PainRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PainRecord"> | string
    intensity?: IntWithAggregatesFilter<"PainRecord"> | number
    notes?: StringNullableWithAggregatesFilter<"PainRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PainRecord"> | Date | string
    userId?: UuidWithAggregatesFilter<"PainRecord"> | string
    bodyPartId?: UuidWithAggregatesFilter<"PainRecord"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: UuidFilter<"Post"> | string
    bodyPartId?: UuidFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
    user?: UserOrderByWithRelationInput
    bodyPart?: BodyPartOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: UuidFilter<"Post"> | string
    bodyPartId?: UuidFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bodyPart?: XOR<BodyPartScalarRelationFilter, BodyPartWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: UuidWithAggregatesFilter<"Post"> | string
    bodyPartId?: UuidWithAggregatesFilter<"Post"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: UuidFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: UuidFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: UuidWithAggregatesFilter<"Comment"> | string
    postId?: UuidWithAggregatesFilter<"Comment"> | string
    parentId?: UuidNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: UuidFilter<"Like"> | string
    userId?: UuidFilter<"Like"> | string
    postId?: UuidNullableFilter<"Like"> | string | null
    commentId?: UuidNullableFilter<"Like"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: LikeUserIdPostIdCompoundUniqueInput
    userId_commentId?: LikeUserIdCommentIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: UuidFilter<"Like"> | string
    postId?: UuidNullableFilter<"Like"> | string | null
    commentId?: UuidNullableFilter<"Like"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "id" | "userId_postId" | "userId_commentId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Like"> | string
    userId?: UuidWithAggregatesFilter<"Like"> | string
    postId?: UuidNullableWithAggregatesFilter<"Like"> | string | null
    commentId?: UuidNullableWithAggregatesFilter<"Like"> | string | null
  }

  export type BlogEntryWhereInput = {
    AND?: BlogEntryWhereInput | BlogEntryWhereInput[]
    OR?: BlogEntryWhereInput[]
    NOT?: BlogEntryWhereInput | BlogEntryWhereInput[]
    id?: UuidFilter<"BlogEntry"> | string
    title?: StringFilter<"BlogEntry"> | string
    content?: StringFilter<"BlogEntry"> | string
    isPublic?: BoolFilter<"BlogEntry"> | boolean
    createdAt?: DateTimeFilter<"BlogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BlogEntry"> | Date | string
    userId?: UuidFilter<"BlogEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: BlogEntryTagListRelationFilter
  }

  export type BlogEntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: BlogEntryTagOrderByRelationAggregateInput
  }

  export type BlogEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogEntryWhereInput | BlogEntryWhereInput[]
    OR?: BlogEntryWhereInput[]
    NOT?: BlogEntryWhereInput | BlogEntryWhereInput[]
    title?: StringFilter<"BlogEntry"> | string
    content?: StringFilter<"BlogEntry"> | string
    isPublic?: BoolFilter<"BlogEntry"> | boolean
    createdAt?: DateTimeFilter<"BlogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BlogEntry"> | Date | string
    userId?: UuidFilter<"BlogEntry"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: BlogEntryTagListRelationFilter
  }, "id">

  export type BlogEntryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BlogEntryCountOrderByAggregateInput
    _max?: BlogEntryMaxOrderByAggregateInput
    _min?: BlogEntryMinOrderByAggregateInput
  }

  export type BlogEntryScalarWhereWithAggregatesInput = {
    AND?: BlogEntryScalarWhereWithAggregatesInput | BlogEntryScalarWhereWithAggregatesInput[]
    OR?: BlogEntryScalarWhereWithAggregatesInput[]
    NOT?: BlogEntryScalarWhereWithAggregatesInput | BlogEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogEntry"> | string
    title?: StringWithAggregatesFilter<"BlogEntry"> | string
    content?: StringWithAggregatesFilter<"BlogEntry"> | string
    isPublic?: BoolWithAggregatesFilter<"BlogEntry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlogEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogEntry"> | Date | string
    userId?: UuidWithAggregatesFilter<"BlogEntry"> | string
  }

  export type BlogEntryTagWhereInput = {
    AND?: BlogEntryTagWhereInput | BlogEntryTagWhereInput[]
    OR?: BlogEntryTagWhereInput[]
    NOT?: BlogEntryTagWhereInput | BlogEntryTagWhereInput[]
    blogEntryId?: UuidFilter<"BlogEntryTag"> | string
    tagId?: UuidFilter<"BlogEntryTag"> | string
    blogEntry?: XOR<BlogEntryScalarRelationFilter, BlogEntryWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type BlogEntryTagOrderByWithRelationInput = {
    blogEntryId?: SortOrder
    tagId?: SortOrder
    blogEntry?: BlogEntryOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type BlogEntryTagWhereUniqueInput = Prisma.AtLeast<{
    blogEntryId_tagId?: BlogEntryTagBlogEntryIdTagIdCompoundUniqueInput
    AND?: BlogEntryTagWhereInput | BlogEntryTagWhereInput[]
    OR?: BlogEntryTagWhereInput[]
    NOT?: BlogEntryTagWhereInput | BlogEntryTagWhereInput[]
    blogEntryId?: UuidFilter<"BlogEntryTag"> | string
    tagId?: UuidFilter<"BlogEntryTag"> | string
    blogEntry?: XOR<BlogEntryScalarRelationFilter, BlogEntryWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "blogEntryId_tagId">

  export type BlogEntryTagOrderByWithAggregationInput = {
    blogEntryId?: SortOrder
    tagId?: SortOrder
    _count?: BlogEntryTagCountOrderByAggregateInput
    _max?: BlogEntryTagMaxOrderByAggregateInput
    _min?: BlogEntryTagMinOrderByAggregateInput
  }

  export type BlogEntryTagScalarWhereWithAggregatesInput = {
    AND?: BlogEntryTagScalarWhereWithAggregatesInput | BlogEntryTagScalarWhereWithAggregatesInput[]
    OR?: BlogEntryTagScalarWhereWithAggregatesInput[]
    NOT?: BlogEntryTagScalarWhereWithAggregatesInput | BlogEntryTagScalarWhereWithAggregatesInput[]
    blogEntryId?: UuidWithAggregatesFilter<"BlogEntryTag"> | string
    tagId?: UuidWithAggregatesFilter<"BlogEntryTag"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    blogEntries?: BlogEntryTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    blogEntries?: BlogEntryTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    blogEntries?: BlogEntryTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    description?: string | null
    location?: string | null
    website?: string | null
    birthDate?: Date | string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    description?: string | null
    location?: string | null
    website?: string | null
    birthDate?: Date | string | null
    userId: string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    description?: string | null
    location?: string | null
    website?: string | null
    birthDate?: Date | string | null
    userId: string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    theme?: string
    language?: string
    country?: string | null
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    theme?: string
    language?: string
    country?: string | null
    userId: string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    theme?: string
    language?: string
    country?: string | null
    userId: string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowsCreateInput = {
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowingInput
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowsUncheckedCreateInput = {
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowsUncheckedUpdateInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsCreateManyInput = {
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsUncheckedUpdateManyInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyPartCreateInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordCreateNestedManyWithoutBodyPartInput
    posts?: PostCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedCreateInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutBodyPartInput
    posts?: PostUncheckedCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartUncheckedCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUpdateManyWithoutBodyPartNestedInput
    posts?: PostUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUpdateManyWithoutBodyPartNestedInput
  }

  export type BodyPartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUncheckedUpdateManyWithoutBodyPartNestedInput
    posts?: PostUncheckedUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUncheckedUpdateManyWithoutBodyPartNestedInput
  }

  export type BodyPartCreateManyInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
  }

  export type BodyPartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BodyPartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConditionCreateInput = {
    id?: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
    bodyParts?: ConditionBodyPartCreateNestedManyWithoutConditionInput
  }

  export type ConditionUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
    bodyParts?: ConditionBodyPartUncheckedCreateNestedManyWithoutConditionInput
  }

  export type ConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    bodyParts?: ConditionBodyPartUpdateManyWithoutConditionNestedInput
  }

  export type ConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    bodyParts?: ConditionBodyPartUncheckedUpdateManyWithoutConditionNestedInput
  }

  export type ConditionCreateManyInput = {
    id?: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
  }

  export type ConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
  }

  export type ConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
  }

  export type ConditionBodyPartCreateInput = {
    condition: ConditionCreateNestedOneWithoutBodyPartsInput
    bodyPart: BodyPartCreateNestedOneWithoutConditionsInput
  }

  export type ConditionBodyPartUncheckedCreateInput = {
    conditionId: string
    bodyPartId: string
  }

  export type ConditionBodyPartUpdateInput = {
    condition?: ConditionUpdateOneRequiredWithoutBodyPartsNestedInput
    bodyPart?: BodyPartUpdateOneRequiredWithoutConditionsNestedInput
  }

  export type ConditionBodyPartUncheckedUpdateInput = {
    conditionId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionBodyPartCreateManyInput = {
    conditionId: string
    bodyPartId: string
  }

  export type ConditionBodyPartUpdateManyMutationInput = {

  }

  export type ConditionBodyPartUncheckedUpdateManyInput = {
    conditionId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type PainRecordCreateInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPainRecordsInput
    bodyPart: BodyPartCreateNestedOneWithoutPainRecordsInput
  }

  export type PainRecordUncheckedCreateInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    userId: string
    bodyPartId: string
  }

  export type PainRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPainRecordsNestedInput
    bodyPart?: BodyPartUpdateOneRequiredWithoutPainRecordsNestedInput
  }

  export type PainRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type PainRecordCreateManyInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    userId: string
    bodyPartId: string
  }

  export type PainRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    bodyPart: BodyPartCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bodyPartId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    bodyPart?: BodyPartUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bodyPartId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
    parentId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikesInput
    post?: PostCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    userId: string
    postId?: string | null
    commentId?: string | null
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    post?: PostUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeCreateManyInput = {
    id?: string
    userId: string
    postId?: string | null
    commentId?: string | null
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogEntryCreateInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogEntriesInput
    tags?: BlogEntryTagCreateNestedManyWithoutBlogEntryInput
  }

  export type BlogEntryUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tags?: BlogEntryTagUncheckedCreateNestedManyWithoutBlogEntryInput
  }

  export type BlogEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogEntriesNestedInput
    tags?: BlogEntryTagUpdateManyWithoutBlogEntryNestedInput
  }

  export type BlogEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tags?: BlogEntryTagUncheckedUpdateManyWithoutBlogEntryNestedInput
  }

  export type BlogEntryCreateManyInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BlogEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagCreateInput = {
    blogEntry: BlogEntryCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutBlogEntriesInput
  }

  export type BlogEntryTagUncheckedCreateInput = {
    blogEntryId: string
    tagId: string
  }

  export type BlogEntryTagUpdateInput = {
    blogEntry?: BlogEntryUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBlogEntriesNestedInput
  }

  export type BlogEntryTagUncheckedUpdateInput = {
    blogEntryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagCreateManyInput = {
    blogEntryId: string
    tagId: string
  }

  export type BlogEntryTagUpdateManyMutationInput = {

  }

  export type BlogEntryTagUncheckedUpdateManyInput = {
    blogEntryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    blogEntries?: BlogEntryTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    blogEntries?: BlogEntryTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogEntries?: BlogEntryTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogEntries?: BlogEntryTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput
    some?: FollowsWhereInput
    none?: FollowsWhereInput
  }

  export type PainRecordListRelationFilter = {
    every?: PainRecordWhereInput
    some?: PainRecordWhereInput
    none?: PainRecordWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type BlogEntryListRelationFilter = {
    every?: BlogEntryWhereInput
    some?: BlogEntryWhereInput
    none?: BlogEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PainRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profilePicture?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profilePicture?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profilePicture?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type FollowsFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string
    followingId: string
  }

  export type FollowsCountOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowsMaxOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowsMinOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConditionBodyPartListRelationFilter = {
    every?: ConditionBodyPartWhereInput
    some?: ConditionBodyPartWhereInput
    none?: ConditionBodyPartWhereInput
  }

  export type ConditionBodyPartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyPartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    meshId?: SortOrder
    description?: SortOrder
  }

  export type BodyPartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    meshId?: SortOrder
    description?: SortOrder
  }

  export type BodyPartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    meshId?: SortOrder
    description?: SortOrder
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type ConditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    severity?: SortOrder
  }

  export type ConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    severity?: SortOrder
  }

  export type ConditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    severity?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type ConditionScalarRelationFilter = {
    is?: ConditionWhereInput
    isNot?: ConditionWhereInput
  }

  export type BodyPartScalarRelationFilter = {
    is?: BodyPartWhereInput
    isNot?: BodyPartWhereInput
  }

  export type ConditionBodyPartConditionIdBodyPartIdCompoundUniqueInput = {
    conditionId: string
    bodyPartId: string
  }

  export type ConditionBodyPartCountOrderByAggregateInput = {
    conditionId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type ConditionBodyPartMaxOrderByAggregateInput = {
    conditionId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type ConditionBodyPartMinOrderByAggregateInput = {
    conditionId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PainRecordCountOrderByAggregateInput = {
    id?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type PainRecordAvgOrderByAggregateInput = {
    intensity?: SortOrder
  }

  export type PainRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type PainRecordMinOrderByAggregateInput = {
    id?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type PainRecordSumOrderByAggregateInput = {
    intensity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bodyPartId?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type LikeUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type LikeUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogEntryTagListRelationFilter = {
    every?: BlogEntryTagWhereInput
    some?: BlogEntryTagWhereInput
    none?: BlogEntryTagWhereInput
  }

  export type BlogEntryTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogEntryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BlogEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BlogEntryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlogEntryScalarRelationFilter = {
    is?: BlogEntryWhereInput
    isNot?: BlogEntryWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type BlogEntryTagBlogEntryIdTagIdCompoundUniqueInput = {
    blogEntryId: string
    tagId: string
  }

  export type BlogEntryTagCountOrderByAggregateInput = {
    blogEntryId?: SortOrder
    tagId?: SortOrder
  }

  export type BlogEntryTagMaxOrderByAggregateInput = {
    blogEntryId?: SortOrder
    tagId?: SortOrder
  }

  export type BlogEntryTagMinOrderByAggregateInput = {
    blogEntryId?: SortOrder
    tagId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type FollowsCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type PainRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput> | PainRecordCreateWithoutUserInput[] | PainRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutUserInput | PainRecordCreateOrConnectWithoutUserInput[]
    createMany?: PainRecordCreateManyUserInputEnvelope
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BlogEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput> | BlogEntryCreateWithoutUserInput[] | BlogEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogEntryCreateOrConnectWithoutUserInput | BlogEntryCreateOrConnectWithoutUserInput[]
    createMany?: BlogEntryCreateManyUserInputEnvelope
    connect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type PainRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput> | PainRecordCreateWithoutUserInput[] | PainRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutUserInput | PainRecordCreateOrConnectWithoutUserInput[]
    createMany?: PainRecordCreateManyUserInputEnvelope
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BlogEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput> | BlogEntryCreateWithoutUserInput[] | BlogEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogEntryCreateOrConnectWithoutUserInput | BlogEntryCreateOrConnectWithoutUserInput[]
    createMany?: BlogEntryCreateManyUserInputEnvelope
    connect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type FollowsUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type PainRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput> | PainRecordCreateWithoutUserInput[] | PainRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutUserInput | PainRecordCreateOrConnectWithoutUserInput[]
    upsert?: PainRecordUpsertWithWhereUniqueWithoutUserInput | PainRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PainRecordCreateManyUserInputEnvelope
    set?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    disconnect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    delete?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    update?: PainRecordUpdateWithWhereUniqueWithoutUserInput | PainRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PainRecordUpdateManyWithWhereWithoutUserInput | PainRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BlogEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput> | BlogEntryCreateWithoutUserInput[] | BlogEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogEntryCreateOrConnectWithoutUserInput | BlogEntryCreateOrConnectWithoutUserInput[]
    upsert?: BlogEntryUpsertWithWhereUniqueWithoutUserInput | BlogEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogEntryCreateManyUserInputEnvelope
    set?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    disconnect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    delete?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    connect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    update?: BlogEntryUpdateWithWhereUniqueWithoutUserInput | BlogEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogEntryUpdateManyWithWhereWithoutUserInput | BlogEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogEntryScalarWhereInput | BlogEntryScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type PainRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput> | PainRecordCreateWithoutUserInput[] | PainRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutUserInput | PainRecordCreateOrConnectWithoutUserInput[]
    upsert?: PainRecordUpsertWithWhereUniqueWithoutUserInput | PainRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PainRecordCreateManyUserInputEnvelope
    set?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    disconnect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    delete?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    update?: PainRecordUpdateWithWhereUniqueWithoutUserInput | PainRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PainRecordUpdateManyWithWhereWithoutUserInput | PainRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type BlogEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput> | BlogEntryCreateWithoutUserInput[] | BlogEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogEntryCreateOrConnectWithoutUserInput | BlogEntryCreateOrConnectWithoutUserInput[]
    upsert?: BlogEntryUpsertWithWhereUniqueWithoutUserInput | BlogEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogEntryCreateManyUserInputEnvelope
    set?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    disconnect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    delete?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    connect?: BlogEntryWhereUniqueInput | BlogEntryWhereUniqueInput[]
    update?: BlogEntryUpdateWithWhereUniqueWithoutUserInput | BlogEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogEntryUpdateManyWithWhereWithoutUserInput | BlogEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogEntryScalarWhereInput | BlogEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type PainRecordCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput> | PainRecordCreateWithoutBodyPartInput[] | PainRecordUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutBodyPartInput | PainRecordCreateOrConnectWithoutBodyPartInput[]
    createMany?: PainRecordCreateManyBodyPartInputEnvelope
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput> | PostCreateWithoutBodyPartInput[] | PostUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PostCreateOrConnectWithoutBodyPartInput | PostCreateOrConnectWithoutBodyPartInput[]
    createMany?: PostCreateManyBodyPartInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConditionBodyPartCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput> | ConditionBodyPartCreateWithoutBodyPartInput[] | ConditionBodyPartUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutBodyPartInput | ConditionBodyPartCreateOrConnectWithoutBodyPartInput[]
    createMany?: ConditionBodyPartCreateManyBodyPartInputEnvelope
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
  }

  export type PainRecordUncheckedCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput> | PainRecordCreateWithoutBodyPartInput[] | PainRecordUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutBodyPartInput | PainRecordCreateOrConnectWithoutBodyPartInput[]
    createMany?: PainRecordCreateManyBodyPartInputEnvelope
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput> | PostCreateWithoutBodyPartInput[] | PostUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PostCreateOrConnectWithoutBodyPartInput | PostCreateOrConnectWithoutBodyPartInput[]
    createMany?: PostCreateManyBodyPartInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConditionBodyPartUncheckedCreateNestedManyWithoutBodyPartInput = {
    create?: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput> | ConditionBodyPartCreateWithoutBodyPartInput[] | ConditionBodyPartUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutBodyPartInput | ConditionBodyPartCreateOrConnectWithoutBodyPartInput[]
    createMany?: ConditionBodyPartCreateManyBodyPartInputEnvelope
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
  }

  export type PainRecordUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput> | PainRecordCreateWithoutBodyPartInput[] | PainRecordUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutBodyPartInput | PainRecordCreateOrConnectWithoutBodyPartInput[]
    upsert?: PainRecordUpsertWithWhereUniqueWithoutBodyPartInput | PainRecordUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: PainRecordCreateManyBodyPartInputEnvelope
    set?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    disconnect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    delete?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    update?: PainRecordUpdateWithWhereUniqueWithoutBodyPartInput | PainRecordUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: PainRecordUpdateManyWithWhereWithoutBodyPartInput | PainRecordUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
  }

  export type PostUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput> | PostCreateWithoutBodyPartInput[] | PostUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PostCreateOrConnectWithoutBodyPartInput | PostCreateOrConnectWithoutBodyPartInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutBodyPartInput | PostUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: PostCreateManyBodyPartInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutBodyPartInput | PostUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: PostUpdateManyWithWhereWithoutBodyPartInput | PostUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConditionBodyPartUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput> | ConditionBodyPartCreateWithoutBodyPartInput[] | ConditionBodyPartUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutBodyPartInput | ConditionBodyPartCreateOrConnectWithoutBodyPartInput[]
    upsert?: ConditionBodyPartUpsertWithWhereUniqueWithoutBodyPartInput | ConditionBodyPartUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: ConditionBodyPartCreateManyBodyPartInputEnvelope
    set?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    disconnect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    delete?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    update?: ConditionBodyPartUpdateWithWhereUniqueWithoutBodyPartInput | ConditionBodyPartUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: ConditionBodyPartUpdateManyWithWhereWithoutBodyPartInput | ConditionBodyPartUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
  }

  export type PainRecordUncheckedUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput> | PainRecordCreateWithoutBodyPartInput[] | PainRecordUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PainRecordCreateOrConnectWithoutBodyPartInput | PainRecordCreateOrConnectWithoutBodyPartInput[]
    upsert?: PainRecordUpsertWithWhereUniqueWithoutBodyPartInput | PainRecordUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: PainRecordCreateManyBodyPartInputEnvelope
    set?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    disconnect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    delete?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    connect?: PainRecordWhereUniqueInput | PainRecordWhereUniqueInput[]
    update?: PainRecordUpdateWithWhereUniqueWithoutBodyPartInput | PainRecordUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: PainRecordUpdateManyWithWhereWithoutBodyPartInput | PainRecordUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput> | PostCreateWithoutBodyPartInput[] | PostUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: PostCreateOrConnectWithoutBodyPartInput | PostCreateOrConnectWithoutBodyPartInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutBodyPartInput | PostUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: PostCreateManyBodyPartInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutBodyPartInput | PostUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: PostUpdateManyWithWhereWithoutBodyPartInput | PostUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConditionBodyPartUncheckedUpdateManyWithoutBodyPartNestedInput = {
    create?: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput> | ConditionBodyPartCreateWithoutBodyPartInput[] | ConditionBodyPartUncheckedCreateWithoutBodyPartInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutBodyPartInput | ConditionBodyPartCreateOrConnectWithoutBodyPartInput[]
    upsert?: ConditionBodyPartUpsertWithWhereUniqueWithoutBodyPartInput | ConditionBodyPartUpsertWithWhereUniqueWithoutBodyPartInput[]
    createMany?: ConditionBodyPartCreateManyBodyPartInputEnvelope
    set?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    disconnect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    delete?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    update?: ConditionBodyPartUpdateWithWhereUniqueWithoutBodyPartInput | ConditionBodyPartUpdateWithWhereUniqueWithoutBodyPartInput[]
    updateMany?: ConditionBodyPartUpdateManyWithWhereWithoutBodyPartInput | ConditionBodyPartUpdateManyWithWhereWithoutBodyPartInput[]
    deleteMany?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
  }

  export type ConditionBodyPartCreateNestedManyWithoutConditionInput = {
    create?: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput> | ConditionBodyPartCreateWithoutConditionInput[] | ConditionBodyPartUncheckedCreateWithoutConditionInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutConditionInput | ConditionBodyPartCreateOrConnectWithoutConditionInput[]
    createMany?: ConditionBodyPartCreateManyConditionInputEnvelope
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
  }

  export type ConditionBodyPartUncheckedCreateNestedManyWithoutConditionInput = {
    create?: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput> | ConditionBodyPartCreateWithoutConditionInput[] | ConditionBodyPartUncheckedCreateWithoutConditionInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutConditionInput | ConditionBodyPartCreateOrConnectWithoutConditionInput[]
    createMany?: ConditionBodyPartCreateManyConditionInputEnvelope
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type ConditionBodyPartUpdateManyWithoutConditionNestedInput = {
    create?: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput> | ConditionBodyPartCreateWithoutConditionInput[] | ConditionBodyPartUncheckedCreateWithoutConditionInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutConditionInput | ConditionBodyPartCreateOrConnectWithoutConditionInput[]
    upsert?: ConditionBodyPartUpsertWithWhereUniqueWithoutConditionInput | ConditionBodyPartUpsertWithWhereUniqueWithoutConditionInput[]
    createMany?: ConditionBodyPartCreateManyConditionInputEnvelope
    set?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    disconnect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    delete?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    update?: ConditionBodyPartUpdateWithWhereUniqueWithoutConditionInput | ConditionBodyPartUpdateWithWhereUniqueWithoutConditionInput[]
    updateMany?: ConditionBodyPartUpdateManyWithWhereWithoutConditionInput | ConditionBodyPartUpdateManyWithWhereWithoutConditionInput[]
    deleteMany?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
  }

  export type ConditionBodyPartUncheckedUpdateManyWithoutConditionNestedInput = {
    create?: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput> | ConditionBodyPartCreateWithoutConditionInput[] | ConditionBodyPartUncheckedCreateWithoutConditionInput[]
    connectOrCreate?: ConditionBodyPartCreateOrConnectWithoutConditionInput | ConditionBodyPartCreateOrConnectWithoutConditionInput[]
    upsert?: ConditionBodyPartUpsertWithWhereUniqueWithoutConditionInput | ConditionBodyPartUpsertWithWhereUniqueWithoutConditionInput[]
    createMany?: ConditionBodyPartCreateManyConditionInputEnvelope
    set?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    disconnect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    delete?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    connect?: ConditionBodyPartWhereUniqueInput | ConditionBodyPartWhereUniqueInput[]
    update?: ConditionBodyPartUpdateWithWhereUniqueWithoutConditionInput | ConditionBodyPartUpdateWithWhereUniqueWithoutConditionInput[]
    updateMany?: ConditionBodyPartUpdateManyWithWhereWithoutConditionInput | ConditionBodyPartUpdateManyWithWhereWithoutConditionInput[]
    deleteMany?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
  }

  export type ConditionCreateNestedOneWithoutBodyPartsInput = {
    create?: XOR<ConditionCreateWithoutBodyPartsInput, ConditionUncheckedCreateWithoutBodyPartsInput>
    connectOrCreate?: ConditionCreateOrConnectWithoutBodyPartsInput
    connect?: ConditionWhereUniqueInput
  }

  export type BodyPartCreateNestedOneWithoutConditionsInput = {
    create?: XOR<BodyPartCreateWithoutConditionsInput, BodyPartUncheckedCreateWithoutConditionsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutConditionsInput
    connect?: BodyPartWhereUniqueInput
  }

  export type ConditionUpdateOneRequiredWithoutBodyPartsNestedInput = {
    create?: XOR<ConditionCreateWithoutBodyPartsInput, ConditionUncheckedCreateWithoutBodyPartsInput>
    connectOrCreate?: ConditionCreateOrConnectWithoutBodyPartsInput
    upsert?: ConditionUpsertWithoutBodyPartsInput
    connect?: ConditionWhereUniqueInput
    update?: XOR<XOR<ConditionUpdateToOneWithWhereWithoutBodyPartsInput, ConditionUpdateWithoutBodyPartsInput>, ConditionUncheckedUpdateWithoutBodyPartsInput>
  }

  export type BodyPartUpdateOneRequiredWithoutConditionsNestedInput = {
    create?: XOR<BodyPartCreateWithoutConditionsInput, BodyPartUncheckedCreateWithoutConditionsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutConditionsInput
    upsert?: BodyPartUpsertWithoutConditionsInput
    connect?: BodyPartWhereUniqueInput
    update?: XOR<XOR<BodyPartUpdateToOneWithWhereWithoutConditionsInput, BodyPartUpdateWithoutConditionsInput>, BodyPartUncheckedUpdateWithoutConditionsInput>
  }

  export type UserCreateNestedOneWithoutPainRecordsInput = {
    create?: XOR<UserCreateWithoutPainRecordsInput, UserUncheckedCreateWithoutPainRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPainRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type BodyPartCreateNestedOneWithoutPainRecordsInput = {
    create?: XOR<BodyPartCreateWithoutPainRecordsInput, BodyPartUncheckedCreateWithoutPainRecordsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutPainRecordsInput
    connect?: BodyPartWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPainRecordsNestedInput = {
    create?: XOR<UserCreateWithoutPainRecordsInput, UserUncheckedCreateWithoutPainRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPainRecordsInput
    upsert?: UserUpsertWithoutPainRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPainRecordsInput, UserUpdateWithoutPainRecordsInput>, UserUncheckedUpdateWithoutPainRecordsInput>
  }

  export type BodyPartUpdateOneRequiredWithoutPainRecordsNestedInput = {
    create?: XOR<BodyPartCreateWithoutPainRecordsInput, BodyPartUncheckedCreateWithoutPainRecordsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutPainRecordsInput
    upsert?: BodyPartUpsertWithoutPainRecordsInput
    connect?: BodyPartWhereUniqueInput
    update?: XOR<XOR<BodyPartUpdateToOneWithWhereWithoutPainRecordsInput, BodyPartUpdateWithoutPainRecordsInput>, BodyPartUncheckedUpdateWithoutPainRecordsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BodyPartCreateNestedOneWithoutPostsInput = {
    create?: XOR<BodyPartCreateWithoutPostsInput, BodyPartUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutPostsInput
    connect?: BodyPartWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type BodyPartUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<BodyPartCreateWithoutPostsInput, BodyPartUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BodyPartCreateOrConnectWithoutPostsInput
    upsert?: BodyPartUpsertWithoutPostsInput
    connect?: BodyPartWhereUniqueInput
    update?: XOR<XOR<BodyPartUpdateToOneWithWhereWithoutPostsInput, BodyPartUpdateWithoutPostsInput>, BodyPartUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutCommentInput | LikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutCommentInput | LikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutCommentInput | LikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutCommentInput | LikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutCommentInput | LikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutCommentInput | LikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutLikesInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateOneWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type CommentUpdateOneWithoutLikesNestedInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    upsert?: CommentUpsertWithoutLikesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutLikesInput, CommentUpdateWithoutLikesInput>, CommentUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutBlogEntriesInput = {
    create?: XOR<UserCreateWithoutBlogEntriesInput, UserUncheckedCreateWithoutBlogEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogEntryTagCreateNestedManyWithoutBlogEntryInput = {
    create?: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput> | BlogEntryTagCreateWithoutBlogEntryInput[] | BlogEntryTagUncheckedCreateWithoutBlogEntryInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutBlogEntryInput | BlogEntryTagCreateOrConnectWithoutBlogEntryInput[]
    createMany?: BlogEntryTagCreateManyBlogEntryInputEnvelope
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
  }

  export type BlogEntryTagUncheckedCreateNestedManyWithoutBlogEntryInput = {
    create?: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput> | BlogEntryTagCreateWithoutBlogEntryInput[] | BlogEntryTagUncheckedCreateWithoutBlogEntryInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutBlogEntryInput | BlogEntryTagCreateOrConnectWithoutBlogEntryInput[]
    createMany?: BlogEntryTagCreateManyBlogEntryInputEnvelope
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBlogEntriesNestedInput = {
    create?: XOR<UserCreateWithoutBlogEntriesInput, UserUncheckedCreateWithoutBlogEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogEntriesInput
    upsert?: UserUpsertWithoutBlogEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogEntriesInput, UserUpdateWithoutBlogEntriesInput>, UserUncheckedUpdateWithoutBlogEntriesInput>
  }

  export type BlogEntryTagUpdateManyWithoutBlogEntryNestedInput = {
    create?: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput> | BlogEntryTagCreateWithoutBlogEntryInput[] | BlogEntryTagUncheckedCreateWithoutBlogEntryInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutBlogEntryInput | BlogEntryTagCreateOrConnectWithoutBlogEntryInput[]
    upsert?: BlogEntryTagUpsertWithWhereUniqueWithoutBlogEntryInput | BlogEntryTagUpsertWithWhereUniqueWithoutBlogEntryInput[]
    createMany?: BlogEntryTagCreateManyBlogEntryInputEnvelope
    set?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    disconnect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    delete?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    update?: BlogEntryTagUpdateWithWhereUniqueWithoutBlogEntryInput | BlogEntryTagUpdateWithWhereUniqueWithoutBlogEntryInput[]
    updateMany?: BlogEntryTagUpdateManyWithWhereWithoutBlogEntryInput | BlogEntryTagUpdateManyWithWhereWithoutBlogEntryInput[]
    deleteMany?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
  }

  export type BlogEntryTagUncheckedUpdateManyWithoutBlogEntryNestedInput = {
    create?: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput> | BlogEntryTagCreateWithoutBlogEntryInput[] | BlogEntryTagUncheckedCreateWithoutBlogEntryInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutBlogEntryInput | BlogEntryTagCreateOrConnectWithoutBlogEntryInput[]
    upsert?: BlogEntryTagUpsertWithWhereUniqueWithoutBlogEntryInput | BlogEntryTagUpsertWithWhereUniqueWithoutBlogEntryInput[]
    createMany?: BlogEntryTagCreateManyBlogEntryInputEnvelope
    set?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    disconnect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    delete?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    update?: BlogEntryTagUpdateWithWhereUniqueWithoutBlogEntryInput | BlogEntryTagUpdateWithWhereUniqueWithoutBlogEntryInput[]
    updateMany?: BlogEntryTagUpdateManyWithWhereWithoutBlogEntryInput | BlogEntryTagUpdateManyWithWhereWithoutBlogEntryInput[]
    deleteMany?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
  }

  export type BlogEntryCreateNestedOneWithoutTagsInput = {
    create?: XOR<BlogEntryCreateWithoutTagsInput, BlogEntryUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlogEntryCreateOrConnectWithoutTagsInput
    connect?: BlogEntryWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutBlogEntriesInput = {
    create?: XOR<TagCreateWithoutBlogEntriesInput, TagUncheckedCreateWithoutBlogEntriesInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlogEntriesInput
    connect?: TagWhereUniqueInput
  }

  export type BlogEntryUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<BlogEntryCreateWithoutTagsInput, BlogEntryUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlogEntryCreateOrConnectWithoutTagsInput
    upsert?: BlogEntryUpsertWithoutTagsInput
    connect?: BlogEntryWhereUniqueInput
    update?: XOR<XOR<BlogEntryUpdateToOneWithWhereWithoutTagsInput, BlogEntryUpdateWithoutTagsInput>, BlogEntryUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutBlogEntriesNestedInput = {
    create?: XOR<TagCreateWithoutBlogEntriesInput, TagUncheckedCreateWithoutBlogEntriesInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlogEntriesInput
    upsert?: TagUpsertWithoutBlogEntriesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBlogEntriesInput, TagUpdateWithoutBlogEntriesInput>, TagUncheckedUpdateWithoutBlogEntriesInput>
  }

  export type BlogEntryTagCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput> | BlogEntryTagCreateWithoutTagInput[] | BlogEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutTagInput | BlogEntryTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogEntryTagCreateManyTagInputEnvelope
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
  }

  export type BlogEntryTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput> | BlogEntryTagCreateWithoutTagInput[] | BlogEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutTagInput | BlogEntryTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogEntryTagCreateManyTagInputEnvelope
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
  }

  export type BlogEntryTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput> | BlogEntryTagCreateWithoutTagInput[] | BlogEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutTagInput | BlogEntryTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogEntryTagUpsertWithWhereUniqueWithoutTagInput | BlogEntryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogEntryTagCreateManyTagInputEnvelope
    set?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    disconnect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    delete?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    update?: BlogEntryTagUpdateWithWhereUniqueWithoutTagInput | BlogEntryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogEntryTagUpdateManyWithWhereWithoutTagInput | BlogEntryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
  }

  export type BlogEntryTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput> | BlogEntryTagCreateWithoutTagInput[] | BlogEntryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogEntryTagCreateOrConnectWithoutTagInput | BlogEntryTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogEntryTagUpsertWithWhereUniqueWithoutTagInput | BlogEntryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogEntryTagCreateManyTagInputEnvelope
    set?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    disconnect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    delete?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    connect?: BlogEntryTagWhereUniqueInput | BlogEntryTagWhereUniqueInput[]
    update?: BlogEntryTagUpdateWithWhereUniqueWithoutTagInput | BlogEntryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogEntryTagUpdateManyWithWhereWithoutTagInput | BlogEntryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    description?: string | null
    location?: string | null
    website?: string | null
    birthDate?: Date | string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    description?: string | null
    location?: string | null
    website?: string | null
    birthDate?: Date | string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserSettingsCreateWithoutUserInput = {
    id?: string
    theme?: string
    language?: string
    country?: string | null
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    theme?: string
    language?: string
    country?: string | null
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type FollowsCreateWithoutFollowingInput = {
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateWithoutFollowingInput = {
    followerId: string
    createdAt?: Date | string
  }

  export type FollowsCreateOrConnectWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsCreateManyFollowingInputEnvelope = {
    data: FollowsCreateManyFollowingInput | FollowsCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutFollowerInput = {
    createdAt?: Date | string
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowsUncheckedCreateWithoutFollowerInput = {
    followingId: string
    createdAt?: Date | string
  }

  export type FollowsCreateOrConnectWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsCreateManyFollowerInputEnvelope = {
    data: FollowsCreateManyFollowerInput | FollowsCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type PainRecordCreateWithoutUserInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    bodyPart: BodyPartCreateNestedOneWithoutPainRecordsInput
  }

  export type PainRecordUncheckedCreateWithoutUserInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    bodyPartId: string
  }

  export type PainRecordCreateOrConnectWithoutUserInput = {
    where: PainRecordWhereUniqueInput
    create: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput>
  }

  export type PainRecordCreateManyUserInputEnvelope = {
    data: PainRecordCreateManyUserInput | PainRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bodyPart: BodyPartCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bodyPartId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    post?: PostCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogEntryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogEntryTagCreateNestedManyWithoutBlogEntryInput
  }

  export type BlogEntryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogEntryTagUncheckedCreateNestedManyWithoutBlogEntryInput
  }

  export type BlogEntryCreateOrConnectWithoutUserInput = {
    where: BlogEntryWhereUniqueInput
    create: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput>
  }

  export type BlogEntryCreateManyUserInputEnvelope = {
    data: BlogEntryCreateManyUserInput | BlogEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    OR?: FollowsScalarWhereInput[]
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    followerId?: UuidFilter<"Follows"> | string
    followingId?: UuidFilter<"Follows"> | string
    createdAt?: DateTimeFilter<"Follows"> | Date | string
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowerInput>
  }

  export type PainRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: PainRecordWhereUniqueInput
    update: XOR<PainRecordUpdateWithoutUserInput, PainRecordUncheckedUpdateWithoutUserInput>
    create: XOR<PainRecordCreateWithoutUserInput, PainRecordUncheckedCreateWithoutUserInput>
  }

  export type PainRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: PainRecordWhereUniqueInput
    data: XOR<PainRecordUpdateWithoutUserInput, PainRecordUncheckedUpdateWithoutUserInput>
  }

  export type PainRecordUpdateManyWithWhereWithoutUserInput = {
    where: PainRecordScalarWhereInput
    data: XOR<PainRecordUpdateManyMutationInput, PainRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type PainRecordScalarWhereInput = {
    AND?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
    OR?: PainRecordScalarWhereInput[]
    NOT?: PainRecordScalarWhereInput | PainRecordScalarWhereInput[]
    id?: UuidFilter<"PainRecord"> | string
    intensity?: IntFilter<"PainRecord"> | number
    notes?: StringNullableFilter<"PainRecord"> | string | null
    createdAt?: DateTimeFilter<"PainRecord"> | Date | string
    userId?: UuidFilter<"PainRecord"> | string
    bodyPartId?: UuidFilter<"PainRecord"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: UuidFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: UuidFilter<"Post"> | string
    bodyPartId?: UuidFilter<"Post"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: UuidFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: UuidFilter<"Like"> | string
    userId?: UuidFilter<"Like"> | string
    postId?: UuidNullableFilter<"Like"> | string | null
    commentId?: UuidNullableFilter<"Like"> | string | null
  }

  export type BlogEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogEntryWhereUniqueInput
    update: XOR<BlogEntryUpdateWithoutUserInput, BlogEntryUncheckedUpdateWithoutUserInput>
    create: XOR<BlogEntryCreateWithoutUserInput, BlogEntryUncheckedCreateWithoutUserInput>
  }

  export type BlogEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogEntryWhereUniqueInput
    data: XOR<BlogEntryUpdateWithoutUserInput, BlogEntryUncheckedUpdateWithoutUserInput>
  }

  export type BlogEntryUpdateManyWithWhereWithoutUserInput = {
    where: BlogEntryScalarWhereInput
    data: XOR<BlogEntryUpdateManyMutationInput, BlogEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogEntryScalarWhereInput = {
    AND?: BlogEntryScalarWhereInput | BlogEntryScalarWhereInput[]
    OR?: BlogEntryScalarWhereInput[]
    NOT?: BlogEntryScalarWhereInput | BlogEntryScalarWhereInput[]
    id?: UuidFilter<"BlogEntry"> | string
    title?: StringFilter<"BlogEntry"> | string
    content?: StringFilter<"BlogEntry"> | string
    isPublic?: BoolFilter<"BlogEntry"> | boolean
    createdAt?: DateTimeFilter<"BlogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BlogEntry"> | Date | string
    userId?: UuidFilter<"BlogEntry"> | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PainRecordCreateWithoutBodyPartInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPainRecordsInput
  }

  export type PainRecordUncheckedCreateWithoutBodyPartInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type PainRecordCreateOrConnectWithoutBodyPartInput = {
    where: PainRecordWhereUniqueInput
    create: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput>
  }

  export type PainRecordCreateManyBodyPartInputEnvelope = {
    data: PainRecordCreateManyBodyPartInput | PainRecordCreateManyBodyPartInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutBodyPartInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutBodyPartInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutBodyPartInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput>
  }

  export type PostCreateManyBodyPartInputEnvelope = {
    data: PostCreateManyBodyPartInput | PostCreateManyBodyPartInput[]
    skipDuplicates?: boolean
  }

  export type ConditionBodyPartCreateWithoutBodyPartInput = {
    condition: ConditionCreateNestedOneWithoutBodyPartsInput
  }

  export type ConditionBodyPartUncheckedCreateWithoutBodyPartInput = {
    conditionId: string
  }

  export type ConditionBodyPartCreateOrConnectWithoutBodyPartInput = {
    where: ConditionBodyPartWhereUniqueInput
    create: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput>
  }

  export type ConditionBodyPartCreateManyBodyPartInputEnvelope = {
    data: ConditionBodyPartCreateManyBodyPartInput | ConditionBodyPartCreateManyBodyPartInput[]
    skipDuplicates?: boolean
  }

  export type PainRecordUpsertWithWhereUniqueWithoutBodyPartInput = {
    where: PainRecordWhereUniqueInput
    update: XOR<PainRecordUpdateWithoutBodyPartInput, PainRecordUncheckedUpdateWithoutBodyPartInput>
    create: XOR<PainRecordCreateWithoutBodyPartInput, PainRecordUncheckedCreateWithoutBodyPartInput>
  }

  export type PainRecordUpdateWithWhereUniqueWithoutBodyPartInput = {
    where: PainRecordWhereUniqueInput
    data: XOR<PainRecordUpdateWithoutBodyPartInput, PainRecordUncheckedUpdateWithoutBodyPartInput>
  }

  export type PainRecordUpdateManyWithWhereWithoutBodyPartInput = {
    where: PainRecordScalarWhereInput
    data: XOR<PainRecordUpdateManyMutationInput, PainRecordUncheckedUpdateManyWithoutBodyPartInput>
  }

  export type PostUpsertWithWhereUniqueWithoutBodyPartInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutBodyPartInput, PostUncheckedUpdateWithoutBodyPartInput>
    create: XOR<PostCreateWithoutBodyPartInput, PostUncheckedCreateWithoutBodyPartInput>
  }

  export type PostUpdateWithWhereUniqueWithoutBodyPartInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutBodyPartInput, PostUncheckedUpdateWithoutBodyPartInput>
  }

  export type PostUpdateManyWithWhereWithoutBodyPartInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutBodyPartInput>
  }

  export type ConditionBodyPartUpsertWithWhereUniqueWithoutBodyPartInput = {
    where: ConditionBodyPartWhereUniqueInput
    update: XOR<ConditionBodyPartUpdateWithoutBodyPartInput, ConditionBodyPartUncheckedUpdateWithoutBodyPartInput>
    create: XOR<ConditionBodyPartCreateWithoutBodyPartInput, ConditionBodyPartUncheckedCreateWithoutBodyPartInput>
  }

  export type ConditionBodyPartUpdateWithWhereUniqueWithoutBodyPartInput = {
    where: ConditionBodyPartWhereUniqueInput
    data: XOR<ConditionBodyPartUpdateWithoutBodyPartInput, ConditionBodyPartUncheckedUpdateWithoutBodyPartInput>
  }

  export type ConditionBodyPartUpdateManyWithWhereWithoutBodyPartInput = {
    where: ConditionBodyPartScalarWhereInput
    data: XOR<ConditionBodyPartUpdateManyMutationInput, ConditionBodyPartUncheckedUpdateManyWithoutBodyPartInput>
  }

  export type ConditionBodyPartScalarWhereInput = {
    AND?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
    OR?: ConditionBodyPartScalarWhereInput[]
    NOT?: ConditionBodyPartScalarWhereInput | ConditionBodyPartScalarWhereInput[]
    conditionId?: UuidFilter<"ConditionBodyPart"> | string
    bodyPartId?: UuidFilter<"ConditionBodyPart"> | string
  }

  export type ConditionBodyPartCreateWithoutConditionInput = {
    bodyPart: BodyPartCreateNestedOneWithoutConditionsInput
  }

  export type ConditionBodyPartUncheckedCreateWithoutConditionInput = {
    bodyPartId: string
  }

  export type ConditionBodyPartCreateOrConnectWithoutConditionInput = {
    where: ConditionBodyPartWhereUniqueInput
    create: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput>
  }

  export type ConditionBodyPartCreateManyConditionInputEnvelope = {
    data: ConditionBodyPartCreateManyConditionInput | ConditionBodyPartCreateManyConditionInput[]
    skipDuplicates?: boolean
  }

  export type ConditionBodyPartUpsertWithWhereUniqueWithoutConditionInput = {
    where: ConditionBodyPartWhereUniqueInput
    update: XOR<ConditionBodyPartUpdateWithoutConditionInput, ConditionBodyPartUncheckedUpdateWithoutConditionInput>
    create: XOR<ConditionBodyPartCreateWithoutConditionInput, ConditionBodyPartUncheckedCreateWithoutConditionInput>
  }

  export type ConditionBodyPartUpdateWithWhereUniqueWithoutConditionInput = {
    where: ConditionBodyPartWhereUniqueInput
    data: XOR<ConditionBodyPartUpdateWithoutConditionInput, ConditionBodyPartUncheckedUpdateWithoutConditionInput>
  }

  export type ConditionBodyPartUpdateManyWithWhereWithoutConditionInput = {
    where: ConditionBodyPartScalarWhereInput
    data: XOR<ConditionBodyPartUpdateManyMutationInput, ConditionBodyPartUncheckedUpdateManyWithoutConditionInput>
  }

  export type ConditionCreateWithoutBodyPartsInput = {
    id?: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
  }

  export type ConditionUncheckedCreateWithoutBodyPartsInput = {
    id?: string
    name: string
    description: string
    recommendation: string
    severity: $Enums.Severity
  }

  export type ConditionCreateOrConnectWithoutBodyPartsInput = {
    where: ConditionWhereUniqueInput
    create: XOR<ConditionCreateWithoutBodyPartsInput, ConditionUncheckedCreateWithoutBodyPartsInput>
  }

  export type BodyPartCreateWithoutConditionsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordCreateNestedManyWithoutBodyPartInput
    posts?: PostCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedCreateWithoutConditionsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutBodyPartInput
    posts?: PostUncheckedCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartCreateOrConnectWithoutConditionsInput = {
    where: BodyPartWhereUniqueInput
    create: XOR<BodyPartCreateWithoutConditionsInput, BodyPartUncheckedCreateWithoutConditionsInput>
  }

  export type ConditionUpsertWithoutBodyPartsInput = {
    update: XOR<ConditionUpdateWithoutBodyPartsInput, ConditionUncheckedUpdateWithoutBodyPartsInput>
    create: XOR<ConditionCreateWithoutBodyPartsInput, ConditionUncheckedCreateWithoutBodyPartsInput>
    where?: ConditionWhereInput
  }

  export type ConditionUpdateToOneWithWhereWithoutBodyPartsInput = {
    where?: ConditionWhereInput
    data: XOR<ConditionUpdateWithoutBodyPartsInput, ConditionUncheckedUpdateWithoutBodyPartsInput>
  }

  export type ConditionUpdateWithoutBodyPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
  }

  export type ConditionUncheckedUpdateWithoutBodyPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
  }

  export type BodyPartUpsertWithoutConditionsInput = {
    update: XOR<BodyPartUpdateWithoutConditionsInput, BodyPartUncheckedUpdateWithoutConditionsInput>
    create: XOR<BodyPartCreateWithoutConditionsInput, BodyPartUncheckedCreateWithoutConditionsInput>
    where?: BodyPartWhereInput
  }

  export type BodyPartUpdateToOneWithWhereWithoutConditionsInput = {
    where?: BodyPartWhereInput
    data: XOR<BodyPartUpdateWithoutConditionsInput, BodyPartUncheckedUpdateWithoutConditionsInput>
  }

  export type BodyPartUpdateWithoutConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUpdateManyWithoutBodyPartNestedInput
    posts?: PostUpdateManyWithoutBodyPartNestedInput
  }

  export type BodyPartUncheckedUpdateWithoutConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUncheckedUpdateManyWithoutBodyPartNestedInput
    posts?: PostUncheckedUpdateManyWithoutBodyPartNestedInput
  }

  export type UserCreateWithoutPainRecordsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPainRecordsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPainRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPainRecordsInput, UserUncheckedCreateWithoutPainRecordsInput>
  }

  export type BodyPartCreateWithoutPainRecordsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    posts?: PostCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedCreateWithoutPainRecordsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartUncheckedCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartCreateOrConnectWithoutPainRecordsInput = {
    where: BodyPartWhereUniqueInput
    create: XOR<BodyPartCreateWithoutPainRecordsInput, BodyPartUncheckedCreateWithoutPainRecordsInput>
  }

  export type UserUpsertWithoutPainRecordsInput = {
    update: XOR<UserUpdateWithoutPainRecordsInput, UserUncheckedUpdateWithoutPainRecordsInput>
    create: XOR<UserCreateWithoutPainRecordsInput, UserUncheckedCreateWithoutPainRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPainRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPainRecordsInput, UserUncheckedUpdateWithoutPainRecordsInput>
  }

  export type UserUpdateWithoutPainRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPainRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BodyPartUpsertWithoutPainRecordsInput = {
    update: XOR<BodyPartUpdateWithoutPainRecordsInput, BodyPartUncheckedUpdateWithoutPainRecordsInput>
    create: XOR<BodyPartCreateWithoutPainRecordsInput, BodyPartUncheckedCreateWithoutPainRecordsInput>
    where?: BodyPartWhereInput
  }

  export type BodyPartUpdateToOneWithWhereWithoutPainRecordsInput = {
    where?: BodyPartWhereInput
    data: XOR<BodyPartUpdateWithoutPainRecordsInput, BodyPartUncheckedUpdateWithoutPainRecordsInput>
  }

  export type BodyPartUpdateWithoutPainRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUpdateManyWithoutBodyPartNestedInput
  }

  export type BodyPartUncheckedUpdateWithoutPainRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUncheckedUpdateManyWithoutBodyPartNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type BodyPartCreateWithoutPostsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    meshId: string
    description?: string | null
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutBodyPartInput
    conditions?: ConditionBodyPartUncheckedCreateNestedManyWithoutBodyPartInput
  }

  export type BodyPartCreateOrConnectWithoutPostsInput = {
    where: BodyPartWhereUniqueInput
    create: XOR<BodyPartCreateWithoutPostsInput, BodyPartUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    commentId?: string | null
  }

  export type LikeCreateOrConnectWithoutPostInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeCreateManyPostInputEnvelope = {
    data: LikeCreateManyPostInput | LikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BodyPartUpsertWithoutPostsInput = {
    update: XOR<BodyPartUpdateWithoutPostsInput, BodyPartUncheckedUpdateWithoutPostsInput>
    create: XOR<BodyPartCreateWithoutPostsInput, BodyPartUncheckedCreateWithoutPostsInput>
    where?: BodyPartWhereInput
  }

  export type BodyPartUpdateToOneWithWhereWithoutPostsInput = {
    where?: BodyPartWhereInput
    data: XOR<BodyPartUpdateWithoutPostsInput, BodyPartUncheckedUpdateWithoutPostsInput>
  }

  export type BodyPartUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUpdateManyWithoutBodyPartNestedInput
  }

  export type BodyPartUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meshId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    painRecords?: PainRecordUncheckedUpdateManyWithoutBodyPartNestedInput
    conditions?: ConditionBodyPartUncheckedUpdateManyWithoutBodyPartNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
  }

  export type LikeUpdateManyWithWhereWithoutPostInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    bodyPart: BodyPartCreateNestedOneWithoutPostsInput
    likes?: LikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bodyPartId: string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
    parentId?: string | null
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutCommentInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikesInput
    post?: PostCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutCommentInput = {
    id?: string
    userId: string
    postId?: string | null
  }

  export type LikeCreateOrConnectWithoutCommentInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeCreateManyCommentInputEnvelope = {
    data: LikeCreateManyCommentInput | LikeCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    bodyPart?: BodyPartUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
  }

  export type LikeUpdateManyWithWhereWithoutCommentInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    blogEntries?: BlogEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type PostCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    bodyPart: BodyPartCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bodyPartId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type CommentCreateWithoutLikesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutLikesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutLikesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    blogEntries?: BlogEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    bodyPart?: BodyPartUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutLikesInput = {
    update: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutLikesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
  }

  export type CommentUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutBlogEntriesInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogEntriesInput = {
    id?: string
    username: string
    name?: string | null
    surname?: string | null
    email: string
    passwordHash: string
    profilePicture?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    painRecords?: PainRecordUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogEntriesInput, UserUncheckedCreateWithoutBlogEntriesInput>
  }

  export type BlogEntryTagCreateWithoutBlogEntryInput = {
    tag: TagCreateNestedOneWithoutBlogEntriesInput
  }

  export type BlogEntryTagUncheckedCreateWithoutBlogEntryInput = {
    tagId: string
  }

  export type BlogEntryTagCreateOrConnectWithoutBlogEntryInput = {
    where: BlogEntryTagWhereUniqueInput
    create: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput>
  }

  export type BlogEntryTagCreateManyBlogEntryInputEnvelope = {
    data: BlogEntryTagCreateManyBlogEntryInput | BlogEntryTagCreateManyBlogEntryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogEntriesInput = {
    update: XOR<UserUpdateWithoutBlogEntriesInput, UserUncheckedUpdateWithoutBlogEntriesInput>
    create: XOR<UserCreateWithoutBlogEntriesInput, UserUncheckedCreateWithoutBlogEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogEntriesInput, UserUncheckedUpdateWithoutBlogEntriesInput>
  }

  export type UserUpdateWithoutBlogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    painRecords?: PainRecordUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogEntryTagUpsertWithWhereUniqueWithoutBlogEntryInput = {
    where: BlogEntryTagWhereUniqueInput
    update: XOR<BlogEntryTagUpdateWithoutBlogEntryInput, BlogEntryTagUncheckedUpdateWithoutBlogEntryInput>
    create: XOR<BlogEntryTagCreateWithoutBlogEntryInput, BlogEntryTagUncheckedCreateWithoutBlogEntryInput>
  }

  export type BlogEntryTagUpdateWithWhereUniqueWithoutBlogEntryInput = {
    where: BlogEntryTagWhereUniqueInput
    data: XOR<BlogEntryTagUpdateWithoutBlogEntryInput, BlogEntryTagUncheckedUpdateWithoutBlogEntryInput>
  }

  export type BlogEntryTagUpdateManyWithWhereWithoutBlogEntryInput = {
    where: BlogEntryTagScalarWhereInput
    data: XOR<BlogEntryTagUpdateManyMutationInput, BlogEntryTagUncheckedUpdateManyWithoutBlogEntryInput>
  }

  export type BlogEntryTagScalarWhereInput = {
    AND?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
    OR?: BlogEntryTagScalarWhereInput[]
    NOT?: BlogEntryTagScalarWhereInput | BlogEntryTagScalarWhereInput[]
    blogEntryId?: UuidFilter<"BlogEntryTag"> | string
    tagId?: UuidFilter<"BlogEntryTag"> | string
  }

  export type BlogEntryCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogEntriesInput
  }

  export type BlogEntryUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BlogEntryCreateOrConnectWithoutTagsInput = {
    where: BlogEntryWhereUniqueInput
    create: XOR<BlogEntryCreateWithoutTagsInput, BlogEntryUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutBlogEntriesInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutBlogEntriesInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutBlogEntriesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBlogEntriesInput, TagUncheckedCreateWithoutBlogEntriesInput>
  }

  export type BlogEntryUpsertWithoutTagsInput = {
    update: XOR<BlogEntryUpdateWithoutTagsInput, BlogEntryUncheckedUpdateWithoutTagsInput>
    create: XOR<BlogEntryCreateWithoutTagsInput, BlogEntryUncheckedCreateWithoutTagsInput>
    where?: BlogEntryWhereInput
  }

  export type BlogEntryUpdateToOneWithWhereWithoutTagsInput = {
    where?: BlogEntryWhereInput
    data: XOR<BlogEntryUpdateWithoutTagsInput, BlogEntryUncheckedUpdateWithoutTagsInput>
  }

  export type BlogEntryUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogEntriesNestedInput
  }

  export type BlogEntryUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpsertWithoutBlogEntriesInput = {
    update: XOR<TagUpdateWithoutBlogEntriesInput, TagUncheckedUpdateWithoutBlogEntriesInput>
    create: XOR<TagCreateWithoutBlogEntriesInput, TagUncheckedCreateWithoutBlogEntriesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBlogEntriesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBlogEntriesInput, TagUncheckedUpdateWithoutBlogEntriesInput>
  }

  export type TagUpdateWithoutBlogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutBlogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagCreateWithoutTagInput = {
    blogEntry: BlogEntryCreateNestedOneWithoutTagsInput
  }

  export type BlogEntryTagUncheckedCreateWithoutTagInput = {
    blogEntryId: string
  }

  export type BlogEntryTagCreateOrConnectWithoutTagInput = {
    where: BlogEntryTagWhereUniqueInput
    create: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput>
  }

  export type BlogEntryTagCreateManyTagInputEnvelope = {
    data: BlogEntryTagCreateManyTagInput | BlogEntryTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type BlogEntryTagUpsertWithWhereUniqueWithoutTagInput = {
    where: BlogEntryTagWhereUniqueInput
    update: XOR<BlogEntryTagUpdateWithoutTagInput, BlogEntryTagUncheckedUpdateWithoutTagInput>
    create: XOR<BlogEntryTagCreateWithoutTagInput, BlogEntryTagUncheckedCreateWithoutTagInput>
  }

  export type BlogEntryTagUpdateWithWhereUniqueWithoutTagInput = {
    where: BlogEntryTagWhereUniqueInput
    data: XOR<BlogEntryTagUpdateWithoutTagInput, BlogEntryTagUncheckedUpdateWithoutTagInput>
  }

  export type BlogEntryTagUpdateManyWithWhereWithoutTagInput = {
    where: BlogEntryTagScalarWhereInput
    data: XOR<BlogEntryTagUpdateManyMutationInput, BlogEntryTagUncheckedUpdateManyWithoutTagInput>
  }

  export type FollowsCreateManyFollowingInput = {
    followerId: string
    createdAt?: Date | string
  }

  export type FollowsCreateManyFollowerInput = {
    followingId: string
    createdAt?: Date | string
  }

  export type PainRecordCreateManyUserInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    bodyPartId: string
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bodyPartId: string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    postId: string
    parentId?: string | null
  }

  export type LikeCreateManyUserInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
  }

  export type BlogEntryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowsUpdateWithoutFollowingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowerInput = {
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerInput = {
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPart?: BodyPartUpdateOneRequiredWithoutPainRecordsNestedInput
  }

  export type PainRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type PainRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPart?: BodyPartUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogEntryTagUpdateManyWithoutBlogEntryNestedInput
  }

  export type BlogEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogEntryTagUncheckedUpdateManyWithoutBlogEntryNestedInput
  }

  export type BlogEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainRecordCreateManyBodyPartInput = {
    id?: string
    intensity: number
    notes?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type PostCreateManyBodyPartInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ConditionBodyPartCreateManyBodyPartInput = {
    conditionId: string
  }

  export type PainRecordUpdateWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPainRecordsNestedInput
  }

  export type PainRecordUncheckedUpdateWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PainRecordUncheckedUpdateManyWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutBodyPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionBodyPartUpdateWithoutBodyPartInput = {
    condition?: ConditionUpdateOneRequiredWithoutBodyPartsNestedInput
  }

  export type ConditionBodyPartUncheckedUpdateWithoutBodyPartInput = {
    conditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionBodyPartUncheckedUpdateManyWithoutBodyPartInput = {
    conditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionBodyPartCreateManyConditionInput = {
    bodyPartId: string
  }

  export type ConditionBodyPartUpdateWithoutConditionInput = {
    bodyPart?: BodyPartUpdateOneRequiredWithoutConditionsNestedInput
  }

  export type ConditionBodyPartUncheckedUpdateWithoutConditionInput = {
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionBodyPartUncheckedUpdateManyWithoutConditionInput = {
    bodyPartId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    parentId?: string | null
  }

  export type LikeCreateManyPostInput = {
    id?: string
    userId: string
    commentId?: string | null
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type LikeCreateManyCommentInput = {
    id?: string
    userId: string
    postId?: string | null
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    post?: PostUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogEntryTagCreateManyBlogEntryInput = {
    tagId: string
  }

  export type BlogEntryTagUpdateWithoutBlogEntryInput = {
    tag?: TagUpdateOneRequiredWithoutBlogEntriesNestedInput
  }

  export type BlogEntryTagUncheckedUpdateWithoutBlogEntryInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagUncheckedUpdateManyWithoutBlogEntryInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagCreateManyTagInput = {
    blogEntryId: string
  }

  export type BlogEntryTagUpdateWithoutTagInput = {
    blogEntry?: BlogEntryUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BlogEntryTagUncheckedUpdateWithoutTagInput = {
    blogEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogEntryTagUncheckedUpdateManyWithoutTagInput = {
    blogEntryId?: StringFieldUpdateOperationsInput | string
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