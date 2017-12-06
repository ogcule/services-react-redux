DROP DATABASE IF EXISTS services;
CREATE DATABASE services;

\c services;

CREATE TABLE service (
  ID SERIAL PRIMARY KEY,
  image VARCHAR(512) NOT NULL,
  name VARCHAR NOT NULL UNIQUE ,
  address VARCHAR NOT NULL,
  telephone VARCHAR(12) NOT NULL,
  email TEXT NOT NULL,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  link VARCHAR NOT NULL,
  rcgp VARCHAR NOT NULL,
  postcode VARCHAR(8) NOT NULL,
  tags text[],
  referral VARCHAR NOT NULL
);

INSERT INTO service (image, name, address, telephone, email, category, description, link, rcgp, postcode, tags, referral)
  VALUES (
    'https://res.cloudinary.com/deyh3ywme/image/upload/v1511615182/img_service_cwof3o.png',
     'not available',
     'not available',
     '111111111111',
     'not available',
     'Community',
     'not available',
     'not available',
     'Healthy People',
     'postcode',
     array['Cardiovascular'],
     'not available'
   );

ALTER TABLE service ADD tsv TSVector;

CREATE TRIGGER TS_tsv
  BEFORE INSERT OR UPDATE ON service
FOR EACH ROW EXECUTE PROCEDURE
  tsvector_update_trigger(tsv, 'pg_catalog.english', name, address, email, category, description, postcode, referral);

CREATE INDEX tsv_GIN ON service
  USING GIN(tsv);

  DROP TABLE IF EXISTS faq;
  CREATE TABLE faq
  (
    ID SERIAL PRIMARY KEY,
    question VARCHAR NOT NULL UNIQUE,
    answer VARCHAR NOT NULL
  );

  INSERT INTO faq (question, answer)
  VALUES ('Where to I find out about a service?', 'Hopefully with the help of this api!' );
