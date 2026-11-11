---
layout: layout.html
---
# connecting the dots - a preservation project

Connecting the Dots is a project that aims to provide the Tamagotchi community with access to the firmware of the older Connection devices: the v4, v4.5, v5, v5.5, and v6. I have seen a lot of interest in such a project, and rather than just sit around and hope that "someone will do it," I decided to try to get the ball rolling, myself.

# table of contents
- [the backstory](#the-backstory)
- [current status](#current-status)
- [how you can help](#how-you-can-help)
- [join our discord](#join-discord)
- [the rom dumping process](#the-rom-dumping-process)

## the backstory <a name="the-backstory"></a>

So, quite unexpectedly, I have developed a passion for software preservation, particularly for Tamagotchis. The idea that the pieces of media we loved so much as kids (and adults) could just disappear or become unavailable to the general public is upsetting.

And as the prices of older models soar ever higher, I think the community at large is feeling similarly. It's wild that something that cost $15 at launch now costs $150+. I am in a position where I can generally eventually afford the devices that I want to play, but many people are not. And it's not fair that people without discretionary funds don't get to enjoy the Tamagotchis with some of the best gameplay.

This desire to bring the joy of virtual pets to everyone, regardless of their financial status, is the major driving force behind this project.

## current status <a name="current-status"></a>

11/11/26 - Great news! Azya has agreed to help us with the project! I am thrilled by this news, and you should be, as well.

11/09/26 - We're tackling the v4.5 first. I am seeking out a decapping service and I have contacted Azya, the developer of BrickEmuPy, for help towards this goal. Azya has offered to help us through the manual bitmapping process.

## how you can help <a name="how-you-can-help"></a>

The important parts! If you're interested in helping the project, here are some ways that you can do so!

- **Device Donation**: We are looking for people to donate devices to have the ROMs dumped from. These devices are not able to be returned, as the process of dumping the ROM damages them beyond playability. You may be able to keep your device's shell, I will edit this once I know for sure.
    - To donate a device, please [join our discord](https://discord.gg/VpsjZWBgqu) or [message me on reddit](https://www.reddit.com/user/katubug/) for details.
- **Fund Donation**: Funds go towards paying for decapsulation commissions and ROM imaging. If we receive excess funds for those purposes, extras will go first to device donors and then to bit-mapping volunteers.
    - To donate funds, [please visit my ko-fi](https://ko-fi.com/katu). **Include in your message that the funds are for Connecting the Dots**!! I use ko-fi for personal donations as well and I want to keep them separate.
- **Volunteering**: We will need people to help do the manual bit verification process. Each ROM is made up of millions of binary cells which contain the firmware's code, and they need to be verified by a human.
    - - To volunteer your time, please [join our discord](https://discord.gg/VpsjZWBgqu)!
- **Share**: If you might know of someone else interested in this project, send them this way!
- **Misc**: Right now I am looking for someone who has the ability to receive money from the USA and send it to Russia, to help me pay Azya for his time.

### to do any of these: <a name="join-discord"></a>

Please [Join our discord](https://discord.gg/VpsjZWBgqu)! If this link ever breaks, please [message me on reddit](https://www.reddit.com/user/katubug/) to let me know. You can also reach out to me on reddit if you do not use Discord.

## the ROM dumping process <a name="the-rom-dumping-process"></a>

Disclaimer: I am not an expert on this, but here is what I have learned so far. Take it with a grain of salt. For Connection-era devices, the process of dumping a ROM is trickier than with color tamas. Modern tamagotchis can sometimes be dumped without even needing to solder, but older ones have the ROMs hidden beneath a layer of black epoxy, which cannot be removed without at least potential damage to the device.

1. **Decapsulation**. Acid dissolves the black epoxy around the chip so the silicon die is exposed. This service requires lab equipment and is usually done by a commissioned decapping service.
2. **Staining**. In many ROMs, each bit is visible on the surface as a contact or a missing contact. In an implant ROM, the bit is set by doping chemicals implanted into the transistor, so it’s invisible. A chemical stain makes the implanted cells look a different color or shade from the others, which lets them be photographed.
3. **Photography**. The ROM array is imaged at high magnification, usually as many overlapping tiles stitched into a large image of a regular grid of cells.
4. **Bitmapping**. Software such as rompar lays a grid over the image and guesses whether each cell is a 1 or a 0 based on its brightness or color. The guesses are never perfect because of stain unevenness, dust, scratches, and focus problems. So a person has to go through and check or correct the bits - and a ROM of a few hundred kilobytes is at least several million cells.
5. **Decoding**. The raw bits aren't necessarily in the right order - rows and columns will map to addresses and bits can be inverted - essentially, you need to figure out how to read the ROM. Programs like bitract or Zorrom can help with this portion.