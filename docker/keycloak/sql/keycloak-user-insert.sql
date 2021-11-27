INSERT INTO keycloak.USER_ENTITY
(ID, EMAIL, EMAIL_CONSTRAINT, EMAIL_VERIFIED, ENABLED, FIRST_NAME, LAST_NAME, REALM_ID, USERNAME,
 CREATED_TIMESTAMP, NOT_BEFORE)
VALUES ('fc8e95f2-1ca6-414d-8ca2-cac52abbbdf6', 'guest@mail.com', 'guest@mail.com', 0, 1, 'Guest', 'Hover',
        'playground-realm', 'guest', 1636614428146, 0);

INSERT INTO keycloak.CREDENTIAL
(ID, `TYPE`, USER_ID, CREATED_DATE, SECRET_DATA, CREDENTIAL_DATA, PRIORITY)
VALUES ('b8ef2880-fa55-403d-bb03-0c9b56e58dc3', 'password', 'fc8e95f2-1ca6-414d-8ca2-cac52abbbdf6', 1636615349391,
        '{"value":"dZQ9NZSwAUqjTHPcT9AwJNFdTFSaRNZrLGrHWbrYQw96B4V75gCDznmCeg2KZNIh1hZJl9bTjXFypQ0wnd/lEg==","salt":"pZtH53GJnV0eGApv+6g4Zg==","additionalParameters":{}}',
        '{"hashIterations":27500,"algorithm":"pbkdf2-sha256","additionalParameters":{}}', 10);

INSERT INTO keycloak.USER_ROLE_MAPPING
    (ROLE_ID, USER_ID)
VALUES ((SELECT ID FROM keycloak.KEYCLOAK_ROLE WHERE NAME = 'user'),
        (SELECT ID FROM keycloak.USER_ENTITY WHERE USERNAME = 'guest'));

INSERT INTO keycloak.USER_ROLE_MAPPING
    (ROLE_ID, USER_ID)
VALUES ((SELECT ID FROM keycloak.KEYCLOAK_ROLE WHERE NAME = 'default-roles-playground-realm'),
        (SELECT ID FROM keycloak.USER_ENTITY WHERE USERNAME = 'guest'));
