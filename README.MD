# Project using Express and Sequelize to create a RESTful API for manage Employees & Customers.

> Additional information:

-   Babel (using import, export)

-   ESLint (using rules to enforce code quality by Airbnb)

-   Prettier (using rules to format code)

-   REST Client - extentions (to use RESTful API)

---

# Practice

1. Create database MySQL with name is "nodejs_sequelize"

2. Configure connection with MySQL at "config/dbConfig.js"

3. Install all packages

```
    npm i
```

3. Run project (automatic create tables employees & customers)

```
    npm start
```

4. CRUD data by using RESTful API or REST Client

---

## Explain

-   Employee và customer có quan hệ 1 - nhiều ( 1 employee có nhiều customers )

-   Khóa ngoại liên kết 2 bảng là salesRepEmployeeNumber

[![1-to-many.png](https://i.postimg.cc/g0FmKJgp/1-to-many.png)](https://postimg.cc/87H2p18X)
