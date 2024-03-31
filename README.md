Digivice

Local project
Clone or download the project from git

Installation dependencies
Run the npm install command and if necessary use --legacy-peer-deps to complete the installation.

Development server
Run ionic serve for a dev server. Navigate to http://localhost:8100/. The application will automatically reload if you change any of the source files.

Commands to be taken into account:

ionic build --prod:
This Ionic command compiles and builds the application in production mode. During this process, several optimizations are performed, such as minification of JavaScript and CSS files, removal of dead code, removal of comments, etc. The result is an optimized version of the application ready for deployment.

npm install @capacitor/android --legacy-peer-deps:
This npm command installs the @capacitor/android library, which is required to build and deploy the application to Android devices using Capacitor. The --legacy-peer-deps option is used to resolve any dependency-related issues so that it installs correctly.

npx cap add android:
This Capacitor command adds the Android platform to the project. Capacitor uses this information to configure the project structure and generate the files needed to deploy the application to Android devices.

npx cap sync:
This Capacitor command synchronizes the project files with the files generated specifically for each platform. For Android, this will include copying files from the Ionic www folder to the Android resource directory and any other adjustments needed to ensure the application is ready to be compiled and deployed to an Android device.

ionic capacitor build android --prod:
This command combines several steps into one. It uses
