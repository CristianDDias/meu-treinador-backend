## Commands

### Start

```
npm start
```

### Start dependencies

```
docker-compose run --rm start_dependencies
```

### Remove dependencies

```
docker-compose down --remove-orphans
```

### Run migration

```
npm run migration:run
```

### Create migration

```
npm run migration:generate -- [name]
```

## Environment variables

```
PORT=4000
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
DATABASE_LOGGING=true
PGSSLMODE=no-verify
```

The `PGSSLMODE` is necessary in order to prevent the pg_hba.conf SSL error in Heroku Postgres database.
