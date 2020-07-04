# node-word
* create folder 
* initialize git 
* initialize yarn (yarn init -y)
* Add typescript 
	- command:
		yarn add typescript -D
		yarn tsc --init
* Add express dependency
	- command
		yarn add express cors
		yarn add @types/express @types/cors -D	
* Add server file
	- command:
		mkdir src
		touch src/server.ts
* Add ts node dev dependency to transform code in js
	- command:
		yarn add ts-node-dev -D
		yarn add tsconfig-paths -D
		
	- configuration:
		* package.json: 
			In package.json we need to configure the script section to execute the ts node dev. The script section is usualy configured up devDependencies secction;
			...
			"scripts": {
				"dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
			},
			"devDependencies": {....
			
	- observations:
		the ts node dev in a group of 3 tools: 
			* tsc: to trancribe the code; 
			* node: to execute de code; 
			* nodemoon: to whatch the changes;
		the ts node dev configured parameters in package.json script section means:
			* --respawn: to refresh all services loaded;
			* --transpileOnly: to not try check sintax errors during the trancribe process (this will be checked with eslint)
			* --ignore-watch node_modules: to not try to trancribe files in node_modules folder.
			* --no-notify: to not notify when a trancribe be executed.
			* -r tsconfig-paths/register: to undestand custom paths  
		Now to start the project just need to type yarn dev.
* Add Elint to validate the sintax.
	-- command:
		yarn add eslint -D
		yarn eslint --init	
		
	-- observations:
	the options to configure the Eslint are:
		✔ How would you like to use ESLint? · style
		✔ What type of modules does your project use? · esm
		✔ Which framework does your project use? · none
		✔ Does your project use TypeScript? · No / Yes
		✔ Where does your code run? · node
		✔ How would you like to define a style for your project? · guide
		✔ Which style guide do you want to follow? · standard
		✔ What format do you want your config file to be in? · JSON
		
	in the end of configuration files es lint will show a option to excute the additional instalations. Select no copy all the instalations and install with yarn
		@typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@>=6.2.2 eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0 @typescript-eslint/parser@latest
		✔ Would you like to install them now with npm? · No / Yes
		
		yarn add -D [packages copied] 
		exemple:
		yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@>=6.2.2 eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0 @typescript-eslint/parser@latest
		
* Add Jest to create unit tests 		
	-- command:
		yarn add jest -D
		yarn jest --init
		yarn add ts-jest -D
		yarn add @types/jest -D
		
	-- observations:
		The following questions will help Jest to create a suitable configuration for your project
		✔ Would you like to use Jest when running "test" script in "package.json"? … yes
		✔ Choose the test environment that will be used for testing › node
		✔ Do you want Jest to add coverage reports? … no
		✔ Which provider should be used to instrument code for coverage? › v8
		✔ Automatically clear mock calls and instances between every test? … yes
		
* Add babel to create production version
	-- command
		yarn add -D @babel/cli @babel/core @babel/node  @babel/preset-env @babel-typescript babel-plugin-module-resolver
