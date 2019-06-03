BEGIN;

-- psql -h ec2-54-83-192-245.compute-1.amazonaws.com -U lyievkdhcaanjz -d d8fp3g9a3ed442 -f seeds/seed.tables.sql
-- psql -U postgres -d calculator -f seeds/seed.tables.sql

TRUNCATE
  "log";

INSERT INTO "log" ("id", "result")
VALUES
  (
    1,
    77
  ),
  (2,
    123
  );

SELECT setval('log_id_seq', (SELECT MAX(id) from "log"));

COMMIT;