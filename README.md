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
### Make .snap from Ubuntu/Linux  
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
### Make macOS setup .dmg from macOS  
```bash
# install electron-builder -g 
sudo npm install electron-builder
# make dmg file, you will found it in /dist folder 
npm run dist_mac
```  
### Make Windows setup .exe from Ubuntu/Linux
```bash
# install electron-builder -g 
sudo npm install electron-builder
# Make .exe setup for windows 32 bit
npm run dist_win32
#Or Make .exe setup for windows 64 bit
npm run dist_win64
```  
### Website of the project:  
https://moskotchopg.walidamriou.com/

<p align="center">
  <img width="50%" height="50%" src="https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/img/anim.png">
</p>

### If you need any help or informations:
:large_blue_circle:	 Facebook: https://www.facebook.com/walidamriou   
:large_blue_circle:  Twitter: https://twitter.com/walidamriou    
:red_circle: Email:  contact [at] walidamriou [dot] com  ```    


### Copyright CC 2020 Walid Amriou

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

__You are free to:__
  * Share — copy and redistribute the material in any medium or format
  * Adapt — remix, transform, and build upon the material
The licensor cannot revoke these freedoms as long as you follow the license terms.  

__Under the following terms:__
  * Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
  * NonCommercial — You may not use the material for commercial purposes.
  * ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
  * No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.


the software or Code or Scripts or any files in this source is provided "as is" and the author disclaims all warranties with regard to this files including all implied warranties of merchantability and fitness. in no event shall the author be liable for any special, direct, indirect, or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of this software or code or scripts or any files in this source.
