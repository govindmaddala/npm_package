# Creating UI packages

- Copy src folder and keep necessary folders.
- remove app.js, index.js
- create npm project
  1. npm init and give version and all
  2. npm i react typescript tslib @types/react --save-dev
  3. npx tsc -init (it creates tsconfig.json)
- tsconfig.json has following content
  <style>
    .code-container {
      position: relative;
      display: inline-block;
    }
  
    .copy-button {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: #008CBA;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 12px;
    }
  
    .copy-button:active {
      background-color: #005f6b;
    }
  
    .json-content {
      padding: 10px;
      color: white;
      background-color: black;
      border: 1px solid #ddd;
      border-radius: 5px;
      white-space: pre;
    }
  </style>
  <div class="code-container">
    <button class="copy-button" onclick="copyToClipboard()">Copy</button>
  <pre id="json-content" class="json-content">
  {
    "compilerOptions": {
      "target": "ES5",
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": ["src"]
  }
  </pre>
  </div>
  <script>
    function copyToClipboard() {
      var content = document.getElementById('json-content').innerText;
      navigator.clipboard.writeText(content).then(function() {
        alert('Copied to clipboard!');
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    }
  </script>

- To bundle all of these we can use webpack or modern packages like rollup.
  <span style="background-color: black; color: white; padding: 10px 20px; border-radius: 3px;">npm i rollup</span>
  <br/>

  <span style="background-color: black; color: white; padding: 10px 20px; border-radius: 3px;">npm i @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-peer-deps-external @rollup/plugin-terser rollup-plugin-dts --save-dev</span>

- also install external dependencies needed for your project, here I have used react-toastify
- npm login
- npm publish