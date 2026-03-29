
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
 * Model course
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model grade
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grade = $Result.DefaultSelection<Prisma.$gradePayload>
/**
 * Model student
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model subject
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type subject = $Result.DefaultSelection<Prisma.$subjectPayload>
/**
 * Model subject_prerequisite
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type subject_prerequisite = $Result.DefaultSelection<Prisma.$subject_prerequisitePayload>
/**
 * Model subject_reservation
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type subject_reservation = $Result.DefaultSelection<Prisma.$subject_reservationPayload>
/**
 * Model user
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model general_subject
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type general_subject = $Result.DefaultSelection<Prisma.$general_subjectPayload>
/**
 * Model degree_level
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type degree_level = $Result.DefaultSelection<Prisma.$degree_levelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const status: {
  reserved: 'reserved',
  cancelled: 'cancelled'
};

export type status = (typeof status)[keyof typeof status]

}

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.gradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject_prerequisite`: Exposes CRUD operations for the **subject_prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subject_prerequisites
    * const subject_prerequisites = await prisma.subject_prerequisite.findMany()
    * ```
    */
  get subject_prerequisite(): Prisma.subject_prerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject_reservation`: Exposes CRUD operations for the **subject_reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subject_reservations
    * const subject_reservations = await prisma.subject_reservation.findMany()
    * ```
    */
  get subject_reservation(): Prisma.subject_reservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.general_subject`: Exposes CRUD operations for the **general_subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more General_subjects
    * const general_subjects = await prisma.general_subject.findMany()
    * ```
    */
  get general_subject(): Prisma.general_subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.degree_level`: Exposes CRUD operations for the **degree_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Degree_levels
    * const degree_levels = await prisma.degree_level.findMany()
    * ```
    */
  get degree_level(): Prisma.degree_levelDelegate<ExtArgs, ClientOptions>;
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
    course: 'course',
    grade: 'grade',
    student: 'student',
    subject: 'subject',
    subject_prerequisite: 'subject_prerequisite',
    subject_reservation: 'subject_reservation',
    user: 'user',
    general_subject: 'general_subject',
    degree_level: 'degree_level'
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
      modelProps: "course" | "grade" | "student" | "subject" | "subject_prerequisite" | "subject_reservation" | "user" | "general_subject" | "degree_level"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      grade: {
        payload: Prisma.$gradePayload<ExtArgs>
        fields: Prisma.gradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          findFirst: {
            args: Prisma.gradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          findMany: {
            args: Prisma.gradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          create: {
            args: Prisma.gradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          createMany: {
            args: Prisma.gradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          delete: {
            args: Prisma.gradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          update: {
            args: Prisma.gradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          deleteMany: {
            args: Prisma.gradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          upsert: {
            args: Prisma.gradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.gradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.gradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      subject: {
        payload: Prisma.$subjectPayload<ExtArgs>
        fields: Prisma.subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findFirst: {
            args: Prisma.subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findMany: {
            args: Prisma.subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          create: {
            args: Prisma.subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          createMany: {
            args: Prisma.subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          delete: {
            args: Prisma.subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          update: {
            args: Prisma.subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          deleteMany: {
            args: Prisma.subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          upsert: {
            args: Prisma.subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      subject_prerequisite: {
        payload: Prisma.$subject_prerequisitePayload<ExtArgs>
        fields: Prisma.subject_prerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subject_prerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subject_prerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          findFirst: {
            args: Prisma.subject_prerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subject_prerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          findMany: {
            args: Prisma.subject_prerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>[]
          }
          create: {
            args: Prisma.subject_prerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          createMany: {
            args: Prisma.subject_prerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subject_prerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>[]
          }
          delete: {
            args: Prisma.subject_prerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          update: {
            args: Prisma.subject_prerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          deleteMany: {
            args: Prisma.subject_prerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subject_prerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subject_prerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>[]
          }
          upsert: {
            args: Prisma.subject_prerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_prerequisitePayload>
          }
          aggregate: {
            args: Prisma.Subject_prerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject_prerequisite>
          }
          groupBy: {
            args: Prisma.subject_prerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Subject_prerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.subject_prerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<Subject_prerequisiteCountAggregateOutputType> | number
          }
        }
      }
      subject_reservation: {
        payload: Prisma.$subject_reservationPayload<ExtArgs>
        fields: Prisma.subject_reservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subject_reservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subject_reservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          findFirst: {
            args: Prisma.subject_reservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subject_reservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          findMany: {
            args: Prisma.subject_reservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>[]
          }
          create: {
            args: Prisma.subject_reservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          createMany: {
            args: Prisma.subject_reservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subject_reservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>[]
          }
          delete: {
            args: Prisma.subject_reservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          update: {
            args: Prisma.subject_reservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          deleteMany: {
            args: Prisma.subject_reservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subject_reservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subject_reservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>[]
          }
          upsert: {
            args: Prisma.subject_reservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subject_reservationPayload>
          }
          aggregate: {
            args: Prisma.Subject_reservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject_reservation>
          }
          groupBy: {
            args: Prisma.subject_reservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Subject_reservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.subject_reservationCountArgs<ExtArgs>
            result: $Utils.Optional<Subject_reservationCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      general_subject: {
        payload: Prisma.$general_subjectPayload<ExtArgs>
        fields: Prisma.general_subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.general_subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.general_subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          findFirst: {
            args: Prisma.general_subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.general_subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          findMany: {
            args: Prisma.general_subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>[]
          }
          create: {
            args: Prisma.general_subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          createMany: {
            args: Prisma.general_subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.general_subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>[]
          }
          delete: {
            args: Prisma.general_subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          update: {
            args: Prisma.general_subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          deleteMany: {
            args: Prisma.general_subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.general_subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.general_subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>[]
          }
          upsert: {
            args: Prisma.general_subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$general_subjectPayload>
          }
          aggregate: {
            args: Prisma.General_subjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneral_subject>
          }
          groupBy: {
            args: Prisma.general_subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<General_subjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.general_subjectCountArgs<ExtArgs>
            result: $Utils.Optional<General_subjectCountAggregateOutputType> | number
          }
        }
      }
      degree_level: {
        payload: Prisma.$degree_levelPayload<ExtArgs>
        fields: Prisma.degree_levelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.degree_levelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.degree_levelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          findFirst: {
            args: Prisma.degree_levelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.degree_levelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          findMany: {
            args: Prisma.degree_levelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>[]
          }
          create: {
            args: Prisma.degree_levelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          createMany: {
            args: Prisma.degree_levelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.degree_levelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>[]
          }
          delete: {
            args: Prisma.degree_levelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          update: {
            args: Prisma.degree_levelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          deleteMany: {
            args: Prisma.degree_levelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.degree_levelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.degree_levelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>[]
          }
          upsert: {
            args: Prisma.degree_levelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_levelPayload>
          }
          aggregate: {
            args: Prisma.Degree_levelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegree_level>
          }
          groupBy: {
            args: Prisma.degree_levelGroupByArgs<ExtArgs>
            result: $Utils.Optional<Degree_levelGroupByOutputType>[]
          }
          count: {
            args: Prisma.degree_levelCountArgs<ExtArgs>
            result: $Utils.Optional<Degree_levelCountAggregateOutputType> | number
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
    course?: courseOmit
    grade?: gradeOmit
    student?: studentOmit
    subject?: subjectOmit
    subject_prerequisite?: subject_prerequisiteOmit
    subject_reservation?: subject_reservationOmit
    user?: userOmit
    general_subject?: general_subjectOmit
    degree_level?: degree_levelOmit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    grade: number
    student: number
    subject: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | CourseCountOutputTypeCountGradeArgs
    student?: boolean | CourseCountOutputTypeCountStudentArgs
    subject?: boolean | CourseCountOutputTypeCountSubjectArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    grade: number
    subject_reservation: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | StudentCountOutputTypeCountGradeArgs
    subject_reservation?: boolean | StudentCountOutputTypeCountSubject_reservationArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubject_reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_reservationWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    grade: number
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject: number
    subject_prerequisite_subject_prerequisite_subject_idTosubject: number
    subject_reservation: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | SubjectCountOutputTypeCountGradeArgs
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | SubjectCountOutputTypeCountSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: boolean | SubjectCountOutputTypeCountSubject_prerequisite_subject_prerequisite_subject_idTosubjectArgs
    subject_reservation?: boolean | SubjectCountOutputTypeCountSubject_reservationArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_prerequisiteWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSubject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_prerequisiteWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSubject_reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_reservationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    grade: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | UserCountOutputTypeCountGradeArgs
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
  export type UserCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }


  /**
   * Count Type Degree_levelCountOutputType
   */

  export type Degree_levelCountOutputType = {
    course: number
  }

  export type Degree_levelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Degree_levelCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * Degree_levelCountOutputType without action
   */
  export type Degree_levelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree_levelCountOutputType
     */
    select?: Degree_levelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Degree_levelCountOutputType without action
   */
  export type Degree_levelCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    degree_level_id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: bigint | null
    degree_level_id: bigint | null
  }

  export type CourseMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    code: string | null
    name: string | null
    description: string | null
    degree_level_id: bigint | null
  }

  export type CourseMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    code: string | null
    name: string | null
    description: string | null
    degree_level_id: bigint | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    code: number
    name: number
    description: number
    degree_level_id: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    degree_level_id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    degree_level_id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    code?: true
    name?: true
    description?: true
    degree_level_id?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    code?: true
    name?: true
    description?: true
    degree_level_id?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    code?: true
    name?: true
    description?: true
    degree_level_id?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: bigint
    created_at: Date
    updated_at: Date | null
    code: string
    name: string
    description: string | null
    degree_level_id: bigint | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    degree_level_id?: boolean
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
    grade?: boolean | course$gradeArgs<ExtArgs>
    student?: boolean | course$studentArgs<ExtArgs>
    subject?: boolean | course$subjectArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    degree_level_id?: boolean
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    degree_level_id?: boolean
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    degree_level_id?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "code" | "name" | "description" | "degree_level_id", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
    grade?: boolean | course$gradeArgs<ExtArgs>
    student?: boolean | course$studentArgs<ExtArgs>
    subject?: boolean | course$subjectArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
  }
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degree_level?: boolean | course$degree_levelArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      degree_level: Prisma.$degree_levelPayload<ExtArgs> | null
      grade: Prisma.$gradePayload<ExtArgs>[]
      student: Prisma.$studentPayload<ExtArgs>[]
      subject: Prisma.$subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      updated_at: Date | null
      code: string
      name: string
      description: string | null
      degree_level_id: bigint | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    degree_level<T extends course$degree_levelArgs<ExtArgs> = {}>(args?: Subset<T, course$degree_levelArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    grade<T extends course$gradeArgs<ExtArgs> = {}>(args?: Subset<T, course$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends course$studentArgs<ExtArgs> = {}>(args?: Subset<T, course$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subject<T extends course$subjectArgs<ExtArgs> = {}>(args?: Subset<T, course$subjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'BigInt'>
    readonly created_at: FieldRef<"course", 'DateTime'>
    readonly updated_at: FieldRef<"course", 'DateTime'>
    readonly code: FieldRef<"course", 'String'>
    readonly name: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly degree_level_id: FieldRef<"course", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.degree_level
   */
  export type course$degree_levelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    where?: degree_levelWhereInput
  }

  /**
   * course.grade
   */
  export type course$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * course.student
   */
  export type course$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * course.subject
   */
  export type course$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    cursor?: subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    subject_id: number | null
    course_id: number | null
    prelim: Decimal | null
    midterm: Decimal | null
    final: Decimal | null
    final_grade: Decimal | null
    encoded_by_user_id: number | null
  }

  export type GradeSumAggregateOutputType = {
    id: bigint | null
    student_id: bigint | null
    subject_id: bigint | null
    course_id: bigint | null
    prelim: Decimal | null
    midterm: Decimal | null
    final: Decimal | null
    final_grade: Decimal | null
    encoded_by_user_id: bigint | null
  }

  export type GradeMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    student_id: bigint | null
    subject_id: bigint | null
    course_id: bigint | null
    prelim: Decimal | null
    midterm: Decimal | null
    final: Decimal | null
    final_grade: Decimal | null
    remark: string | null
    encoded_by_user_id: bigint | null
  }

  export type GradeMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    student_id: bigint | null
    subject_id: bigint | null
    course_id: bigint | null
    prelim: Decimal | null
    midterm: Decimal | null
    final: Decimal | null
    final_grade: Decimal | null
    remark: string | null
    encoded_by_user_id: bigint | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    student_id: number
    subject_id: number
    course_id: number
    prelim: number
    midterm: number
    final: number
    final_grade: number
    remark: number
    encoded_by_user_id: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
    course_id?: true
    prelim?: true
    midterm?: true
    final?: true
    final_grade?: true
    encoded_by_user_id?: true
  }

  export type GradeSumAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
    course_id?: true
    prelim?: true
    midterm?: true
    final?: true
    final_grade?: true
    encoded_by_user_id?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    student_id?: true
    subject_id?: true
    course_id?: true
    prelim?: true
    midterm?: true
    final?: true
    final_grade?: true
    remark?: true
    encoded_by_user_id?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    student_id?: true
    subject_id?: true
    course_id?: true
    prelim?: true
    midterm?: true
    final?: true
    final_grade?: true
    remark?: true
    encoded_by_user_id?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    student_id?: true
    subject_id?: true
    course_id?: true
    prelim?: true
    midterm?: true
    final?: true
    final_grade?: true
    remark?: true
    encoded_by_user_id?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grade to aggregate.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type gradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithAggregationInput | gradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: gradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: bigint
    created_at: Date
    updated_at: Date | null
    student_id: bigint | null
    subject_id: bigint | null
    course_id: bigint | null
    prelim: Decimal | null
    midterm: Decimal | null
    final: Decimal | null
    final_grade: Decimal | null
    remark: string | null
    encoded_by_user_id: bigint | null
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends gradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type gradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    student_id?: boolean
    subject_id?: boolean
    course_id?: boolean
    prelim?: boolean
    midterm?: boolean
    final?: boolean
    final_grade?: boolean
    remark?: boolean
    encoded_by_user_id?: boolean
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    student_id?: boolean
    subject_id?: boolean
    course_id?: boolean
    prelim?: boolean
    midterm?: boolean
    final?: boolean
    final_grade?: boolean
    remark?: boolean
    encoded_by_user_id?: boolean
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    student_id?: boolean
    subject_id?: boolean
    course_id?: boolean
    prelim?: boolean
    midterm?: boolean
    final?: boolean
    final_grade?: boolean
    remark?: boolean
    encoded_by_user_id?: boolean
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    student_id?: boolean
    subject_id?: boolean
    course_id?: boolean
    prelim?: boolean
    midterm?: boolean
    final?: boolean
    final_grade?: boolean
    remark?: boolean
    encoded_by_user_id?: boolean
  }

  export type gradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "student_id" | "subject_id" | "course_id" | "prelim" | "midterm" | "final" | "final_grade" | "remark" | "encoded_by_user_id", ExtArgs["result"]["grade"]>
  export type gradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }
  export type gradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }
  export type gradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | grade$courseArgs<ExtArgs>
    user?: boolean | grade$userArgs<ExtArgs>
    student?: boolean | grade$studentArgs<ExtArgs>
    subject?: boolean | grade$subjectArgs<ExtArgs>
  }

  export type $gradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grade"
    objects: {
      course: Prisma.$coursePayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs> | null
      subject: Prisma.$subjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      updated_at: Date | null
      student_id: bigint | null
      subject_id: bigint | null
      course_id: bigint | null
      prelim: Prisma.Decimal | null
      midterm: Prisma.Decimal | null
      final: Prisma.Decimal | null
      final_grade: Prisma.Decimal | null
      remark: string | null
      encoded_by_user_id: bigint | null
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type gradeGetPayload<S extends boolean | null | undefined | gradeDefaultArgs> = $Result.GetResult<Prisma.$gradePayload, S>

  type gradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface gradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grade'], meta: { name: 'grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {gradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gradeFindUniqueArgs>(args: SelectSubset<T, gradeFindUniqueArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gradeFindUniqueOrThrowArgs>(args: SelectSubset<T, gradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gradeFindFirstArgs>(args?: SelectSubset<T, gradeFindFirstArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gradeFindFirstOrThrowArgs>(args?: SelectSubset<T, gradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gradeFindManyArgs>(args?: SelectSubset<T, gradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grade.
     * @param {gradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends gradeCreateArgs>(args: SelectSubset<T, gradeCreateArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grades.
     * @param {gradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gradeCreateManyArgs>(args?: SelectSubset<T, gradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {gradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gradeCreateManyAndReturnArgs>(args?: SelectSubset<T, gradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grade.
     * @param {gradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends gradeDeleteArgs>(args: SelectSubset<T, gradeDeleteArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grade.
     * @param {gradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gradeUpdateArgs>(args: SelectSubset<T, gradeUpdateArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grades.
     * @param {gradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gradeDeleteManyArgs>(args?: SelectSubset<T, gradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gradeUpdateManyArgs>(args: SelectSubset<T, gradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades and returns the data updated in the database.
     * @param {gradeUpdateManyAndReturnArgs} args - Arguments to update many Grades.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.updateManyAndReturn({
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
    updateManyAndReturn<T extends gradeUpdateManyAndReturnArgs>(args: SelectSubset<T, gradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grade.
     * @param {gradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends gradeUpsertArgs>(args: SelectSubset<T, gradeUpsertArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends gradeCountArgs>(
      args?: Subset<T, gradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeGroupByArgs} args - Group by arguments.
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
      T extends gradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gradeGroupByArgs['orderBy'] }
        : { orderBy?: gradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grade model
   */
  readonly fields: gradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends grade$courseArgs<ExtArgs> = {}>(args?: Subset<T, grade$courseArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends grade$userArgs<ExtArgs> = {}>(args?: Subset<T, grade$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends grade$studentArgs<ExtArgs> = {}>(args?: Subset<T, grade$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subject<T extends grade$subjectArgs<ExtArgs> = {}>(args?: Subset<T, grade$subjectArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the grade model
   */
  interface gradeFieldRefs {
    readonly id: FieldRef<"grade", 'BigInt'>
    readonly created_at: FieldRef<"grade", 'DateTime'>
    readonly updated_at: FieldRef<"grade", 'DateTime'>
    readonly student_id: FieldRef<"grade", 'BigInt'>
    readonly subject_id: FieldRef<"grade", 'BigInt'>
    readonly course_id: FieldRef<"grade", 'BigInt'>
    readonly prelim: FieldRef<"grade", 'Decimal'>
    readonly midterm: FieldRef<"grade", 'Decimal'>
    readonly final: FieldRef<"grade", 'Decimal'>
    readonly final_grade: FieldRef<"grade", 'Decimal'>
    readonly remark: FieldRef<"grade", 'String'>
    readonly encoded_by_user_id: FieldRef<"grade", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * grade findUnique
   */
  export type gradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade findUniqueOrThrow
   */
  export type gradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade findFirst
   */
  export type gradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade findFirstOrThrow
   */
  export type gradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade findMany
   */
  export type gradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grades to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade create
   */
  export type gradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The data needed to create a grade.
     */
    data?: XOR<gradeCreateInput, gradeUncheckedCreateInput>
  }

  /**
   * grade createMany
   */
  export type gradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grades.
     */
    data: gradeCreateManyInput | gradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grade createManyAndReturn
   */
  export type gradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * The data used to create many grades.
     */
    data: gradeCreateManyInput | gradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grade update
   */
  export type gradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The data needed to update a grade.
     */
    data: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>
    /**
     * Choose, which grade to update.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade updateMany
   */
  export type gradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grades.
     */
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyInput>
    /**
     * Filter which grades to update
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to update.
     */
    limit?: number
  }

  /**
   * grade updateManyAndReturn
   */
  export type gradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * The data used to update grades.
     */
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyInput>
    /**
     * Filter which grades to update
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grade upsert
   */
  export type gradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The filter to search for the grade to update in case it exists.
     */
    where: gradeWhereUniqueInput
    /**
     * In case the grade found by the `where` argument doesn't exist, create a new grade with this data.
     */
    create: XOR<gradeCreateInput, gradeUncheckedCreateInput>
    /**
     * In case the grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>
  }

  /**
   * grade delete
   */
  export type gradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter which grade to delete.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade deleteMany
   */
  export type gradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grades to delete
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to delete.
     */
    limit?: number
  }

  /**
   * grade.course
   */
  export type grade$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
  }

  /**
   * grade.user
   */
  export type grade$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * grade.student
   */
  export type grade$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * grade.subject
   */
  export type grade$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    where?: subjectWhereInput
  }

  /**
   * grade without action
   */
  export type gradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
  }

  export type StudentMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    birth_date: Date | null
    course_id: bigint | null
    student_no: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    birth_date: Date | null
    course_id: bigint | null
    student_no: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    first_name: number
    last_name: number
    email: number
    birth_date: number
    course_id: number
    student_no: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    birth_date?: true
    course_id?: true
    student_no?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    birth_date?: true
    course_id?: true
    student_no?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    birth_date?: true
    course_id?: true
    student_no?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: bigint
    created_at: Date
    updated_at: Date | null
    first_name: string
    last_name: string
    email: string | null
    birth_date: Date
    course_id: bigint
    student_no: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    birth_date?: boolean
    course_id?: boolean
    student_no?: boolean
    grade?: boolean | student$gradeArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    subject_reservation?: boolean | student$subject_reservationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    birth_date?: boolean
    course_id?: boolean
    student_no?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    birth_date?: boolean
    course_id?: boolean
    student_no?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    birth_date?: boolean
    course_id?: boolean
    student_no?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "first_name" | "last_name" | "email" | "birth_date" | "course_id" | "student_no", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | student$gradeArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    subject_reservation?: boolean | student$subject_reservationArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      grade: Prisma.$gradePayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>
      subject_reservation: Prisma.$subject_reservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      updated_at: Date | null
      first_name: string
      last_name: string
      email: string | null
      birth_date: Date
      course_id: bigint
      student_no: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grade<T extends student$gradeArgs<ExtArgs> = {}>(args?: Subset<T, student$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject_reservation<T extends student$subject_reservationArgs<ExtArgs> = {}>(args?: Subset<T, student$subject_reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'BigInt'>
    readonly created_at: FieldRef<"student", 'DateTime'>
    readonly updated_at: FieldRef<"student", 'DateTime'>
    readonly first_name: FieldRef<"student", 'String'>
    readonly last_name: FieldRef<"student", 'String'>
    readonly email: FieldRef<"student", 'String'>
    readonly birth_date: FieldRef<"student", 'DateTime'>
    readonly course_id: FieldRef<"student", 'BigInt'>
    readonly student_no: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.grade
   */
  export type student$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * student.subject_reservation
   */
  export type student$subject_reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    where?: subject_reservationWhereInput
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    cursor?: subject_reservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_reservationScalarFieldEnum | Subject_reservationScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    units: number | null
    course_id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: bigint | null
    units: number | null
    course_id: bigint | null
  }

  export type SubjectMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    code: string | null
    title: string | null
    units: number | null
    updated_at: Date | null
    course_id: bigint | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    code: string | null
    title: string | null
    units: number | null
    updated_at: Date | null
    course_id: bigint | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    created_at: number
    code: number
    title: number
    units: number
    updated_at: number
    course_id: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    units?: true
    course_id?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    units?: true
    course_id?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    created_at?: true
    code?: true
    title?: true
    units?: true
    updated_at?: true
    course_id?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    created_at?: true
    code?: true
    title?: true
    units?: true
    updated_at?: true
    course_id?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    created_at?: true
    code?: true
    title?: true
    units?: true
    updated_at?: true
    course_id?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithAggregationInput | subjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: bigint
    created_at: Date
    code: string
    title: string
    units: number
    updated_at: Date | null
    course_id: bigint
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    code?: boolean
    title?: boolean
    units?: boolean
    updated_at?: boolean
    course_id?: boolean
    grade?: boolean | subject$gradeArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subject$subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs>
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: boolean | subject$subject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs>
    subject_reservation?: boolean | subject$subject_reservationArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    code?: boolean
    title?: boolean
    units?: boolean
    updated_at?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    code?: boolean
    title?: boolean
    units?: boolean
    updated_at?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectScalar = {
    id?: boolean
    created_at?: boolean
    code?: boolean
    title?: boolean
    units?: boolean
    updated_at?: boolean
    course_id?: boolean
  }

  export type subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "code" | "title" | "units" | "updated_at" | "course_id", ExtArgs["result"]["subject"]>
  export type subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | subject$gradeArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subject$subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs>
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: boolean | subject$subject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs>
    subject_reservation?: boolean | subject$subject_reservationArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type subjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject"
    objects: {
      grade: Prisma.$gradePayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>
      subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject: Prisma.$subject_prerequisitePayload<ExtArgs>[]
      subject_prerequisite_subject_prerequisite_subject_idTosubject: Prisma.$subject_prerequisitePayload<ExtArgs>[]
      subject_reservation: Prisma.$subject_reservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      code: string
      title: string
      units: number
      updated_at: Date | null
      course_id: bigint
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = $Result.GetResult<Prisma.$subjectPayload, S>

  type subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject'], meta: { name: 'subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectFindUniqueArgs>(args: SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectFindFirstArgs>(args?: SelectSubset<T, subjectFindFirstArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectFindManyArgs>(args?: SelectSubset<T, subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends subjectCreateArgs>(args: SelectSubset<T, subjectCreateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectCreateManyArgs>(args?: SelectSubset<T, subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends subjectDeleteArgs>(args: SelectSubset<T, subjectDeleteArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectUpdateArgs>(args: SelectSubset<T, subjectUpdateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectDeleteManyArgs>(args?: SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectUpdateManyArgs>(args: SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {subjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends subjectUpsertArgs>(args: SelectSubset<T, subjectUpsertArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectCountArgs>(
      args?: Subset<T, subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
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
      T extends subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectGroupByArgs['orderBy'] }
        : { orderBy?: subjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject model
   */
  readonly fields: subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grade<T extends subject$gradeArgs<ExtArgs> = {}>(args?: Subset<T, subject$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject<T extends subject$subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs> = {}>(args?: Subset<T, subject$subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subject_prerequisite_subject_prerequisite_subject_idTosubject<T extends subject$subject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs> = {}>(args?: Subset<T, subject$subject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subject_reservation<T extends subject$subject_reservationArgs<ExtArgs> = {}>(args?: Subset<T, subject$subject_reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the subject model
   */
  interface subjectFieldRefs {
    readonly id: FieldRef<"subject", 'BigInt'>
    readonly created_at: FieldRef<"subject", 'DateTime'>
    readonly code: FieldRef<"subject", 'String'>
    readonly title: FieldRef<"subject", 'String'>
    readonly units: FieldRef<"subject", 'Int'>
    readonly updated_at: FieldRef<"subject", 'DateTime'>
    readonly course_id: FieldRef<"subject", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * subject findUnique
   */
  export type subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findUniqueOrThrow
   */
  export type subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findFirst
   */
  export type subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findFirstOrThrow
   */
  export type subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findMany
   */
  export type subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject create
   */
  export type subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a subject.
     */
    data: XOR<subjectCreateInput, subjectUncheckedCreateInput>
  }

  /**
   * subject createMany
   */
  export type subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject createManyAndReturn
   */
  export type subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject update
   */
  export type subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a subject.
     */
    data: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
    /**
     * Choose, which subject to update.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject updateMany
   */
  export type subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subject updateManyAndReturn
   */
  export type subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject upsert
   */
  export type subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: subjectWhereUniqueInput
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: XOR<subjectCreateInput, subjectUncheckedCreateInput>
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
  }

  /**
   * subject delete
   */
  export type subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter which subject to delete.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject deleteMany
   */
  export type subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subject.grade
   */
  export type subject$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * subject.subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject
   */
  export type subject$subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    where?: subject_prerequisiteWhereInput
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    cursor?: subject_prerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_prerequisiteScalarFieldEnum | Subject_prerequisiteScalarFieldEnum[]
  }

  /**
   * subject.subject_prerequisite_subject_prerequisite_subject_idTosubject
   */
  export type subject$subject_prerequisite_subject_prerequisite_subject_idTosubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    where?: subject_prerequisiteWhereInput
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    cursor?: subject_prerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_prerequisiteScalarFieldEnum | Subject_prerequisiteScalarFieldEnum[]
  }

  /**
   * subject.subject_reservation
   */
  export type subject$subject_reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    where?: subject_reservationWhereInput
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    cursor?: subject_reservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Subject_reservationScalarFieldEnum | Subject_reservationScalarFieldEnum[]
  }

  /**
   * subject without action
   */
  export type subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
  }


  /**
   * Model subject_prerequisite
   */

  export type AggregateSubject_prerequisite = {
    _count: Subject_prerequisiteCountAggregateOutputType | null
    _avg: Subject_prerequisiteAvgAggregateOutputType | null
    _sum: Subject_prerequisiteSumAggregateOutputType | null
    _min: Subject_prerequisiteMinAggregateOutputType | null
    _max: Subject_prerequisiteMaxAggregateOutputType | null
  }

  export type Subject_prerequisiteAvgAggregateOutputType = {
    id: number | null
    subject_id: number | null
    prerequisites_subject_id: number | null
  }

  export type Subject_prerequisiteSumAggregateOutputType = {
    id: bigint | null
    subject_id: bigint | null
    prerequisites_subject_id: bigint | null
  }

  export type Subject_prerequisiteMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    subject_id: bigint | null
    prerequisites_subject_id: bigint | null
  }

  export type Subject_prerequisiteMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    subject_id: bigint | null
    prerequisites_subject_id: bigint | null
  }

  export type Subject_prerequisiteCountAggregateOutputType = {
    id: number
    created_at: number
    subject_id: number
    prerequisites_subject_id: number
    _all: number
  }


  export type Subject_prerequisiteAvgAggregateInputType = {
    id?: true
    subject_id?: true
    prerequisites_subject_id?: true
  }

  export type Subject_prerequisiteSumAggregateInputType = {
    id?: true
    subject_id?: true
    prerequisites_subject_id?: true
  }

  export type Subject_prerequisiteMinAggregateInputType = {
    id?: true
    created_at?: true
    subject_id?: true
    prerequisites_subject_id?: true
  }

  export type Subject_prerequisiteMaxAggregateInputType = {
    id?: true
    created_at?: true
    subject_id?: true
    prerequisites_subject_id?: true
  }

  export type Subject_prerequisiteCountAggregateInputType = {
    id?: true
    created_at?: true
    subject_id?: true
    prerequisites_subject_id?: true
    _all?: true
  }

  export type Subject_prerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_prerequisite to aggregate.
     */
    where?: subject_prerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_prerequisites to fetch.
     */
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subject_prerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subject_prerequisites
    **/
    _count?: true | Subject_prerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subject_prerequisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subject_prerequisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subject_prerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subject_prerequisiteMaxAggregateInputType
  }

  export type GetSubject_prerequisiteAggregateType<T extends Subject_prerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject_prerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject_prerequisite[P]>
      : GetScalarType<T[P], AggregateSubject_prerequisite[P]>
  }




  export type subject_prerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_prerequisiteWhereInput
    orderBy?: subject_prerequisiteOrderByWithAggregationInput | subject_prerequisiteOrderByWithAggregationInput[]
    by: Subject_prerequisiteScalarFieldEnum[] | Subject_prerequisiteScalarFieldEnum
    having?: subject_prerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subject_prerequisiteCountAggregateInputType | true
    _avg?: Subject_prerequisiteAvgAggregateInputType
    _sum?: Subject_prerequisiteSumAggregateInputType
    _min?: Subject_prerequisiteMinAggregateInputType
    _max?: Subject_prerequisiteMaxAggregateInputType
  }

  export type Subject_prerequisiteGroupByOutputType = {
    id: bigint
    created_at: Date
    subject_id: bigint
    prerequisites_subject_id: bigint
    _count: Subject_prerequisiteCountAggregateOutputType | null
    _avg: Subject_prerequisiteAvgAggregateOutputType | null
    _sum: Subject_prerequisiteSumAggregateOutputType | null
    _min: Subject_prerequisiteMinAggregateOutputType | null
    _max: Subject_prerequisiteMaxAggregateOutputType | null
  }

  type GetSubject_prerequisiteGroupByPayload<T extends subject_prerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subject_prerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subject_prerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subject_prerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], Subject_prerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type subject_prerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    subject_id?: boolean
    prerequisites_subject_id?: boolean
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_prerequisite"]>

  export type subject_prerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    subject_id?: boolean
    prerequisites_subject_id?: boolean
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_prerequisite"]>

  export type subject_prerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    subject_id?: boolean
    prerequisites_subject_id?: boolean
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_prerequisite"]>

  export type subject_prerequisiteSelectScalar = {
    id?: boolean
    created_at?: boolean
    subject_id?: boolean
    prerequisites_subject_id?: boolean
  }

  export type subject_prerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "subject_id" | "prerequisites_subject_id", ExtArgs["result"]["subject_prerequisite"]>
  export type subject_prerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }
  export type subject_prerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }
  export type subject_prerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
    subject_subject_prerequisite_subject_idTosubject?: boolean | subjectDefaultArgs<ExtArgs>
  }

  export type $subject_prerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject_prerequisite"
    objects: {
      subject_subject_prerequisite_prerequisites_subject_idTosubject: Prisma.$subjectPayload<ExtArgs>
      subject_subject_prerequisite_subject_idTosubject: Prisma.$subjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      subject_id: bigint
      prerequisites_subject_id: bigint
    }, ExtArgs["result"]["subject_prerequisite"]>
    composites: {}
  }

  type subject_prerequisiteGetPayload<S extends boolean | null | undefined | subject_prerequisiteDefaultArgs> = $Result.GetResult<Prisma.$subject_prerequisitePayload, S>

  type subject_prerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subject_prerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Subject_prerequisiteCountAggregateInputType | true
    }

  export interface subject_prerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject_prerequisite'], meta: { name: 'subject_prerequisite' } }
    /**
     * Find zero or one Subject_prerequisite that matches the filter.
     * @param {subject_prerequisiteFindUniqueArgs} args - Arguments to find a Subject_prerequisite
     * @example
     * // Get one Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subject_prerequisiteFindUniqueArgs>(args: SelectSubset<T, subject_prerequisiteFindUniqueArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject_prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subject_prerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Subject_prerequisite
     * @example
     * // Get one Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subject_prerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, subject_prerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteFindFirstArgs} args - Arguments to find a Subject_prerequisite
     * @example
     * // Get one Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subject_prerequisiteFindFirstArgs>(args?: SelectSubset<T, subject_prerequisiteFindFirstArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteFindFirstOrThrowArgs} args - Arguments to find a Subject_prerequisite
     * @example
     * // Get one Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subject_prerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, subject_prerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subject_prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subject_prerequisites
     * const subject_prerequisites = await prisma.subject_prerequisite.findMany()
     * 
     * // Get first 10 Subject_prerequisites
     * const subject_prerequisites = await prisma.subject_prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subject_prerequisiteWithIdOnly = await prisma.subject_prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subject_prerequisiteFindManyArgs>(args?: SelectSubset<T, subject_prerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject_prerequisite.
     * @param {subject_prerequisiteCreateArgs} args - Arguments to create a Subject_prerequisite.
     * @example
     * // Create one Subject_prerequisite
     * const Subject_prerequisite = await prisma.subject_prerequisite.create({
     *   data: {
     *     // ... data to create a Subject_prerequisite
     *   }
     * })
     * 
     */
    create<T extends subject_prerequisiteCreateArgs>(args: SelectSubset<T, subject_prerequisiteCreateArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subject_prerequisites.
     * @param {subject_prerequisiteCreateManyArgs} args - Arguments to create many Subject_prerequisites.
     * @example
     * // Create many Subject_prerequisites
     * const subject_prerequisite = await prisma.subject_prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subject_prerequisiteCreateManyArgs>(args?: SelectSubset<T, subject_prerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subject_prerequisites and returns the data saved in the database.
     * @param {subject_prerequisiteCreateManyAndReturnArgs} args - Arguments to create many Subject_prerequisites.
     * @example
     * // Create many Subject_prerequisites
     * const subject_prerequisite = await prisma.subject_prerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subject_prerequisites and only return the `id`
     * const subject_prerequisiteWithIdOnly = await prisma.subject_prerequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subject_prerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, subject_prerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject_prerequisite.
     * @param {subject_prerequisiteDeleteArgs} args - Arguments to delete one Subject_prerequisite.
     * @example
     * // Delete one Subject_prerequisite
     * const Subject_prerequisite = await prisma.subject_prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Subject_prerequisite
     *   }
     * })
     * 
     */
    delete<T extends subject_prerequisiteDeleteArgs>(args: SelectSubset<T, subject_prerequisiteDeleteArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject_prerequisite.
     * @param {subject_prerequisiteUpdateArgs} args - Arguments to update one Subject_prerequisite.
     * @example
     * // Update one Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subject_prerequisiteUpdateArgs>(args: SelectSubset<T, subject_prerequisiteUpdateArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subject_prerequisites.
     * @param {subject_prerequisiteDeleteManyArgs} args - Arguments to filter Subject_prerequisites to delete.
     * @example
     * // Delete a few Subject_prerequisites
     * const { count } = await prisma.subject_prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subject_prerequisiteDeleteManyArgs>(args?: SelectSubset<T, subject_prerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subject_prerequisites
     * const subject_prerequisite = await prisma.subject_prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subject_prerequisiteUpdateManyArgs>(args: SelectSubset<T, subject_prerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_prerequisites and returns the data updated in the database.
     * @param {subject_prerequisiteUpdateManyAndReturnArgs} args - Arguments to update many Subject_prerequisites.
     * @example
     * // Update many Subject_prerequisites
     * const subject_prerequisite = await prisma.subject_prerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subject_prerequisites and only return the `id`
     * const subject_prerequisiteWithIdOnly = await prisma.subject_prerequisite.updateManyAndReturn({
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
    updateManyAndReturn<T extends subject_prerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, subject_prerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject_prerequisite.
     * @param {subject_prerequisiteUpsertArgs} args - Arguments to update or create a Subject_prerequisite.
     * @example
     * // Update or create a Subject_prerequisite
     * const subject_prerequisite = await prisma.subject_prerequisite.upsert({
     *   create: {
     *     // ... data to create a Subject_prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject_prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends subject_prerequisiteUpsertArgs>(args: SelectSubset<T, subject_prerequisiteUpsertArgs<ExtArgs>>): Prisma__subject_prerequisiteClient<$Result.GetResult<Prisma.$subject_prerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subject_prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteCountArgs} args - Arguments to filter Subject_prerequisites to count.
     * @example
     * // Count the number of Subject_prerequisites
     * const count = await prisma.subject_prerequisite.count({
     *   where: {
     *     // ... the filter for the Subject_prerequisites we want to count
     *   }
     * })
    **/
    count<T extends subject_prerequisiteCountArgs>(
      args?: Subset<T, subject_prerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subject_prerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject_prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subject_prerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Subject_prerequisiteAggregateArgs>(args: Subset<T, Subject_prerequisiteAggregateArgs>): Prisma.PrismaPromise<GetSubject_prerequisiteAggregateType<T>>

    /**
     * Group by Subject_prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_prerequisiteGroupByArgs} args - Group by arguments.
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
      T extends subject_prerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subject_prerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: subject_prerequisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subject_prerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubject_prerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject_prerequisite model
   */
  readonly fields: subject_prerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject_prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subject_prerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject_subject_prerequisite_prerequisites_subject_idTosubject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject_subject_prerequisite_subject_idTosubject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subject_prerequisite model
   */
  interface subject_prerequisiteFieldRefs {
    readonly id: FieldRef<"subject_prerequisite", 'BigInt'>
    readonly created_at: FieldRef<"subject_prerequisite", 'DateTime'>
    readonly subject_id: FieldRef<"subject_prerequisite", 'BigInt'>
    readonly prerequisites_subject_id: FieldRef<"subject_prerequisite", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * subject_prerequisite findUnique
   */
  export type subject_prerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which subject_prerequisite to fetch.
     */
    where: subject_prerequisiteWhereUniqueInput
  }

  /**
   * subject_prerequisite findUniqueOrThrow
   */
  export type subject_prerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which subject_prerequisite to fetch.
     */
    where: subject_prerequisiteWhereUniqueInput
  }

  /**
   * subject_prerequisite findFirst
   */
  export type subject_prerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which subject_prerequisite to fetch.
     */
    where?: subject_prerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_prerequisites to fetch.
     */
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_prerequisites.
     */
    cursor?: subject_prerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_prerequisites.
     */
    distinct?: Subject_prerequisiteScalarFieldEnum | Subject_prerequisiteScalarFieldEnum[]
  }

  /**
   * subject_prerequisite findFirstOrThrow
   */
  export type subject_prerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which subject_prerequisite to fetch.
     */
    where?: subject_prerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_prerequisites to fetch.
     */
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_prerequisites.
     */
    cursor?: subject_prerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_prerequisites.
     */
    distinct?: Subject_prerequisiteScalarFieldEnum | Subject_prerequisiteScalarFieldEnum[]
  }

  /**
   * subject_prerequisite findMany
   */
  export type subject_prerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which subject_prerequisites to fetch.
     */
    where?: subject_prerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_prerequisites to fetch.
     */
    orderBy?: subject_prerequisiteOrderByWithRelationInput | subject_prerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subject_prerequisites.
     */
    cursor?: subject_prerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_prerequisites.
     */
    distinct?: Subject_prerequisiteScalarFieldEnum | Subject_prerequisiteScalarFieldEnum[]
  }

  /**
   * subject_prerequisite create
   */
  export type subject_prerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a subject_prerequisite.
     */
    data: XOR<subject_prerequisiteCreateInput, subject_prerequisiteUncheckedCreateInput>
  }

  /**
   * subject_prerequisite createMany
   */
  export type subject_prerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subject_prerequisites.
     */
    data: subject_prerequisiteCreateManyInput | subject_prerequisiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject_prerequisite createManyAndReturn
   */
  export type subject_prerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many subject_prerequisites.
     */
    data: subject_prerequisiteCreateManyInput | subject_prerequisiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_prerequisite update
   */
  export type subject_prerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a subject_prerequisite.
     */
    data: XOR<subject_prerequisiteUpdateInput, subject_prerequisiteUncheckedUpdateInput>
    /**
     * Choose, which subject_prerequisite to update.
     */
    where: subject_prerequisiteWhereUniqueInput
  }

  /**
   * subject_prerequisite updateMany
   */
  export type subject_prerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subject_prerequisites.
     */
    data: XOR<subject_prerequisiteUpdateManyMutationInput, subject_prerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which subject_prerequisites to update
     */
    where?: subject_prerequisiteWhereInput
    /**
     * Limit how many subject_prerequisites to update.
     */
    limit?: number
  }

  /**
   * subject_prerequisite updateManyAndReturn
   */
  export type subject_prerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update subject_prerequisites.
     */
    data: XOR<subject_prerequisiteUpdateManyMutationInput, subject_prerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which subject_prerequisites to update
     */
    where?: subject_prerequisiteWhereInput
    /**
     * Limit how many subject_prerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_prerequisite upsert
   */
  export type subject_prerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the subject_prerequisite to update in case it exists.
     */
    where: subject_prerequisiteWhereUniqueInput
    /**
     * In case the subject_prerequisite found by the `where` argument doesn't exist, create a new subject_prerequisite with this data.
     */
    create: XOR<subject_prerequisiteCreateInput, subject_prerequisiteUncheckedCreateInput>
    /**
     * In case the subject_prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subject_prerequisiteUpdateInput, subject_prerequisiteUncheckedUpdateInput>
  }

  /**
   * subject_prerequisite delete
   */
  export type subject_prerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
    /**
     * Filter which subject_prerequisite to delete.
     */
    where: subject_prerequisiteWhereUniqueInput
  }

  /**
   * subject_prerequisite deleteMany
   */
  export type subject_prerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_prerequisites to delete
     */
    where?: subject_prerequisiteWhereInput
    /**
     * Limit how many subject_prerequisites to delete.
     */
    limit?: number
  }

  /**
   * subject_prerequisite without action
   */
  export type subject_prerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_prerequisite
     */
    select?: subject_prerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_prerequisite
     */
    omit?: subject_prerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_prerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model subject_reservation
   */

  export type AggregateSubject_reservation = {
    _count: Subject_reservationCountAggregateOutputType | null
    _avg: Subject_reservationAvgAggregateOutputType | null
    _sum: Subject_reservationSumAggregateOutputType | null
    _min: Subject_reservationMinAggregateOutputType | null
    _max: Subject_reservationMaxAggregateOutputType | null
  }

  export type Subject_reservationAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    subject_id: number | null
  }

  export type Subject_reservationSumAggregateOutputType = {
    id: bigint | null
    student_id: bigint | null
    subject_id: bigint | null
  }

  export type Subject_reservationMinAggregateOutputType = {
    id: bigint | null
    student_id: bigint | null
    subject_id: bigint | null
    reserved_at: Date | null
    status: $Enums.status | null
  }

  export type Subject_reservationMaxAggregateOutputType = {
    id: bigint | null
    student_id: bigint | null
    subject_id: bigint | null
    reserved_at: Date | null
    status: $Enums.status | null
  }

  export type Subject_reservationCountAggregateOutputType = {
    id: number
    student_id: number
    subject_id: number
    reserved_at: number
    status: number
    _all: number
  }


  export type Subject_reservationAvgAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
  }

  export type Subject_reservationSumAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
  }

  export type Subject_reservationMinAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
    reserved_at?: true
    status?: true
  }

  export type Subject_reservationMaxAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
    reserved_at?: true
    status?: true
  }

  export type Subject_reservationCountAggregateInputType = {
    id?: true
    student_id?: true
    subject_id?: true
    reserved_at?: true
    status?: true
    _all?: true
  }

  export type Subject_reservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_reservation to aggregate.
     */
    where?: subject_reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_reservations to fetch.
     */
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subject_reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subject_reservations
    **/
    _count?: true | Subject_reservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subject_reservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subject_reservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subject_reservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subject_reservationMaxAggregateInputType
  }

  export type GetSubject_reservationAggregateType<T extends Subject_reservationAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject_reservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject_reservation[P]>
      : GetScalarType<T[P], AggregateSubject_reservation[P]>
  }




  export type subject_reservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subject_reservationWhereInput
    orderBy?: subject_reservationOrderByWithAggregationInput | subject_reservationOrderByWithAggregationInput[]
    by: Subject_reservationScalarFieldEnum[] | Subject_reservationScalarFieldEnum
    having?: subject_reservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subject_reservationCountAggregateInputType | true
    _avg?: Subject_reservationAvgAggregateInputType
    _sum?: Subject_reservationSumAggregateInputType
    _min?: Subject_reservationMinAggregateInputType
    _max?: Subject_reservationMaxAggregateInputType
  }

  export type Subject_reservationGroupByOutputType = {
    id: bigint
    student_id: bigint
    subject_id: bigint
    reserved_at: Date | null
    status: $Enums.status
    _count: Subject_reservationCountAggregateOutputType | null
    _avg: Subject_reservationAvgAggregateOutputType | null
    _sum: Subject_reservationSumAggregateOutputType | null
    _min: Subject_reservationMinAggregateOutputType | null
    _max: Subject_reservationMaxAggregateOutputType | null
  }

  type GetSubject_reservationGroupByPayload<T extends subject_reservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subject_reservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subject_reservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subject_reservationGroupByOutputType[P]>
            : GetScalarType<T[P], Subject_reservationGroupByOutputType[P]>
        }
      >
    >


  export type subject_reservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    subject_id?: boolean
    reserved_at?: boolean
    status?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_reservation"]>

  export type subject_reservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    subject_id?: boolean
    reserved_at?: boolean
    status?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_reservation"]>

  export type subject_reservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    subject_id?: boolean
    reserved_at?: boolean
    status?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject_reservation"]>

  export type subject_reservationSelectScalar = {
    id?: boolean
    student_id?: boolean
    subject_id?: boolean
    reserved_at?: boolean
    status?: boolean
  }

  export type subject_reservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "subject_id" | "reserved_at" | "status", ExtArgs["result"]["subject_reservation"]>
  export type subject_reservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }
  export type subject_reservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }
  export type subject_reservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }

  export type $subject_reservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject_reservation"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      subject: Prisma.$subjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      student_id: bigint
      subject_id: bigint
      reserved_at: Date | null
      status: $Enums.status
    }, ExtArgs["result"]["subject_reservation"]>
    composites: {}
  }

  type subject_reservationGetPayload<S extends boolean | null | undefined | subject_reservationDefaultArgs> = $Result.GetResult<Prisma.$subject_reservationPayload, S>

  type subject_reservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subject_reservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Subject_reservationCountAggregateInputType | true
    }

  export interface subject_reservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject_reservation'], meta: { name: 'subject_reservation' } }
    /**
     * Find zero or one Subject_reservation that matches the filter.
     * @param {subject_reservationFindUniqueArgs} args - Arguments to find a Subject_reservation
     * @example
     * // Get one Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subject_reservationFindUniqueArgs>(args: SelectSubset<T, subject_reservationFindUniqueArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject_reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subject_reservationFindUniqueOrThrowArgs} args - Arguments to find a Subject_reservation
     * @example
     * // Get one Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subject_reservationFindUniqueOrThrowArgs>(args: SelectSubset<T, subject_reservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationFindFirstArgs} args - Arguments to find a Subject_reservation
     * @example
     * // Get one Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subject_reservationFindFirstArgs>(args?: SelectSubset<T, subject_reservationFindFirstArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject_reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationFindFirstOrThrowArgs} args - Arguments to find a Subject_reservation
     * @example
     * // Get one Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subject_reservationFindFirstOrThrowArgs>(args?: SelectSubset<T, subject_reservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subject_reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subject_reservations
     * const subject_reservations = await prisma.subject_reservation.findMany()
     * 
     * // Get first 10 Subject_reservations
     * const subject_reservations = await prisma.subject_reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subject_reservationWithIdOnly = await prisma.subject_reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subject_reservationFindManyArgs>(args?: SelectSubset<T, subject_reservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject_reservation.
     * @param {subject_reservationCreateArgs} args - Arguments to create a Subject_reservation.
     * @example
     * // Create one Subject_reservation
     * const Subject_reservation = await prisma.subject_reservation.create({
     *   data: {
     *     // ... data to create a Subject_reservation
     *   }
     * })
     * 
     */
    create<T extends subject_reservationCreateArgs>(args: SelectSubset<T, subject_reservationCreateArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subject_reservations.
     * @param {subject_reservationCreateManyArgs} args - Arguments to create many Subject_reservations.
     * @example
     * // Create many Subject_reservations
     * const subject_reservation = await prisma.subject_reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subject_reservationCreateManyArgs>(args?: SelectSubset<T, subject_reservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subject_reservations and returns the data saved in the database.
     * @param {subject_reservationCreateManyAndReturnArgs} args - Arguments to create many Subject_reservations.
     * @example
     * // Create many Subject_reservations
     * const subject_reservation = await prisma.subject_reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subject_reservations and only return the `id`
     * const subject_reservationWithIdOnly = await prisma.subject_reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subject_reservationCreateManyAndReturnArgs>(args?: SelectSubset<T, subject_reservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject_reservation.
     * @param {subject_reservationDeleteArgs} args - Arguments to delete one Subject_reservation.
     * @example
     * // Delete one Subject_reservation
     * const Subject_reservation = await prisma.subject_reservation.delete({
     *   where: {
     *     // ... filter to delete one Subject_reservation
     *   }
     * })
     * 
     */
    delete<T extends subject_reservationDeleteArgs>(args: SelectSubset<T, subject_reservationDeleteArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject_reservation.
     * @param {subject_reservationUpdateArgs} args - Arguments to update one Subject_reservation.
     * @example
     * // Update one Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subject_reservationUpdateArgs>(args: SelectSubset<T, subject_reservationUpdateArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subject_reservations.
     * @param {subject_reservationDeleteManyArgs} args - Arguments to filter Subject_reservations to delete.
     * @example
     * // Delete a few Subject_reservations
     * const { count } = await prisma.subject_reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subject_reservationDeleteManyArgs>(args?: SelectSubset<T, subject_reservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subject_reservations
     * const subject_reservation = await prisma.subject_reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subject_reservationUpdateManyArgs>(args: SelectSubset<T, subject_reservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subject_reservations and returns the data updated in the database.
     * @param {subject_reservationUpdateManyAndReturnArgs} args - Arguments to update many Subject_reservations.
     * @example
     * // Update many Subject_reservations
     * const subject_reservation = await prisma.subject_reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subject_reservations and only return the `id`
     * const subject_reservationWithIdOnly = await prisma.subject_reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends subject_reservationUpdateManyAndReturnArgs>(args: SelectSubset<T, subject_reservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject_reservation.
     * @param {subject_reservationUpsertArgs} args - Arguments to update or create a Subject_reservation.
     * @example
     * // Update or create a Subject_reservation
     * const subject_reservation = await prisma.subject_reservation.upsert({
     *   create: {
     *     // ... data to create a Subject_reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject_reservation we want to update
     *   }
     * })
     */
    upsert<T extends subject_reservationUpsertArgs>(args: SelectSubset<T, subject_reservationUpsertArgs<ExtArgs>>): Prisma__subject_reservationClient<$Result.GetResult<Prisma.$subject_reservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subject_reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationCountArgs} args - Arguments to filter Subject_reservations to count.
     * @example
     * // Count the number of Subject_reservations
     * const count = await prisma.subject_reservation.count({
     *   where: {
     *     // ... the filter for the Subject_reservations we want to count
     *   }
     * })
    **/
    count<T extends subject_reservationCountArgs>(
      args?: Subset<T, subject_reservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subject_reservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject_reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subject_reservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Subject_reservationAggregateArgs>(args: Subset<T, Subject_reservationAggregateArgs>): Prisma.PrismaPromise<GetSubject_reservationAggregateType<T>>

    /**
     * Group by Subject_reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subject_reservationGroupByArgs} args - Group by arguments.
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
      T extends subject_reservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subject_reservationGroupByArgs['orderBy'] }
        : { orderBy?: subject_reservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subject_reservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubject_reservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject_reservation model
   */
  readonly fields: subject_reservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject_reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subject_reservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subject_reservation model
   */
  interface subject_reservationFieldRefs {
    readonly id: FieldRef<"subject_reservation", 'BigInt'>
    readonly student_id: FieldRef<"subject_reservation", 'BigInt'>
    readonly subject_id: FieldRef<"subject_reservation", 'BigInt'>
    readonly reserved_at: FieldRef<"subject_reservation", 'DateTime'>
    readonly status: FieldRef<"subject_reservation", 'status'>
  }
    

  // Custom InputTypes
  /**
   * subject_reservation findUnique
   */
  export type subject_reservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter, which subject_reservation to fetch.
     */
    where: subject_reservationWhereUniqueInput
  }

  /**
   * subject_reservation findUniqueOrThrow
   */
  export type subject_reservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter, which subject_reservation to fetch.
     */
    where: subject_reservationWhereUniqueInput
  }

  /**
   * subject_reservation findFirst
   */
  export type subject_reservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter, which subject_reservation to fetch.
     */
    where?: subject_reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_reservations to fetch.
     */
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_reservations.
     */
    cursor?: subject_reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_reservations.
     */
    distinct?: Subject_reservationScalarFieldEnum | Subject_reservationScalarFieldEnum[]
  }

  /**
   * subject_reservation findFirstOrThrow
   */
  export type subject_reservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter, which subject_reservation to fetch.
     */
    where?: subject_reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_reservations to fetch.
     */
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subject_reservations.
     */
    cursor?: subject_reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_reservations.
     */
    distinct?: Subject_reservationScalarFieldEnum | Subject_reservationScalarFieldEnum[]
  }

  /**
   * subject_reservation findMany
   */
  export type subject_reservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter, which subject_reservations to fetch.
     */
    where?: subject_reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subject_reservations to fetch.
     */
    orderBy?: subject_reservationOrderByWithRelationInput | subject_reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subject_reservations.
     */
    cursor?: subject_reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subject_reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subject_reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subject_reservations.
     */
    distinct?: Subject_reservationScalarFieldEnum | Subject_reservationScalarFieldEnum[]
  }

  /**
   * subject_reservation create
   */
  export type subject_reservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * The data needed to create a subject_reservation.
     */
    data: XOR<subject_reservationCreateInput, subject_reservationUncheckedCreateInput>
  }

  /**
   * subject_reservation createMany
   */
  export type subject_reservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subject_reservations.
     */
    data: subject_reservationCreateManyInput | subject_reservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject_reservation createManyAndReturn
   */
  export type subject_reservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * The data used to create many subject_reservations.
     */
    data: subject_reservationCreateManyInput | subject_reservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_reservation update
   */
  export type subject_reservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * The data needed to update a subject_reservation.
     */
    data: XOR<subject_reservationUpdateInput, subject_reservationUncheckedUpdateInput>
    /**
     * Choose, which subject_reservation to update.
     */
    where: subject_reservationWhereUniqueInput
  }

  /**
   * subject_reservation updateMany
   */
  export type subject_reservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subject_reservations.
     */
    data: XOR<subject_reservationUpdateManyMutationInput, subject_reservationUncheckedUpdateManyInput>
    /**
     * Filter which subject_reservations to update
     */
    where?: subject_reservationWhereInput
    /**
     * Limit how many subject_reservations to update.
     */
    limit?: number
  }

  /**
   * subject_reservation updateManyAndReturn
   */
  export type subject_reservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * The data used to update subject_reservations.
     */
    data: XOR<subject_reservationUpdateManyMutationInput, subject_reservationUncheckedUpdateManyInput>
    /**
     * Filter which subject_reservations to update
     */
    where?: subject_reservationWhereInput
    /**
     * Limit how many subject_reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject_reservation upsert
   */
  export type subject_reservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * The filter to search for the subject_reservation to update in case it exists.
     */
    where: subject_reservationWhereUniqueInput
    /**
     * In case the subject_reservation found by the `where` argument doesn't exist, create a new subject_reservation with this data.
     */
    create: XOR<subject_reservationCreateInput, subject_reservationUncheckedCreateInput>
    /**
     * In case the subject_reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subject_reservationUpdateInput, subject_reservationUncheckedUpdateInput>
  }

  /**
   * subject_reservation delete
   */
  export type subject_reservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
    /**
     * Filter which subject_reservation to delete.
     */
    where: subject_reservationWhereUniqueInput
  }

  /**
   * subject_reservation deleteMany
   */
  export type subject_reservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject_reservations to delete
     */
    where?: subject_reservationWhereInput
    /**
     * Limit how many subject_reservations to delete.
     */
    limit?: number
  }

  /**
   * subject_reservation without action
   */
  export type subject_reservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject_reservation
     */
    select?: subject_reservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject_reservation
     */
    omit?: subject_reservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subject_reservationInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    email: string | null
    role: string | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    email: string | null
    role: string | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    created_at: number
    email: number
    role: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    role?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    role?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    role?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    created_at: Date
    email: string
    role: string
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    email?: boolean
    role?: boolean
    updated_at?: boolean
    grade?: boolean | user$gradeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    email?: boolean
    role?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    email?: boolean
    role?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    created_at?: boolean
    email?: boolean
    role?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "email" | "role" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grade?: boolean | user$gradeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      grade: Prisma.$gradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      email: string
      role: string
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grade<T extends user$gradeArgs<ExtArgs> = {}>(args?: Subset<T, user$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'BigInt'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly email: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.grade
   */
  export type user$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model general_subject
   */

  export type AggregateGeneral_subject = {
    _count: General_subjectCountAggregateOutputType | null
    _avg: General_subjectAvgAggregateOutputType | null
    _sum: General_subjectSumAggregateOutputType | null
    _min: General_subjectMinAggregateOutputType | null
    _max: General_subjectMaxAggregateOutputType | null
  }

  export type General_subjectAvgAggregateOutputType = {
    id: number | null
    units: number | null
  }

  export type General_subjectSumAggregateOutputType = {
    id: bigint | null
    units: number | null
  }

  export type General_subjectMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    code: string | null
    units: number | null
  }

  export type General_subjectMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    code: string | null
    units: number | null
  }

  export type General_subjectCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    code: number
    units: number
    _all: number
  }


  export type General_subjectAvgAggregateInputType = {
    id?: true
    units?: true
  }

  export type General_subjectSumAggregateInputType = {
    id?: true
    units?: true
  }

  export type General_subjectMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    code?: true
    units?: true
  }

  export type General_subjectMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    code?: true
    units?: true
  }

  export type General_subjectCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    code?: true
    units?: true
    _all?: true
  }

  export type General_subjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which general_subject to aggregate.
     */
    where?: general_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_subjects to fetch.
     */
    orderBy?: general_subjectOrderByWithRelationInput | general_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: general_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned general_subjects
    **/
    _count?: true | General_subjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: General_subjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: General_subjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: General_subjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: General_subjectMaxAggregateInputType
  }

  export type GetGeneral_subjectAggregateType<T extends General_subjectAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneral_subject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneral_subject[P]>
      : GetScalarType<T[P], AggregateGeneral_subject[P]>
  }




  export type general_subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: general_subjectWhereInput
    orderBy?: general_subjectOrderByWithAggregationInput | general_subjectOrderByWithAggregationInput[]
    by: General_subjectScalarFieldEnum[] | General_subjectScalarFieldEnum
    having?: general_subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: General_subjectCountAggregateInputType | true
    _avg?: General_subjectAvgAggregateInputType
    _sum?: General_subjectSumAggregateInputType
    _min?: General_subjectMinAggregateInputType
    _max?: General_subjectMaxAggregateInputType
  }

  export type General_subjectGroupByOutputType = {
    id: bigint
    created_at: Date
    title: string
    code: string
    units: number
    _count: General_subjectCountAggregateOutputType | null
    _avg: General_subjectAvgAggregateOutputType | null
    _sum: General_subjectSumAggregateOutputType | null
    _min: General_subjectMinAggregateOutputType | null
    _max: General_subjectMaxAggregateOutputType | null
  }

  type GetGeneral_subjectGroupByPayload<T extends general_subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<General_subjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof General_subjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], General_subjectGroupByOutputType[P]>
            : GetScalarType<T[P], General_subjectGroupByOutputType[P]>
        }
      >
    >


  export type general_subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    code?: boolean
    units?: boolean
  }, ExtArgs["result"]["general_subject"]>

  export type general_subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    code?: boolean
    units?: boolean
  }, ExtArgs["result"]["general_subject"]>

  export type general_subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    code?: boolean
    units?: boolean
  }, ExtArgs["result"]["general_subject"]>

  export type general_subjectSelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    code?: boolean
    units?: boolean
  }

  export type general_subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title" | "code" | "units", ExtArgs["result"]["general_subject"]>

  export type $general_subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "general_subject"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      title: string
      code: string
      units: number
    }, ExtArgs["result"]["general_subject"]>
    composites: {}
  }

  type general_subjectGetPayload<S extends boolean | null | undefined | general_subjectDefaultArgs> = $Result.GetResult<Prisma.$general_subjectPayload, S>

  type general_subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<general_subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: General_subjectCountAggregateInputType | true
    }

  export interface general_subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['general_subject'], meta: { name: 'general_subject' } }
    /**
     * Find zero or one General_subject that matches the filter.
     * @param {general_subjectFindUniqueArgs} args - Arguments to find a General_subject
     * @example
     * // Get one General_subject
     * const general_subject = await prisma.general_subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends general_subjectFindUniqueArgs>(args: SelectSubset<T, general_subjectFindUniqueArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one General_subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {general_subjectFindUniqueOrThrowArgs} args - Arguments to find a General_subject
     * @example
     * // Get one General_subject
     * const general_subject = await prisma.general_subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends general_subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, general_subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first General_subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectFindFirstArgs} args - Arguments to find a General_subject
     * @example
     * // Get one General_subject
     * const general_subject = await prisma.general_subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends general_subjectFindFirstArgs>(args?: SelectSubset<T, general_subjectFindFirstArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first General_subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectFindFirstOrThrowArgs} args - Arguments to find a General_subject
     * @example
     * // Get one General_subject
     * const general_subject = await prisma.general_subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends general_subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, general_subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more General_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all General_subjects
     * const general_subjects = await prisma.general_subject.findMany()
     * 
     * // Get first 10 General_subjects
     * const general_subjects = await prisma.general_subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const general_subjectWithIdOnly = await prisma.general_subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends general_subjectFindManyArgs>(args?: SelectSubset<T, general_subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a General_subject.
     * @param {general_subjectCreateArgs} args - Arguments to create a General_subject.
     * @example
     * // Create one General_subject
     * const General_subject = await prisma.general_subject.create({
     *   data: {
     *     // ... data to create a General_subject
     *   }
     * })
     * 
     */
    create<T extends general_subjectCreateArgs>(args: SelectSubset<T, general_subjectCreateArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many General_subjects.
     * @param {general_subjectCreateManyArgs} args - Arguments to create many General_subjects.
     * @example
     * // Create many General_subjects
     * const general_subject = await prisma.general_subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends general_subjectCreateManyArgs>(args?: SelectSubset<T, general_subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many General_subjects and returns the data saved in the database.
     * @param {general_subjectCreateManyAndReturnArgs} args - Arguments to create many General_subjects.
     * @example
     * // Create many General_subjects
     * const general_subject = await prisma.general_subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many General_subjects and only return the `id`
     * const general_subjectWithIdOnly = await prisma.general_subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends general_subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, general_subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a General_subject.
     * @param {general_subjectDeleteArgs} args - Arguments to delete one General_subject.
     * @example
     * // Delete one General_subject
     * const General_subject = await prisma.general_subject.delete({
     *   where: {
     *     // ... filter to delete one General_subject
     *   }
     * })
     * 
     */
    delete<T extends general_subjectDeleteArgs>(args: SelectSubset<T, general_subjectDeleteArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one General_subject.
     * @param {general_subjectUpdateArgs} args - Arguments to update one General_subject.
     * @example
     * // Update one General_subject
     * const general_subject = await prisma.general_subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends general_subjectUpdateArgs>(args: SelectSubset<T, general_subjectUpdateArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more General_subjects.
     * @param {general_subjectDeleteManyArgs} args - Arguments to filter General_subjects to delete.
     * @example
     * // Delete a few General_subjects
     * const { count } = await prisma.general_subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends general_subjectDeleteManyArgs>(args?: SelectSubset<T, general_subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more General_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many General_subjects
     * const general_subject = await prisma.general_subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends general_subjectUpdateManyArgs>(args: SelectSubset<T, general_subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more General_subjects and returns the data updated in the database.
     * @param {general_subjectUpdateManyAndReturnArgs} args - Arguments to update many General_subjects.
     * @example
     * // Update many General_subjects
     * const general_subject = await prisma.general_subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more General_subjects and only return the `id`
     * const general_subjectWithIdOnly = await prisma.general_subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends general_subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, general_subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one General_subject.
     * @param {general_subjectUpsertArgs} args - Arguments to update or create a General_subject.
     * @example
     * // Update or create a General_subject
     * const general_subject = await prisma.general_subject.upsert({
     *   create: {
     *     // ... data to create a General_subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the General_subject we want to update
     *   }
     * })
     */
    upsert<T extends general_subjectUpsertArgs>(args: SelectSubset<T, general_subjectUpsertArgs<ExtArgs>>): Prisma__general_subjectClient<$Result.GetResult<Prisma.$general_subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of General_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectCountArgs} args - Arguments to filter General_subjects to count.
     * @example
     * // Count the number of General_subjects
     * const count = await prisma.general_subject.count({
     *   where: {
     *     // ... the filter for the General_subjects we want to count
     *   }
     * })
    **/
    count<T extends general_subjectCountArgs>(
      args?: Subset<T, general_subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], General_subjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a General_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {General_subjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends General_subjectAggregateArgs>(args: Subset<T, General_subjectAggregateArgs>): Prisma.PrismaPromise<GetGeneral_subjectAggregateType<T>>

    /**
     * Group by General_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_subjectGroupByArgs} args - Group by arguments.
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
      T extends general_subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: general_subjectGroupByArgs['orderBy'] }
        : { orderBy?: general_subjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, general_subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneral_subjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the general_subject model
   */
  readonly fields: general_subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for general_subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__general_subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the general_subject model
   */
  interface general_subjectFieldRefs {
    readonly id: FieldRef<"general_subject", 'BigInt'>
    readonly created_at: FieldRef<"general_subject", 'DateTime'>
    readonly title: FieldRef<"general_subject", 'String'>
    readonly code: FieldRef<"general_subject", 'String'>
    readonly units: FieldRef<"general_subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * general_subject findUnique
   */
  export type general_subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter, which general_subject to fetch.
     */
    where: general_subjectWhereUniqueInput
  }

  /**
   * general_subject findUniqueOrThrow
   */
  export type general_subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter, which general_subject to fetch.
     */
    where: general_subjectWhereUniqueInput
  }

  /**
   * general_subject findFirst
   */
  export type general_subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter, which general_subject to fetch.
     */
    where?: general_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_subjects to fetch.
     */
    orderBy?: general_subjectOrderByWithRelationInput | general_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for general_subjects.
     */
    cursor?: general_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of general_subjects.
     */
    distinct?: General_subjectScalarFieldEnum | General_subjectScalarFieldEnum[]
  }

  /**
   * general_subject findFirstOrThrow
   */
  export type general_subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter, which general_subject to fetch.
     */
    where?: general_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_subjects to fetch.
     */
    orderBy?: general_subjectOrderByWithRelationInput | general_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for general_subjects.
     */
    cursor?: general_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of general_subjects.
     */
    distinct?: General_subjectScalarFieldEnum | General_subjectScalarFieldEnum[]
  }

  /**
   * general_subject findMany
   */
  export type general_subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter, which general_subjects to fetch.
     */
    where?: general_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_subjects to fetch.
     */
    orderBy?: general_subjectOrderByWithRelationInput | general_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing general_subjects.
     */
    cursor?: general_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of general_subjects.
     */
    distinct?: General_subjectScalarFieldEnum | General_subjectScalarFieldEnum[]
  }

  /**
   * general_subject create
   */
  export type general_subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * The data needed to create a general_subject.
     */
    data: XOR<general_subjectCreateInput, general_subjectUncheckedCreateInput>
  }

  /**
   * general_subject createMany
   */
  export type general_subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many general_subjects.
     */
    data: general_subjectCreateManyInput | general_subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * general_subject createManyAndReturn
   */
  export type general_subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * The data used to create many general_subjects.
     */
    data: general_subjectCreateManyInput | general_subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * general_subject update
   */
  export type general_subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * The data needed to update a general_subject.
     */
    data: XOR<general_subjectUpdateInput, general_subjectUncheckedUpdateInput>
    /**
     * Choose, which general_subject to update.
     */
    where: general_subjectWhereUniqueInput
  }

  /**
   * general_subject updateMany
   */
  export type general_subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update general_subjects.
     */
    data: XOR<general_subjectUpdateManyMutationInput, general_subjectUncheckedUpdateManyInput>
    /**
     * Filter which general_subjects to update
     */
    where?: general_subjectWhereInput
    /**
     * Limit how many general_subjects to update.
     */
    limit?: number
  }

  /**
   * general_subject updateManyAndReturn
   */
  export type general_subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * The data used to update general_subjects.
     */
    data: XOR<general_subjectUpdateManyMutationInput, general_subjectUncheckedUpdateManyInput>
    /**
     * Filter which general_subjects to update
     */
    where?: general_subjectWhereInput
    /**
     * Limit how many general_subjects to update.
     */
    limit?: number
  }

  /**
   * general_subject upsert
   */
  export type general_subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * The filter to search for the general_subject to update in case it exists.
     */
    where: general_subjectWhereUniqueInput
    /**
     * In case the general_subject found by the `where` argument doesn't exist, create a new general_subject with this data.
     */
    create: XOR<general_subjectCreateInput, general_subjectUncheckedCreateInput>
    /**
     * In case the general_subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<general_subjectUpdateInput, general_subjectUncheckedUpdateInput>
  }

  /**
   * general_subject delete
   */
  export type general_subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
    /**
     * Filter which general_subject to delete.
     */
    where: general_subjectWhereUniqueInput
  }

  /**
   * general_subject deleteMany
   */
  export type general_subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which general_subjects to delete
     */
    where?: general_subjectWhereInput
    /**
     * Limit how many general_subjects to delete.
     */
    limit?: number
  }

  /**
   * general_subject without action
   */
  export type general_subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general_subject
     */
    select?: general_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the general_subject
     */
    omit?: general_subjectOmit<ExtArgs> | null
  }


  /**
   * Model degree_level
   */

  export type AggregateDegree_level = {
    _count: Degree_levelCountAggregateOutputType | null
    _avg: Degree_levelAvgAggregateOutputType | null
    _sum: Degree_levelSumAggregateOutputType | null
    _min: Degree_levelMinAggregateOutputType | null
    _max: Degree_levelMaxAggregateOutputType | null
  }

  export type Degree_levelAvgAggregateOutputType = {
    id: number | null
  }

  export type Degree_levelSumAggregateOutputType = {
    id: bigint | null
  }

  export type Degree_levelMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
  }

  export type Degree_levelMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
  }

  export type Degree_levelCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    _all: number
  }


  export type Degree_levelAvgAggregateInputType = {
    id?: true
  }

  export type Degree_levelSumAggregateInputType = {
    id?: true
  }

  export type Degree_levelMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
  }

  export type Degree_levelMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
  }

  export type Degree_levelCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    _all?: true
  }

  export type Degree_levelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which degree_level to aggregate.
     */
    where?: degree_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_levels to fetch.
     */
    orderBy?: degree_levelOrderByWithRelationInput | degree_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: degree_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned degree_levels
    **/
    _count?: true | Degree_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Degree_levelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Degree_levelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Degree_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Degree_levelMaxAggregateInputType
  }

  export type GetDegree_levelAggregateType<T extends Degree_levelAggregateArgs> = {
        [P in keyof T & keyof AggregateDegree_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegree_level[P]>
      : GetScalarType<T[P], AggregateDegree_level[P]>
  }




  export type degree_levelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: degree_levelWhereInput
    orderBy?: degree_levelOrderByWithAggregationInput | degree_levelOrderByWithAggregationInput[]
    by: Degree_levelScalarFieldEnum[] | Degree_levelScalarFieldEnum
    having?: degree_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Degree_levelCountAggregateInputType | true
    _avg?: Degree_levelAvgAggregateInputType
    _sum?: Degree_levelSumAggregateInputType
    _min?: Degree_levelMinAggregateInputType
    _max?: Degree_levelMaxAggregateInputType
  }

  export type Degree_levelGroupByOutputType = {
    id: bigint
    created_at: Date
    title: string
    _count: Degree_levelCountAggregateOutputType | null
    _avg: Degree_levelAvgAggregateOutputType | null
    _sum: Degree_levelSumAggregateOutputType | null
    _min: Degree_levelMinAggregateOutputType | null
    _max: Degree_levelMaxAggregateOutputType | null
  }

  type GetDegree_levelGroupByPayload<T extends degree_levelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Degree_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Degree_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Degree_levelGroupByOutputType[P]>
            : GetScalarType<T[P], Degree_levelGroupByOutputType[P]>
        }
      >
    >


  export type degree_levelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    course?: boolean | degree_level$courseArgs<ExtArgs>
    _count?: boolean | Degree_levelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degree_level"]>

  export type degree_levelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
  }, ExtArgs["result"]["degree_level"]>

  export type degree_levelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
  }, ExtArgs["result"]["degree_level"]>

  export type degree_levelSelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
  }

  export type degree_levelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title", ExtArgs["result"]["degree_level"]>
  export type degree_levelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | degree_level$courseArgs<ExtArgs>
    _count?: boolean | Degree_levelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type degree_levelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type degree_levelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $degree_levelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "degree_level"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      title: string
    }, ExtArgs["result"]["degree_level"]>
    composites: {}
  }

  type degree_levelGetPayload<S extends boolean | null | undefined | degree_levelDefaultArgs> = $Result.GetResult<Prisma.$degree_levelPayload, S>

  type degree_levelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<degree_levelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Degree_levelCountAggregateInputType | true
    }

  export interface degree_levelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['degree_level'], meta: { name: 'degree_level' } }
    /**
     * Find zero or one Degree_level that matches the filter.
     * @param {degree_levelFindUniqueArgs} args - Arguments to find a Degree_level
     * @example
     * // Get one Degree_level
     * const degree_level = await prisma.degree_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends degree_levelFindUniqueArgs>(args: SelectSubset<T, degree_levelFindUniqueArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Degree_level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {degree_levelFindUniqueOrThrowArgs} args - Arguments to find a Degree_level
     * @example
     * // Get one Degree_level
     * const degree_level = await prisma.degree_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends degree_levelFindUniqueOrThrowArgs>(args: SelectSubset<T, degree_levelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelFindFirstArgs} args - Arguments to find a Degree_level
     * @example
     * // Get one Degree_level
     * const degree_level = await prisma.degree_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends degree_levelFindFirstArgs>(args?: SelectSubset<T, degree_levelFindFirstArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree_level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelFindFirstOrThrowArgs} args - Arguments to find a Degree_level
     * @example
     * // Get one Degree_level
     * const degree_level = await prisma.degree_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends degree_levelFindFirstOrThrowArgs>(args?: SelectSubset<T, degree_levelFindFirstOrThrowArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Degree_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Degree_levels
     * const degree_levels = await prisma.degree_level.findMany()
     * 
     * // Get first 10 Degree_levels
     * const degree_levels = await prisma.degree_level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const degree_levelWithIdOnly = await prisma.degree_level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends degree_levelFindManyArgs>(args?: SelectSubset<T, degree_levelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Degree_level.
     * @param {degree_levelCreateArgs} args - Arguments to create a Degree_level.
     * @example
     * // Create one Degree_level
     * const Degree_level = await prisma.degree_level.create({
     *   data: {
     *     // ... data to create a Degree_level
     *   }
     * })
     * 
     */
    create<T extends degree_levelCreateArgs>(args: SelectSubset<T, degree_levelCreateArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Degree_levels.
     * @param {degree_levelCreateManyArgs} args - Arguments to create many Degree_levels.
     * @example
     * // Create many Degree_levels
     * const degree_level = await prisma.degree_level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends degree_levelCreateManyArgs>(args?: SelectSubset<T, degree_levelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Degree_levels and returns the data saved in the database.
     * @param {degree_levelCreateManyAndReturnArgs} args - Arguments to create many Degree_levels.
     * @example
     * // Create many Degree_levels
     * const degree_level = await prisma.degree_level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Degree_levels and only return the `id`
     * const degree_levelWithIdOnly = await prisma.degree_level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends degree_levelCreateManyAndReturnArgs>(args?: SelectSubset<T, degree_levelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Degree_level.
     * @param {degree_levelDeleteArgs} args - Arguments to delete one Degree_level.
     * @example
     * // Delete one Degree_level
     * const Degree_level = await prisma.degree_level.delete({
     *   where: {
     *     // ... filter to delete one Degree_level
     *   }
     * })
     * 
     */
    delete<T extends degree_levelDeleteArgs>(args: SelectSubset<T, degree_levelDeleteArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Degree_level.
     * @param {degree_levelUpdateArgs} args - Arguments to update one Degree_level.
     * @example
     * // Update one Degree_level
     * const degree_level = await prisma.degree_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends degree_levelUpdateArgs>(args: SelectSubset<T, degree_levelUpdateArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Degree_levels.
     * @param {degree_levelDeleteManyArgs} args - Arguments to filter Degree_levels to delete.
     * @example
     * // Delete a few Degree_levels
     * const { count } = await prisma.degree_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends degree_levelDeleteManyArgs>(args?: SelectSubset<T, degree_levelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degree_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Degree_levels
     * const degree_level = await prisma.degree_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends degree_levelUpdateManyArgs>(args: SelectSubset<T, degree_levelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degree_levels and returns the data updated in the database.
     * @param {degree_levelUpdateManyAndReturnArgs} args - Arguments to update many Degree_levels.
     * @example
     * // Update many Degree_levels
     * const degree_level = await prisma.degree_level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Degree_levels and only return the `id`
     * const degree_levelWithIdOnly = await prisma.degree_level.updateManyAndReturn({
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
    updateManyAndReturn<T extends degree_levelUpdateManyAndReturnArgs>(args: SelectSubset<T, degree_levelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Degree_level.
     * @param {degree_levelUpsertArgs} args - Arguments to update or create a Degree_level.
     * @example
     * // Update or create a Degree_level
     * const degree_level = await prisma.degree_level.upsert({
     *   create: {
     *     // ... data to create a Degree_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Degree_level we want to update
     *   }
     * })
     */
    upsert<T extends degree_levelUpsertArgs>(args: SelectSubset<T, degree_levelUpsertArgs<ExtArgs>>): Prisma__degree_levelClient<$Result.GetResult<Prisma.$degree_levelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Degree_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelCountArgs} args - Arguments to filter Degree_levels to count.
     * @example
     * // Count the number of Degree_levels
     * const count = await prisma.degree_level.count({
     *   where: {
     *     // ... the filter for the Degree_levels we want to count
     *   }
     * })
    **/
    count<T extends degree_levelCountArgs>(
      args?: Subset<T, degree_levelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Degree_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Degree_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Degree_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Degree_levelAggregateArgs>(args: Subset<T, Degree_levelAggregateArgs>): Prisma.PrismaPromise<GetDegree_levelAggregateType<T>>

    /**
     * Group by Degree_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_levelGroupByArgs} args - Group by arguments.
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
      T extends degree_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: degree_levelGroupByArgs['orderBy'] }
        : { orderBy?: degree_levelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, degree_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegree_levelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the degree_level model
   */
  readonly fields: degree_levelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for degree_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__degree_levelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends degree_level$courseArgs<ExtArgs> = {}>(args?: Subset<T, degree_level$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the degree_level model
   */
  interface degree_levelFieldRefs {
    readonly id: FieldRef<"degree_level", 'BigInt'>
    readonly created_at: FieldRef<"degree_level", 'DateTime'>
    readonly title: FieldRef<"degree_level", 'String'>
  }
    

  // Custom InputTypes
  /**
   * degree_level findUnique
   */
  export type degree_levelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter, which degree_level to fetch.
     */
    where: degree_levelWhereUniqueInput
  }

  /**
   * degree_level findUniqueOrThrow
   */
  export type degree_levelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter, which degree_level to fetch.
     */
    where: degree_levelWhereUniqueInput
  }

  /**
   * degree_level findFirst
   */
  export type degree_levelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter, which degree_level to fetch.
     */
    where?: degree_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_levels to fetch.
     */
    orderBy?: degree_levelOrderByWithRelationInput | degree_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for degree_levels.
     */
    cursor?: degree_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of degree_levels.
     */
    distinct?: Degree_levelScalarFieldEnum | Degree_levelScalarFieldEnum[]
  }

  /**
   * degree_level findFirstOrThrow
   */
  export type degree_levelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter, which degree_level to fetch.
     */
    where?: degree_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_levels to fetch.
     */
    orderBy?: degree_levelOrderByWithRelationInput | degree_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for degree_levels.
     */
    cursor?: degree_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of degree_levels.
     */
    distinct?: Degree_levelScalarFieldEnum | Degree_levelScalarFieldEnum[]
  }

  /**
   * degree_level findMany
   */
  export type degree_levelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter, which degree_levels to fetch.
     */
    where?: degree_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_levels to fetch.
     */
    orderBy?: degree_levelOrderByWithRelationInput | degree_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing degree_levels.
     */
    cursor?: degree_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of degree_levels.
     */
    distinct?: Degree_levelScalarFieldEnum | Degree_levelScalarFieldEnum[]
  }

  /**
   * degree_level create
   */
  export type degree_levelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * The data needed to create a degree_level.
     */
    data: XOR<degree_levelCreateInput, degree_levelUncheckedCreateInput>
  }

  /**
   * degree_level createMany
   */
  export type degree_levelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many degree_levels.
     */
    data: degree_levelCreateManyInput | degree_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * degree_level createManyAndReturn
   */
  export type degree_levelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * The data used to create many degree_levels.
     */
    data: degree_levelCreateManyInput | degree_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * degree_level update
   */
  export type degree_levelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * The data needed to update a degree_level.
     */
    data: XOR<degree_levelUpdateInput, degree_levelUncheckedUpdateInput>
    /**
     * Choose, which degree_level to update.
     */
    where: degree_levelWhereUniqueInput
  }

  /**
   * degree_level updateMany
   */
  export type degree_levelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update degree_levels.
     */
    data: XOR<degree_levelUpdateManyMutationInput, degree_levelUncheckedUpdateManyInput>
    /**
     * Filter which degree_levels to update
     */
    where?: degree_levelWhereInput
    /**
     * Limit how many degree_levels to update.
     */
    limit?: number
  }

  /**
   * degree_level updateManyAndReturn
   */
  export type degree_levelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * The data used to update degree_levels.
     */
    data: XOR<degree_levelUpdateManyMutationInput, degree_levelUncheckedUpdateManyInput>
    /**
     * Filter which degree_levels to update
     */
    where?: degree_levelWhereInput
    /**
     * Limit how many degree_levels to update.
     */
    limit?: number
  }

  /**
   * degree_level upsert
   */
  export type degree_levelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * The filter to search for the degree_level to update in case it exists.
     */
    where: degree_levelWhereUniqueInput
    /**
     * In case the degree_level found by the `where` argument doesn't exist, create a new degree_level with this data.
     */
    create: XOR<degree_levelCreateInput, degree_levelUncheckedCreateInput>
    /**
     * In case the degree_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<degree_levelUpdateInput, degree_levelUncheckedUpdateInput>
  }

  /**
   * degree_level delete
   */
  export type degree_levelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
    /**
     * Filter which degree_level to delete.
     */
    where: degree_levelWhereUniqueInput
  }

  /**
   * degree_level deleteMany
   */
  export type degree_levelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which degree_levels to delete
     */
    where?: degree_levelWhereInput
    /**
     * Limit how many degree_levels to delete.
     */
    limit?: number
  }

  /**
   * degree_level.course
   */
  export type degree_level$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * degree_level without action
   */
  export type degree_levelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_level
     */
    select?: degree_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_level
     */
    omit?: degree_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_levelInclude<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    code: 'code',
    name: 'name',
    description: 'description',
    degree_level_id: 'degree_level_id'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    student_id: 'student_id',
    subject_id: 'subject_id',
    course_id: 'course_id',
    prelim: 'prelim',
    midterm: 'midterm',
    final: 'final',
    final_grade: 'final_grade',
    remark: 'remark',
    encoded_by_user_id: 'encoded_by_user_id'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    birth_date: 'birth_date',
    course_id: 'course_id',
    student_no: 'student_no'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    code: 'code',
    title: 'title',
    units: 'units',
    updated_at: 'updated_at',
    course_id: 'course_id'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const Subject_prerequisiteScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    subject_id: 'subject_id',
    prerequisites_subject_id: 'prerequisites_subject_id'
  };

  export type Subject_prerequisiteScalarFieldEnum = (typeof Subject_prerequisiteScalarFieldEnum)[keyof typeof Subject_prerequisiteScalarFieldEnum]


  export const Subject_reservationScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    subject_id: 'subject_id',
    reserved_at: 'reserved_at',
    status: 'status'
  };

  export type Subject_reservationScalarFieldEnum = (typeof Subject_reservationScalarFieldEnum)[keyof typeof Subject_reservationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    email: 'email',
    role: 'role',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const General_subjectScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    code: 'code',
    units: 'units'
  };

  export type General_subjectScalarFieldEnum = (typeof General_subjectScalarFieldEnum)[keyof typeof General_subjectScalarFieldEnum]


  export const Degree_levelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title'
  };

  export type Degree_levelScalarFieldEnum = (typeof Degree_levelScalarFieldEnum)[keyof typeof Degree_levelScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


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


  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: BigIntFilter<"course"> | bigint | number
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeNullableFilter<"course"> | Date | string | null
    code?: StringFilter<"course"> | string
    name?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    degree_level_id?: BigIntNullableFilter<"course"> | bigint | number | null
    degree_level?: XOR<Degree_levelNullableScalarRelationFilter, degree_levelWhereInput> | null
    grade?: GradeListRelationFilter
    student?: StudentListRelationFilter
    subject?: SubjectListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    degree_level_id?: SortOrderInput | SortOrder
    degree_level?: degree_levelOrderByWithRelationInput
    grade?: gradeOrderByRelationAggregateInput
    student?: studentOrderByRelationAggregateInput
    subject?: subjectOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeNullableFilter<"course"> | Date | string | null
    code?: StringFilter<"course"> | string
    name?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    degree_level_id?: BigIntNullableFilter<"course"> | bigint | number | null
    degree_level?: XOR<Degree_levelNullableScalarRelationFilter, degree_levelWhereInput> | null
    grade?: GradeListRelationFilter
    student?: StudentListRelationFilter
    subject?: SubjectListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    degree_level_id?: SortOrderInput | SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"course"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"course"> | Date | string | null
    code?: StringWithAggregatesFilter<"course"> | string
    name?: StringWithAggregatesFilter<"course"> | string
    description?: StringNullableWithAggregatesFilter<"course"> | string | null
    degree_level_id?: BigIntNullableWithAggregatesFilter<"course"> | bigint | number | null
  }

  export type gradeWhereInput = {
    AND?: gradeWhereInput | gradeWhereInput[]
    OR?: gradeWhereInput[]
    NOT?: gradeWhereInput | gradeWhereInput[]
    id?: BigIntFilter<"grade"> | bigint | number
    created_at?: DateTimeFilter<"grade"> | Date | string
    updated_at?: DateTimeNullableFilter<"grade"> | Date | string | null
    student_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    subject_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    course_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    prelim?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    midterm?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final_grade?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    remark?: StringNullableFilter<"grade"> | string | null
    encoded_by_user_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    course?: XOR<CourseNullableScalarRelationFilter, courseWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    subject?: XOR<SubjectNullableScalarRelationFilter, subjectWhereInput> | null
  }

  export type gradeOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    student_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    prelim?: SortOrderInput | SortOrder
    midterm?: SortOrderInput | SortOrder
    final?: SortOrderInput | SortOrder
    final_grade?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    encoded_by_user_id?: SortOrderInput | SortOrder
    course?: courseOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    subject?: subjectOrderByWithRelationInput
  }

  export type gradeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: gradeWhereInput | gradeWhereInput[]
    OR?: gradeWhereInput[]
    NOT?: gradeWhereInput | gradeWhereInput[]
    created_at?: DateTimeFilter<"grade"> | Date | string
    updated_at?: DateTimeNullableFilter<"grade"> | Date | string | null
    student_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    subject_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    course_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    prelim?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    midterm?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final_grade?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    remark?: StringNullableFilter<"grade"> | string | null
    encoded_by_user_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    course?: XOR<CourseNullableScalarRelationFilter, courseWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    subject?: XOR<SubjectNullableScalarRelationFilter, subjectWhereInput> | null
  }, "id">

  export type gradeOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    student_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    prelim?: SortOrderInput | SortOrder
    midterm?: SortOrderInput | SortOrder
    final?: SortOrderInput | SortOrder
    final_grade?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    encoded_by_user_id?: SortOrderInput | SortOrder
    _count?: gradeCountOrderByAggregateInput
    _avg?: gradeAvgOrderByAggregateInput
    _max?: gradeMaxOrderByAggregateInput
    _min?: gradeMinOrderByAggregateInput
    _sum?: gradeSumOrderByAggregateInput
  }

  export type gradeScalarWhereWithAggregatesInput = {
    AND?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[]
    OR?: gradeScalarWhereWithAggregatesInput[]
    NOT?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"grade"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"grade"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"grade"> | Date | string | null
    student_id?: BigIntNullableWithAggregatesFilter<"grade"> | bigint | number | null
    subject_id?: BigIntNullableWithAggregatesFilter<"grade"> | bigint | number | null
    course_id?: BigIntNullableWithAggregatesFilter<"grade"> | bigint | number | null
    prelim?: DecimalNullableWithAggregatesFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    midterm?: DecimalNullableWithAggregatesFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final?: DecimalNullableWithAggregatesFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final_grade?: DecimalNullableWithAggregatesFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    remark?: StringNullableWithAggregatesFilter<"grade"> | string | null
    encoded_by_user_id?: BigIntNullableWithAggregatesFilter<"grade"> | bigint | number | null
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: BigIntFilter<"student"> | bigint | number
    created_at?: DateTimeFilter<"student"> | Date | string
    updated_at?: DateTimeNullableFilter<"student"> | Date | string | null
    first_name?: StringFilter<"student"> | string
    last_name?: StringFilter<"student"> | string
    email?: StringNullableFilter<"student"> | string | null
    birth_date?: DateTimeFilter<"student"> | Date | string
    course_id?: BigIntFilter<"student"> | bigint | number
    student_no?: StringFilter<"student"> | string
    grade?: GradeListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    subject_reservation?: Subject_reservationListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    birth_date?: SortOrder
    course_id?: SortOrder
    student_no?: SortOrder
    grade?: gradeOrderByRelationAggregateInput
    course?: courseOrderByWithRelationInput
    subject_reservation?: subject_reservationOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    student_no?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    created_at?: DateTimeFilter<"student"> | Date | string
    updated_at?: DateTimeNullableFilter<"student"> | Date | string | null
    first_name?: StringFilter<"student"> | string
    last_name?: StringFilter<"student"> | string
    birth_date?: DateTimeFilter<"student"> | Date | string
    course_id?: BigIntFilter<"student"> | bigint | number
    grade?: GradeListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    subject_reservation?: Subject_reservationListRelationFilter
  }, "id" | "email" | "student_no">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    birth_date?: SortOrder
    course_id?: SortOrder
    student_no?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"student"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"student"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"student"> | Date | string | null
    first_name?: StringWithAggregatesFilter<"student"> | string
    last_name?: StringWithAggregatesFilter<"student"> | string
    email?: StringNullableWithAggregatesFilter<"student"> | string | null
    birth_date?: DateTimeWithAggregatesFilter<"student"> | Date | string
    course_id?: BigIntWithAggregatesFilter<"student"> | bigint | number
    student_no?: StringWithAggregatesFilter<"student"> | string
  }

  export type subjectWhereInput = {
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    id?: BigIntFilter<"subject"> | bigint | number
    created_at?: DateTimeFilter<"subject"> | Date | string
    code?: StringFilter<"subject"> | string
    title?: StringFilter<"subject"> | string
    units?: IntFilter<"subject"> | number
    updated_at?: DateTimeNullableFilter<"subject"> | Date | string | null
    course_id?: BigIntFilter<"subject"> | bigint | number
    grade?: GradeListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: Subject_prerequisiteListRelationFilter
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: Subject_prerequisiteListRelationFilter
    subject_reservation?: Subject_reservationListRelationFilter
  }

  export type subjectOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    code?: SortOrder
    title?: SortOrder
    units?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    course_id?: SortOrder
    grade?: gradeOrderByRelationAggregateInput
    course?: courseOrderByWithRelationInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteOrderByRelationAggregateInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteOrderByRelationAggregateInput
    subject_reservation?: subject_reservationOrderByRelationAggregateInput
  }

  export type subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    created_at?: DateTimeFilter<"subject"> | Date | string
    code?: StringFilter<"subject"> | string
    title?: StringFilter<"subject"> | string
    units?: IntFilter<"subject"> | number
    updated_at?: DateTimeNullableFilter<"subject"> | Date | string | null
    course_id?: BigIntFilter<"subject"> | bigint | number
    grade?: GradeListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: Subject_prerequisiteListRelationFilter
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: Subject_prerequisiteListRelationFilter
    subject_reservation?: Subject_reservationListRelationFilter
  }, "id">

  export type subjectOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    code?: SortOrder
    title?: SortOrder
    units?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    course_id?: SortOrder
    _count?: subjectCountOrderByAggregateInput
    _avg?: subjectAvgOrderByAggregateInput
    _max?: subjectMaxOrderByAggregateInput
    _min?: subjectMinOrderByAggregateInput
    _sum?: subjectSumOrderByAggregateInput
  }

  export type subjectScalarWhereWithAggregatesInput = {
    AND?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    OR?: subjectScalarWhereWithAggregatesInput[]
    NOT?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subject"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"subject"> | Date | string
    code?: StringWithAggregatesFilter<"subject"> | string
    title?: StringWithAggregatesFilter<"subject"> | string
    units?: IntWithAggregatesFilter<"subject"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"subject"> | Date | string | null
    course_id?: BigIntWithAggregatesFilter<"subject"> | bigint | number
  }

  export type subject_prerequisiteWhereInput = {
    AND?: subject_prerequisiteWhereInput | subject_prerequisiteWhereInput[]
    OR?: subject_prerequisiteWhereInput[]
    NOT?: subject_prerequisiteWhereInput | subject_prerequisiteWhereInput[]
    id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    created_at?: DateTimeFilter<"subject_prerequisite"> | Date | string
    subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    prerequisites_subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    subject_subject_prerequisite_subject_idTosubject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
  }

  export type subject_prerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: subjectOrderByWithRelationInput
    subject_subject_prerequisite_subject_idTosubject?: subjectOrderByWithRelationInput
  }

  export type subject_prerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subject_prerequisiteWhereInput | subject_prerequisiteWhereInput[]
    OR?: subject_prerequisiteWhereInput[]
    NOT?: subject_prerequisiteWhereInput | subject_prerequisiteWhereInput[]
    created_at?: DateTimeFilter<"subject_prerequisite"> | Date | string
    subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    prerequisites_subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    subject_subject_prerequisite_subject_idTosubject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
  }, "id">

  export type subject_prerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
    _count?: subject_prerequisiteCountOrderByAggregateInput
    _avg?: subject_prerequisiteAvgOrderByAggregateInput
    _max?: subject_prerequisiteMaxOrderByAggregateInput
    _min?: subject_prerequisiteMinOrderByAggregateInput
    _sum?: subject_prerequisiteSumOrderByAggregateInput
  }

  export type subject_prerequisiteScalarWhereWithAggregatesInput = {
    AND?: subject_prerequisiteScalarWhereWithAggregatesInput | subject_prerequisiteScalarWhereWithAggregatesInput[]
    OR?: subject_prerequisiteScalarWhereWithAggregatesInput[]
    NOT?: subject_prerequisiteScalarWhereWithAggregatesInput | subject_prerequisiteScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subject_prerequisite"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"subject_prerequisite"> | Date | string
    subject_id?: BigIntWithAggregatesFilter<"subject_prerequisite"> | bigint | number
    prerequisites_subject_id?: BigIntWithAggregatesFilter<"subject_prerequisite"> | bigint | number
  }

  export type subject_reservationWhereInput = {
    AND?: subject_reservationWhereInput | subject_reservationWhereInput[]
    OR?: subject_reservationWhereInput[]
    NOT?: subject_reservationWhereInput | subject_reservationWhereInput[]
    id?: BigIntFilter<"subject_reservation"> | bigint | number
    student_id?: BigIntFilter<"subject_reservation"> | bigint | number
    subject_id?: BigIntFilter<"subject_reservation"> | bigint | number
    reserved_at?: DateTimeNullableFilter<"subject_reservation"> | Date | string | null
    status?: EnumstatusFilter<"subject_reservation"> | $Enums.status
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
  }

  export type subject_reservationOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    status?: SortOrder
    student?: studentOrderByWithRelationInput
    subject?: subjectOrderByWithRelationInput
  }

  export type subject_reservationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subject_reservationWhereInput | subject_reservationWhereInput[]
    OR?: subject_reservationWhereInput[]
    NOT?: subject_reservationWhereInput | subject_reservationWhereInput[]
    student_id?: BigIntFilter<"subject_reservation"> | bigint | number
    subject_id?: BigIntFilter<"subject_reservation"> | bigint | number
    reserved_at?: DateTimeNullableFilter<"subject_reservation"> | Date | string | null
    status?: EnumstatusFilter<"subject_reservation"> | $Enums.status
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
  }, "id">

  export type subject_reservationOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: subject_reservationCountOrderByAggregateInput
    _avg?: subject_reservationAvgOrderByAggregateInput
    _max?: subject_reservationMaxOrderByAggregateInput
    _min?: subject_reservationMinOrderByAggregateInput
    _sum?: subject_reservationSumOrderByAggregateInput
  }

  export type subject_reservationScalarWhereWithAggregatesInput = {
    AND?: subject_reservationScalarWhereWithAggregatesInput | subject_reservationScalarWhereWithAggregatesInput[]
    OR?: subject_reservationScalarWhereWithAggregatesInput[]
    NOT?: subject_reservationScalarWhereWithAggregatesInput | subject_reservationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subject_reservation"> | bigint | number
    student_id?: BigIntWithAggregatesFilter<"subject_reservation"> | bigint | number
    subject_id?: BigIntWithAggregatesFilter<"subject_reservation"> | bigint | number
    reserved_at?: DateTimeNullableWithAggregatesFilter<"subject_reservation"> | Date | string | null
    status?: EnumstatusWithAggregatesFilter<"subject_reservation"> | $Enums.status
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    created_at?: DateTimeFilter<"user"> | Date | string
    email?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    grade?: GradeListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    role?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    grade?: gradeOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    created_at?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    grade?: GradeListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    role?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"user"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    email?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type general_subjectWhereInput = {
    AND?: general_subjectWhereInput | general_subjectWhereInput[]
    OR?: general_subjectWhereInput[]
    NOT?: general_subjectWhereInput | general_subjectWhereInput[]
    id?: BigIntFilter<"general_subject"> | bigint | number
    created_at?: DateTimeFilter<"general_subject"> | Date | string
    title?: StringFilter<"general_subject"> | string
    code?: StringFilter<"general_subject"> | string
    units?: IntFilter<"general_subject"> | number
  }

  export type general_subjectOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    code?: SortOrder
    units?: SortOrder
  }

  export type general_subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: general_subjectWhereInput | general_subjectWhereInput[]
    OR?: general_subjectWhereInput[]
    NOT?: general_subjectWhereInput | general_subjectWhereInput[]
    created_at?: DateTimeFilter<"general_subject"> | Date | string
    title?: StringFilter<"general_subject"> | string
    code?: StringFilter<"general_subject"> | string
    units?: IntFilter<"general_subject"> | number
  }, "id">

  export type general_subjectOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    code?: SortOrder
    units?: SortOrder
    _count?: general_subjectCountOrderByAggregateInput
    _avg?: general_subjectAvgOrderByAggregateInput
    _max?: general_subjectMaxOrderByAggregateInput
    _min?: general_subjectMinOrderByAggregateInput
    _sum?: general_subjectSumOrderByAggregateInput
  }

  export type general_subjectScalarWhereWithAggregatesInput = {
    AND?: general_subjectScalarWhereWithAggregatesInput | general_subjectScalarWhereWithAggregatesInput[]
    OR?: general_subjectScalarWhereWithAggregatesInput[]
    NOT?: general_subjectScalarWhereWithAggregatesInput | general_subjectScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"general_subject"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"general_subject"> | Date | string
    title?: StringWithAggregatesFilter<"general_subject"> | string
    code?: StringWithAggregatesFilter<"general_subject"> | string
    units?: IntWithAggregatesFilter<"general_subject"> | number
  }

  export type degree_levelWhereInput = {
    AND?: degree_levelWhereInput | degree_levelWhereInput[]
    OR?: degree_levelWhereInput[]
    NOT?: degree_levelWhereInput | degree_levelWhereInput[]
    id?: BigIntFilter<"degree_level"> | bigint | number
    created_at?: DateTimeFilter<"degree_level"> | Date | string
    title?: StringFilter<"degree_level"> | string
    course?: CourseListRelationFilter
  }

  export type degree_levelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    course?: courseOrderByRelationAggregateInput
  }

  export type degree_levelWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    title?: string
    AND?: degree_levelWhereInput | degree_levelWhereInput[]
    OR?: degree_levelWhereInput[]
    NOT?: degree_levelWhereInput | degree_levelWhereInput[]
    created_at?: DateTimeFilter<"degree_level"> | Date | string
    course?: CourseListRelationFilter
  }, "id" | "title">

  export type degree_levelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    _count?: degree_levelCountOrderByAggregateInput
    _avg?: degree_levelAvgOrderByAggregateInput
    _max?: degree_levelMaxOrderByAggregateInput
    _min?: degree_levelMinOrderByAggregateInput
    _sum?: degree_levelSumOrderByAggregateInput
  }

  export type degree_levelScalarWhereWithAggregatesInput = {
    AND?: degree_levelScalarWhereWithAggregatesInput | degree_levelScalarWhereWithAggregatesInput[]
    OR?: degree_levelScalarWhereWithAggregatesInput[]
    NOT?: degree_levelScalarWhereWithAggregatesInput | degree_levelScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"degree_level"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"degree_level"> | Date | string
    title?: StringWithAggregatesFilter<"degree_level"> | string
  }

  export type courseCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level?: degree_levelCreateNestedOneWithoutCourseInput
    grade?: gradeCreateNestedManyWithoutCourseInput
    student?: studentCreateNestedManyWithoutCourseInput
    subject?: subjectCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level_id?: bigint | number | null
    grade?: gradeUncheckedCreateNestedManyWithoutCourseInput
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
    subject?: subjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level?: degree_levelUpdateOneWithoutCourseNestedInput
    grade?: gradeUpdateManyWithoutCourseNestedInput
    student?: studentUpdateManyWithoutCourseNestedInput
    subject?: subjectUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    grade?: gradeUncheckedUpdateManyWithoutCourseNestedInput
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
    subject?: subjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level_id?: bigint | number | null
  }

  export type courseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type courseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type gradeCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    course?: courseCreateNestedOneWithoutGradeInput
    user?: userCreateNestedOneWithoutGradeInput
    student?: studentCreateNestedOneWithoutGradeInput
    subject?: subjectCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type gradeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneWithoutGradeNestedInput
    user?: userUpdateOneWithoutGradeNestedInput
    student?: studentUpdateOneWithoutGradeNestedInput
    subject?: subjectUpdateOneWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type gradeCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type gradeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gradeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type studentCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
    grade?: gradeCreateNestedManyWithoutStudentInput
    course: courseCreateNestedOneWithoutStudentInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    course_id: bigint | number
    student_no: string
    grade?: gradeUncheckedCreateNestedManyWithoutStudentInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUpdateManyWithoutStudentNestedInput
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUncheckedUpdateManyWithoutStudentNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    course_id: bigint | number
    student_no: string
  }

  export type studentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
  }

  export type studentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_no?: StringFieldUpdateOperationsInput | string
  }

  export type subjectCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutSubjectInput
    course: courseCreateNestedOneWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
    grade?: gradeUncheckedCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutSubjectNestedInput
    course?: courseUpdateOneRequiredWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    grade?: gradeUncheckedUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
  }

  export type subjectUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_prerequisiteCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_subject_prerequisite_prerequisites_subject_idTosubject: subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_subject_prerequisite_subject_idTosubject: subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput
  }

  export type subject_prerequisiteUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_id: bigint | number
    prerequisites_subject_id: bigint | number
  }

  export type subject_prerequisiteUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_subject_prerequisite_subject_idTosubject?: subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectNestedInput
  }

  export type subject_prerequisiteUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    prerequisites_subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_prerequisiteCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_id: bigint | number
    prerequisites_subject_id: bigint | number
  }

  export type subject_prerequisiteUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subject_prerequisiteUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    prerequisites_subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_reservationCreateInput = {
    id?: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
    student: studentCreateNestedOneWithoutSubject_reservationInput
    subject: subjectCreateNestedOneWithoutSubject_reservationInput
  }

  export type subject_reservationUncheckedCreateInput = {
    id?: bigint | number
    student_id: bigint | number
    subject_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type subject_reservationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    student?: studentUpdateOneRequiredWithoutSubject_reservationNestedInput
    subject?: subjectUpdateOneRequiredWithoutSubject_reservationNestedInput
  }

  export type subject_reservationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_id?: BigIntFieldUpdateOperationsInput | bigint | number
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type subject_reservationCreateManyInput = {
    id?: bigint | number
    student_id: bigint | number
    subject_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type subject_reservationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type subject_reservationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_id?: BigIntFieldUpdateOperationsInput | bigint | number
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type userCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    email: string
    role?: string
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    email: string
    role?: string
    updated_at?: Date | string | null
    grade?: gradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    email: string
    role?: string
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type general_subjectCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
    code: string
    units: number
  }

  export type general_subjectUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
    code: string
    units: number
  }

  export type general_subjectUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
  }

  export type general_subjectUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
  }

  export type general_subjectCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
    code: string
    units: number
  }

  export type general_subjectUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
  }

  export type general_subjectUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
  }

  export type degree_levelCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
    course?: courseCreateNestedManyWithoutDegree_levelInput
  }

  export type degree_levelUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
    course?: courseUncheckedCreateNestedManyWithoutDegree_levelInput
  }

  export type degree_levelUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateManyWithoutDegree_levelNestedInput
  }

  export type degree_levelUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    course?: courseUncheckedUpdateManyWithoutDegree_levelNestedInput
  }

  export type degree_levelCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
  }

  export type degree_levelUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type degree_levelUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Degree_levelNullableScalarRelationFilter = {
    is?: degree_levelWhereInput | null
    isNot?: degree_levelWhereInput | null
  }

  export type GradeListRelationFilter = {
    every?: gradeWhereInput
    some?: gradeWhereInput
    none?: gradeWhereInput
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: subjectWhereInput
    some?: subjectWhereInput
    none?: subjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type gradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    degree_level_id?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    id?: SortOrder
    degree_level_id?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    degree_level_id?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    degree_level_id?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    id?: SortOrder
    degree_level_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CourseNullableScalarRelationFilter = {
    is?: courseWhereInput | null
    isNot?: courseWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type SubjectNullableScalarRelationFilter = {
    is?: subjectWhereInput | null
    isNot?: subjectWhereInput | null
  }

  export type gradeCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    course_id?: SortOrder
    prelim?: SortOrder
    midterm?: SortOrder
    final?: SortOrder
    final_grade?: SortOrder
    remark?: SortOrder
    encoded_by_user_id?: SortOrder
  }

  export type gradeAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    course_id?: SortOrder
    prelim?: SortOrder
    midterm?: SortOrder
    final?: SortOrder
    final_grade?: SortOrder
    encoded_by_user_id?: SortOrder
  }

  export type gradeMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    course_id?: SortOrder
    prelim?: SortOrder
    midterm?: SortOrder
    final?: SortOrder
    final_grade?: SortOrder
    remark?: SortOrder
    encoded_by_user_id?: SortOrder
  }

  export type gradeMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    course_id?: SortOrder
    prelim?: SortOrder
    midterm?: SortOrder
    final?: SortOrder
    final_grade?: SortOrder
    remark?: SortOrder
    encoded_by_user_id?: SortOrder
  }

  export type gradeSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    course_id?: SortOrder
    prelim?: SortOrder
    midterm?: SortOrder
    final?: SortOrder
    final_grade?: SortOrder
    encoded_by_user_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type Subject_reservationListRelationFilter = {
    every?: subject_reservationWhereInput
    some?: subject_reservationWhereInput
    none?: subject_reservationWhereInput
  }

  export type subject_reservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    course_id?: SortOrder
    student_no?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    course_id?: SortOrder
    student_no?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    course_id?: SortOrder
    student_no?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
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

  export type Subject_prerequisiteListRelationFilter = {
    every?: subject_prerequisiteWhereInput
    some?: subject_prerequisiteWhereInput
    none?: subject_prerequisiteWhereInput
  }

  export type subject_prerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    code?: SortOrder
    title?: SortOrder
    units?: SortOrder
    updated_at?: SortOrder
    course_id?: SortOrder
  }

  export type subjectAvgOrderByAggregateInput = {
    id?: SortOrder
    units?: SortOrder
    course_id?: SortOrder
  }

  export type subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    code?: SortOrder
    title?: SortOrder
    units?: SortOrder
    updated_at?: SortOrder
    course_id?: SortOrder
  }

  export type subjectMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    code?: SortOrder
    title?: SortOrder
    units?: SortOrder
    updated_at?: SortOrder
    course_id?: SortOrder
  }

  export type subjectSumOrderByAggregateInput = {
    id?: SortOrder
    units?: SortOrder
    course_id?: SortOrder
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

  export type SubjectScalarRelationFilter = {
    is?: subjectWhereInput
    isNot?: subjectWhereInput
  }

  export type subject_prerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
  }

  export type subject_prerequisiteAvgOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
  }

  export type subject_prerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
  }

  export type subject_prerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
  }

  export type subject_prerequisiteSumOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    prerequisites_subject_id?: SortOrder
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type subject_reservationCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    reserved_at?: SortOrder
    status?: SortOrder
  }

  export type subject_reservationAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
  }

  export type subject_reservationMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    reserved_at?: SortOrder
    status?: SortOrder
  }

  export type subject_reservationMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
    reserved_at?: SortOrder
    status?: SortOrder
  }

  export type subject_reservationSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type general_subjectCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    code?: SortOrder
    units?: SortOrder
  }

  export type general_subjectAvgOrderByAggregateInput = {
    id?: SortOrder
    units?: SortOrder
  }

  export type general_subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    code?: SortOrder
    units?: SortOrder
  }

  export type general_subjectMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    code?: SortOrder
    units?: SortOrder
  }

  export type general_subjectSumOrderByAggregateInput = {
    id?: SortOrder
    units?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type degree_levelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type degree_levelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type degree_levelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type degree_levelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type degree_levelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type degree_levelCreateNestedOneWithoutCourseInput = {
    create?: XOR<degree_levelCreateWithoutCourseInput, degree_levelUncheckedCreateWithoutCourseInput>
    connectOrCreate?: degree_levelCreateOrConnectWithoutCourseInput
    connect?: degree_levelWhereUniqueInput
  }

  export type gradeCreateNestedManyWithoutCourseInput = {
    create?: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput> | gradeCreateWithoutCourseInput[] | gradeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutCourseInput | gradeCreateOrConnectWithoutCourseInput[]
    createMany?: gradeCreateManyCourseInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type studentCreateNestedManyWithoutCourseInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type subjectCreateNestedManyWithoutCourseInput = {
    create?: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput> | subjectCreateWithoutCourseInput[] | subjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCourseInput | subjectCreateOrConnectWithoutCourseInput[]
    createMany?: subjectCreateManyCourseInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput> | gradeCreateWithoutCourseInput[] | gradeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutCourseInput | gradeCreateOrConnectWithoutCourseInput[]
    createMany?: gradeCreateManyCourseInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type subjectUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput> | subjectCreateWithoutCourseInput[] | subjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCourseInput | subjectCreateOrConnectWithoutCourseInput[]
    createMany?: subjectCreateManyCourseInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type degree_levelUpdateOneWithoutCourseNestedInput = {
    create?: XOR<degree_levelCreateWithoutCourseInput, degree_levelUncheckedCreateWithoutCourseInput>
    connectOrCreate?: degree_levelCreateOrConnectWithoutCourseInput
    upsert?: degree_levelUpsertWithoutCourseInput
    disconnect?: degree_levelWhereInput | boolean
    delete?: degree_levelWhereInput | boolean
    connect?: degree_levelWhereUniqueInput
    update?: XOR<XOR<degree_levelUpdateToOneWithWhereWithoutCourseInput, degree_levelUpdateWithoutCourseInput>, degree_levelUncheckedUpdateWithoutCourseInput>
  }

  export type gradeUpdateManyWithoutCourseNestedInput = {
    create?: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput> | gradeCreateWithoutCourseInput[] | gradeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutCourseInput | gradeCreateOrConnectWithoutCourseInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutCourseInput | gradeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: gradeCreateManyCourseInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutCourseInput | gradeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutCourseInput | gradeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type studentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourseInput | studentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourseInput | studentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourseInput | studentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type subjectUpdateManyWithoutCourseNestedInput = {
    create?: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput> | subjectCreateWithoutCourseInput[] | subjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCourseInput | subjectCreateOrConnectWithoutCourseInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutCourseInput | subjectUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: subjectCreateManyCourseInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutCourseInput | subjectUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutCourseInput | subjectUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type gradeUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput> | gradeCreateWithoutCourseInput[] | gradeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutCourseInput | gradeCreateOrConnectWithoutCourseInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutCourseInput | gradeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: gradeCreateManyCourseInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutCourseInput | gradeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutCourseInput | gradeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourseInput | studentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourseInput | studentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourseInput | studentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type subjectUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput> | subjectCreateWithoutCourseInput[] | subjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutCourseInput | subjectCreateOrConnectWithoutCourseInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutCourseInput | subjectUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: subjectCreateManyCourseInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutCourseInput | subjectUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutCourseInput | subjectUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutGradeInput = {
    create?: XOR<courseCreateWithoutGradeInput, courseUncheckedCreateWithoutGradeInput>
    connectOrCreate?: courseCreateOrConnectWithoutGradeInput
    connect?: courseWhereUniqueInput
  }

  export type userCreateNestedOneWithoutGradeInput = {
    create?: XOR<userCreateWithoutGradeInput, userUncheckedCreateWithoutGradeInput>
    connectOrCreate?: userCreateOrConnectWithoutGradeInput
    connect?: userWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutGradeInput = {
    create?: XOR<studentCreateWithoutGradeInput, studentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: studentCreateOrConnectWithoutGradeInput
    connect?: studentWhereUniqueInput
  }

  export type subjectCreateNestedOneWithoutGradeInput = {
    create?: XOR<subjectCreateWithoutGradeInput, subjectUncheckedCreateWithoutGradeInput>
    connectOrCreate?: subjectCreateOrConnectWithoutGradeInput
    connect?: subjectWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type courseUpdateOneWithoutGradeNestedInput = {
    create?: XOR<courseCreateWithoutGradeInput, courseUncheckedCreateWithoutGradeInput>
    connectOrCreate?: courseCreateOrConnectWithoutGradeInput
    upsert?: courseUpsertWithoutGradeInput
    disconnect?: courseWhereInput | boolean
    delete?: courseWhereInput | boolean
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutGradeInput, courseUpdateWithoutGradeInput>, courseUncheckedUpdateWithoutGradeInput>
  }

  export type userUpdateOneWithoutGradeNestedInput = {
    create?: XOR<userCreateWithoutGradeInput, userUncheckedCreateWithoutGradeInput>
    connectOrCreate?: userCreateOrConnectWithoutGradeInput
    upsert?: userUpsertWithoutGradeInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutGradeInput, userUpdateWithoutGradeInput>, userUncheckedUpdateWithoutGradeInput>
  }

  export type studentUpdateOneWithoutGradeNestedInput = {
    create?: XOR<studentCreateWithoutGradeInput, studentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: studentCreateOrConnectWithoutGradeInput
    upsert?: studentUpsertWithoutGradeInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutGradeInput, studentUpdateWithoutGradeInput>, studentUncheckedUpdateWithoutGradeInput>
  }

  export type subjectUpdateOneWithoutGradeNestedInput = {
    create?: XOR<subjectCreateWithoutGradeInput, subjectUncheckedCreateWithoutGradeInput>
    connectOrCreate?: subjectCreateOrConnectWithoutGradeInput
    upsert?: subjectUpsertWithoutGradeInput
    disconnect?: subjectWhereInput | boolean
    delete?: subjectWhereInput | boolean
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutGradeInput, subjectUpdateWithoutGradeInput>, subjectUncheckedUpdateWithoutGradeInput>
  }

  export type gradeCreateNestedManyWithoutStudentInput = {
    create?: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput> | gradeCreateWithoutStudentInput[] | gradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStudentInput | gradeCreateOrConnectWithoutStudentInput[]
    createMany?: gradeCreateManyStudentInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type courseCreateNestedOneWithoutStudentInput = {
    create?: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    connectOrCreate?: courseCreateOrConnectWithoutStudentInput
    connect?: courseWhereUniqueInput
  }

  export type subject_reservationCreateNestedManyWithoutStudentInput = {
    create?: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput> | subject_reservationCreateWithoutStudentInput[] | subject_reservationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutStudentInput | subject_reservationCreateOrConnectWithoutStudentInput[]
    createMany?: subject_reservationCreateManyStudentInputEnvelope
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput> | gradeCreateWithoutStudentInput[] | gradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStudentInput | gradeCreateOrConnectWithoutStudentInput[]
    createMany?: gradeCreateManyStudentInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type subject_reservationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput> | subject_reservationCreateWithoutStudentInput[] | subject_reservationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutStudentInput | subject_reservationCreateOrConnectWithoutStudentInput[]
    createMany?: subject_reservationCreateManyStudentInputEnvelope
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
  }

  export type gradeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput> | gradeCreateWithoutStudentInput[] | gradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStudentInput | gradeCreateOrConnectWithoutStudentInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutStudentInput | gradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: gradeCreateManyStudentInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutStudentInput | gradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutStudentInput | gradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type courseUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    connectOrCreate?: courseCreateOrConnectWithoutStudentInput
    upsert?: courseUpsertWithoutStudentInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutStudentInput, courseUpdateWithoutStudentInput>, courseUncheckedUpdateWithoutStudentInput>
  }

  export type subject_reservationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput> | subject_reservationCreateWithoutStudentInput[] | subject_reservationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutStudentInput | subject_reservationCreateOrConnectWithoutStudentInput[]
    upsert?: subject_reservationUpsertWithWhereUniqueWithoutStudentInput | subject_reservationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: subject_reservationCreateManyStudentInputEnvelope
    set?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    disconnect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    delete?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    update?: subject_reservationUpdateWithWhereUniqueWithoutStudentInput | subject_reservationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: subject_reservationUpdateManyWithWhereWithoutStudentInput | subject_reservationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
  }

  export type gradeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput> | gradeCreateWithoutStudentInput[] | gradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStudentInput | gradeCreateOrConnectWithoutStudentInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutStudentInput | gradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: gradeCreateManyStudentInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutStudentInput | gradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutStudentInput | gradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type subject_reservationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput> | subject_reservationCreateWithoutStudentInput[] | subject_reservationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutStudentInput | subject_reservationCreateOrConnectWithoutStudentInput[]
    upsert?: subject_reservationUpsertWithWhereUniqueWithoutStudentInput | subject_reservationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: subject_reservationCreateManyStudentInputEnvelope
    set?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    disconnect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    delete?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    update?: subject_reservationUpdateWithWhereUniqueWithoutStudentInput | subject_reservationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: subject_reservationUpdateManyWithWhereWithoutStudentInput | subject_reservationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
  }

  export type gradeCreateNestedManyWithoutSubjectInput = {
    create?: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput> | gradeCreateWithoutSubjectInput[] | gradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutSubjectInput | gradeCreateOrConnectWithoutSubjectInput[]
    createMany?: gradeCreateManySubjectInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type courseCreateNestedOneWithoutSubjectInput = {
    create?: XOR<courseCreateWithoutSubjectInput, courseUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: courseCreateOrConnectWithoutSubjectInput
    connect?: courseWhereUniqueInput
  }

  export type subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInputEnvelope
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
  }

  export type subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInputEnvelope
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
  }

  export type subject_reservationCreateNestedManyWithoutSubjectInput = {
    create?: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput> | subject_reservationCreateWithoutSubjectInput[] | subject_reservationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutSubjectInput | subject_reservationCreateOrConnectWithoutSubjectInput[]
    createMany?: subject_reservationCreateManySubjectInputEnvelope
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput> | gradeCreateWithoutSubjectInput[] | gradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutSubjectInput | gradeCreateOrConnectWithoutSubjectInput[]
    createMany?: gradeCreateManySubjectInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInputEnvelope
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
  }

  export type subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInputEnvelope
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
  }

  export type subject_reservationUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput> | subject_reservationCreateWithoutSubjectInput[] | subject_reservationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutSubjectInput | subject_reservationCreateOrConnectWithoutSubjectInput[]
    createMany?: subject_reservationCreateManySubjectInputEnvelope
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type gradeUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput> | gradeCreateWithoutSubjectInput[] | gradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutSubjectInput | gradeCreateOrConnectWithoutSubjectInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutSubjectInput | gradeUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: gradeCreateManySubjectInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutSubjectInput | gradeUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutSubjectInput | gradeUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type courseUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<courseCreateWithoutSubjectInput, courseUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: courseCreateOrConnectWithoutSubjectInput
    upsert?: courseUpsertWithoutSubjectInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutSubjectInput, courseUpdateWithoutSubjectInput>, courseUncheckedUpdateWithoutSubjectInput>
  }

  export type subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    upsert?: subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInputEnvelope
    set?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    disconnect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    delete?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    update?: subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    updateMany?: subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    deleteMany?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
  }

  export type subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    upsert?: subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInputEnvelope
    set?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    disconnect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    delete?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    update?: subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    updateMany?: subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    deleteMany?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
  }

  export type subject_reservationUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput> | subject_reservationCreateWithoutSubjectInput[] | subject_reservationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutSubjectInput | subject_reservationCreateOrConnectWithoutSubjectInput[]
    upsert?: subject_reservationUpsertWithWhereUniqueWithoutSubjectInput | subject_reservationUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: subject_reservationCreateManySubjectInputEnvelope
    set?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    disconnect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    delete?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    update?: subject_reservationUpdateWithWhereUniqueWithoutSubjectInput | subject_reservationUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: subject_reservationUpdateManyWithWhereWithoutSubjectInput | subject_reservationUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
  }

  export type gradeUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput> | gradeCreateWithoutSubjectInput[] | gradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutSubjectInput | gradeCreateOrConnectWithoutSubjectInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutSubjectInput | gradeUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: gradeCreateManySubjectInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutSubjectInput | gradeUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutSubjectInput | gradeUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    upsert?: subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInputEnvelope
    set?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    disconnect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    delete?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    update?: subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    updateMany?: subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    deleteMany?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
  }

  export type subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput = {
    create?: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput> | subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[] | subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    connectOrCreate?: subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    upsert?: subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    createMany?: subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInputEnvelope
    set?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    disconnect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    delete?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    connect?: subject_prerequisiteWhereUniqueInput | subject_prerequisiteWhereUniqueInput[]
    update?: subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    updateMany?: subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_subject_idTosubjectInput[]
    deleteMany?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
  }

  export type subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput> | subject_reservationCreateWithoutSubjectInput[] | subject_reservationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: subject_reservationCreateOrConnectWithoutSubjectInput | subject_reservationCreateOrConnectWithoutSubjectInput[]
    upsert?: subject_reservationUpsertWithWhereUniqueWithoutSubjectInput | subject_reservationUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: subject_reservationCreateManySubjectInputEnvelope
    set?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    disconnect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    delete?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    connect?: subject_reservationWhereUniqueInput | subject_reservationWhereUniqueInput[]
    update?: subject_reservationUpdateWithWhereUniqueWithoutSubjectInput | subject_reservationUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: subject_reservationUpdateManyWithWhereWithoutSubjectInput | subject_reservationUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
  }

  export type subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    create?: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput
    connect?: subjectWhereUniqueInput
  }

  export type subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    create?: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput
    connect?: subjectWhereUniqueInput
  }

  export type subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput = {
    create?: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput
    upsert?: subjectUpsertWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectNestedInput = {
    create?: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput
    upsert?: subjectUpsertWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
  }

  export type studentCreateNestedOneWithoutSubject_reservationInput = {
    create?: XOR<studentCreateWithoutSubject_reservationInput, studentUncheckedCreateWithoutSubject_reservationInput>
    connectOrCreate?: studentCreateOrConnectWithoutSubject_reservationInput
    connect?: studentWhereUniqueInput
  }

  export type subjectCreateNestedOneWithoutSubject_reservationInput = {
    create?: XOR<subjectCreateWithoutSubject_reservationInput, subjectUncheckedCreateWithoutSubject_reservationInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_reservationInput
    connect?: subjectWhereUniqueInput
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type studentUpdateOneRequiredWithoutSubject_reservationNestedInput = {
    create?: XOR<studentCreateWithoutSubject_reservationInput, studentUncheckedCreateWithoutSubject_reservationInput>
    connectOrCreate?: studentCreateOrConnectWithoutSubject_reservationInput
    upsert?: studentUpsertWithoutSubject_reservationInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutSubject_reservationInput, studentUpdateWithoutSubject_reservationInput>, studentUncheckedUpdateWithoutSubject_reservationInput>
  }

  export type subjectUpdateOneRequiredWithoutSubject_reservationNestedInput = {
    create?: XOR<subjectCreateWithoutSubject_reservationInput, subjectUncheckedCreateWithoutSubject_reservationInput>
    connectOrCreate?: subjectCreateOrConnectWithoutSubject_reservationInput
    upsert?: subjectUpsertWithoutSubject_reservationInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutSubject_reservationInput, subjectUpdateWithoutSubject_reservationInput>, subjectUncheckedUpdateWithoutSubject_reservationInput>
  }

  export type gradeCreateNestedManyWithoutUserInput = {
    create?: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput> | gradeCreateWithoutUserInput[] | gradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutUserInput | gradeCreateOrConnectWithoutUserInput[]
    createMany?: gradeCreateManyUserInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput> | gradeCreateWithoutUserInput[] | gradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutUserInput | gradeCreateOrConnectWithoutUserInput[]
    createMany?: gradeCreateManyUserInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type gradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput> | gradeCreateWithoutUserInput[] | gradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutUserInput | gradeCreateOrConnectWithoutUserInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutUserInput | gradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: gradeCreateManyUserInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutUserInput | gradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutUserInput | gradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type gradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput> | gradeCreateWithoutUserInput[] | gradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutUserInput | gradeCreateOrConnectWithoutUserInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutUserInput | gradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: gradeCreateManyUserInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutUserInput | gradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutUserInput | gradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type courseCreateNestedManyWithoutDegree_levelInput = {
    create?: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput> | courseCreateWithoutDegree_levelInput[] | courseUncheckedCreateWithoutDegree_levelInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDegree_levelInput | courseCreateOrConnectWithoutDegree_levelInput[]
    createMany?: courseCreateManyDegree_levelInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutDegree_levelInput = {
    create?: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput> | courseCreateWithoutDegree_levelInput[] | courseUncheckedCreateWithoutDegree_levelInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDegree_levelInput | courseCreateOrConnectWithoutDegree_levelInput[]
    createMany?: courseCreateManyDegree_levelInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUpdateManyWithoutDegree_levelNestedInput = {
    create?: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput> | courseCreateWithoutDegree_levelInput[] | courseUncheckedCreateWithoutDegree_levelInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDegree_levelInput | courseCreateOrConnectWithoutDegree_levelInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutDegree_levelInput | courseUpsertWithWhereUniqueWithoutDegree_levelInput[]
    createMany?: courseCreateManyDegree_levelInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutDegree_levelInput | courseUpdateWithWhereUniqueWithoutDegree_levelInput[]
    updateMany?: courseUpdateManyWithWhereWithoutDegree_levelInput | courseUpdateManyWithWhereWithoutDegree_levelInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutDegree_levelNestedInput = {
    create?: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput> | courseCreateWithoutDegree_levelInput[] | courseUncheckedCreateWithoutDegree_levelInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDegree_levelInput | courseCreateOrConnectWithoutDegree_levelInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutDegree_levelInput | courseUpsertWithWhereUniqueWithoutDegree_levelInput[]
    createMany?: courseCreateManyDegree_levelInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutDegree_levelInput | courseUpdateWithWhereUniqueWithoutDegree_levelInput[]
    updateMany?: courseUpdateManyWithWhereWithoutDegree_levelInput | courseUpdateManyWithWhereWithoutDegree_levelInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type degree_levelCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
  }

  export type degree_levelUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    title: string
  }

  export type degree_levelCreateOrConnectWithoutCourseInput = {
    where: degree_levelWhereUniqueInput
    create: XOR<degree_levelCreateWithoutCourseInput, degree_levelUncheckedCreateWithoutCourseInput>
  }

  export type gradeCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    user?: userCreateNestedOneWithoutGradeInput
    student?: studentCreateNestedOneWithoutGradeInput
    subject?: subjectCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type gradeCreateOrConnectWithoutCourseInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput>
  }

  export type gradeCreateManyCourseInputEnvelope = {
    data: gradeCreateManyCourseInput | gradeCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type studentCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
    grade?: gradeCreateNestedManyWithoutStudentInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
    grade?: gradeUncheckedCreateNestedManyWithoutStudentInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCourseInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput>
  }

  export type studentCreateManyCourseInputEnvelope = {
    data: studentCreateManyCourseInput | studentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type subjectCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeUncheckedCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutCourseInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput>
  }

  export type subjectCreateManyCourseInputEnvelope = {
    data: subjectCreateManyCourseInput | subjectCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type degree_levelUpsertWithoutCourseInput = {
    update: XOR<degree_levelUpdateWithoutCourseInput, degree_levelUncheckedUpdateWithoutCourseInput>
    create: XOR<degree_levelCreateWithoutCourseInput, degree_levelUncheckedCreateWithoutCourseInput>
    where?: degree_levelWhereInput
  }

  export type degree_levelUpdateToOneWithWhereWithoutCourseInput = {
    where?: degree_levelWhereInput
    data: XOR<degree_levelUpdateWithoutCourseInput, degree_levelUncheckedUpdateWithoutCourseInput>
  }

  export type degree_levelUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type degree_levelUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type gradeUpsertWithWhereUniqueWithoutCourseInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutCourseInput, gradeUncheckedUpdateWithoutCourseInput>
    create: XOR<gradeCreateWithoutCourseInput, gradeUncheckedCreateWithoutCourseInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutCourseInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutCourseInput, gradeUncheckedUpdateWithoutCourseInput>
  }

  export type gradeUpdateManyWithWhereWithoutCourseInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutCourseInput>
  }

  export type gradeScalarWhereInput = {
    AND?: gradeScalarWhereInput | gradeScalarWhereInput[]
    OR?: gradeScalarWhereInput[]
    NOT?: gradeScalarWhereInput | gradeScalarWhereInput[]
    id?: BigIntFilter<"grade"> | bigint | number
    created_at?: DateTimeFilter<"grade"> | Date | string
    updated_at?: DateTimeNullableFilter<"grade"> | Date | string | null
    student_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    subject_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    course_id?: BigIntNullableFilter<"grade"> | bigint | number | null
    prelim?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    midterm?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    final_grade?: DecimalNullableFilter<"grade"> | Decimal | DecimalJsLike | number | string | null
    remark?: StringNullableFilter<"grade"> | string | null
    encoded_by_user_id?: BigIntNullableFilter<"grade"> | bigint | number | null
  }

  export type studentUpsertWithWhereUniqueWithoutCourseInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutCourseInput, studentUncheckedUpdateWithoutCourseInput>
    create: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput>
  }

  export type studentUpdateWithWhereUniqueWithoutCourseInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutCourseInput, studentUncheckedUpdateWithoutCourseInput>
  }

  export type studentUpdateManyWithWhereWithoutCourseInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutCourseInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    id?: BigIntFilter<"student"> | bigint | number
    created_at?: DateTimeFilter<"student"> | Date | string
    updated_at?: DateTimeNullableFilter<"student"> | Date | string | null
    first_name?: StringFilter<"student"> | string
    last_name?: StringFilter<"student"> | string
    email?: StringNullableFilter<"student"> | string | null
    birth_date?: DateTimeFilter<"student"> | Date | string
    course_id?: BigIntFilter<"student"> | bigint | number
    student_no?: StringFilter<"student"> | string
  }

  export type subjectUpsertWithWhereUniqueWithoutCourseInput = {
    where: subjectWhereUniqueInput
    update: XOR<subjectUpdateWithoutCourseInput, subjectUncheckedUpdateWithoutCourseInput>
    create: XOR<subjectCreateWithoutCourseInput, subjectUncheckedCreateWithoutCourseInput>
  }

  export type subjectUpdateWithWhereUniqueWithoutCourseInput = {
    where: subjectWhereUniqueInput
    data: XOR<subjectUpdateWithoutCourseInput, subjectUncheckedUpdateWithoutCourseInput>
  }

  export type subjectUpdateManyWithWhereWithoutCourseInput = {
    where: subjectScalarWhereInput
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyWithoutCourseInput>
  }

  export type subjectScalarWhereInput = {
    AND?: subjectScalarWhereInput | subjectScalarWhereInput[]
    OR?: subjectScalarWhereInput[]
    NOT?: subjectScalarWhereInput | subjectScalarWhereInput[]
    id?: BigIntFilter<"subject"> | bigint | number
    created_at?: DateTimeFilter<"subject"> | Date | string
    code?: StringFilter<"subject"> | string
    title?: StringFilter<"subject"> | string
    units?: IntFilter<"subject"> | number
    updated_at?: DateTimeNullableFilter<"subject"> | Date | string | null
    course_id?: BigIntFilter<"subject"> | bigint | number
  }

  export type courseCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level?: degree_levelCreateNestedOneWithoutCourseInput
    student?: studentCreateNestedManyWithoutCourseInput
    subject?: subjectCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level_id?: bigint | number | null
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
    subject?: subjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutGradeInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutGradeInput, courseUncheckedCreateWithoutGradeInput>
  }

  export type userCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    email: string
    role?: string
    updated_at?: Date | string | null
  }

  export type userUncheckedCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    email: string
    role?: string
    updated_at?: Date | string | null
  }

  export type userCreateOrConnectWithoutGradeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutGradeInput, userUncheckedCreateWithoutGradeInput>
  }

  export type studentCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
    course: courseCreateNestedOneWithoutStudentInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    course_id: bigint | number
    student_no: string
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutGradeInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutGradeInput, studentUncheckedCreateWithoutGradeInput>
  }

  export type subjectCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course: courseCreateNestedOneWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutGradeInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutGradeInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutGradeInput, subjectUncheckedCreateWithoutGradeInput>
  }

  export type courseUpsertWithoutGradeInput = {
    update: XOR<courseUpdateWithoutGradeInput, courseUncheckedUpdateWithoutGradeInput>
    create: XOR<courseCreateWithoutGradeInput, courseUncheckedCreateWithoutGradeInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutGradeInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutGradeInput, courseUncheckedUpdateWithoutGradeInput>
  }

  export type courseUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level?: degree_levelUpdateOneWithoutCourseNestedInput
    student?: studentUpdateManyWithoutCourseNestedInput
    subject?: subjectUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
    subject?: subjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type userUpsertWithoutGradeInput = {
    update: XOR<userUpdateWithoutGradeInput, userUncheckedUpdateWithoutGradeInput>
    create: XOR<userCreateWithoutGradeInput, userUncheckedCreateWithoutGradeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutGradeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutGradeInput, userUncheckedUpdateWithoutGradeInput>
  }

  export type userUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentUpsertWithoutGradeInput = {
    update: XOR<studentUpdateWithoutGradeInput, studentUncheckedUpdateWithoutGradeInput>
    create: XOR<studentCreateWithoutGradeInput, studentUncheckedCreateWithoutGradeInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutGradeInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutGradeInput, studentUncheckedUpdateWithoutGradeInput>
  }

  export type studentUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_no?: StringFieldUpdateOperationsInput | string
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type subjectUpsertWithoutGradeInput = {
    update: XOR<subjectUpdateWithoutGradeInput, subjectUncheckedUpdateWithoutGradeInput>
    create: XOR<subjectCreateWithoutGradeInput, subjectUncheckedCreateWithoutGradeInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutGradeInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutGradeInput, subjectUncheckedUpdateWithoutGradeInput>
  }

  export type subjectUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUpdateOneRequiredWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutGradeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type gradeCreateWithoutStudentInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    course?: courseCreateNestedOneWithoutGradeInput
    user?: userCreateNestedOneWithoutGradeInput
    subject?: subjectCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutStudentInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type gradeCreateOrConnectWithoutStudentInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput>
  }

  export type gradeCreateManyStudentInputEnvelope = {
    data: gradeCreateManyStudentInput | gradeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutStudentInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level?: degree_levelCreateNestedOneWithoutCourseInput
    grade?: gradeCreateNestedManyWithoutCourseInput
    subject?: subjectCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutStudentInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level_id?: bigint | number | null
    grade?: gradeUncheckedCreateNestedManyWithoutCourseInput
    subject?: subjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutStudentInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
  }

  export type subject_reservationCreateWithoutStudentInput = {
    id?: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
    subject: subjectCreateNestedOneWithoutSubject_reservationInput
  }

  export type subject_reservationUncheckedCreateWithoutStudentInput = {
    id?: bigint | number
    subject_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type subject_reservationCreateOrConnectWithoutStudentInput = {
    where: subject_reservationWhereUniqueInput
    create: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput>
  }

  export type subject_reservationCreateManyStudentInputEnvelope = {
    data: subject_reservationCreateManyStudentInput | subject_reservationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type gradeUpsertWithWhereUniqueWithoutStudentInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutStudentInput, gradeUncheckedUpdateWithoutStudentInput>
    create: XOR<gradeCreateWithoutStudentInput, gradeUncheckedCreateWithoutStudentInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutStudentInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutStudentInput, gradeUncheckedUpdateWithoutStudentInput>
  }

  export type gradeUpdateManyWithWhereWithoutStudentInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutStudentInput>
  }

  export type courseUpsertWithoutStudentInput = {
    update: XOR<courseUpdateWithoutStudentInput, courseUncheckedUpdateWithoutStudentInput>
    create: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutStudentInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutStudentInput, courseUncheckedUpdateWithoutStudentInput>
  }

  export type courseUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level?: degree_levelUpdateOneWithoutCourseNestedInput
    grade?: gradeUpdateManyWithoutCourseNestedInput
    subject?: subjectUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    grade?: gradeUncheckedUpdateManyWithoutCourseNestedInput
    subject?: subjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type subject_reservationUpsertWithWhereUniqueWithoutStudentInput = {
    where: subject_reservationWhereUniqueInput
    update: XOR<subject_reservationUpdateWithoutStudentInput, subject_reservationUncheckedUpdateWithoutStudentInput>
    create: XOR<subject_reservationCreateWithoutStudentInput, subject_reservationUncheckedCreateWithoutStudentInput>
  }

  export type subject_reservationUpdateWithWhereUniqueWithoutStudentInput = {
    where: subject_reservationWhereUniqueInput
    data: XOR<subject_reservationUpdateWithoutStudentInput, subject_reservationUncheckedUpdateWithoutStudentInput>
  }

  export type subject_reservationUpdateManyWithWhereWithoutStudentInput = {
    where: subject_reservationScalarWhereInput
    data: XOR<subject_reservationUpdateManyMutationInput, subject_reservationUncheckedUpdateManyWithoutStudentInput>
  }

  export type subject_reservationScalarWhereInput = {
    AND?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
    OR?: subject_reservationScalarWhereInput[]
    NOT?: subject_reservationScalarWhereInput | subject_reservationScalarWhereInput[]
    id?: BigIntFilter<"subject_reservation"> | bigint | number
    student_id?: BigIntFilter<"subject_reservation"> | bigint | number
    subject_id?: BigIntFilter<"subject_reservation"> | bigint | number
    reserved_at?: DateTimeNullableFilter<"subject_reservation"> | Date | string | null
    status?: EnumstatusFilter<"subject_reservation"> | $Enums.status
  }

  export type gradeCreateWithoutSubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    course?: courseCreateNestedOneWithoutGradeInput
    user?: userCreateNestedOneWithoutGradeInput
    student?: studentCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutSubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type gradeCreateOrConnectWithoutSubjectInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput>
  }

  export type gradeCreateManySubjectInputEnvelope = {
    data: gradeCreateManySubjectInput | gradeCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutSubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level?: degree_levelCreateNestedOneWithoutCourseInput
    grade?: gradeCreateNestedManyWithoutCourseInput
    student?: studentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutSubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    degree_level_id?: bigint | number | null
    grade?: gradeUncheckedCreateNestedManyWithoutCourseInput
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutSubjectInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutSubjectInput, courseUncheckedCreateWithoutSubjectInput>
  }

  export type subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_subject_prerequisite_subject_idTosubject: subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput
  }

  export type subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_id: bigint | number
  }

  export type subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    create: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInputEnvelope = {
    data: subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInput | subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInput[]
    skipDuplicates?: boolean
  }

  export type subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_subject_prerequisite_prerequisites_subject_idTosubject: subjectCreateNestedOneWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput
  }

  export type subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    prerequisites_subject_id: bigint | number
  }

  export type subject_prerequisiteCreateOrConnectWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    create: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInputEnvelope = {
    data: subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInput | subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInput[]
    skipDuplicates?: boolean
  }

  export type subject_reservationCreateWithoutSubjectInput = {
    id?: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
    student: studentCreateNestedOneWithoutSubject_reservationInput
  }

  export type subject_reservationUncheckedCreateWithoutSubjectInput = {
    id?: bigint | number
    student_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type subject_reservationCreateOrConnectWithoutSubjectInput = {
    where: subject_reservationWhereUniqueInput
    create: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput>
  }

  export type subject_reservationCreateManySubjectInputEnvelope = {
    data: subject_reservationCreateManySubjectInput | subject_reservationCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type gradeUpsertWithWhereUniqueWithoutSubjectInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutSubjectInput, gradeUncheckedUpdateWithoutSubjectInput>
    create: XOR<gradeCreateWithoutSubjectInput, gradeUncheckedCreateWithoutSubjectInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutSubjectInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutSubjectInput, gradeUncheckedUpdateWithoutSubjectInput>
  }

  export type gradeUpdateManyWithWhereWithoutSubjectInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutSubjectInput>
  }

  export type courseUpsertWithoutSubjectInput = {
    update: XOR<courseUpdateWithoutSubjectInput, courseUncheckedUpdateWithoutSubjectInput>
    create: XOR<courseCreateWithoutSubjectInput, courseUncheckedCreateWithoutSubjectInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutSubjectInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutSubjectInput, courseUncheckedUpdateWithoutSubjectInput>
  }

  export type courseUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level?: degree_levelUpdateOneWithoutCourseNestedInput
    grade?: gradeUpdateManyWithoutCourseNestedInput
    student?: studentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree_level_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    grade?: gradeUncheckedUpdateManyWithoutCourseNestedInput
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    update: XOR<subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput>
    create: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    data: XOR<subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput, subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where: subject_prerequisiteScalarWhereInput
    data: XOR<subject_prerequisiteUpdateManyMutationInput, subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subject_prerequisiteScalarWhereInput = {
    AND?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
    OR?: subject_prerequisiteScalarWhereInput[]
    NOT?: subject_prerequisiteScalarWhereInput | subject_prerequisiteScalarWhereInput[]
    id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    created_at?: DateTimeFilter<"subject_prerequisite"> | Date | string
    subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
    prerequisites_subject_id?: BigIntFilter<"subject_prerequisite"> | bigint | number
  }

  export type subject_prerequisiteUpsertWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    update: XOR<subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput>
    create: XOR<subject_prerequisiteCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedCreateWithoutSubject_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subject_prerequisiteUpdateWithWhereUniqueWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    where: subject_prerequisiteWhereUniqueInput
    data: XOR<subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput, subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subject_prerequisiteUpdateManyWithWhereWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    where: subject_prerequisiteScalarWhereInput
    data: XOR<subject_prerequisiteUpdateManyMutationInput, subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subject_reservationUpsertWithWhereUniqueWithoutSubjectInput = {
    where: subject_reservationWhereUniqueInput
    update: XOR<subject_reservationUpdateWithoutSubjectInput, subject_reservationUncheckedUpdateWithoutSubjectInput>
    create: XOR<subject_reservationCreateWithoutSubjectInput, subject_reservationUncheckedCreateWithoutSubjectInput>
  }

  export type subject_reservationUpdateWithWhereUniqueWithoutSubjectInput = {
    where: subject_reservationWhereUniqueInput
    data: XOR<subject_reservationUpdateWithoutSubjectInput, subject_reservationUncheckedUpdateWithoutSubjectInput>
  }

  export type subject_reservationUpdateManyWithWhereWithoutSubjectInput = {
    where: subject_reservationScalarWhereInput
    data: XOR<subject_reservationUpdateManyMutationInput, subject_reservationUncheckedUpdateManyWithoutSubjectInput>
  }

  export type subjectCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutSubjectInput
    course: courseCreateNestedOneWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
    grade?: gradeUncheckedCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subjectCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutSubjectInput
    course: courseCreateNestedOneWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_reservation?: subject_reservationCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
    grade?: gradeUncheckedCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_reservation?: subject_reservationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subjectUpsertWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    update: XOR<subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
    create: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput>
  }

  export type subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutSubjectNestedInput
    course?: courseUpdateOneRequiredWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    grade?: gradeUncheckedUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUpsertWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    update: XOR<subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
    create: XOR<subjectCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedCreateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput, subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput>
  }

  export type subjectUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutSubjectNestedInput
    course?: courseUpdateOneRequiredWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    grade?: gradeUncheckedUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type studentCreateWithoutSubject_reservationInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
    grade?: gradeCreateNestedManyWithoutStudentInput
    course: courseCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutSubject_reservationInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    course_id: bigint | number
    student_no: string
    grade?: gradeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutSubject_reservationInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutSubject_reservationInput, studentUncheckedCreateWithoutSubject_reservationInput>
  }

  export type subjectCreateWithoutSubject_reservationInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    grade?: gradeCreateNestedManyWithoutSubjectInput
    course: courseCreateNestedOneWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
  }

  export type subjectUncheckedCreateWithoutSubject_reservationInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
    course_id: bigint | number
    grade?: gradeUncheckedCreateNestedManyWithoutSubjectInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedCreateNestedManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput
  }

  export type subjectCreateOrConnectWithoutSubject_reservationInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutSubject_reservationInput, subjectUncheckedCreateWithoutSubject_reservationInput>
  }

  export type studentUpsertWithoutSubject_reservationInput = {
    update: XOR<studentUpdateWithoutSubject_reservationInput, studentUncheckedUpdateWithoutSubject_reservationInput>
    create: XOR<studentCreateWithoutSubject_reservationInput, studentUncheckedCreateWithoutSubject_reservationInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutSubject_reservationInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutSubject_reservationInput, studentUncheckedUpdateWithoutSubject_reservationInput>
  }

  export type studentUpdateWithoutSubject_reservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUpdateManyWithoutStudentNestedInput
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutSubject_reservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type subjectUpsertWithoutSubject_reservationInput = {
    update: XOR<subjectUpdateWithoutSubject_reservationInput, subjectUncheckedUpdateWithoutSubject_reservationInput>
    create: XOR<subjectCreateWithoutSubject_reservationInput, subjectUncheckedCreateWithoutSubject_reservationInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutSubject_reservationInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutSubject_reservationInput, subjectUncheckedUpdateWithoutSubject_reservationInput>
  }

  export type subjectUpdateWithoutSubject_reservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutSubjectNestedInput
    course?: courseUpdateOneRequiredWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutSubject_reservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    grade?: gradeUncheckedUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
  }

  export type gradeCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    course?: courseCreateNestedOneWithoutGradeInput
    student?: studentCreateNestedOneWithoutGradeInput
    subject?: subjectCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
  }

  export type gradeCreateOrConnectWithoutUserInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput>
  }

  export type gradeCreateManyUserInputEnvelope = {
    data: gradeCreateManyUserInput | gradeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type gradeUpsertWithWhereUniqueWithoutUserInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutUserInput, gradeUncheckedUpdateWithoutUserInput>
    create: XOR<gradeCreateWithoutUserInput, gradeUncheckedCreateWithoutUserInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutUserInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutUserInput, gradeUncheckedUpdateWithoutUserInput>
  }

  export type gradeUpdateManyWithWhereWithoutUserInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutUserInput>
  }

  export type courseCreateWithoutDegree_levelInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    grade?: gradeCreateNestedManyWithoutCourseInput
    student?: studentCreateNestedManyWithoutCourseInput
    subject?: subjectCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutDegree_levelInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
    grade?: gradeUncheckedCreateNestedManyWithoutCourseInput
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
    subject?: subjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutDegree_levelInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput>
  }

  export type courseCreateManyDegree_levelInputEnvelope = {
    data: courseCreateManyDegree_levelInput | courseCreateManyDegree_levelInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutDegree_levelInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutDegree_levelInput, courseUncheckedUpdateWithoutDegree_levelInput>
    create: XOR<courseCreateWithoutDegree_levelInput, courseUncheckedCreateWithoutDegree_levelInput>
  }

  export type courseUpdateWithWhereUniqueWithoutDegree_levelInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutDegree_levelInput, courseUncheckedUpdateWithoutDegree_levelInput>
  }

  export type courseUpdateManyWithWhereWithoutDegree_levelInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutDegree_levelInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id?: BigIntFilter<"course"> | bigint | number
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeNullableFilter<"course"> | Date | string | null
    code?: StringFilter<"course"> | string
    name?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    degree_level_id?: BigIntNullableFilter<"course"> | bigint | number | null
  }

  export type gradeCreateManyCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type studentCreateManyCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    email?: string | null
    birth_date: Date | string
    student_no: string
  }

  export type subjectCreateManyCourseInput = {
    id?: bigint | number
    created_at?: Date | string
    code: string
    title: string
    units: number
    updated_at?: Date | string | null
  }

  export type gradeUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutGradeNestedInput
    student?: studentUpdateOneWithoutGradeNestedInput
    subject?: subjectUpdateOneWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type gradeUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type studentUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUpdateManyWithoutStudentNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
    grade?: gradeUncheckedUpdateManyWithoutStudentNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_no?: StringFieldUpdateOperationsInput | string
  }

  export type subjectUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade?: gradeUncheckedUpdateManyWithoutSubjectNestedInput
    subject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
    subject_prerequisite_subject_prerequisite_subject_idTosubject?: subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectNestedInput
    subject_reservation?: subject_reservationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gradeCreateManyStudentInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type subject_reservationCreateManyStudentInput = {
    id?: bigint | number
    subject_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type gradeUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneWithoutGradeNestedInput
    user?: userUpdateOneWithoutGradeNestedInput
    subject?: subjectUpdateOneWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type gradeUncheckedUpdateManyWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type subject_reservationUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    subject?: subjectUpdateOneRequiredWithoutSubject_reservationNestedInput
  }

  export type subject_reservationUncheckedUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type subject_reservationUncheckedUpdateManyWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type gradeCreateManySubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
    encoded_by_user_id?: bigint | number | null
  }

  export type subject_prerequisiteCreateManySubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    subject_id: bigint | number
  }

  export type subject_prerequisiteCreateManySubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: bigint | number
    created_at?: Date | string
    prerequisites_subject_id: bigint | number
  }

  export type subject_reservationCreateManySubjectInput = {
    id?: bigint | number
    student_id: bigint | number
    reserved_at?: Date | string | null
    status: $Enums.status
  }

  export type gradeUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneWithoutGradeNestedInput
    user?: userUpdateOneWithoutGradeNestedInput
    student?: studentUpdateOneWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type gradeUncheckedUpdateManyWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    encoded_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_subject_prerequisite_subject_idTosubject?: subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_subject_idTosubjectNestedInput
  }

  export type subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_prerequisites_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_prerequisiteUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_subject_prerequisite_prerequisites_subject_idTosubject?: subjectUpdateOneRequiredWithoutSubject_prerequisite_subject_prerequisite_prerequisites_subject_idTosubjectNestedInput
  }

  export type subject_prerequisiteUncheckedUpdateWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prerequisites_subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_prerequisiteUncheckedUpdateManyWithoutSubject_subject_prerequisite_subject_idTosubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prerequisites_subject_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subject_reservationUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    student?: studentUpdateOneRequiredWithoutSubject_reservationNestedInput
  }

  export type subject_reservationUncheckedUpdateWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type subject_reservationUncheckedUpdateManyWithoutSubjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    student_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reserved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type gradeCreateManyUserInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    student_id?: bigint | number | null
    subject_id?: bigint | number | null
    course_id?: bigint | number | null
    prelim?: Decimal | DecimalJsLike | number | string | null
    midterm?: Decimal | DecimalJsLike | number | string | null
    final?: Decimal | DecimalJsLike | number | string | null
    final_grade?: Decimal | DecimalJsLike | number | string | null
    remark?: string | null
  }

  export type gradeUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneWithoutGradeNestedInput
    student?: studentUpdateOneWithoutGradeNestedInput
    subject?: subjectUpdateOneWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gradeUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    subject_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    course_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prelim?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    midterm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type courseCreateManyDegree_levelInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    code: string
    name: string
    description?: string | null
  }

  export type courseUpdateWithoutDegree_levelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: gradeUpdateManyWithoutCourseNestedInput
    student?: studentUpdateManyWithoutCourseNestedInput
    subject?: subjectUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutDegree_levelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: gradeUncheckedUpdateManyWithoutCourseNestedInput
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
    subject?: subjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutDegree_levelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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