# 🎯 QR Code Generator - Setup Guide

A simple Node.js application that generates QR codes from URLs and saves them as PNG images.

## 📋 Prerequisites

- **Node.js** (LTS version recommended)
- **VS Code** (Visual Studio Code)
- **Git** (optional, for cloning)

---

## 🚀 Getting Started

### Step 1: Install Node.js

1. Visit [nodejs.org](https://nodejs.org/)
2. Download and install the **LTS (Long Term Support)** version
3. Verify installation by opening your terminal and running:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

---

### Step 2: Set Up Your Project in VS Code

#### Option A: Clone from GitHub (if repository exists)
```bash
git clone <repository-url>
cd qr-generator
code .
```

#### Option B: Create a New Project
1. Open **VS Code**
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type `Terminal: Create New Terminal` and press Enter
4. In the terminal, run:

```bash
mkdir qr-generator
cd qr-generator
code .
```

---

### Step 3: Create Your Files

1. In VS Code, create a new file called `index.js`
2. Copy and paste the following code:

```javascript
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([{
    type: 'input',
    name: 'url',
    message: 'Enter the URL'
}])
.then((answer) => {
    const url = answer.url;
    var qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('url_text.txt', url, (err) => {
        if (err) console.log(err);
        console.log("✅ URL text file and QR code created successfully!");
    })
})
.catch((err) => {
    if (err) throw(err);
})
```

---

### Step 4: Initialize NPM Project

In the VS Code terminal, run:

```bash
npm init -y
```

This creates a `package.json` file with default settings.

---

### Step 5: Configure ES6 Modules

1. Open `package.json` in VS Code
2. Add `"type": "module"` to enable ES6 imports:

```json
{
  "name": "qr-generator",
  "version": "1.0.0",
  "type": "module",
  "description": "Generate QR codes from URLs",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["qr", "qr-code", "generator"],
  "author": "Your Name",
  "license": "ISC"
}
```

---

### Step 6: Install Dependencies

In the VS Code terminal, run:

```bash
npm install inquirer qr-image
```

**What gets installed:**
- 📦 `inquirer` - Interactive command-line user interface
- 📦 `qr-image` - QR code image generator
- ✅ `fs` - Built-in Node.js file system (no installation needed)

---

### Step 7: Run the Application

In the VS Code terminal, run:

```bash
node index.js
```

## 💡 Usage Example

When you run the application, you'll see:

```
? Enter the URL: https://github.com/yourusername
✅ URL text file and QR code created successfully!
```

**Generated Files:**
- `qr_code.png` - QR code image of your URL
- `url_text.txt` - Text file containing the URL

---
