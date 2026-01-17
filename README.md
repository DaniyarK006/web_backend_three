# Web Backend Three: CRUD API with Node.js and MongoDB

## Assignment 3: Building a CRUD API for a Blogging Platform

### **Project Overview**

This project is designed to implement a fully functional CRUD (Create, Read, Update, Delete) API for a simple blogging platform using Node.js and MongoDB. It demonstrates the ability to build a RESTful API that handles blog post creation, retrieval, updating, and deletion. This is an individual project aimed at showcasing full-stack development skills.

---

### **Project Features**

* **Create Blog Post**: Users can create new blog posts with a title and body.
* **Read Blog Posts**: Users can retrieve a list of all blog posts or a single blog post by its ID.
* **Update Blog Post**: Users can update an existing blog post by its ID.
* **Delete Blog Post**: Users can delete a blog post by its ID.
* **Data Validation**: Ensures all required fields are validated before submission.
* **Error Handling**: Proper error handling for database issues and invalid requests.
* **Timestamps**: Each blog post includes `createdAt` and `updatedAt` timestamps.
* **Basic Front-End**: A simple front-end interface to interact with the API.

---

### **Installation Instructions**

1. **Clone the Repository**
   Clone the repository to your local machine.

   ```bash
   git clone https://github.com/DaniyarK006/web_backend_three.git
   cd web_backend_three
   ```

2. **Install Dependencies**
   Install the required dependencies using npm.

   ```bash
   npm install
   ```

3. **Setup MongoDB Database**
   Set up a MongoDB database. You can use either a local MongoDB server or MongoDB Atlas for a cloud-based solution. Update the MongoDB connection URI in the `server.js` file:

   ```js
   mongoose.connect('YOUR_MONGODB_URI_HERE', { useNewUrlParser: true, useUnifiedTopology: true });
   ```

4. **Run the Server**
   Start the server on port 5001 (or any other available port).

   ```bash
   node server.js
   ```

   The API will be available at `http://localhost:5000`.

---

### **API Endpoints**

1. **POST** `/blogs`
   Create a new blog post.

   **Request Body**:

   ```json
   {
     "title": "Your Blog Title",
     "body": "Your Blog Content",
     "author": "Author Name (optional, default: Anonymous)"
   }
   ```

   **Response**:

   ```json
   {
     "message": "Blog post created successfully",
     "blog": { ... }
   }
   ```

2. **GET** `/blogs`
   Retrieve all blog posts.

   **Response**:

   ```json
   [
     { ... }, 
     { ... }
   ]
   ```

3. **GET** `/blogs/:id`
   Retrieve a single blog post by its ID.

   **Response**:

   ```json
   {
     "blog": { ... }
   }
   ```

4. **PUT** `/blogs/:id`
   Update a blog post by its ID.

   **Request Body**:

   ```json
   {
     "title": "Updated Title",
     "body": "Updated Content"
   }
   ```

   **Response**:

   ```json
   {
     "message": "Blog post updated successfully",
     "blog": { ... }
   }
   ```

5. **DELETE** `/blogs/:id`
   Delete a blog post by its ID.

   **Response**:

   ```json
   {
     "message": "Blog post deleted successfully"
   }
   ```

---

### **Database Model**

Each blog post includes the following fields:

* **title**: (String, Required)
* **body**: (String, Required)
* **author**: (String, Optional, Default: "Anonymous")
* **createdAt**: (Date, Auto-generated)
* **updatedAt**: (Date, Auto-generated)

---

### **Error Handling**

Proper error handling is implemented for:

* **Database issues**: If there are issues connecting to the database, appropriate messages and status codes are returned.
* **Invalid requests**: Missing required fields such as `title` or `body` are flagged, and the user is notified with an appropriate message.

### **Testing the API**

You can test the API manually using tools like [Postman](https://www.postman.com/) by sending requests to the API endpoints. Ensure that the server is running before sending requests.

---

### **Frontend Interface**

A simple front-end interface has been created to interact with the CRUD API. This allows users to easily create, view, update, and delete blog posts directly from the web interface.
