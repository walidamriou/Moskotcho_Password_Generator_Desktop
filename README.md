# Moskotcho Password Generator Desktop
Password generator desktop app to generate random &amp; secure passwords 

<p align="center">
  <img width="70%" height="70%" src="https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/screenshot/2020-06-11-18-36-45.png">
</p>

## Install it from Snap store snapcraft  
[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/moskotcho-password-generator) 

or install it from the terminal by:
```bash
sudo snap install moskotcho-password-generator
```

## To develop 

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
# install electron-builder -g 
sudo npm install electron-builder
```  
Then add to your package.json:
```bash
{
  // ...
  "scripts": {
    //..
        "dist": "electron-builder --linux snap",
    //..
  },
  // ...
}
```  
Then run
```
npm run dist
```

You will found the .snap in dist folder.
we use snapcraft upload --release=stable Moskotcho-Password-Generator_1.0.0_amd64.snap to upload it to the snapcraft

### Website of the project:  
https://moskotchopg.walidamriou.com/

<p align="center">
  <img width="50%" height="50%" src="https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/img/anim.png">
</p>

### If you need any help or informations:
:large_blue_circle:	 Facebook: https://www.facebook.com/walidamriou   
:large_blue_circle:  Twitter: https://twitter.com/walidamriou    
:red_circle: Email:  contact [at] walidamriou [dot] com  ```    


