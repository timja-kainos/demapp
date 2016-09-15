DROP TABLE postcode_lookup;
DROP TABLE population;

CREATE TABLE postcode_lookup
(
  X        VARCHAR,
  Y        VARCHAR,
  objectid VARCHAR,
  pcd      VARCHAR,
  pcd2     VARCHAR,
  pcds     VARCHAR,
  dointr   VARCHAR,
  doterm   VARCHAR,
  usertype VARCHAR,
  oseast1m VARCHAR,
  osnrth1m VARCHAR,
  osgrdind VARCHAR,
  oa11     VARCHAR,
  cty      VARCHAR,
  laua     VARCHAR,
  ward     VARCHAR,
  hlthau   VARCHAR,
  hro      VARCHAR,
  ctry     VARCHAR,
  gor      VARCHAR,
  pcon     VARCHAR,
  eer      VARCHAR,
  teclec   VARCHAR,
  ttwa     VARCHAR,
  pct      VARCHAR,
  nuts     VARCHAR,
  park     VARCHAR,
  lsoa11   VARCHAR,
  msoa11   VARCHAR,
  wz11     VARCHAR,
  ccg      VARCHAR,
  bua11    VARCHAR,
  buasd11  VARCHAR,
  ru11ind  VARCHAR,
  oac11    VARCHAR,
  lat      VARCHAR,
  long     VARCHAR,
  lep1     VARCHAR,
  lep2     VARCHAR,
  pfa      VARCHAR,
  imd      VARCHAR
);

CREATE TABLE population
(
  "date"                                                                                                       VARCHAR,
  "geography"                                                                                                  VARCHAR,
  "geography code"                                                                                             VARCHAR,
  "Rural Urban"                                                                                                VARCHAR,
  "Variable: All usual residents; measures: Value"                                                             VARCHAR,
  "Variable: Males; measures: Value"                                                                           VARCHAR,
  "Variable: Females; measures: Value"                                                                         VARCHAR,
  "Variable: Lives in a household; measures: Value"                                                            VARCHAR,
  "Variable: Lives in a communal establishment; measures: Value"                                               VARCHAR,
  "Variable: Schoolchild or full-time student aged 4 and over at their non term-time address; measures: Value" VARCHAR,
  "Variable: Area (Hectares); measures: Value"                                                                 VARCHAR,
  "Variable: Density (number of persons per hectare); measures: Value"                                         VARCHAR
);

