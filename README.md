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
