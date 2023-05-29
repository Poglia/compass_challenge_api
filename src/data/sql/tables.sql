CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name TEXT NOT NULL,
  user TEXT NOT NULL,
  birthdate TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  profile_photo TEXT
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  post_date TEXT NOT NULL,
  description TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  ulr_image TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  user_id INTEGER,
  post_id INTEGER,
  comment TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

