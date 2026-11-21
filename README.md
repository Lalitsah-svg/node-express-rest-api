## Week 5 — PostgreSQL Database Integration

This project connects the Express REST API to a PostgreSQL database using the `pg` package and Supabase PostgreSQL.

### Database Tables

The database contains three related tables:

- `users` — stores registered users and hashed passwords
- `posts` — stores blog posts linked to users through `author_id`
- `tasks` — stores tasks linked to users through `user_id`

### Database Relationship

```text
users
  │
  ├── posts
  │     └── author_id → users.id
  │
  └── tasks
        └── user_id → users.id