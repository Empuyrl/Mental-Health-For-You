
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) 
);

CREATE TABLE "entries" (
  "id" SERIAL PRIMARY KEY,
  "entry_text" TEXT NOT NULL,
  "user_id" INTEGER REFERENCES "user",
  "createdate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "category" VARCHAR(80) DEFAULT 'general'
);

CREATE TABLE "response" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user",
  "questionnaire_type" VARCHAR(80) NOT NULL,
  "score" INTEGER NOT NULL,
  "createdate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "resources" (
  "id" SERIAL PRIMARY KEY,
  "resource_type" VARCHAR(80) NOT NULL,
  "resource_link" TEXT NOT NULL,
  "resource_description" TEXT NOT NULL,
  "createdate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_id" Integer
);