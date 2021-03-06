# MyArticleApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).







## Start the api server it will connect the mongodb service (mongodb server of mlab https://mlab.com/databases/myarticle#users )

## If the mongoDB connection fails, API won't start, it is handled in this way.

## Steps to deploy on cloud for the first time:
For AWS follow : https://in.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352
`or`
1. Update your apt packages:
`sudo apt-get update`
2. Install git.
`sudo apt-get install git`
3. Copy the download link for Node.js from the Node.js Downloads page (https://nodejs.org/en/download/). Locate the 64-bit Linux Binaries (.tar.xz) download link. Right-click the link and copy it to your clipboard.
4. Change to your home directory.
`cd ~`
5. Type in wget and paste the download link in place of the highlighted URL below:
`wget https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x64.tar.xz`
6. Create a directory for Node.js.
`mkdir node`
7. Extract the archive you downloaded into the node directory:
`tar xvf node-v*.tar.xz --strip-components=1 -C ./node`
8. Create an etc folder in the node folder.
`mkdir node/etc`
9. Configure npm's global prefix. Npm will create symbolic links to installed Node.js packages, to your default path. Set the path to /usr/local:
`echo 'prefix=/usr/local' > node/etc/npmrc`
10. Move the npm and Node.js binaries to the /opt/node install location:
`sudo mv node /opt/`
11. Make root the owner of the file:
`sudo chown -R root: /opt/node`
12. Create symbolic links of the Node.js and npm binaries in the default path:
`sudo ln -s /opt/node/bin/node /usr/local/bin/node`
`sudo ln -s /opt/node/bin/npm /usr/local/bin/npm`
13. Save and close the file.
14. You can verify if Node.js is installed by checking its version:
`node -v`
 
`Note: If the version is displayed, Node.js's runtime is now installed and ready to run an application.`

## Install and configure PM2
We will use PM2 to manage Node.js applications. PM2 makes it easy to automate and manage applications by running them as a service.

1. Use Node.js Packaged Modules (NPM) to install PM2 on our app server. Npm is a package manager for installing Node.js modules.
`sudo npm install pm2 -g`
Manage Application with PM2
2. Start the application with PM2 so that it runs in the background:
`pm2 start hello.js`
Your application will be added to PM2's process list, which will be displayed each time 

## deploy latest changes from GIT
1. Login in PuTTY, using username `ubuntu` & passphrase if `.ppk` key
2. browse to API project folder
`cd /home/ubuntu/i2h/i2h/`
3. do a git pull from the branch you want the latest code
`git pull origin dev`
4. restart the server

## commands after deployment
1. for restarting `back-end` server
`sudo service nginx restart`

similar commands
`sudo service nginx status`
`sudo service nginx stop`
`sudo service nginx start`

2. for restarting DB service
`sudo service mongod restart`

3. for restarting `front-end` server
`sudo service apache2 restart`


# Currently dsit of my-article UI repo https://github.com/Smi0001/my-article is commited in this repo to run using this API server.
