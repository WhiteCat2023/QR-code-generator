# QR-code-generator

Made by Berndt Dennis F. Canaya

This repo is for a simple QR Code generator made from HMTL, CSS, and JS. This single web page code allows you to generate QR codes from your given text or url and displays it as an image to the page which you can use to scan and retrive the value of the QR code displayed.

## Steps in making this QR Code Generator

Use must have atleast basic understanding of HTML, CSS, and JS.

### Step 1: Create index.html, styles.css, script.js

![image](https://github.com/user-attachments/assets/3b0c7e19-ddac-4957-bdc7-ee9b0bab0a73)

Step 1 is to make these 3 files in your code editor it can be any editor of your choice. Mine is Visual Studios Code because it easier for me. The 'styles.css' and 'script.js' is optinal since we can also add the styles and functionalities directly to the HMTL file which is our 'index.html' so make sure you have that HTML file 

### Step 2: Code the HTML skeleton

![image](https://github.com/user-attachments/assets/6eb4e295-f707-45a8-913a-a0e3e4528581)

Every HTML file needs to have this as there skeleton. The `<!DOCTYPE html>` tag represents that the document type of the file is HTML and then the '<html></html>' where we can add our '<head></head>' and '<body></body>', I'll discuss in another time if ever I get on to my plan in making a youtube videos about coding.

### Step 3: Structure your HTML

In my HTML file I structured it as a semantic HTML so I wont have problem in designing the page makes it more readable

Code: 

![image](https://github.com/user-attachments/assets/8a913b2a-89ca-4830-8021-73ec0e8a5ba4)

Output: 

![image](https://github.com/user-attachments/assets/351aa14a-8a3f-40fc-b0d1-09d435232538)

So, this is the output of our HTML file so colorless right? That's where Step 4 comes in


NOTE: Think of the '<div></div>' as an invisible box when structuring your HTML or a box where you can group things together.

### Step 4: Add colors to your page

![image](https://github.com/user-attachments/assets/59f84c16-e99f-4324-abde-436dcd39dd90)

In 'styles.css' is the file where you can have full control in designing the page however you want externally. I say externally because 'styles.css' is an external stylesheet for your 'index.html' those internal stylesheets like the ones in '<style></style>' tags can override the styles written in the 'styles.css' and also the direct styling 'style=""' attribute of all tags can override all those styles.

![image](https://github.com/user-attachments/assets/da82a0d2-6281-4838-ad73-d7e0f9499b77)

and this is the output of my 'index.html' file after adding the design. Not that bad and not that good right? It is because this is for a school submission purposes ONLY because if I were to take this seriously it will take me long hours thinking about the design HAHAHAHA and I might even add more features and functionalities if this was a personal project.

### Step 5: Add functionalities

![image](https://github.com/user-attachments/assets/d6468482-b696-4b52-92e8-6cbd06ce3a4c)

In my 'index.html' as you can see there are tags with 'id=""' and 'class=""' attributes assigned to them. These are the attributes that we will use in manipulating the DOM in the 'script.js'. But first, to be able to use the 'toDataURL()' function which turn the data to an qr code url we must include the script for the <b>QRious library</b> to be able to use the function and we jsut need to copy and paste the CDN for this library

  <code> <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script> </code>

