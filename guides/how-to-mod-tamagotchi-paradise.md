---
layout: layout.html
---
# Guide: How to Mod the Tamagotchi Paradise

## Table of Contents
- [FAQ](#faq)
- [Needed for This Guide](#needed-for-guide)
    - [The Tamagotchi Paradise](#the-tamagotchi-paradise)
    - [The UART Cable](#uart-cable)
- [Paramix Studio Instructions](#paramix-studio-instructions)
    - [UI Guide](#paramix-ui-guide)
    - [Tutorial](#paramix-tutorial)
        - [Step 1: Plug In Your Device](#connect)
        - [Step 2: Connect Your Device](#connect-device)
        - [Step 3: Read ROM and Backup](#read-rom-backup)
        - [Step 4 (Optional): Replace ROM](#replace-rom)
        - [Step 5: Configure Your Device](#configure-your-device)
            - [How to Emulate Older Tamagotchis on the Paradise](#how-to-emulate)
        - [Step 6: Save Your Custom ROM](#save-write-custom-rom)
        - [Step 7: Write to Device](#write-rom)
        - [Step 8: Restart Your Device](#restart-device)
    - [Using the Paramix Menu](#using-paramix-menu)
        - [Fields](#menu-fields)
        - [Items](#menu-items)
        - [Points](#menu-points)
    - [How to Restore to Tamagotchi Paradise](#how-to-restore)
- [TamaHome App Instructions](#tamahome-app-instructions)
- [Other Resources](#other-resources)

## FAQ <a name="faq"></a>
**Q: Why would you want to mod your Tama Paradise?**

A: If you want to customize your experience, if you like tinkering, or if you don't have access to a Tama Lab public device (which is most of us) (this is not to be confused with the Tama Home Lab that is releasing in the future).

**Q: What can modding it do?**

A: You can cheat in items and gotchi points, do Lab Tama playdates or unlock Lab Tama exclusive items. With Wave 1 devices you can even emulate other color tama types, or other games entirely (like DOOM)!

**Q: What are the risks?**

A: As with all modding, there is a risk that you can lose save data or even brick your device. Additionally, emulating other Tamagotchis on the Paradise can be somewhat glitchy, and drains batteries very quickly (sometimes in a matter of days).

**Q: Where can I get custom content for my Tamagotchi Paradise?**

A: I have a list of links to various [Tamagotchi Shops here](/resources/#tamagotchi-shops)!

**Q: What hardware do I need?**

A: There are 3 main adapters that I know of: the UART Dongle, the PCOM, and the Patchi Paradise. Here is a quick rundown of the differences:
- **PCOM** - a proprietary connector for Android phones, sold by Tamagotchi Center. Only works with TC's web app. I do not recommend doing business with Tamagotchi Center, due to issues both with the community and that I have had personally. [See this link for more information](https://www.reddit.com/r/tamagotchi/comments/1v8cx08/psa_promotion_discussion_of_tamagotchi_center_is/).
- **UART Dongle** - A generic connector for PC-to-Paradise communication. The first one I know of was by [CatalystWyrm aka bbamorachi](https://bbamorachi.us/), but they're available from other sellers or for DIY as well.
- **Patchi Paradise** - A Paradise-to-PC connector by Marcel of TamaSpa. Unfortunately, due to German restrictions on imports and exports, this is currently unavailable outside of the EU.

**Q: What software do I need?**

A: You'll need a program that can communicate with your Paradise from your PC. I know of:
- [Paramix Studio](https://mameise.github.io/Paramix-Studio/) (Free) - **Requires a UART Dongle**. See the [Paramix Studio Instructions](#paramix-studio-instructions) below.
- [TamaHome App](https://ko-fi.com/s/000f617d4a) ($7)
- [Marcel's Patch Lab](https://ko-fi.com/s/1414b5336f) (Free) - **Requires Patchi Paradise Adapter, only available in Germany**. "With the adapter and the app you can do the following:
    - Send download items to your Tama
    - Gift items at no cost
    - Playdates with Lab Tama characters to obtain their genes
    - Simulate a Land, Water or Sky device to unlock the secret characters"
- [bbamoratchi tools](https://tools.bbamorachi.us/) - Tools for modifying the Tamagotchi Paradise. **Requires a UART Dongle**. Allows the following: Gifts (including Tama Lab), Playdates (including Tama Lab), Lab Codes, Money Boost, Trade Between Devices Online, Live Playdates with other users.

More tools: [Other Resources](#other-resources)

## Needed for this Guide <a name="needed-for-guide"></a>
- A Tamagotchi Paradise, ideally Wave 1 (Pink Land, Blue Ocean, Purple Sky)
- A UART cord ("[What's a UART](#uart-cable)?")
- A PC with USB ports and either Google Chrome or Microsoft Edge.
- Either the TamaHome app ($7) or Paramix Studio (free). This guide will cover both.

### The Tamagotchi Paradise <a name="the-tamagotchi-paradise"></a>

<img src="/guides/mod-paradise/mpi-01.jpg" width="50%">

If you have a Jade Forest, White Glacier, or Orange Tropics, you will first need to **replace the ROM** with Pink Land, Blue Ocean, or Purple Sky firmware. After that's written, **then you can add emulation for other tamas**.

This is because the Jade, Glacier, and Tropics all have bigger default firmware, which doesn't allow room for emulation. If you have a wave 1 (so land/sky/sea), you do not need to do this extra step.

If you only want other mods such as unlocking fields or adding cheats, then you also do not need to do the extra step.

### The UART Cable <a name="uart-cable"></a>
It so happens that I have one of each type of UART cord. The original, handmade version:

<img src="/guides/mod-paradise/mpi-10.jpg" width="80%">

And one from AliExpress:

<img src="/guides/mod-paradise/mpi-04.jpg" width="80%">

- [Buy catalystwyrm's original UART connector](https://ko-fi.com/s/86de04ff8a)
- [Buy a UART connector from AliExpress](https://www.aliexpress.us/w/wholesale-uart-tamagotchi.html)

Both will work the same! Obviously it's better to support the community than AliExpress, but as catalystwyrm is frequently sold out, I wouldn't stress it.

## Paramix Studio Instructions <a name="paramix-studio-instructions"></a>

Firstly we'll cover how to use **[Paramix Studio](https://mameise.github.io/Paramix-Studio/)**, a free app designed by mameise. As a forewarning, this app is AI-assisted, but it's unknown how much of the code was written by AI, as it is also closed source. YMMV.

This tool allows you to "rebuild your Paradise ROM", which means you can:
- run TamaEmu on your Paradise so you can emulate color Tamas on an actual device
- change the fields on your Paradise ("Tropical and Glacier get Land, Water and Sky, Jade Forest gets Sky. With pictures, special characters and the matching planet.")
- Switch fields, put items in the bag and set Tamapoints, right on the Paradise with A and C.
- Back up the ROM and write the new one with a USB UART dongle. Saves are kept, only changes are written.
- Add custom characters: Every character as an image sheet to edit, Digimon from DIM cards too. Colours and eyes are fitted automatically.
- And, of course, play DOOM.

You can follow the link above, however, "instead of going to the link you should go to [https://github.com/mameise/Paramix-Studio/releases](https://github.com/mameise/Paramix-Studio/releases) and download the latest release. Once the HTML file is downloaded, you can open it and it will open in your browser. This way is to ensure that you are always using the latest version of Paramix." - Credit to [fuzzynchic_rachel on instagram](https://www.instagram.com/p/DenSU5ak4BW/) for this.

### UI Guide <a name="paramix-ui-guide"></a>

This is a guide to the UI of Paramix Studio. If you just want the tutorial, you can [skip this section](#paramix-tutorial)!

Here's what the UI will look like when you have a Jade Forest device connected and a Water Paradise ROM loaded (You can see it's currently writing the Water ROM to the device):

<img src="/guides/mod-paradise/uiguide.png" width="80%">

##### Top Menu:
- **"Help"**: A guide to using the tool. Pressing this button toggles the tutorial.
- **"Device"**: Opens the "Device over UART" screen you see in the shot. Pressing this button toggles the window. Toggling this window will not interrupt reads or writes in progress.
- **"Open ROM"**: Allows you to load into the app a ROM file that you have saved on your computer.
- **"Save New ROM"**: Allows you to save an edited ROM file to your computer for later use.

##### Main/UART Menu:
- **"Connect"**: Choose this to connect your tama. Beside it, once your tama is connected, it will tell you what device is connected.
- **"Read ROM"**: This will read the ROM that is currently installed on the device, and will allow you to download a copy of it. If this is your first time, it will be a plain vanilla ROM (which you should keep in case you want to revert changes). If you've previously edited the ROM, the app will show what changes have been made.
- **"Write new ROM to the device"** - You must read or load a ROM to access this option. It has two suboptions:
    - **"Only Write Changes"**: When ticked, this will tell the app to only write the differences between the device's existing ROM and the one loaded into Paramix. If you're only unlocking fields or menus, leave this checked and it'll save you a lot of time. Untick this to completely overwrite the native ROM with the new one.
    - **"Keep Saves"**: If you're loading a ROM that is compatible with your existing save, leave this box ticked to ensure that your saves remain on the device. If you are changing the firmware entirely, then you need to untick this box.
- **"Back Up Save"**: This will backup your progress on the device. All the tamas you have raised, levels you have earned, and items you have obtained are contained in your save.
- **Save to Device**: This option lets you restore a save file from your PC onto your device. It overwrites the data on the device, so make sure you have a backup if needed!

##### "Your New ROM"
- A section showing you what customizations you have selected, and how much room it will use on the device.

##### Bottom Menu
- **"Characters"**: still investigating
- **"All Sprites"**: still investigating
- **"Names"**: still investigating
- **"Card"**: still investigating
- **"Emulator"**: Allows you to load in a ROM/Firmware for another type of tamagotchi to emulate on the device. Supports almost all tamagotchi types.
- **"DOOM"**: Allows you to play DOOM on your Tamagotchi Paradise. Because of course.
- **"Menu"**: Lets you add the Paramix cheat Menu to your device. It has some suboptions:
    - **"Start Device for Programs Only"**: If you don't want the Paradise firmware, this option will only keep what's necessary to run emulations.
    - **"Several Saves (with field choice)"**: Allows you to have multiple saves on the same device, each in a different Field. Still investigating whether time passes for other fields or only the active one.
    - **"Items and Tamapoints"**: still investigating
    - **"Change Tama (level, care, character)"**: still investigating
- **"Save"**: Allows you to save and load game saves. If you want to back up your emulated tamas, you can read the ROM and do that here.

### Tutorial <a name="paramix-tutorial"></a>

#### Step 1: Plug In Your Device <a name="connect"></a>

So your cable will have 2 ends. The USB end for your PC, and the weirdo end (that's a technical term) for your Paradise.

<img src="/guides/mod-paradise/mpi-05.jpg" width="50%">

The weirdo end is a series of interlocking arms (henceforth referred to as "grabby bits") and bars for the grabby bits to, well, grab. Make sure the grabby bits on the weird end match the bar on the Paradise, and vice versa. Once you have them lined up, press them together.

<img src="/guides/mod-paradise/mpi-07.jpg" width="50%">

It should look like this, where the little tab on the left goes into the left slot, and the same on the right side. Like a little yin-yang. Now hook the USB up to your PC and let's move on.

Once on the page, begin by **connecting your Tama**. Click "Device" in the top menu bar.

<img src="/guides/mod-paradise/step1.png" width="50%">

#### Step 2: Connect Your Device <a name="connect-device"></a>

<img src="/guides/mod-paradise/step2.png" width="50%">
<img src="/guides/mod-paradise/step2a.png" width="50%">

First, connect from the Tama's end: choose "Connection" from the Planet level menu, and then Download, then Download.

Then choose "Connect" from the window that appears. It will pop up a dialogue asking to connect to your tama via USB, mine is usually on port "COM3/4". Select the device and confirm the dialogue.

#### Step 3: Read ROM and Backup <a name="read-rom-backup"></a>

Once your device is connected, you'll need to Read the ROM. This means the app will read what is currently loaded onto your device. This will take a LONG time. Be patient and absolutely do not interrupt the connection while it's going!

It will give you a copy of the device's firmware to download, and it will also allow you to **backup your save data** locally. Be sure to back this up and keep it safe on your pc so you can restore from it later if something goes wrong and data gets corrupted. I mean, unless you bought a brand new device just for this, or you don't care about losing your save data. Then, do what you want, I'm not your mom.

<img src="/guides/mod-paradise/mpi-11.jpg" width="50%">
<img src="/guides/mod-paradise/step3.png" width="50%">

#### Step 4 (Optional): Replace ROM <a name="replace-rom"></a>

If you have a Jade, Glacier, or Tropics Paradise, you'll need to first switch the ROM to Land/Sky/Water. If you have a wave 1 device, [skip to the next step](#configure-your-device).

<img src="/guides/mod-paradise/step4.png" width="50%">

Open the ROM for Land, Sky, or Water, and then choose to write new ROM to device. Wait a long time for it to write, then when it's done, restart your device and [begin the tutorial again from Step 1](#connect).

<img src="/guides/mod-paradise/step4a.png" width="50%">

#### Step 5: Configure Your Device <a name="configure-your-device"></a>

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

**Wave 1 Devices Only:** <a name="how-to-emulate"></a>
- Emulation: you can choose to emulate almost any Tamagotchi that you have the firmware for. ([Where do I get Tamagotchi Firmware?](/resources/#tamagotchi-emulation-resources))
    - You can also add items or patches to these custom firmwares, if they support it.
- You can also emulate DOOM if you have the firmware WAD.

Choose the ROM for the Tamagotchi version you want to emulate.

<img src="/guides/mod-paradise/step5.png" width="50%">

Some emulators will let you add custom content at this stage by clicking the little arrow beside the firmware name. Examples include the IDL, 4U, PS, and Tamago.

<img src="/guides/mod-paradise/step5a.png" width="50%">

#### Step 6: Save Your Custom ROM <a name="save-write-custom-rom"></a>

The "Your new ROM" section will tell you what you've chosen to add to the device, and how much space remains.

Once you've got things the way you want them, choose the "Save new ROM" button in the upper menu bar and save the file to your PC. You'll want it later in case you decide to make edits to it (which, btw, you can do without your Tama being plugged in).

<img src="/guides/mod-paradise/step6.png" width="50%">

#### Step 7: Write to Device <a name="write-rom"></a>

Then, you can write your ROM to your device. Again, this will take *ages* but you need to be patient and **do not under any circumstances disconnect or interrupt the connection**. A partially applied ROM will potentially brick your device and you'll need to have it re-flashed by a professional. ([Where can I get my tamagotchi repaired?](/resources/#tamagotchi-repair-etc))

<img src="/guides/mod-paradise/step7.png" width="50%">

#### Step 8: Restart Your Device <a name="restart-device"></a>

Once it has finished transferring, you can safely unplug the device. You do not need to disconnect it via the software, simply **hit the reset button** to exit the menu on the device and then safely unplug it from your PC. There are no special steps you need to take when unplugging as long as no transfer is occurring.

<img src="/guides/mod-paradise/step8.png" width="50%">

You're done! Press the wheel button in to return to the Paradise in case you want to make changes to your device.

<img src="/guides/mod-paradise/step9.png" width="50%">

### Using the Paramix Menu <a name="using-paramix-menu"></a>

Okay so full disclosure, this part of the guide is under construction, because I am still figuring this all out, myself.

First up, if you chose to add the Paramix "Menu", here is a video showing how to access it - basically, press A and C together while on the Planet screen, and hold them for a few seconds.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P8Gxdj64LHo?si=lzzblxFUfHdTFoKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

That will bring up this menu:

<img src="/guides/mod-paradise/mpi-13.jpg" width="50%">

#### Fields <a name="menu-fields"></a>
The top option will let you choose which field to play. You can choose from any of the fields your device comes with, or that you've chosen to install. I do not know if the fields you're not playing will progress timewise, but my assumption is no.

#### Items <a name="menu-items"></a>
In this menu, you can choose items to be added to your game. You select the item, and then you can edit the count to be added. This seems to work well with Outdoor Toys, but it doesn't work well with food, it seems. Additionally, there seems to be no way to remove an item from your bag, once you've selected it. Perhaps this is user error on my part. If you know better, please [DM me on Reddit](https://www.reddit.com/user/katubug/)!

<img src="/guides/mod-paradise/mpi-15.jpg" width="80%">

#### Points <a name="menu-points"></a>
This shows your current gotchi points, and allows you to edit the number to whatever you'd like. Saving this value is reflected immediately ingame.

### How to restore from emulation to Tamagotchi Paradise <a name="how-to-restore"></a>

If you eventually decide you'd like to go back to your original firmware, here's how to do it.

1. Connect your UART Cable and bring up Paramix Studio (the order of this step doesn't matter).
2. Restart your tama. You can do this by pressing and holding the lab/wheel button and then hitting A. 
    - Pressing the reset button will not work (it will bring you to the continue/reset screen, but resetting from there will only restart your emulation, not the Paradise).
3. On the tama, name your planet and wait for your egg to hatch.
    - No menus will be available during the egg phase.
4. Then, navigate to the planet menu and select "Connection" > "Download" > "Download".
5. In Paramix, "Connect" to the tama.
6. From the top menu, choose "Open ROM" and select your Tamagotchi Paradise firmware (you downloaded it, right?).
7. Choose "Save to Device" and load in the progress file that you saved earlier.
8. Make sure "Only Write Changes" is unticked, and "Keep Saves" is checked.
9. Choose "Write new ROM to the device."
10. Wait for it to finish loading (a long long time).
11. Reset your tamagotchi via the reset button on the back.
12. Ta da! You're back!

## TamaHome App Instructions <a name="tamahome-app-instructions"></a>

Coming soon! Feel free to encourage me by [DMing me on Reddit](https://www.reddit.com/user/katubug/)!

## Other Resources <a name="other-resources"></a>
- [TamaSprite App](https://ko-fi.com/s/0cba4105ef) - Customize your Tamagotchi Paradise & Jade Forest firmware with ease! With Sprite Editing, Organization, Ghost Slot Editor, and Firmware support.
- [Paradise Sprite Browser](https://ko-fi.com/s/d48fe485c7) - "Browse all 1400+ sprites from Tamagotchi Paradise across original Shell and Jade Forest variants."
- [TamaSuite Discord](https://discord.gg/P58pHU7CN) - a discord for the discussion of TamaHome etc.
