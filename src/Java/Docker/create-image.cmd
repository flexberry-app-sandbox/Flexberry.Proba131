docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba13-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba13-java/app ../../..
