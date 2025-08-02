---
title: "Documentation"
date: "`r Sys.Date()`"
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

In **AWS API Gateway**, a **Stage** represents a specific deployment environment of your API — such as dev, test, or prod. Once a REST API is created and developed, it must be **deployed to a stage** to be accessible via an endpoint.

**Exporting an API** from a stage allows you to:

- Generate an **OpenAPI (Swagger)** document representing the deployed API structure.
- Share the API structure with the frontend team, mobile developers, or import into tools like **Postman**, **Swagger UI**, **Insomnia**, etc.
- **Version** your API and migrate easily between environments.

---

Steps

1.  Access AWS API Gateway

- Open the **API Gateway Console**
- Select the **REST API** you want to export

![export](/images/Export/export1.png)

- In the left panel → Choose **Stages**
- Click on the specific stage (e.g., `dev`, `prod`)

![export](/images/Export/export2.png)

---

2.  View Stage Information

When a Stage is selected, you’ll see:

- **Invoke URL**:  
  `https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}`
- Options for **logging**, **throttling**, **caching**, etc.

→ This is the endpoint users can call.

---

3.  Export the API’s OpenAPI Definition

- Return to the **main API screen** (not inside the Stage)
- Click the **Actions** button (top-left corner) → Select **Export**

![export](/images/Export/export3.png)

- Choose the format:

  - **Swagger / OpenAPI 2**
  - **OpenAPI 3**

- Download the file as `.json` or `.yaml`

![export](/images/Export/export4.png)

→ This file can be imported into Postman, Swagger UI, or other API documentation tools.

---

4.  Import to Postman

- Open **Postman** and click **Import** in the top-left corner

![export](/images/Export/export5.png)

- Drag and drop the downloaded file and click **Import**

![export](/images/Export/export6.png)

- Now you can start using the imported API immediately

![export](/images/Export/export7.png)
