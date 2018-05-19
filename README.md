# Drone UI for Parrot Minidrones
Just for fun, built using React / Express and Socket.io.

![Drone UI Screenshot](https://raw.githubusercontent.com/robertbg/drone-react/develop/screenshot.png)

## Usage Instructions
- `yarn install`
- Connect to minidrone via Bluetooth (instructions below)
- Add your minidrones network name to the 'droneName' property in config.js
- `yarn start`
- Browser will open control window in new tab
## How to connect to a minidrone via Bluetooth on a Mac
You won't be able to find the minidrone via a normal bluetooth device search as minidrones emit BTLE (Bluetooth Low Energy) connections. To connect to this, follow these instructions...

- Install XCode
- In the top menu, go to Xcode > Open Developer Tool > More Developer Tools
- This will open a page in your browser.
- Download and install the latest 'Additional Tools for XCode' binary.
- Open Hardware > Bluetooth Explorer
- In the top menu, go to Devices > Low Energy Devices
- Search for your drone and click 'Connect'

## Run Jest Unit Tests
- `yarn test`

## Other Fun & Games
- This repo also contains copies of the two command line based examples provided as part of the [parrot mini-drone node library](https://github.com/fetherston/npm-parrot-minidrone) used on this project. To play with these use the following commands.

### Keyboard Controls
To fly with the keyboard follow the below instructions.

1. Turn on the drone
1. Run `node cli/keyboard.js`
1. Wait to see the drone connected message in the console output

#### Control Layout
*Key* | Function
--- | ---
**Arrow Up** | Pitch +
**Arrow Down** | Pitch -
**Left Arrow** | Roll left
**Left Arrow** | Roll right
**w** | Altitude +
**s** | Altitude +
**a** | Yaw left
**d** | Yaw right
**t** | Toggle takeoff & land
**f** | Flattrim
**Escape** | Emergency land

### Dualshock PlayStation Controller
Follow these directions from the root of the project to fly with a PS3/4 controller

1. Turn on the drone
1. Plug in the controller via USB or connect to your computer via Bluetooth
1. Run `node cli/ps4.js`
1. Wait to see the drone connected message in the console output

#### Control Layout
*Button* | Function
--- | ---
**Right Analog Stick** | Altitude, yaw
**Left Analog Stick** | Roll, pitch
**Square** | Flat-trim
**Triangle** | Toggle takeoff & land
**Circle** | Emergency landing
**X** | Take a picture
**L1** | Left flip
**R1** | Right Flip
**L2** | Front Flip
**R2** | Back Flip

## Thanks to
- [This parrot mini-drone node library](https://github.com/fetherston/npm-parrot-minidrone).
- [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) for making get started on building a React app so easy! a starting point for the controller CSS.
- Credits:
  - Drone icon by mikicon from the Noun Project
