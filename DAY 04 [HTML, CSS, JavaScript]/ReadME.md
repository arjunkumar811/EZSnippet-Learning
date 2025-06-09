# 🌐 DAY 3 – Introduction to HTML, CSS, and JavaScript

In this lesson, we'll explore the three core technologies of web development: **HTML**, **CSS**, and **JavaScript**. These are the building blocks of every website you see on the internet.

---

## 🧱 1. What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language for creating web pages. It defines the **structure** and **content** of a webpage.

### 🔤 Example:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
````

> 📌 Think of HTML as the **skeleton** of your website.

---

## 🎨 2. What is CSS?

**CSS (Cascading Style Sheets)** is used to style and layout your web page — like colors, fonts, and spacing.

### 🎨 Example:

```html
<style>
  h1 {
    color: blue;
    text-align: center;
  }
</style>
```

### Full Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Styled Page</title>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial;
      }
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
```

> 🎨 CSS is the **skin and clothing** that makes the skeleton (HTML) look good.

---

## ⚙️ 3. What is JavaScript?

**JavaScript** adds **interactivity** to your website. It can respond to user actions, update the page dynamically, and control media.

### ⚙️ Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <h1 id="message">Click the button</h1>
    <button onclick="changeText()">Click Me!</button>

    <script>
      function changeText() {
        document.getElementById("message").innerText = "You clicked the button!";
      }
    </script>
  </body>
</html>
```

> ⚙️ JavaScript is like the **brain** that makes your webpage respond and interact with users.

---

## 🔄 Summary Table

| Language       | Role                     | Example Use                |
| -------------- | ------------------------ | -------------------------- |
| **HTML**       | Structure & Content      | Headings, text, images     |
| **CSS**        | Styling & Layout         | Colors, fonts, layouts     |
| **JavaScript** | Interactivity & Behavior | Buttons, animations, logic |

---

## ✅ What's Next?

You now understand the basics of how websites are built using:

* 🧱 HTML to structure content
* 🎨 CSS to style it
* ⚙️ JavaScript to make it interactive

---

