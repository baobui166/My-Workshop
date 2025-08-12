---
title: "Cleaning up resource"
date: "`r Sys.Date()`"
weight: 6
chapter: false
pre: " <b> 6. </b> "
---

In this section, we will **clean up all AWS resources** that were created during the workshop in order to:

- Avoid unwanted charges.
- Clear the testing environment.
- Ensure compliance with cloud resource management best practices.

---

### Delete Lambda Functions

1. Go to the AWS Console → **Lambda**
2. Select each function (e.g., `create_user`, `get_user`)
3. Click **Actions → Delete function**
4. Enter the function name to confirm and delete

> 📌 If you have multiple functions, double-check to avoid deleting the wrong ones.

---

### Delete API Gateway

1. Go to AWS Console → **API Gateway**
2. Select **REST APIs**
3. Choose the API you want to delete (e.g., `UserAPI`)
4. Click **Actions → Delete API** and confirm

> 🔒 After deletion, all associated endpoints will no longer be accessible.

---

### Delete DynamoDB Tables

1. Go to AWS Console → **DynamoDB**
2. Click on the **Tables** tab
3. Select each table (e.g., `Users`) → **Actions → Delete Table**
4. Confirm the deletion

> All data will be permanently lost if no backup exists.

---
