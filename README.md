# Halocrypt - Core

This is the main repository of our quiz/game

## Stack

We are using Heroku/Dokku, runtime of python-3.6.10 and Flask
Backend is based on Postgresql and psycopg2 is the adapter used

# Code

Most of the code has been documented (TODO)
You can read more about the API below

# API

There are 3 main API Handlers

- [Users](https://github.com/Halocrypt-20/halocrypt-core/blob/master/api_handlers/user_manager.py)
- [Play](https://github.com/Halocrypt-20/halocrypt-core/blob/master/api_handlers/game_manager.py)
- [Admin](https://github.com/Halocrypt-20/halocrypt-core/blob/master/api_handlers/admin_panels.py)

They have been briefly discussed below
All Post requests require data as a JSON object see `fetch help` below

## User API

Route: `/api/user/:action`

This handler deals with authentication, registering, and reading user data.

### Available Actions

### `/api/user/add-user/`

Usage: Create a new (non-admin) account
Method: `post`

expected post data:

```json
{
  "user": "$user",
  "name": "$fullname",
  "school": "$school",
  "password": "$pass",
  "ig_user_id": "$insta"
}
```

Returns
on `success`

```json
{
  "id": "$userID",
  "current_level": "$current_level",
  "is_admin": "$is_admin",
  "is_disqualified": "$is_disqualified",
  "name": "name",
  "secure_data": {
    "email": "$email",
    "school": "$school",
    "ig_user_id": "$insta"
  }
}
```

on `error`

```json
{ "error": "$reason" }
```

Note: The password is hashed.

### `/api/user/authenticate/`

Usage: Log in a registered user
Method: `post`
expected post data:

```json
{ "user": "$user", "password": "$pasword" }
```

Returns
on `success`

```json
{
  "id": "$userID",
  "current_level": "$current_level",
  "is_admin": "$is_admin",
  "is_disqualified": "$is_disqualified",
  "name": "name",
  "secure_data": {
    "email": "$email",
    "school": "$school",
    "ig_user_id": "$insta"
  }
}
```

on `error`

```json
{ "error": "$reason" }
```

### `/api/user/get-user-details/?id={username}`

Usage: fetch general details of any user
Method: `get`

Returns
on `success`

```json
{
  "id": "$userID",
  "current_level": "$current_level",
  "is_admin": "$is_admin",
  "is_disqualified": "$is_disqualified",
  "name": "name"
}
```

on `error`

```json
{ "error": "$reason" }
```

Notice how the `secure_data` has been removed, this allows us to preserve privacy and only show private data when needed.

## Play API

Route: `/api/play/:action`

This handler deals with actual logic of answering questions and leaderboards

### Available Actions

### `/api/play/get-leaderboard`

Usagea: get current leaderboard positions
Method: `get`
Returns

```json
[
  {
    "id": "$userID",
    "current_level": "$current_level",
    "is_admin": "$is_admin",
    "is_disqualified": "$is_disqualified",
    "name": "name"
  }
]
```

### `/api/play/get-question`

Usage: Get current question of the user,requires user to be logged in
Method: `post`
returns

```json
{
  "question_level": "$question_level",
  "question": "$question",
  "hint": "$hint",
  "special_stringified_data": "$special_stringified_data",
  "game_over": false
}
```

if all questions are completed:

```json
{ "game_over": true }
```

### `/api/play/answer-question`

Usage: When user submits the Ques.
Method: `post`

Required post data

```json
{ "answer": "$answer" }
```

returns
on `correct`

```json
{ "result": true, "next_level": "$next" }
```

on `incorrect`

```json
{ "result": false }
```

The admin panel has not been documented yet.

# Fetch Help:

Use something like this:

```javascript
// get
const req = (url) => fetch(url, { credentials: "include" });
/* credentials:include is important */
// post
const port = (url, dict) =>
  fetch(url, {
    credentials: "include",
    body: JSON.stringify(dict),
    headers: { "content-type": "application/json" },
  });
```
