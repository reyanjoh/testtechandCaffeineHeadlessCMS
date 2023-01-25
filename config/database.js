module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8qempgp3jqqesoltj0-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'techandcaffeinedb_q82g'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '8MXjwy8zJNux9WHi9X3rOdSKVaJEduVA'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
