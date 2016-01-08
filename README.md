# collar wearable 

<!-- [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sandeepmistry/node-bleacon?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
 -->

A Node.js app for raspberrry pi wearable device

## Prerequisites

 * See [noble prerequisites](https://github.com/sandeepmistry/noble#prerequisites) and [bleno prerequisites](https://github.com/sandeepmistry/bleno#prerequisites) for your platform

## Install

```sh
npm install 
```

## Usage
start scanning
```node app.js```

start simulating
```node beacon_sim.js```

## Configuring

 * [Bleu Station](https://github.com/sandeepmistry/node-bleacon/tree/master/bleu-station)
 * [Estimote](https://github.com/sandeepmistry/node-bleacon/tree/master/estimote)

## iBeacon Advertisement format

__Note:__ not official, determined using [noble](https://github.com/sandeepmistry/noble), and the [AirLocate](http://adcdownload.apple.com/wwdc_2013/wwdc_2013_sample_code/ios_airlocate.zip) example.

Following data is in the manufacturer data section of the advertisment data

```
<company identifier (2 bytes)> <type (1 byte)> <data length (1 byte)> <uuid (16 bytes)> <major (2 bytes)> <minor (2 bytes)> <RSSI @ 1m>
```

Example:

```
4C00 02 15 585CDE931B0142CC9A1325009BEDC65E 0000 0000 C5
```

 * Apple [Company Identifier](https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers) (Little Endian)
 * data type, 0x02 => iBeacon
 * data length, 0x15 = 21
 * uuid: ```585CDE931B0142CC9A1325009BEDC65E```
 * major: ```0000```
 * minor: ```0000```
 * meaured power at 1 meter: ```0xc5``` = ```-59```

[![Analytics](https://ga-beacon.appspot.com/UA-56089547-1/sandeepmistry/node-bleacon?pixel)](https://github.com/igrigorik/ga-beacon)