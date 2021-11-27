# keycloak-playground
Just a simple keycloak playground with a maven multimodule structure


## setup

### keycloak
1. `docker-compose up -d`
2. add user to keycloak db with the script [keycloak-user-inserts.sql](docker/keycloak/sql/keycloak-user-insert.sql)

### app
1. build frontend with `npm install`
2. start frontend
3. build backend with `./mvnw clean package -DskipUI` (skipUI because angular app has currently no prod profile)
4. start backend (currently no spring profile needed)


## app

### frontend
* call [http://localhost:4200](http://localhost:4200)
* user/pass: guest/password

### backend
* call [http://localhost:8087/api/v1/products](http://localhost:8087/api/v1/products)
* user/pass: guest/password

## keycloak

### admin console
* [http://localhost:8080/auth/admin/](http://localhost:8080/auth/admin/)
* user/pass: admin/admin

### account console
* [http://localhost:8080/auth/realms/playground-realm/account](http://localhost:8080/auth/realms/playground-realm/account)
* user/pass: guest/password (intial password: password)


## todos
* frontend routeguards rolebased
* add admin role to realm
