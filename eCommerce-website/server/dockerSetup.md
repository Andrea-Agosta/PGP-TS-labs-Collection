## Docker setup for the databases

I have created a `docker-compose.yml` file for you. This file will create the environment you will need:

* A PostGres server on port 5432
  * You can use `pgAdmin` (installed on your computers) to access the database
  * The data is stored in `./data/psql`, in the same directory as this repository.

### Credentials and .env files

The credentials for the databases are in separate `.env` files.

* PSql credentials found in `./containerConfig/psql.env`

### Docker scripts

There are 3 scripts in the `package.json` file to help you handle the docker environment:

* `docker:init` - to be run the first time you start the environment. This script will remove the `./data/` directory, initialize the databases with seed data, and then start up both databases
* `docker:start` - starts  the environment without resetting the databases
* `docker:close` - shuts the docker environment down