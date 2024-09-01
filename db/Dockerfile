FROM postgres:12-alpine

# Set environment variables
ENV POSTGRES_USER=${PG_USER}
ENV POSTGRES_PASSWORD=${PG_PASSWORD}
ENV POSTGRES_DB=${PG_NAME}

# Copy initialization scripts
COPY create_tables.sql /docker-entrypoint-initdb.d/
COPY create_tables.sh /docker-entrypoint-initdb.d/

# Use the default entrypoint provided by the postgres image
ENTRYPOINT ["docker-entrypoint.sh"]

# Run the initialization script
CMD ["postgres"]
