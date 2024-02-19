![image](https://user-images.githubusercontent.com/33088785/189915358-b8d75cf5-9b10-43b8-a874-3cf08b0b95c5.png)

# FOSSA!
## Use the webinstaller to flash on configure fossa.lnbits.com


## OFFLINE, FOSS, CHEAP, BILLS/COINS, EASY CONFIG WEB PORTAL 


> <i>Join our <a href="https://t.me/makerbits">telegram support/chat</a>.</i>

## Demo

https://twitter.com/arcbtc/status/1567639231333277697

## Video tutorial

https://www.youtube.com/watch?v=vbyYb9Yiu_k

## Parts (PROJECT COST UNDER £200!)

Can run with a coin mech and bill acceptor, or either on their own.
* ESP32 WT32-SC01 **£20**
* DG600F(S) Multi Coin Acceptor **£30**
* NV10USB+ bill acceptor (Seems to be plenty 2nd hand ones on ebay) **£70**
* Box ("aluminum medicine box" on amazon **£30**), ("Amazon Basic Home Safe", for more secure solution **£70**)
* Screw Terminal block **£1**
* 12v power supply, best to get one with terminal block adapter (12v battery also works well, for unplugged version) **£8**
* 12v to 5v step down converter with USB **£5**
* Male/female GPIO jumpers **£5**

![image](https://user-images.githubusercontent.com/33088785/188955691-248981d3-7189-4548-a650-60986cc3d433.png)


## Construction

### WT32-SC01 Pinmap
<img src="https://user-images.githubusercontent.com/33088785/188833972-1665fb20-39be-456e-93a1-276c0e2a9237.png" style="width:400px">

### Coin acceptor wiring

![169517488-65bfba37-0c9c-4dc4-9533-c6c4517cc1ff](https://user-images.githubusercontent.com/33088785/188748943-960a15fd-f0c8-48e9-870a-af6cde1a3b31.png)

> You can usually order the coin acceptor pre-programmed to your currencies, otherwise you will need to train the acceptor using <a href="https://www.youtube.com/watch?v=Dyun1xjKqc4">this guide</a>.

### Bill acceptor wiring

![169518370-2bdf7acd-e5f9-4d34-bd34-26854b805704](https://user-images.githubusercontent.com/33088785/188748970-7f463a3b-0594-4902-b8c9-0e084029618d.png)

> The bill acceptor needs to be programmed to your currency and set to `SIO` mode, usually you can buy them preconfigured. If you have to program, buy <a href="https://www.innovative-technology.com/shop/cables/nv9-nv10-usb-host-cable-detail">this wire</a> and download the Validator Manager software <a href="https://www.dropbox.com/sh/2mle0czl2j2w7yq/AABie6AJQTq-tXmBv1TUhBUGa?dl=0">here</a> or <a href="http://www.innovative-technology.com/support/secure-download">here</a> (sadly only runs on windows, so use a friends machine). Details on programming can be found <a href="https://github.com/arcbtc/fossa/blob/main/NV10Manual_2.PDF.pdf">here</a>. Its relatively straight forward to program, plug in USB host cable, turn on holding config button for 2 secs, open the Validator Manager software.

Page 42 of the <a href="NV10 operations manual.pdf">NV10 USB Operations Manual</a> shows a wiring diagram for the NV10 USB host cable if you want to build your own programming cable.

> (Ignore all the hardware requirements for programming in the guide, you just need the host cable! Don't try using the programming cards in the guide, thats an old system these machines no longer support "Many Bothans died to bring us this information,")
### Mounting in box

Use the templates provided <a href="cuttingTemplate.pdf">here</a>. print out at 100% on standard UK A4, and check the dimensions are correct after printing. Its useful if the pins on the bill acceptor and coin mech are accessible.

* For the `Aluminim Storage Box` solution, holes can be cut with a sharp knife (clearly not secure, but fine for somewhere you can keep an eye on the ATM or for demoes).

* For the `Home Safe` solution, holes can be cut with angle grinder and a very thin cutter. (If you have not used an angle grinder before, don't be scared, they're cheap, easy enought to use, and very useful. Just take your time and wear safetly equipment.)

We use CT1 sealent/adhesive (or similar) for mounting screen, although the screen has screw points, which should prob be used for added security.

## Installing arduino + libraries

Install the Arduino IDE,<br>
https://www.arduino.cc/en/Main/Software

Install the ESP32 hardware,<br>
https://github.com/espressif/arduino-esp32#installation-instructions

Copy the libraries from this projects <a href="/libraries">libraries</a> folder, to your `"/Arduino/libraries"` folder (usually in OS `"Home"` directory)

![BITCOIN](https://i.imgur.com/mCfnhZN.png)


### LNbits configuring

* Go to your LNbits install (you can use our demo server for testing).
* Enable LNURLDevices extension.
* Create an ATM attached to wallet, select a currency and set percentage profit
* Copy the LNURLATM string

![image](https://user-images.githubusercontent.com/33088785/169524860-203a6c07-eb61-4b68-b493-098ca6333c01.png)

* Strip apart copied LNURLATM string and replace credentials <a href="https://github.com/arcbtc/fossa/blob/1fca72627d6bd7cfc2f2a1a7df8ca23acfd6ed62/noAccessPointSimpleFOSSA/noAccessPointSimpleFOSSA.ino#L16">here</a>
