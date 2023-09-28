# CodePulse.UI
Angular UI for learning Angular

From Udemy course here:  https://www.udemy.com/course/real-world-app-angular-aspnet-core-web-api-and-sql/

***You must also download and setup this project:***  https://github.com/GregFinzer/CodePulse.API

## Development Environment Setup for the UI
### Install the LTS Version of Node
https://nodejs.org

Or install with Chocolatey
```dos
choco install nodejs-lts
```

## Install the Angular CLI

At the command prompt
```dos
npm install -g @angular/cli
```


### Install VS Code
https://code.visualstudio.com/

Or install with Chocolatey
```dos
choco install vscode
```

### Install VS Code Extensions
* ESLint:  https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Angular Snippets (Version 16):  https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
* CSS Formatter:  https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter
* Angular Language Service: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
* IntelliSense for CSS class names in HTML:  https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
* Path Intellisense:  https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

Or install on the command line
```dos
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension dbaeumer.vscode-eslint
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension johnpapa.Angular2
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension aeschli.vscode-css-formatter
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension Angular.ng-template
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension Zignd.html-css-class-completion
call "C:\Program Files\Microsoft VS Code\bin\code" --install-extension christian-kohler.path-intellisense
```

### Restore the Node Modules
Go to where you have cloned the UI project and execute this on the command line:
```dos
npm install
```

## Running the Application
* Setup the API project following the ReadMe File:  https://github.com/GregFinzer/CodePulse.API
* Run the API project in Visual Studio
* On the command line:

```dos
ng serve --open
```

**Admin User**

User Name: admin@codepulse.com

Password:  Password1!



