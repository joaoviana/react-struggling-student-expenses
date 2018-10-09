# Expenses App 💸💸

## Overview 

Track your expenses app;

Made with ReactJS, Redux and integration with Firebase. 

[Live Demo](https://struggling-student-expenses.herokuapp.com/)

## Setting up 

You need to set up a Firebase Account in order to run this app locally;

For that, you need to create two files on the root:

- .env.test

- .env.development

both files should look something like this:

```
FIREBASE_API_KEY= yourKey
FIREBASE_AUTH_DOMAIN= yourAuthDomain
FIREBASE_DATABASE_URL= yourDBURL
FIREBASE_PROJECT_ID= yourID
FIREBASE_STORAGE_BUCKET= yourStorageBucket
FIREBASE_MESSAGING_SENDER_ID= yourMessSenderID

(Do NOT use quotation marks for the values)
```

Separate env files have distinct rules on the firebase database. 

Rules for Development:

```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users":{
      "$user_id" :{
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses" :{
          "$expense_id": {
              ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
              "description": {
                ".validate":"newData.isString() && newData.val().length > 0"
              },
              "note": {
                ".validate":"newData.isString()"
              },
              "createdAt": {
                ".validate":"newData.isNumber()"
              },
              "amount": {
                ".validate":"newData.isNumber()"
              },
              "$other": {
          			".validate": false
        		}
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```


Rules for Testing:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


```
yarn install
```

```
yarn init
```

## Build it

Files are bundled and transpiled by babel and Webpack to public/bundle.js

```
yarn run build:prod
```

Styles are in scss files


## Start Server

run on port 8080:

```
yarn run dev-server
```

## Testing

Testings done with Jest and Enzyme.

 ```
 yarn run test
 ```

## Usage Demo

<img src="https://image.ibb.co/mMrjPU/ezgif_com_resize_2.gif" alt="ezgif_com_resize_2" border="0">
