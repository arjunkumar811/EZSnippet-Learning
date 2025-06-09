
# 🌐 How the Web Works – Server & Client

The internet (or "the web") is built on a **client-server** model. Here's a beginner-friendly explanation of how they work together:

---

## 1. 🖥️ Server

### What is a Server?

A **server** is a powerful computer (or program) that stores and serves content (like websites, files, or data). It **waits for requests** from clients and **sends back responses**.

### What Does a Server Do?

* Hosts websites and web applications
* Stores files, images, and databases
* Processes requests from clients
* Sends back HTML, CSS, JS, or data (like JSON)

### Example:

When you type `www.example.com` in your browser:

* Your browser sends a request to a **web server** (e.g., Apache, Nginx, Node.js)
* The server receives the request
* The server sends back a response, like an HTML page

### Common Server-Side Technologies:

* Languages: **Node.js**, **Python**, **PHP**, **Java**, **Ruby**
* Frameworks: **Express**, **Django**, **Laravel**, **Spring Boot**

---

## 2. 💻 Client

### What is a Client?

A **client** is any device (like your computer, phone, or tablet) that requests and uses services provided by a server. The most common type of client is a **web browser** (e.g., Chrome, Firefox, Safari).

### What Does a Client Do?

* Sends a request to a server (e.g., via a browser)
* Receives and displays the server’s response (e.g., a web page)
* May interact further using forms, buttons, or APIs (e.g., using JavaScript)

### How the Request/Response Cycle Works:

```text
Client (Browser) ---> sends HTTP request ---> Server
Client (Browser) <--- gets HTTP response <--- Server
```

### Common Client-Side Technologies:

* HTML: Structure of the page
* CSS: Styling the page
* JavaScript: Interactivity (clicks, forms, animations)

---

## 🕸️ Example Flow: Visiting a Website

1. You type `www.shop.com` in your browser (client).
2. The browser looks up the **IP address** of the server.
3. It sends an **HTTP request** to the server.
4. The server processes the request and sends back an **HTML file**.
5. The browser renders the HTML using **CSS** and **JavaScript**.
6. You see and interact with the website.

---

## 🔄 Summary

| Component  | Role                                                      |
| ---------- | --------------------------------------------------------- |
| **Client** | Sends requests and displays responses (e.g., web browser) |
| **Server** | Receives requests and sends responses (e.g., web host)    |

---

