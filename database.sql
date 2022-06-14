-- CREATE DATABASE "minnesota-guidebook"


-- Areas 
CREATE TABLE "areas" (
  "id" SERIAL PRIMARY KEY,
  "state"  VARCHAR(2) NOT NULL,
  "name"  VARCHAR(120) NOT NULL,
  "overview" TEXT NOT NULL,
  "driving" TEXT NOT NULL,
  "approach" TEXT NOT NULL
);

-- Zones 
CREATE TABLE "zones" (
  "id" SERIAL PRIMARY KEY,
  "zone"  VARCHAR(120) NOT NULL,
  "overview" TEXT NOT NULL,
  "approach" TEXT NOT NULL,
  "gps"  VARCHAR(120)
);

-- Problems
CREATE TABLE "problems" (
  "id" SERIAL PRIMARY KEY,
  "area_id" VARCHAR(120) NOT NULL,
  "zone_id"  VARCHAR(120) NOT NULL,
  "variation"  BOOLEAN NOT NULL,
  "boulder_name" VARCHAR(120) NOT NULL,
  "problem_num" INT NOT NULL,
  "problem" VARCHAR(120) NOT NULL,
  "grade" VARCHAR(7),
  "project" BOOLEAN NOT NULL,
  "stars" INT NOT NULL,
  "description" TEXT NOT NULL,
  "fa" VARCHAR(120)
);

--------[ DATA! ]---------

-- Import from CSV files