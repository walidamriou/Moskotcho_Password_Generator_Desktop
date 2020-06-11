# Moskotcho Password Generator Desktop
Password generator desktop app to generate random &amp; secure passwords 

<p align="center">
  <img width="70%" height="70%" src="https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/screenshot/2020-06-11-18-36-45.png">
</p>

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:


```bash
# Clone this repository
git clone https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop 
# Go into the repository
cd Moskotcho_Password_Generator_Desktop
# Install dependencies
npm install --save-dev electron
# Run the app
npm start
```  
### Make snap from the project  
We use electron-installer-snap to builds a Snap for an already customized Electron app.
For more details on Snap-specific arguments, see the snapcraft syntax page:
https://snapcraft.io/docs/build-snaps/syntax

```bash
# install electron-installer-snap
sudo npm install electron-installer-snap -g
# chack version 
electron-installer-snap --version
```  


Then add to your package.json:
```bash
{
  // ...
  "scripts": {
    "build:package": "electron-packager . --out=out"
    "build:snap": "electron-installer-snap --src=out/myappname-linux-x64"
  },
  // ...
}
```  

Then you can run npm run build:package && npm run build:snap, which will prepare the Electron app for bundling and generate a .snap file in your current directory. It is recommended to ignore the generated snap directory in your version control.

###### Options:
```  

  --help             Show help                                         [boolean]
  --version          Show version number                               [boolean]
  --src              directory of the packaged Electron app
                                                  [default: "/home/walidamriou"]
  --dest             directory where the snap is written
                                                  [default: "/home/walidamriou"]
  --snapcraft        The absolute path to snapcraft. Defaults to searching in
                     PATH.                                              [string]
  --name             A maximum 30 character name of the snap package (defaults
                     to name in package.json)                           [string]
  --app-version      version of the snap package (defaults to version in
                     package.json)                                      [string]
  --summary          A maximum 78 character long summary for the snap (defaults
                     to description in package.json)                    [string]
  --description      The longer description for the snap                [string]
  --executable-name  The executable name of the Electron app, sans file
                     extension (defaults to productName or name in package.json)
                                                                        [string]
  --feature          The functionality to enable with the snap. Valid features
                     are listed in the API docs. Examples: --feature.audio
                     --feature.mpris=com.example.mpris
  --hook             One or more hook types to use with the snap. Example:
                     --hook.install=/path/to/script . For more types, see
                     https://docs.snapcraft.io/build-snaps/hooks
  --grade            The quality grade of the snap                      [string]
  --confinement      See: https://snapcraft.io/docs/reference/confinement
                                                                  [string]
```  


### Website of the project:  
https://moskotchopg.walidamriou.com/

<p align="center">
  <img width="50%" height="50%" src="https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/img/anim.png">
</p>

### If you need any help or informations:
:large_blue_circle:	 Facebook: https://www.facebook.com/walidamriou   
:large_blue_circle:  Twitter: https://twitter.com/walidamriou    
:red_circle: Email:  contact [at] walidamriou [dot] com    


