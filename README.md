# OpenFin Application Template

A simple unopinionated OpenFin Application template.  A Branch of this project should be make for each issue being investigated.

### What you get:

#### [Visual Studio code](https://code.visualstudio.com/) integration, thanks to @jcarter

* Attach to debugger
* app.json completion
* fin API completion

#### Basic HTML/Javascript Template

* HTML 5 and ES6 Template with OpenFin integration

#### Development server

* [live-server](https://www.npmjs.com/package/live-server)

#### Getting started:

##### Prerequisites

The launcher assumes you have the 'http-server' node module installed. If not use "npm install -g http-server" to install. The app will run on port 9001.

##### Cloning and branching
	git clone https://github.com/openfin/Support
	cd support
	git branch [ticket # OR branch name]
	git checkout [ticket # OR branch name]
	
##### Running
	npm install && npm start

##### Committing
	git add *
	git commit -m "some explanation of the ticket"
	git push origin [ticket # OR branch name]

##### Clone a ticket branch

	git clone -b [ticket # OR branch name] https://github.com/openfin/Support
