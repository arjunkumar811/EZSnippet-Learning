# Self-Closing Tags in HTML

Self-closing tags (also known as void elements) are HTML elements that don't need a closing tag because they don't contain any content. These elements are used to insert/embed something into the document.

## Common Self-Closing Tags

1. **Image Tag**: `<img>` - Used to embed images in an HTML document

   ```html
   <img src="image.jpg" alt="Description of image" />
   ```

2. **Line Break**: `<br>` - Creates a line break

   ```html
   <p>This is a paragraph<br />with a line break.</p>
   ```

3. **Horizontal Rule**: `<hr>` - Creates a horizontal line

   ```html
   <hr />
   ```

4. **Input Tag**: `<input>` - Used to create input controls in forms

   ```html
   <input type="text" name="username" />
   ```

5. **Meta Tag**: `<meta>` - Provides metadata about the HTML document

   ```html
   <meta charset="UTF-8" />
   ```

6. **Link Tag**: `<link>` - Used to link to external resources like CSS files
   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

## HTML5 vs XHTML Syntax

In HTML5, self-closing tags can be written without the forward slash:

```html
<img src="image.jpg" alt="Description" />
```

In XHTML (and for HTML5 compatibility), they can be written with a forward slash:

```html
<img src="image.jpg" alt="Description" />
```

Both formats are valid, but it's good practice to be consistent with whichever style you choose.

## Why Learn About Self-Closing Tags?

Understanding self-closing tags is important because:

- They have a different syntax than regular HTML tags
- Attempting to add closing tags to these elements can cause errors
- They are used for many essential elements in web development

## Practice Exercise

Try creating an HTML page that uses at least 3 different self-closing tags in meaningful ways.
