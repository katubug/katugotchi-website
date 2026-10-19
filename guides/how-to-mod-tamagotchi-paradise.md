---
layout: layout.html
---
# Guide: How to Mod the Tamagotchi Paradise

Q: Why would you want to mod your Tama Paradise?
A: If you want to customize your experience, if you like tinkering, or if you don't have access to a Tama Lab public device (which is most of us) (this is not to be confused with the Tama Home Lab that is releasing in the future).

Q: What can modding it do? 
A: You can cheat in items and gotchi points, do Lab Tama playdates or unlock Lab Tama exclusive items. With Wave 1 devices you can even emulate other color tama types, or other games entirely (like DOOM)!

Q: What are the risks?
A: As with all modding, there is a risk that you can lose save data or even brick your device. However, as long as you follow all the directions, there is very little risk of this happening.

**Needed for this Guide**
- A Tamagotchi Paradise, ideally Wave 1 (Pink Land, Blue Ocean, Purple Sky)
- A UART cord ("[What's a UART](/resources/#hacking-the-tamagotchi-paradise)?")
    - [Buy catalystwyrm's original UART connector](https://ko-fi.com/s/86de04ff8a)
    - [Buy a UART connector from AliExpress](https://www.aliexpress.us/w/wholesale-uart-tamagotchi.html)
- A PC with USB ports and either Google Chrome or Microsoft Edge.
- Either the TamaHome app ($7) or Paramix Studio (free). This guide will cover both.

## The Tamagotchi Paradise

<img src="/guides/mod-paradise/mpi-01.jpg" width="80%">

I will be using my Jade Forest, but I actually don't recommend this unless it's your only device. This is because the **Jade Forest does not have much room on the chip**, and **Glacier and Tropics have the same issue**. If you want to emulate other tamagotchis or other games, you'll need a **Wave 1 Device**.

However, on the later waves, you can still **unlock the other fields** and **add custom characters** etc.

## The UART Cord
It so happens that I have one of each type of UART cord. The original, handmade version:

<img src="/guides/mod-paradise/mpi-10.jpg">

And one from AliExpress:

<img src="/guides/mod-paradise/mpi-04.jpg">

Both will work the same! Obviously it's better to support the community than AliExpress, but as catalystwyrm is frequently sold out, I wouldn't stress it.

So your cable will have 2 ends. The USB end for your PC, and the weirdo end (that's a technical term) for your Paradise.

<img src="/guides/mod-paradise/mpi-05.jpg">

The weirdo end is a series of interlocking arms (henceforth referred to as "grabby bits") and bars for the grabby bits to, well, grab. Make sure the grabby bits on the weird end match the bar on the Paradise, and vice versa. Once you have them lined up, press them together.

<img src="/guides/mod-paradise/mpi-07.jpg">

It should look like this, where the little tab on the left goes into the left slot, and the same on the right side. Like a little yin-yang. Now hook the USB up to your PC and let's move on.

## Paramix Studio

Firstly we'll cover using **[Paramix Studio](https://mameise.github.io/Paramix-Studio/)**, a free app designed by mameise.

Here are some screenshots to reference:
<img src="/guides/mod-paradise/choose.png">

### 1: Connect

Once on the page, begin by **connecting your Tama**. Click "Device" in the top menu bar.

Then choose "Connect" from the window that appears. It will pop up a dialogue asking to connect to your tama via USB, mine is usually on port "COM3/4". Select the device and confirm the dialogue.

You'll also need to connect from the Tama's end:

<img src="/guides/mod-paradise/mpi-08.jpg">

Choose "Connection" from the Planet level menu, and then Download, then Download.

### 2: Read ROM and Backup

Once your device is connected, you'll need to Read the ROM. This means the app will read what is currently loaded onto your device. This will take a LONG time. Be patient and absolutely do not interrupt the connection while it's going!

It will give you a copy of the device's firmware to download, and it will also allow you to **backup your save data** locally. Be sure to back this up and keep it safe on your pc so you can restore from it later if something goes wrong and data gets corrupted. I mean, unless you bought a brand new device just for this, or you don't care about losing your save data. Then, do what you want, I'm not your mom.

### Configure Your Device

From there, depending on your device, you can configure what changes you want to make to the ROM.

**All Devices**
- Change Characters to custom sprites
- Edit or replace non-character sprites such as food or items
- Change names of Tamagotchi and Items (to match custom sprites)
- Load characters from Character Cards (idk what those are) or TamaSma cards
- Menu: add menus that give you access to the following functions:
    - Separate saves in different fields
    - Item and Tama point cheats
    - Change your tama (level, care, character)

**Wave 2+ Devices Only:**
- Unlock other fields (Jade Forest gets Sky, Tropical and Glacier get Land, Water and Sky)

**Wave 1 Devices Only:**
- Emulation: you can choose to emulate almost any Tamagotchi that you have the firmware for. ([Where do I get Tamagotchi Firmware?](/resources/#tamagotchi-emulation-resources))
    - You can also add items or patches to these custom firmwares, if they support it.
- You can also emulate DOOM if you have the firmware WAD.

### Save and Write your custom ROM

Once you've got things the way you want them, choose the "Save new ROM" button in the upper menu bar and save the file to your PC. You'll want it later in case you decide to make edits to it (which, btw, you can do without your Tama being plugged in).

Then, you can write your ROM to your device. Again, this will take *ages* but you need to be patient and **do not under any circumstances disconnect or interrupt the connection**. A partially applied ROM will potentially brick your device and you'll need to have it re-flashed by a professional. ([Where can I get my tamagotchi repaired?](/resources/#tamagotchi-repair-etc))

Once it has finished transferring, you can safely unplug the device. You do not need to disconnect it via the software, simply **hit the reset button** to exit the menu on the device and then safely unplug it from your PC. There are no special steps you need to take when unplugging as long as no transfer is occurring.

## TamaHome Instructions

Coming soon! Feel free to encourage me by [DMing me on Reddit](https://www.reddit.com/user/katubug/)!