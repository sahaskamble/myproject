// Generated by Xata Codegen 0.29.4. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    columns: [
      { name: "username", type: "string", unique: true },
      { name: "password", type: "string", unique: true },
    ],
  },
  {
    name: "movies",
    columns: [
      {
        name: "movie",
        type: "string",
        notNull: true,
        defaultValue: "movie_name",
      },
      { name: "rating", type: "float", notNull: true, defaultValue: "0.0" },
      {
        name: "image",
        type: "file[]",
        "file[]": { defaultPublicAccess: true },
      },
      {
        name: "imdb_url",
        type: "string",
        notNull: true,
        defaultValue:
          "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",
      },
    ],
  },
  {
    name: "drama",
    columns: [
      {
        name: "drama",
        type: "string",
        notNull: true,
        defaultValue: "drama_name",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Movies = InferredTypes["movies"];
export type MoviesRecord = Movies & XataRecord;

export type Drama = InferredTypes["drama"];
export type DramaRecord = Drama & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  movies: MoviesRecord;
  drama: DramaRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Darker-Than-Shados-s-workspace-2elv1d.us-east-1.xata.sh/db/Quickbook",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
