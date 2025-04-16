---
title: 1 - Assembly Environment Setup
description: Multiple ways to set up assembly development with legal, ethical, and security insights.
# author: Starlight
date: 2025-04-16 22:45:00 +0500
categories: [Computer Organization & Assembly Language (COAL), Assembly Language]
tags: [assembly, development environment]
pin: true
# toc: false
# math: true
# mermaid: true
image:
  path: /assets/img/posts/asm-environment-setup.png
  lqip: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUmHQlJLQjAUCfPAAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==
  alt: Assembly Development Environment Setup
# render_with_liquid: false
---

## Legal, Ethical, and Security Considerations

Before diving into anything related to assembly development or reverse engineering, it's crucial to keep your work within **legal and ethical boundaries**, and to stay mindful of **security implications**. This section outlines potential pitfalls, risks, and tips to keep your environment safe and compliant.

### ⚖️ Reverse Engineering and the Law
{: data-toc-skip='' .mt-4 }

Only reverse-engineer software you own, have explicit permission to analyze, or that is open-source/public domain.

- Analyzing commercial or protected software may violate:
  * End-User License Agreements (EULAs)
  * Local or international laws depending on your country
- Ignorance of the law is not a defense—**know your rights and limits** before analyzing third-party binaries. 

### 🔐 Strong Encryption and Jurisdiction
{: data-toc-skip='' .mt-4 }

The use or possession of "**strong encryption**" (e.g., AES-128/192/256) may be restricted or regulated in certain countries. Always verify its legal status in your jurisdiction before using or distributing such algorithms.

- **What is Strong encryption?**
  * "**Strong encryption**" refers to cryptographic methods that provide a high level of security.
  * These methods typically use long key lengths, such as AES-256, which are resistant to brute-force attacks and modern cryptanalysis.
  * It is essential for protecting sensitive data, secure communications, and intellectual property.
  * The use or possession of strong encryption is restricted or regulated in some countries due to national security, surveillance, or export control concerns.
- **In the context of reverse engineering**:
  * Strong encryption can be a major obstacle in reverse engineering, as it obscures code, data structures, and communication protocols.
  * Security researchers, software analysts and ethical hackers often encounter encrypted binaries or communications that require lawful and ethical analysis methods.
  * It's important to understand and follow the legal frameworks around encryption and reverse engineering in your jurisdiction to stay compliant and avoid legal issues. 

### 🛡️ Antivirus False Positives (e.g., Avast CyberCapture)
{: data-toc-skip='' .mt-4 }

- If your program's EXE is blocked by antivirus software, it's likely a **false positive**, not an actual threat.
  * Antiviruses have become increasingly aggressive due to the rapid rise in new threats.
  * This means even harmless or custom-built executables, especially those written in low-level languages like assembly, can get flagged.
- **There are a few effective workarounds to address this issue**:
  * **Add an Exclusion**: Add your project's build directory to your antivirus's exclusion list. This prevents real-time scanners from flagging or quarantining your files.
  * **Temporarily Disable Real-Time Scanning**: As a last resort, disable real-time protection, but only while disconnected from the internet to avoid potential threats.
- **Biased AV Detection**:
  * In some cases, **large companies may compensate antivirus vendors** to flag *specific software*, files, or portable executables as malicious, leading to *biased analyses* and *false positive detections*.
  * Many antivirus programs rely on **signature-based detection**, which scans for code patterns or behaviors commonly associated with known malware. As a result:
    * Legitimate programs may be incorrectly classified as a virus.
    * False positives can occur if your code resembles malicious software in structure or functionality.
    * Use of unconventional techniques—especially in custom or experimental builds—can be misinterpreted as malicious activity.

### 🕵️ Sensitive Data Exposure
{: data-toc-skip='' .mt-4 }

When reverse-engineering or analyzing executable files (EXEs), it's important to understand that they may unintentionally contain private or sensitive information. This exposure can pose security risks and potential legal concerns if not handled properly.

- 🔍 **Common Types of Exposed Data**:
  * **Hard-coded paths and user details**: Executables may include absolute file paths that reveal usernames, directory structures, or development environments.
  * **Debug symbols and metadata**: When symbols are not stripped, binaries can contain function and variable names, source file references, inline comments, and compilation timestamps.
  * **Embedded secrets**: Sensitive data may be embedded directly into the binary, including API keys and tokens, encryption keys, and plaintext passwords.

  These artifacts are most commonly found in **debug builds**, which preserve extra metadata for development, and **improperly stripped release builds**, where symbol and debug data are left intact.

- 🌐 **Network and System Information Leakage**: Executables may also include technical details related to system or network interaction:
  * IP addresses and MAC addresses, especially in programs that log activity or connect to remote servers.
  * File descriptors, system handles, or port numbers that expose how the program interacts with the OS or hardware.

  This type of data often appears in debugging output or logs stored within the binary, and in memory dumps or disassembly during dynamic or static analysis.

- ⚠️ **Responsible Handling of Sensitive Information**: Reverse engineers and security professionals must:
  * Use **controlled**, **isolated environments** (e.g., virtual machines, sandboxes) when analyzing binaries.
  * Follow **ethical disclosure practices** if vulnerabilities or sensitive data are discovered.
  * Ensure their work complies with **local laws and privacy regulations**.

  Always assume that any sensitive information found in a binary may belong to real users or systems, and handle it with the same care as production data.

### ☁️ Uploading Binaries to Online Services
{: data-toc-skip='' .mt-4 }

- Online debugging and analysis platforms often retain uploaded binaries to build comprehensive databases used for security research, malware tracking and pattern recognition, and quality assurance or detection refinement.
- Retained binaries may also serve as **forensic evidence** and help platforms comply with legal or regulatory requirements.
- These services often maintain **transparency** about their data handling practices, but uploading proprietary or sensitive binaries still carries risks.
- **Uploaded binaries may be**:
  * Shared with third-party platforms like **VirusTotal**.
  * Integrated into **YARA** rule databases.
  * Provided to **antivirus vendors** or **decompiler authors** for tool and signature development.
- This collaborative ecosystem improves threat intelligence, enhances malware detection techniques, and supports the development of advanced reverse engineering and security tools.

## Setting Up the Development Environment

Before diving into writing assembly programs, it's essential to set up a suitable development environment. This process ensures you have all the necessary tools and software to write, assemble, and debug your code effectively. In this section, we'll explore several ways you can set up your development environment, so you can choose the approach that works best for you.

> Tools to get started with Assembly are discussed [here](/posts/intro-to-asm/#%EF%B8%8F-tools-to-get-started-with-assembly).
{: .prompt-info }

The tables and methods shown are based on specific tools, but they should work similarly with other versions—for example, Windows 11, different Linux distributions (for Linux-based methods), or alternative versions of the assembler, linker, debugger, or IDE.

| **Method** | **Platform** | **Editor/IDE** | **Assembler(s)** | **Debugger(s)** | **Additional Tools** |
|------------|--------------|----------------|------------------|-----------------|----------------------|
| [**#1**](#method-1) | Windows 10 | Notepad | NASM (DOS) | AFD | DOSBox emulator |
| [**#2**](#method-2) | Windows 10 | Visual Studio 2022 | NASM | — | — |
| [**#3**](#method-3) | Windows 10 | Built-in (EMU8086) | Built-in (EMU8086) | Built-in | EMU8086 emulator |
| [**#4**](#method-4) | Windows 10 | ASM Visual | MASM / FASM / TASM | OllyDbg, x64dbg, WinDbg, or built-in | — |
| [**#5**](#method-5) | Windows 10 | Visual MASM | MASM32 | — | — |
| [**#6**](#method-6) | Windows 10 | WinAsm Studio | MASM32 | — | — |
| [**#7**](#method-7) | Windows 10 | SASM | NASM, MASM, FASM, GAS | GNU `gdb` (integrated) | GNU `gcc`, GNU `ld` linkers |
| [**#8**](#method-8) | Windows 10 | Visual Studio 2022 | MASM | Visual Studio built-in | — |
| [**#9**](#method-9) | Manjaro Linux | Kate | GAS | GNU `gdb` | GNU `ld` linker |
| [**#10**](#method-10) | Manjaro Linux | Nano | NASM | GNU `gdb` | GNU `ld` linker |
| [**#11**](#method-11) | Windows 10 | VS Code | NASM | x64dbg, IDA Free, Ghidra, WinDbg, GNU `gdb` | GoLink, GNU `ld`, GNU `gcc`/`g++`, Polink, MS Link |

### Method #1

| **Tools Used** | **Description**          |
| -------------- | ------------------------ |
| **OS**         | Windows 10 (64-bit)      |
| **Editor/IDE** | Windows Notepad          |
| **Assembler**  | NASM (v2.16.03-dos)      |
| **Debugger**   | AFD (v2.0)               |
| **Emulator**   | DOSBox (v0.74-3) - win32 |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;">The NASM + DOSBox + AFD setup is a classic and educational choice for learning <strong>16-bit x86 assembly</strong> programming in a DOS-like environment. This method replicates the simplicity and constraints of older systems, making it ideal for understanding the basics of low-level programming.</p>
  <ul>
    <li><strong>NASM</strong> is a powerful assembler that can generate machine code for various architectures. In this setup, it is configured to produce 16-bit binaries compatible with DOS.</li>
    <li><strong>DOSBox</strong> is a 32-bit emulator that provides a virtual DOS environment, allowing you to run these 16-bit programs on modern systems.</li>
    <li><strong>AFD</strong> is a 16-bit debugger that enables you to analyze and debug assembly programs at a low level, providing insights into real-mode execution, including registers, memory, and interrupts.</li>
  </ul>
  <p style="text-align: justify;">This configuration enables experimentation with <strong>real-mode assembly</strong>, such as creating <code class="language-plaintext highlighter-rouge">.COM</code> files, handling interrupts like <code class="language-plaintext highlighter-rouge">INT 21h</code>, and understanding the <code class="language-plaintext highlighter-rouge">segment:offset</code> memory model. <code class="language-plaintext highlighter-rouge">.COM</code> files are 16-bit executable files designed for DOS, specifically made to run on 16-bit x86 processors like the 8086/8088. These files are executed in real mode, which is limited to 16-bit operations and constrained by the 1 MB memory limit of DOS. DOS loads <code class="language-plaintext highlighter-rouge">.COM</code> files starting at offset <code class="language-plaintext highlighter-rouge">0x100</code>, and the <code class="language-plaintext highlighter-rouge">ORG 0x100</code> directive aligns your program accordingly. This setup focuses on legacy 16-bit architecture, using registers like <code class="language-plaintext highlighter-rouge">AX</code>, <code class="language-plaintext highlighter-rouge">BX</code>, and <code class="language-plaintext highlighter-rouge">CX</code>, and works within the constraints of DOS's 1 MB memory limit.</p>
  <p style="text-align: justify;">However, there are significant <strong>limitations</strong>. DOS is fundamentally a 16-bit operating system, operating in real mode, which lacks access to extended memory models and modern processor modes. This means the setup is strictly for <b>16-bit assembly programming</b> and cannot support 32-bit or 64-bit code. DOSBox is designed to emulate 16-bit DOS applications and cannot execute programs written for 32-bit (protected mode) or 64-bit (long mode) architectures. Similarly, AFD is limited to debugging 16-bit real-mode programs and does not support modern instruction sets or memory models.</p>
  <hr>
  <p style="text-align: justify;">When working with assembly code, the tools and environments required depend on the architecture of the code and the operating system you're using.</p>
  <p style="text-align: justify;"><strong>For 32-bit code</strong>, you'll need a <b>32-bit linker</b> to create executables, as tools like DOSBox and AFD are not capable of processing these types of applications. On a <strong>64-bit system</strong>, you can also assemble 32-bit code with NASM, but running and debugging it requires a 32-bit runtime environment or compatible tools. For debugging, tools like OllyDbg can be used on 32-bit systems, while x64dbg, WinDbg or Visual Studio are suitable on both 32-bit and 64-bit systems.</p>
  <p style="text-align: justify;"><strong>For 64-bit code</strong>, you'll need a <b>64-bit linker</b> and tools like x64dbg, WinDbg or Visual Studio, which support 64-bit applications and take full advantage of modern processor features. If you're on a <strong>32-bit system</strong>, you can only directly run and debug 32-bit applications. To work with 64-bit assembly, you would need a 64-bit system or a virtual machine running a 64-bit OS, as 32-bit systems cannot execute 64-bit programs.</p>
  <hr>
  <p style="text-align: justify;">A <b>.COM</b> file in DOS runs without linking because it is a <b>flat binary</b> with no headers, relocation, or external dependencies—it loads at a fixed address (<code class="language-plaintext highlighter-rouge">0x100</code>) and executes directly. In contrast, <b>.EXE</b> (DOS, Windows) and <b>ELF</b> (Linux) files require linking because they contain multiple sections, headers, and symbol references. DOS .EXE files use the <b>MZ format</b>, supporting segmentation and relocation, while Windows .EXE files use the <b>PE</b> (Portable Executable) format, which includes import tables, relocation data, and dynamic linking for DLLs.</p>
  <p style="text-align: justify;">Linux primarily uses <b>ELF</b> (Executable and Linkable Format) but also supports <b>a.out</b> (older format) and <b>binfmt_misc</b> for other binary types. Similarly, Windows supports <b>NE</b> (New Executable for 16-bit), <b>LE</b> (Linear Executable for OS/2), and <b>PE32/PE32+</b> for modern 32-bit/64-bit applications. These linked formats enable larger, more complex programs by supporting dynamic libraries, relocation, and multi-section execution.</p>
</details>

> If you want to save time and skip the lengthy setup process, use my ready-to-use repository:<br> [DOS-Assembly-Starter](https://github.com/tis-starlight/DOS-Assembly-Starter){: target="_blank" rel="noopener noreferrer"}.
{: .prompt-info }

1. This method assumes you are running **Windows 10** as the operating system and using **Notepad** as the text editor.
2. Download the latest stable version of **NASM** from the [official website](https://www.nasm.us){: target="_blank" rel="noopener noreferrer"}. Choose the `dos` version from the available installers. After downloading, extract the ZIP file, rename the folder to `DOS-Assembly-Starter`, and move it to the `C:\` drive. The final path should be `C:\DOS-Assembly-Starter`.
3. Download **AFD** from [this link](https://vetusware.com/download/AFD%20Pro%20(Advanced%20Fullscreen%20Debug%20Pro)/?id=6351){: target="_blank" rel="noopener noreferrer"} and place it in the `C:\DOS-Assembly-Starter` folder.
  - The website may require you to create an account. For convenience, you can use temporary email services like [10MinuteMail](https://www.minuteinbox.com){: target="_blank" rel="noopener noreferrer"} or [TempMail](https://mail.tm){: target="_blank" rel="noopener noreferrer"}.
  - AFD is a legacy debugger, practically lost to time and hard to find on the internet. This is the only site I could locate that still offers AFD. While the site does appear sketchy, I have scanned the file using ([VirusTotal](https://www.virustotal.com/gui/home/upload){: target="_blank" rel="noopener noreferrer"} \| [Scan Result](https://www.virustotal.com/gui/file/c1b1b450405a6f2ac9cfa7d29f89415e87439cfdeac95c4118f3f92ed6395fa0){: target="_blank" rel="noopener noreferrer"}), and it has the following SHA-256 checksum/signature: `c1b1b450405a6f2ac9cfa7d29f89415e87439cfdeac95c4118f3f92ed6395fa0`. <br>To ensure safety, you can verify the file's integrity by scanning it with **VirusTotal** and comparing the checksum under the **Details** tab.
  - If AFD runs without errors, you can skip installing DOSBox. If it gives an error, your OS likely doesn't support 16-bit applications directly, so you'll need to install **DOSBox** to emulate a 32-bit environment.
4. Download and install the latest stable version of **DOSBox** from the [official website](https://www.dosbox.com){: target="_blank" rel="noopener noreferrer"}.

> The **DOS-Assembly-Starter** folder will house NASM, AFD, and your assembly code files.
{: .prompt-info }

That's it! Now, let's proceed to test the setup and ensure everything is working correctly.
- Open **Notepad**, write your assembly code, and save it with the `.asm` extension in the `C:\DOS-Assembly-Starter` folder. For example, save it as `YourFilename.asm`. Here's a sample code snippet:
  ```nasm
  [ORG 0x100]      ; Origin for .COM files, loaded at offset 0x100 by DOS

  mov ax, 0xA      ; Load (0xA in hex, which is 10 in decimal) into AX
  mov bx, 0b10100  ; Load (10100 in binary, which is 20 in decimal) into BX
  add ax, bx       ; Add BX to AX, result is stored in AX

  mov cx, 30       ; Load (30 in decimal) into CX
  add ax, cx       ; Add CX to AX, result is stored in AX

  mov ah, 0x4C     ; DOS interrupt to terminate the program
  mov al, 0x00     ; Return code 0 (successful execution)
  int 0x21         ; Call DOS interrupt
  ```
- Open **DOSBox** and mount the `DOS-Assembly-Starter` folder:
  ```console
  MOUNT C C:\DOS-Assembly-Starter
  ```
- Switch to the mounted directory:
  ```console
  C:
  ```
- Assemble the code:
  ```console
  nasm YourFilename.asm -o YourFilename.com -l YourFilename.lst
  ```
  or
  ```console
  nasm -f bin YourFilename.asm -o YourFilename.com -l YourFilename.lst
  ```
These commands will generate a `.COM` executable file and a `.lst` listing file, which can be used for debugging.
- To run the code/program:
  ```console
  YourFilename.com
  ```
  > **Running the program** may not display anything in the console, as the output depends on the specific operations performed in the code. For example, programs that modify registers or memory without printing or writing to the screen will run silently.
  {: .prompt-info }

- To debug the code/program step by step using **AFD**:
  ```console
  afd YourFilename.com
  ```

The following screen should appear:

![afd](https://i.imgur.com/NbuybbB.png){: lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADBAMAAACpGNjLAAAAElBMVEUTFRMxOTATJRMsMiwaKBoIKgiXpPzrAAAAFElEQVQI12MQNDRgYGAKYHBSYQAABwsBK74Z1PEAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}
_AFD interface displaying a loaded .COM file for debugging_

> If you frequently mount the `DOS-Assembly-Starter` folder, streamline the process by editing the DOSBox configuration file (`dosbox-0.74-3.conf`):<br>**1.** Locate the file at `C:\Users\%YourUserName%\AppData\Local\DOSBox` or run `DOSBox 0.74-3 Options.bat` from the DOSBox installation folder.<br>**2.** Add the following lines at the end of the configuration file:<br>
> ```
> MOUNT C C:\DOS-Assembly-Starter
> C:
> ```
> - Replace `C:\DOS-Assembly-Starter` with your folder path if different.
> - If you add new files to the `DOS-Assembly-Starter` folder, press <kbd>CTRL</kbd>+<kbd>F4</kbd> while the DOSBox emulator is running to refresh the mounted directory. Then, use the `dir` command to view the updated contents.
> - For a detailed overview of DOSBox commands, type `INTRO` in the DOSBox console.
{: .prompt-tip }

> **To make DOSBox portable**, copy the essential files (`dosbox.exe`, `SDL.dll`, `SDL_net.dll`, and `dosbox.conf`) into your working directory (e.g., `DOS_Assembly-Starter`). This ensures all necessary components are in one location, simplifying setup and making your environment self-contained and easily transferable. <br>If you have a customized `dosbox.conf` file with specific changes, place it in `C:\Users\%YourUserName%\AppData\Local\DOSBox` to ensure DOSBox uses your configuration. If you don’t have a customized configuration file, one will be automatically created with default settings when you open `dosbox.exe`.
{: .prompt-tip }

### Method #2

| **Tool Used**  | **Description**                        |
| -------------- | -------------------------------------- |
| **OS**         | Windows 10 (64-bit)                    |
| **Editor/IDE** | Visual Studio 2022 (v17.12.3) - 64-bit |
| **Assembler**  | NASM (v2.16.03) - win64                |

1. This method assumes you are using **Windows 10** as the operating system and [Visual Studio](https://visualstudio.microsoft.com/vs/){: target="_blank" rel="noopener noreferrer"} (Visual Studio Community Edition is available for free) as the IDE.
2. Open **Visual Studio Installer**, select the `Desktop development with C++` workload, and install it. This is required to provide a native environment for our assembly projects, and it may also serve as your C/C++ development environment.
3. Download the latest stable version of **NASM** from the [official website](https://www.nasm.us){: target="_blank" rel="noopener noreferrer"} (choose the appropriate version for your system, either win32 or win64), and install it.
4. Download [VSNASM](https://github.com/ShiftMediaProject/VSNASM){: target="_blank" rel="noopener noreferrer"}, an open-source project that integrates **NASM** into Visual Studio, and extract the zip file.

    > **VSNASM** includes an installer script that automatically detects any installed version of Visual Studio and installs the necessary components, saving you time. To use this script, simply run `install_script.bat` from an elevated (administrator) command prompt.
    {: .prompt-tip }

5. Move the **VSNASM** files into your **NASM** installation directory (e.g., `C:\Program Files\NASM`).
6. Add an Environment Variable (<kbd>Advanced System Settings</kbd> → <kbd>Environment Variables</kbd> → <kbd>System Variables</kbd>):
  - **Variable Name**: `NASMPATH`
  - **Variable Value**: `C:\Program Files\NASM\` (ensure the backslash at the end).

    > Consider editing the `nasm.xml` file to change the `DisplayName` to "**NASM - Netwide Assembler**" within the `ItemType` and `ContentType` nodes at the end of the file.
    {: .prompt-tip }

7. Launch **Visual Studio**, and configure it as follows:
  - Open the "**Tools**" → "**Options...**" menu.
  - Navigate to "**Projects and Solutions**" → "**VC++ Project Settings**".
  - Add `"C:\Program Files\NASM"` to the "**Build Customization Search Path**".
  - Confirm and exit the options menu.

Once the installation is complete, you can enable NASM Intel Syntax highlighting from Visual Studio's options.

> If using Visual Studio 2022, it is recommended (though not mandatory) to also install the **AsmDude2** ([Github Repository](https://github.com/HJLebbink/asm-dude){: target="_blank" rel="noopener noreferrer"} \| [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Henk-JanLebbink.AsmDude2){: target="_blank" rel="noopener noreferrer"}) extension for syntax highlighting in `.asm` files.
{: .prompt-tip }

- To enable `.asm` file support for your project:
  * Open Visual Studio and "**Crate a new project**".
  * From the project templates, select C++ "**Empty Project**", assign it a name, and open the project.
  * Right-click the project (or each project if there are multiple) in the Solution Explorer that will use assembly (`.asm`) files.
  * Select "**Build Dependencies**" → "**Build Customizations**".
  * Check the "**nasm**" option. If you do not see the "nasm" option, click "**Find Existing**" and navigate to `C:\Program Files\NASM`, then select the `nasm.targets` file.
  * Confirm your selection.

- For each `.asm` file in your project:
  * Right-click the file and select "**Properties**".
  * In "**General**", set the "**Item Type**" to "**Netwide Assembler**" (or the name you set, such as "**NASM - Netwide Assembler**").
  * Enable "**Generate Debug Information**" (`Yes (-g)`) for the debug profile from the specific NASM options.
  * Confirm the changes.

> From the properties window, you can also set the target platform to either 32-bit or 64-bit for the assembly file.
{: .prompt-info }

Once the configuration is complete, you can begin writing assembly code, such as:

```nasm
bits 32

section .data
    ; Place your data here

section .text
    ; Place your functions here
```

```nasm
bits 64

section .data
    ; Place your data here

section .text
    ; Place your function here
```

### Method #3

| **Tools Used** | **Description**     |
| -------------- | ------------------- |
| **OS**         | Windows 10 (64-bit) |
| **Emulator**   | EMU8086 (v4.08)     |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>Emu8086</strong> is an IDE designed for working with the 8086 microprocessor assembly language. It includes a <b>source code editor</b>, <b>assembler</b>, <b>disassembler</b>, and a <b>software emulator</b> that provides a virtual machine with an MS-DOS interface. This tool allows users to <b>write</b>, <b>debug</b>, and <b>simulate</b> assembly programs in a simplified, self-contained environment. It supports creating 8086 <b>16-bit</b> DOS <code class="language-plaintext highlighter-rouge">.COM</code> and <code class="language-plaintext highlighter-rouge">.EXE</code> programs, offering a similar experience to DOSBox (<a href="/posts/asm-environment-setup/#method-1">Method #1</a>), but as an all-in-one software solution.</p>
  <p style="text-align: justify;">Despite its utility, Emu8086 is an outdated, unmaintained, and sometimes buggy tool. The built-in assembler uses a TASM/MASM-like syntax. It is widely used by students and hobbyists interested in learning assembly language programming, as well as for reverse engineering and software debugging. The software is nominally shareware, providing a <b>14-day trial</b> version available for free on various download sites. Its official website has been inactive for a long time.</p>
</details>

1. This method assumes you are using **Windows 10** as your operating system.
2. Download **Emu8086** from [this link](https://emu8086.en.lo4d.com/windows){: target="_blank" rel="noopener noreferrer"} and install it.
  - Emu8086 is an older, unmaintained software. Its official website has been inactive for some time, and no official download source is available. The provided link appears to be one of the more trustworthy options.
  - The installation file has been scanned using [VirusTotal](https://www.virustotal.com/gui/home/upload){: target="_blank" rel="noopener noreferrer"} and is reported clean. The SHA-256 checksum/signature for the file is: `dbe7393ca4a7978d20a93922fc4feac29319a976e07dcea9ce02ea1eacc1df8f` <br>For added security, you can verify the file's integrity by scanning it with **VirusTotal** and comparing the checksum under the **Details** tab.

That’s it! No further steps are needed. Now, open Emu8086 and try the following code snippets:

**Example 1:**
```
; Program to add two numbers and store the result in AX
org 100h               ; Origin point for .COM programs
mov ax, 2              ; Load 2 into register AX
mov bx, 2              ; Load 2 into register BX
add ax, bx             ; Add BX to AX
int 21h                ; Terminate program (MS-DOS interrupt)
```

**Example 2:**
```
; Program to display a string using MS-DOS interrupt
org 100h               ; Origin point for .COM programs

.data
    msg db "Hello, Assembly!", 24h ; Define string with '$' (24h) terminator

.code
    mov ax, @data       ; Initialize data segment
    mov ds, ax

    mov dx, offset msg  ; Load address of message into DX
    mov ah, 9           ; Function to display string
    int 21h             ; Call MS-DOS interrupt

.exit
```

**Example 3:**
```
; Program to display a string in .EXE format
.stack 64h              ; Allocate stack space

.data
    msg db "Hello, Assembly!", 24h ; Define string with '$' (24h) terminator

.code
    mov ax, @data       ; Initialize data segment
    mov ds, ax

    mov dx, offset msg  ; Load address of message into DX
    mov ah, 9           ; Function to display string
    int 21h             ; Call MS-DOS interrupt

.exit
```

![emu8086](https://i.imgur.com/c9COSQb.png){: lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEXMzc7Pz87uFycUAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}
_EMU8086 interface displaying a loaded .EXE file for debugging_

### Method #4

| **Tools Used** | **Description**                             |
| -------------- | ------------------------------------------- |
| **OS**         | Windows 10 (64-bit)                         |
| **Editor/IDE** | ASM Visual (v1.1.8.0)                       |
| **Assembler**  | MASM or FASM or TASM                        |
| **Debugger**   | OllyDbg or x64dbg or WinDbg or IDE built-in |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>ASM Visual</strong> is a powerful assembler IDE designed for working with assembly language, offering various features to streamline coding and debugging processes. It supports the most relevant assemblers for Windows development, including MASM, FASM, and TASM, in both <code class="language-plaintext highlighter-rouge">32-bit</code> and <code class="language-plaintext highlighter-rouge">64-bit</code> environments. While it provides a comprehensive set of utilities, it is important to note that ASM Visual is not a free software solution; users can access <b>trial versions</b> or opt for paid licenses to unlock its full potential.</p>
  <p style="text-align: justify;">During the installation process, users have the flexibility to select from a range of components, including popular assemblers like MASM (32/64-bit), FASM (32/64-bit), and TASM (16/32-bit), along with debuggers OllyDbg, x64dbg, and WinDbg (configurable). It also features the GoRC resource compiler.</p>
  <p style="text-align: justify;">While ASM Visual offers significant utility for assembly language developers, it does have some limitations. The user interface can be buggy at times, and not all elements are fully translated into English, with some sections remaining in Russian. Despite these drawbacks, it remains a valuable tool for those needing a versatile and configurable assembly programming environment.</p>
</details>

1. This method assumes you are using **Windows 10** as your operating system.
2. Download **ASM Visual** from the [Microsoft Store](https://apps.microsoft.com/detail/xpfnzjkg6100l4){: target="_blank" rel="noopener noreferrer"} or the [official website](https://gri-software.com/en/asmvisual){: target="_blank" rel="noopener noreferrer"} if there are no issues accessing it.
3. After installation, open ASM Visual. During the initial setup, you will be prompted to install and configure required tools automatically. Alternatively, you can configure them manually.
  - If you accidentally close the setup window and want to reopen it, navigate to the ASM Visual installation directory (e.g., `C:\Program Files (x86)\ASM Visual`) and run the `setupToolInstallAssistant.exe` file.
  - Ensure you select at least one assembler and debugger. You may choose to install all available components or specific ones as needed:
        * **Assemblers**: MASM (with options for x64 includes by Hutch or Vasily), FASM, TASM.
        * **Debuggers**: OllyDbg, x64dbg, (WinDbg can be configured later in the settings). ASM Visual also provides a built-in debugger.
        * **Resource Compiler**: GoRC.

- Now to test the setup and run your program:
  * Open ASM Visual and create a new project, providing a name for it.
  * Select the assembler (referred to as 'Compiler') (eg., MASM, FASM, or TASM) and bitness (e.g., 16-bit, 32-bit or 64-bit).
  * Write your assembly code. Example using MASM 32-bit:
    ```
    .386
    .model flat, stdcall
    option casemap :none
    include includes\masm32.inc
    include includes\kernel32.inc
    include includes\macros\macros.asm
    includelib includes\masm32.lib
    includelib includes\kernel32.lib
    .code
    start:
	    print "Hello, Assembly!"
	    exit
    end start
    ```
- **For debugging**, select the `Debug` build configuration and a preferred debugger. Click the green play/execute button to assemble the program into an executable and attach it to the debugger.
- **For a direct run without debugging**, select `Release/Run` to build and execute the program.

ASM Visual interface displaying a MASM 32-bit assembly program:

![ASM-Visual-light](https://i.imgur.com/d8qCwwj.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXw8/Xg+PrnAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

![ASM-Visual-dark](https://i.imgur.com/pWtiwxQ.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUoKy47gtokAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

### Method #5

| **Tool Used**  | **Description**           |
| -------------- | ------------------------- |
| **OS**         | Windows 10 (64-bit)       |
| **Editor/IDE** | Visual MASM (v2.00)       |
| **Assembler**  | MASM (6.14.8444) - 32-bit |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>Visual MASM</strong> provides an environment for developing <code class="language-plaintext highlighter-rouge">16-bit</code>, <code class="language-plaintext highlighter-rouge">32-bit</code>, and <code class="language-plaintext highlighter-rouge">64-bit</code> applications for <b>Microsoft Windows</b> and 16-bit MS-DOS using the Microsoft Macro Assembler (<b>MASM</b>). Despite not being actively maintained, it is still a valuable tool for assembly language development due to its simplicity, efficiency, and integration with MASM tools. This method supports both legacy and modern systems, making it suitable for a range of programming projects.</p>
</details>

1. This method assumes you are using **Windows 10** as your operating system.
2. Download **Visual MASM** from the [official website](https://visualmasm.com/download/){: target="_blank" rel="noopener noreferrer"} or, if there are issues accessing the website, from [GitHub](https://github.com/ThomasJaeger/VisualMASM){: target="_blank" rel="noopener noreferrer"}.
3. After installation, launch Visual MASM. During the initial setup, you will be prompted to install and configure the necessary tools automatically. Alternatively, you can configure them manually.
  - If you accidentally close the setup window, you can reopen it by navigating to "**Tools**" → "**Options**" → "**Run Setup Wizard**".
  - If you opt for the automatic configuration (selecting: *Let Visual MASM choose the correct version of MASM*), you will be prompted to select a source to download MASM from. You can choose one of the following:
        + [x] MASM32 SDK Version 11
        + [ ] Microsoft Windows SDK for Windows 7 and .NET Framework 4 (Official source)
  - If you encounter issues during installation (e.g., "Incorrect Function" error), you will need to proceed with a manual installation:
        1. Download **MASM32 SDK Version 11** from the [official website](https://masm32.com/download.htm){: target="_blank" rel="noopener noreferrer"}.
        2. After installation, open Visual MASM and access "**Run Setup Wizard**". This time, select "*I will specify the location of MASM on my computer*". If MASM32 SDK was installed correctly, it will appear. Select it, and the file location/path will be automatically configured. Alternatively, you can manually set the path by navigating to "**Tools**" → "**Options**" → "**File Locations**".

| Architecture | Tool     | Path                       |
| ------------ | -------- | -------------------------- |
| **32-bit**   | ML.EXE   | `C:\masm32\bin\ml.exe`     |
|              | LINK.EXE | `C:\masm32\bin\link.exe`   |
|              | RC.EXE   | `C:\masm32\bin\rc.exe`     |
|              | LIB.EXE  | `C:\masm32\bin\lib.exe`    |
| **16-bit**   | LINK.EXE | `C:\masm32\bin\link16.exe` |

If you also have Microsoft Windows SDK, 64-bit MASM, or 16-bit MASM, you can add their paths as required.

> The **MASM32 SDK** provides a range of useful tools, libraries, and resources for assembly language development, including a 32-bit MASM assembler, MASM32 editor, and more. This makes it a comprehensive solution for 16/32-bit assembly programming, eliminating the need for additional development tools.
{: .prompt-tip }

Visual MASM interface displaying a MASM 32-bit assembly program:

![VisualMasm-light](https://i.imgur.com/UiPTwi4.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEXu8vDy8/F+0AHtAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

![VisualMasm-dark](https://i.imgur.com/biSDPR8.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUeHh0fHh7YLJp0AAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

### Method #6

| **Tools Used** | **Description**           |
| -------------- | ------------------------- |
| **OS**         | Windows 10 (64-bit)       |
| **Editor/IDE** | WinAsm Studio (v5.1.8.8)  |
| **Assembler**  | MASM (6.14.8444) - 32-bit |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>WinAsm Studio</strong> is a free assembler IDE designed for developing <code class="language-plaintext highlighter-rouge">32-bit</code> Windows and <code class="language-plaintext highlighter-rouge">16-bit</code> DOS programs. It is also portable.</p>
</details>

1. This method assumes you are using **Windows 10** as your operating system.
2. Download the latest version of **WinAsm Studio** from the [official website](https://winasm.org/downloads.html){: target="_blank" rel="noopener noreferrer"} and install it.
3. Download **MASM32 SDK Version 11** from the [official website](https://masm32.com/download.htm){: target="_blank" rel="noopener noreferrer"} and install it. The default installation path is `C:\masm32`.
4. Open WinAsm Studio and configure the MASM32 paths:
   - Go to "**Tools**" → "**Options...**" → "**Files & Paths**".
   - Set the following paths:
     * **Binary Path**: `C:\masm32\bin`
     * **Include Path**: `C:\masm32\include`
     * **Library Path**: `C:\masm32\lib`

> The **MASM32 SDK** provides a range of useful tools, libraries, and resources for assembly language development, including a 32-bit MASM assembler, MASM32 editor, and more. This makes it a comprehensive solution for 16/32-bit assembly programming, eliminating the need for additional development tools.
{: .prompt-tip }

![WinAsm](https://i.imgur.com/HOB3U8z.png){: .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEXf5ubk5uQTJzHZAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}
_WinAsm Studio interface displaying a MASM 32-bit assembly program_

### Method #7

| **Tools Used** | **Description**                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **OS**         | Windows 10 (64-bit)                                                                                              |
| **Editor/IDE** | SASM (SimpleASM) (v3.14.0)                                                                                       |
| **Assembler**  | NASM (v2.15.05), MASM (v6.14.8444) - 32-bit, <br>FASM (v1.73.30), GAS (v2.23.1 from MinGW, v2.23.2 from MinGW64) |
| **Linker**     | GCC (v4.6.2 from MinGW) / GCC (v4.8.1 from MinGW64), <br>LD (v2.22 from MinGW) / LD (v2.23.2 from MinGW64)       |
| **Debugger**   | GDB (from MinGW), integrated with SASM                                                                           |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>SASM (SimpleASM)</strong> is an open-source, cross-platform IDE designed for NASM, MASM, GAS, and FASM assembly languages. It includes syntax highlighting, a debugger, and is ready to use immediately after installation, making it an excellent choice for beginners. SASM supports both <code class="language-plaintext highlighter-rouge">x64</code> and <code class="language-plaintext highlighter-rouge">x86</code> modes, allowing users to select their desired mode and configure assembler and linker options through the "<b>Build</b>" tab in the settings.</p>
  <p style="text-align: justify;">For assembly and linking, SASM uses <b>NASM</b> 2.15.05 as the default assembler. In x86 mode, SASM utilizes <b>GCC</b> 4.6.2 from MinGW (or <b>LD</b> 2.22 from MinGW for linking). In x64 mode, SASM employs GCC 4.8.1 from MinGW64 (or LD 2.23.2 from MinGW64 for linking).</p>
  <p style="text-align: justify;">SASM version 3.0 and later includes <b>FASM</b> 1.73.30 and <b>GAS</b> 2.23.1 from MinGW, with GAS 2.23.2 from MinGW64 available for x64. The IDE also integrates the <b>GDB</b> debugger from MinGW and the "<b>io.inc</b>" macro library, providing a complete development environment for both x86 and x64 assembly programming.</p>
  <p style="text-align: justify;">All assemblers, except <b>MASM</b>, are included and ready for immediate use. Due to licensing restrictions, MASM must be installed separately by the user. To use MASM, the MASM32 SDK must be downloaded and configured in SASM's settings.</p>
</details>

1. This method assumes you are using **Windows 10** as your operating system.
2. Download the latest version of **SASM** from the [official website](https://dman95.github.io/SASM/english.html){: target="_blank" rel="noopener noreferrer"} or, if there are issues accessing the website, from [GitHub](https://github.com/Dman95/SASM){: target="_blank" rel="noopener noreferrer"}. The software is available as an executable installer (.exe) and portable (.zip) file.
3. If you downloaded the installer, simply install SASM. If you downloaded the portable version, it's ready for use. You can configure the assembler and its mode (x86 or x64) through the SASM settings.

- To use the MASM assembler with SASM:
  * Download **MASM32 SDK Version 11** from the [official website](https://masm32.com/download.htm){: target="_blank" rel="noopener noreferrer"} and install it. The default installation path is `C:\masm32`.
  * Open SASM and configure the MASM32 paths:
    * Go to "**Settings**" → "**Build**" and select MASM as the assembler.
    * Set the following paths:
      * **Assembler Path**: `C:/masm32/bin/ml.exe`
      * **Linker Path**: `C:/masm32/bin/link.exe`

> The **MASM32 SDK** provides a range of useful tools, libraries, and resources for assembly language development, including a 32-bit MASM assembler, MASM32 editor, and more. This makes it a comprehensive solution for 16/32-bit assembly programming, eliminating the need for additional development tools.
{: .prompt-tip }

SASM interface showing a loaded NASM 32-bit assembly program for debugging:

![sasm-light](https://i.imgur.com/N4uHTjg.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEX29vH7+/qMsyixAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

![sasm-dark](https://i.imgur.com/mLMQdKe.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUnJiYqKieLrRxyAAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

### Method #8

| **Tools Used** | **Description**                       |
| -------------- | ------------------------------------- |
| **OS**         | Windows 10 (64-bit)                   |
| **Editor/IDE** | Visual Studio 2022 (v17.13.0) - 64bit |
| **Assembler**  | MASM (v14.43.34618.0)                 |
| **Debugger**   | Visual Studio Built-in Debugger       |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><strong>Visual Studio</strong> provides both <code class="language-plaintext highlighter-rouge">32-bit</code> and <code class="language-plaintext highlighter-rouge">64-bit</code> hosted versions of <a href="https://learn.microsoft.com/en-us/cpp/assembler/masm/masm-for-x64-ml64-exe?view=msvc-170" target="_blank" rel="noopener noreferrer">MASM</a>(Microsoft Macro Assembler) for targeting x64 code. The assembler, named <code class="language-plaintext highlighter-rouge">ml64.exe</code>, processes x64 assembly language. The MASM command-line tools are included as part of the C++ workload during Visual Studio installation and are not available as a standalone download.</p>
  <p style="text-align: justify;"><a href="https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler" target="_blank" rel="noopener noreferrer">MASM</a> is great for Windows development, offering powerful macros and high-level features for reliable assembly programming. However, it has a steeper learning curve, limited portability compared to assemblers like NASM, and lacks extensive documentation.</p>
  <p style="text-align: justify;">You might be wondering why Visual Studio, a 64-bit only application, includes both <code class="language-plaintext highlighter-rouge">Hostx64</code> and <code class="language-plaintext highlighter-rouge">Hostx86</code> directories in its installation path:</p>
  <ul>
    <li><code class="language-plaintext highlighter-rouge">C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34618\bin\Hostx64</code></li>
    <li><code class="language-plaintext highlighter-rouge">C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34618\bin\Hostx86</code></li>
  </ul>
  <p style="text-align: justify;">Since Visual Studio requires a <code class="language-plaintext highlighter-rouge">64-bit</code> operating system and <code class="language-plaintext highlighter-rouge">Hostx64</code> can compile both 32-bit and 64-bit binaries using <code class="language-plaintext highlighter-rouge">ml.exe</code> and <code class="language-plaintext highlighter-rouge">ml64.exe</code>, why is there still a need for <code class="language-plaintext highlighter-rouge">Hostx86</code>? The answer lies in providing flexibility, backward compatibility, and supporting legacy systems.</p>
  <ul>
    <li><strong>Explanation of Folder Structure</strong></li>
    <ul>
        <li><b>Hostx64:</b> Tools running natively on a 64-bit system.</li>
        <li><b>Hostx86:</b> Tools that mimic running on a 32-bit system, even on a 64-bit platform, for compatibility with legacy environments or build systems.</li>
    </ul>
    <li><strong>Each host directory contains two subdirectories:</strong></li>
    <ul>
        <li><b>x86 subdirectory:</b> Contains <code class="language-plaintext highlighter-rouge">ml.exe</code>, the 32-bit MASM assembler for generating 32-bit binaries, and <code class="language-plaintext highlighter-rouge">link.exe</code>, the 32-bit linker for producing 32-bit executables and DLLs.</li>
        <li><b>x64 subdirectory:</b> Contains <code class="language-plaintext highlighter-rouge">ml64.exe</code>, the 64-bit MASM assembler for generating 64-bit binaries, and <code class="language-plaintext highlighter-rouge">link.exe</code>, the 64-bit linker for producing 64-bit executables and DLLs.</li>
    </ul>
  </ul>
  <ul>
    <li><strong>Why Are Both Hosts Available?</strong></li>
    <ul>
        <li>Visual Studio supports cross-compilation, meaning you can build both 32-bit and 64-bit binaries from either a 32-bit or 64-bit environment:</li>
        <ul>
            <li><b>From Hostx64:</b> You can use <code class="language-plaintext highlighter-rouge">ml.exe</code> for 32-bit binaries and <code class="language-plaintext highlighter-rouge">ml64.exe</code> for 64-bit binaries.</li>
            <li><b>From Hostx86:</b> You can also use <code class="language-plaintext highlighter-rouge">ml.exe</code> for 32-bit binaries and <code class="language-plaintext highlighter-rouge">ml64.exe</code> for 64-bit binaries.</li>
        </ul>
        <li>This structure ensures you can compile different target architectures regardless of the host environment, offering maximum flexibility.</li>
    </ul>
  </ul>
  <ul>
    <li><strong>Why Hostx86 Still Exists</strong></li>
    <ul>
        <li>Despite modern systems being 64-bit, Hostx86 remains important for:</li>
        <ul>
            <li><b>Legacy Build Systems and Tools:</b> Older projects may depend on 32-bit build tools or scripts explicitly designed for 32-bit environments. Hostx86 allows running these without reconfiguring everything.</li>
            <li><b>Build Process Consistency:</b> Developers migrating from older platforms can continue using their existing build processes without interruption.</li>
            <li><b>Separation of Contexts:</b> Running tools from Hostx86 influences environment variables and certain build-time behaviors to simulate a 32-bit system.</li>
        </ul>
    </ul>
    <li><strong>Why Not Just Use Hostx64?</strong></li>
    <ul>
        <li>You can use <code class="language-plaintext highlighter-rouge">ml.exe</code> from Hostx64 to build 32-bit binaries and <code class="language-plaintext highlighter-rouge">ml64.exe</code> for 64-bit binaries without any issues.</li>
        <li>However, keeping Hostx86 provides flexibility for legacy workflows and testing environments where a true 32-bit host context might be needed.</li>
    </ul>
  </ul>
  <ul>
    <li><strong>Compatibility Table</strong></li>
  </ul>
  <table>
    <thead>
        <tr>
            <th>Host</th>
            <th>Tool</th>
            <th>Output Program</th>
            <th>Runs on 32-bit<br> Windows</th>
            <th>Runs on 64-bit<br> Windows</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Hostx64</td>
            <td><code class="language-plaintext highlighter-rouge">ml.exe</code></td>
            <td><code class="language-plaintext highlighter-rouge">example32.exe</code> (32-bit)</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td>Hostx64</td>
            <td><code class="language-plaintext highlighter-rouge">ml64.exe</code></td>
            <td><code class="language-plaintext highlighter-rouge">example64.exe</code> (64-bit)</td>
            <td>❌</td>
            <td>✅</td>
        </tr>
        <tr>
            <td>Hostx86</td>
            <td><code class="language-plaintext highlighter-rouge">ml.exe</code></td>
            <td><code class="language-plaintext highlighter-rouge">example32.exe</code> (32-bit)</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td>Hostx86</td>
            <td><code class="language-plaintext highlighter-rouge">ml64.exe</code></td>
            <td><code class="language-plaintext highlighter-rouge">example64.exe</code> (64-bit)</td>
            <td>❌</td>
            <td>✅</td>
        </tr>
    </tbody>
  </table>
</details>

> If you want to save time and skip the lengthy setup process, use my ready-to-use repository: <br>[MASM-Starter](https://github.com/tis-starlight/MASM-Starter){: target="_blank" rel="noopener noreferrer"}.
{: .callout.tip }

> This method assumes you are using **Windows 10** as your operating system.

#### 1. Download and Install Visual Studio
{: data-toc-skip='' .mt-4 }

- **Download Visual Studio**: Download the latest stable LTSC (Long-Term Servicing Channel) version of **Visual Studio** from the [official website](https://visualstudio.microsoft.com/downloads/){: target="_blank" rel="noopener noreferrer"}. The **Community Edition**, which is available for free, will download a small bootstrapper file (e.g., `VisualStudioSetup.exe` or `vs_community.exe`).
- **Run the Bootstrapper**: Open the bootstrapper file to install the latest version of the Visual Studio Installer. This installer is a separate program that provides all the tools necessary to install and customize Visual Studio. For detailed installation steps, refer to the [Microsoft Visual Studio installation guide](https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2022){: target="_blank" rel="noopener noreferrer"}.
- **Select Workloads in Visual Studio Installer**: After launching the **Visual Studio Installer**, choose the workloads you want to install. To set up a native environment for assembly projects, make sure to select the `Desktop development with C++` workload. This workload also supports C/C++ development.
- **Selecting Components and Languages**: To add individual components, select them from the **Individual Components** tab. To add additional languages, select them from the **Language Packs** tab. Finally, choose the installation location and proceed with the installation.
- **Signing In and Trial Period**: After the installation is complete, when you open Visual Studio for the first time, you will be prompted to sign in. While signing in is optional, it extends the free trial of **Visual Studio Professional** or **Enterprise** from 30 to 90 days (one-time extension). After the trial, unlock it with a subscription or product key.

> If Visual Studio is already installed, add the workload via "**Tools**" → "**Get Tools and Features**", which opens the Visual Studio Installer. Alternatively, open the **Visual Studio Installer** from the **Start** menu or by launching it directly from:
`C:\Program Files (x86)\Microsoft Visual Studio\Installer\setup.exe`. In the installer, click the **Modify** button, then choose the workloads or components you wish to install.
{: .callout.todo }

> If you only want the command-line tools, not the full IDE, download the [Build Tools for Visual Studio](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022){: target="_blank" rel="noopener noreferrer"}.
{: .callout.info }

> The Visual C++ language includes the Microsoft Assembler (MASM). **To verify that MASM is installed**, open **Windows Explorer** and navigate to `C:\Program Files`. Then, check for the file `ml.exe` (32-bit MASM) in the Visual Studio installation directory, typically located at:
`Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.xx.xxxxx\bin\HostX64\x86`.
For the `ml64.exe` (64-bit MASM), check the directory:
`Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.xx.xxxxx\bin\HostX64\x64`.
(*The "x" characters represent digits in the version number of your current Visual Studio installation*.)
{: .callout.tip }

#### 2. Create a New Project
{: data-toc-skip='' .mt-4 }

- Open Visual Studio and click "**Create a new project**".
- From the project templates, select the "**C++ Empty Project**", name it (e.g., `MASM-Starter`), and choose a save location. This project will later be saved as a template for future use.
- Check "**Place solution and project in the same directory**" to avoid nested folders with the same name, then click "**Create**" to open the project.

#### 3. Enable MASM Support
{: data-toc-skip='' .mt-4 }

- Right-click the project in **Solution Explorer**.
- Select "**Build Dependencies**" → "**Build Customizations**".
- Check the "**masm**" option and confirm.

#### 4. Configure the Subsystem
{: data-toc-skip='' .mt-4 }

- Right-click the project → "**Properties**" → "**Linker**" → "**System**" → "**Subsystem**".
- Choose one of the following options:
  * `Windows (/SUBSYSTEM:WINDOWS)` to prevent the assembly program from displaying the console window.
  * `Console (/SUBSYSTEM:CONSOLE)` (default) to display the console window.

#### 5. Add an Assembly Source File
{: data-toc-skip='' .mt-4 }

- Right-click the project → "**Add**" → "**New Item**", or use the shortcut <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>.
- Name the file `Main.asm` and ensure it has a `.asm` extension.
- Right-click `Main.asm` and select "**Properties**". Under the "**General**" section, set "**Item Type**" to "**Microsoft Macro Assembler**", then confirm the changes.
- The following is a `32-bit` assembly test program. Copy the code below to implement it. First, we will create the 32-bit assembly code, and later, we will develop the `64-bit` version.

```
.386
.model flat, stdcall
.stack 4096

ExitProcess PROTO, dwExitCode:DWORD

.data

.code
main PROC
  mov eax, 5
  add eax, 5

  INVOKE ExitProcess, eax
main ENDP
END main
```

#### 6. Build and Run the Program (32-bit)
{: data-toc-skip='' .mt-4 }

- To build the `32-bit` assembly program, set the "**Solution Platform**" to `x86` in the toolbar.
- Press the "**Local Windows Debugger**" button or press <kbd>F5</kbd> to compile (or assemble) and run the program.
- The result (e.g., 10) will be displayed in the debug output window.

#### 7. Generate Listing File (Optional)
{: data-toc-skip='' .mt-4 }

**Listing File** offers a comprehensive view of the assembly source code, including the corresponding machine code, memory addresses, and any errors or warnings generated during the assembly process. To generate the listing file:

- Right-click the project → "**Properties**" → "**Microsoft Macro Assembler**" → "**Listing File**".
- Set "**Assembled Code Listing File**" to: `$(IntDir)$(ProjectName).lst`.
- Rebuild the project. The listing file will be generated in the project's debug folder. You can open the listing file with any text editor, such as Notepad or Visual Studio, to review its contents.

> The "**Microsoft Macro Assembler**" page in the project "**Properties**" will be displayed only when assembly files are present in the project.
{: .callout.info }

#### 8. Configure Release Mode (Optional)
{: data-toc-skip='' .mt-4 }

You can skip this section for now since it is fairly complex. Feel free to revisit it later when you need to build in release mode. In Visual Studio, there is a separate build configuration for `release` mode. This configuration can be set differently from the `debug` mode configuration. For example, release mode may include more optimizations and fewer debugging features.

- Setup Subsystem (Windows or Console) and Listing File Generation:
  * Right-click the project → "**Properties**" → "**Configuration Manager**". Select `Release`.
  * Navigate to the "**Linker**" → "**System**" → "**Subsystem**" and select your preferred subsystem (Windows or Console), as discussed in step 4.
  * For listing file generation, navigate to "**Microsoft Macro Assembler**" → "**Listing File**" → "**Assembled Code Listing File**", and set it to `$(IntDir)$(ProjectName).lst`, as discussed in step 7.
  * Confirm changes and switch the "**active configuration**" to `Release` from the toolbar.
  * Build and run the program using the green play button. If you encounter `LNK1281: Unable to generate SAFESEH image`, follow the steps below to resolve it.

- Enable or Disable Safe Exception Handlers:
  * In `release` mode, the linker requires [safe exception handlers](https://learn.microsoft.com/en-us/cpp/build/reference/safeseh-image-has-safe-exception-handlers?view=msvc-170){: target="_blank" rel="noopener noreferrer"}, but the assembler does not, causing a conflict. Resolve this by choosing "**one**" of the following:
    * **Option 1 (Recommended)**: Enable safe exception handlers in the assembler:
      * Right-click project → "**Properties**" → "**Microsoft Macro Assembler**" → "**Advanced**" → Set "**Use Safe Exception Handlers**" to `Yes (/SAFESEH)`.
    * **Option 2**: Disable safe exception handlers at the linker:
      * Right-click project → "**Properties**" → "**Linker**" → "**Advanced**" → Set "**Image has Safe Exception Handlers**" to `No (/SAFESEH:NO)`.
  * After applying the changes, you should be able to build and run the program in `release` mode without errors.

> When switching between `Debug` and `Release` configurations, the project *property pages* may not always reflect the *active* configuration. This can lead to confusion if some project settings do not seem to affect the build. If this occurs, ensure that the *active* configuration matches the *property pages*.
{: .callout.warning }

#### 9. Save as a Project Template
{: data-toc-skip='' .mt-4 }

To avoid repeating these lengthy setup steps for new Assembly projects, Visual Studio allows you to save a project as a template.

- Prepare the Template Code: Modify `Main.asm` to contain only the essential structure:

```
.386
.model flat, stdcall
.stack 4096

ExitProcess PROTO, dwExitCode:DWORD

.data

.code
main PROC
  INVOKE ExitProcess, 0
main ENDP
END main
```

- Verify the Program:
  * Run the code to ensure it functions correctly.
  * If in `release` mode, switch back to `debug` mode.
- Export as a Template:
  * Navigate to "**Project**" → "**Export Template**".
  * Select "**Project Template**" and choose the `MASM-Starter` project from the dropdown.
  * Provide a name, description for the template and click Finish.
- Locate the Exported Template:
  * The exported template is saved at: `C:\Users\<YourUserName>\Documents\Visual Studio 2022\My Exported Templates\MASM-Starter.zip`.
  * For backup, move this file to another directory.
- Using the Template:
  * The template appears in Visual Studio's project templates at: `C:\Users\Starlight\Documents\Visual Studio 2022\Templates\ProjectTemplates\MASM-Starter.zip`.
  * Do not move this file, as it must remain in place for Visual Studio to recognize it.
  * When creating a new project, select `MASM-Starter` as the project template.

#### 10. Debugging in Visual Studio
{: data-toc-skip='' .mt-4 }

- **Set a Breakpoint**: Set breakpoints by clicking the gray margin next to code lines.
- **View Registers**: Navigate to "**Debug**" → "**Windows**" → "**Registers**" or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd>.
- **Inspect Variables**:
  * Open "**Debug**" → "**Windows**" → "**Watch**" and enter the variable name.
  * Or go to "**Debug**" → "**Windows**" → "**Memory**" → "**Memory 1**" and enter `&varname` in the address box.
- **View Disassembly**: Select "**Debug**" → "**Windows**" → "**Disassembly**" or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>D</kbd>.
- **Step Through Execution**: Use Step Into (<kbd>F11</kbd>) and Step Over (<kbd>F10</kbd>) for step-by-step debugging.

Visual Studio 2022 (v17.13.0) interface displaying a MASM 32-bit assembly program:

![MASM-VisualStudio-light](https://i.imgur.com/ghGqmvq.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEXv7Orx7+2lyPMbAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

![MASM-VisualStudio-dark](https://i.imgur.com/oS4QG84.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUrKSgsKil91W1eAAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

#### 11. Configure a 64-bit Assembly Project
{: data-toc-skip='' .mt-4 }

Before proceeding, ensure you have completed the prior setup steps.

- Set the "**Solution Platform**" to `x64` in the toolbar.
- Replace the existing code in `Main.asm` with the following:

```
ExitProcess PROTO

.data

.code
main PROC
  sub rsp, 28h   ; reserve stack space
  mov rcx, 2025  ; set exit code
  call ExitProcess
main ENDP
END
```

- Specify the Entry Point (`main`):

  If you encounter the error `unresolved external symbol mainCRTStartup`, follow these steps:
    - Open "**Project**" → "**Properties**".
    - Ensure **Configuration**: `Active(Debug)` and **Platform**: `x64` are selected.
    - Navigate to "**Linker**" → "**Advanced**" → "**Entry Point**" and set it to `main`.
    - If using `Release` Mode, apply the same settings for **Configuration**: `Release`, **Platform**: `x64`.
    - Optionally, set "**SubSystem**" to `Console` or `Windows`, depending on your preference.

- Run the Program:

  The program should execute successfully, and the exit code (`2025`) will be displayed in the output window.

#### 12. Understanding the x64 Calling Convention
{: data-toc-skip='' .mt-4 }

[Microsoft x64 Calling Convention](https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170){: target="_blank" rel="noopener noreferrer"} defines how 64-bit assembly code should call functions, including the Win32 API, on Windows, specifying the passing of arguments, stack management, and return value handling.

- First four arguments are passed through registers (rcx, rdx, r8, r9).
- A shadow area (at least 32 bytes) must be reserved.
- 16-byte stack pointer alignment is required before calling any Win32 API.
- Stack pointer adjustments are done with `sub rsp, 28h` to reserve the shadow area and align the stack pointer.

- **Code Example** (Displaying a Message Box): The following assembly code calls the MessageBoxA **Win32 API** and then exits the process.

```
ExitProcess PROTO    ; Declare ExitProcess function prototype
MessageBoxA PROTO    ; Declare MessageBoxA function prototype

.data
    myText          db "Hello Assembly", 0        ; Message text for the box
    myCaption       db "Message Box Test", 0      ; Message box caption

.code
main PROC
    sub rsp, 28h      ; Reserve space on the stack for local variables or alignment
    mov rcx, 0        ; Set message box type (0 = Information)
    lea rdx, myText   ; Load address of the message text into rdx
    lea r8, myCaption ; Load address of the message box caption into r8
    mov r9, 0         ; Set message box options to 0 (default behavior)
    call MessageBoxA  ; Display the message box

    mov rcx, 2025     ; Set exit code to 2025
    call ExitProcess  ; Exit the program with the specified exit code

main ENDP
END
```

- **Stack Pointer Alignment**:
  * The `sub rsp, 28h` ensures correct 16-byte alignment of the stack pointer.
  * Altering `sub rsp, 28h` to `sub rsp, 20h` leads to an "Access Violation" error due to incorrect alignment.

- **x64 Prolog/Epilog Code**:

  [Prolog and Epilog](https://learn.microsoft.com/en-us/cpp/build/prolog-and-epilog?view=msvc-170){: target="_blank" rel="noopener noreferrer"} code are sequences used at the **beginning** (prolog) and **end** (epilog) of a function in assembly to manage the stack and registers.

  - The **Prolog** (function entry) sets up the function by saving the caller's return address and any registers that will be modified, then creates a stack frame by setting the base pointer (`rbp`) and reserving space for local variables and the shadow area.
  - The **Epilog** (function exit) restores the saved registers, cleans up the stack by resetting the stack pointer(`rsp`), and retrieves the return address to transfer control back to the caller using the `ret` instruction.
  - Prolog/Epilog code is important because it manages the stack frame, ensuring proper memory allocation for local variables and preserving register values to maintain the caller's state. It also helps adhere to calling conventions, ensuring correct execution of functions, including Win32 API calls in 64-bit assembly. By using Prolog/Epilog, function calls are handled properly, the stack is aligned, and the program's state is preserved, which is crucial for maintaining stability in complex tasks.
  - In full x64 prolog/epilog code, adjust `sub rsp, 28h` to `sub rsp, 20h` because the previous `push` instruction modifies the stack pointer by 8 bytes.
  - Example of typical x64 Prolog/Epilog code:

```
main PROC
    push rbp          ; Save caller's rbp (base pointer)
    mov rbp, rsp      ; Set up stack frame by saving current stack pointer to rbp
    sub rsp, 20h      ; Reserve 32 bytes (20h) for local variables and shadow space

    ; Function body (your code)

    mov rsp, rbp      ; Restore stack pointer from rbp (removes local variable space)
    pop rbp           ; Restore caller's rbp (reverts to the caller's stack frame)
    ret               ; Return to the caller (pop return address from stack)
main ENDP
```

### Method #9

| **Tools Used** | **Description**                  |
| -------------- | -------------------------------- |
| **OS/Distro**  | Manjaro **Linux** 25.0.0 (Zetar) |
| **Kernel**     | Linux 6.12.11-1-MANJARO (64-bit) |
| **Desktop**    | KDE Plasma 6.2.5                 |
| **Editor/IDE** | Kate (v24.12.1)                  |
| **Assembler**  | GNU Assembler (GAS) (v2.43.1)    |
| **Linker**     | GNU `ld` (v2.43.1)               |
| **Debugger**   | GNU `gdb` (v16.1)                |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;">The <a href="https://sourceware.org/binutils/docs/as/" target="_blank" rel="noopener noreferrer">GNU Assembler</a> (GAS or AS) is a widely used assembler, particularly in the <a href="https://www.gnu.org/" target="_blank" rel="noopener noreferrer">GNU/Linux ecosystem</a>. Unlike NASM and MASM, which follow <b>Intel syntax</b>, GAS adheres to <b>AT&T syntax</b> by default. While this may present a learning curve for those accustomed to Intel-style assembly, it offers a more standardized approach for developers working within the <b>GCC toolchain</b>.</p>
  <p style="text-align: justify;">As the standard assembler for <a href="https://gcc.gnu.org/" target="_blank" rel="noopener noreferrer">GCC</a> (GNU Compiler Collection), GAS is a crucial component in compiling and linking programs, including the Linux kernel and various system utilities. It is part of the <a href="https://www.gnu.org/software/binutils/" target="_blank" rel="noopener noreferrer">GNU Binutils</a> package, which provides essential tools for working with object files, linking, and debugging.</p>
  <p style="text-align: justify;">One of GAS's major strengths is its cross-platform support, allowing it to run on multiple architectures, including x86, x86_64, ARM, RISC-V, and more. This makes it a versatile choice for low-level programming across different hardware platforms. Additionally, GAS is <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" target="_blank" rel="noopener noreferrer">FOSS</a> (free and open-source), licensed under the <b>GNU General Public License (GPLv3)</b>, ensuring that it remains a transparent and modifiable tool for developers.</p>
  <p style="text-align: justify;">The default file extension for GAS source files is <code class="language-plaintext highlighter-rouge">.s</code>, which is conventionally used to indicate assembly language files. However, alternative extensions such as <code class="language-plaintext highlighter-rouge">.gas</code>, <code class="language-plaintext highlighter-rouge">.as</code>, and <code class="language-plaintext highlighter-rouge">.S</code> are also recognized, provided the file contains only GAS-compatible assembly code.</p>
  <p style="text-align: justify;">While GAS is highly efficient and integrates seamlessly with GCC and <a href="https://sourceware.org/gdb/" target="_blank" rel="noopener noreferrer">GNU Debugger</a> (GDB), it does have some limitations. The AT&T syntax, while historically significant, is considered by some to be less readable than Intel syntax. Additionally, GAS lacks certain macro and structured programming features found in assemblers like NASM. However, for those working within a Linux or UNIX development environment, its benefits—tight GCC integration, cross-platform capabilities, and robust toolchain support—far outweigh these drawbacks.</p>
</details>

> This method assumes you are using **Linux** (e.g., [Manjaro Linux](https://manjaro.org/){: target="_blank" rel="noopener noreferrer"}) as your operating system.

#### 1. Updating System Packages
{: data-toc-skip='' .mt-4 }

Before installing packages, ensure your system is up-to-date:

```zsh
# For Arch Linux / Manjaro:
sudo pacman -Syu

# For Debian / Ubuntu:
sudo apt update && sudo apt upgrade

# For Fedora:
sudo dnf update
```
{: .nolineno }

- Checking System Information:
  * **OS/Distro Version**: Use `lsb_release -a`, `cat /etc/os-release`, or `hostnamectl`.
  * **Kernel Version**: Use `uname -r` or `uname -a`.

> If you are using a **Linux desktop environment** (e.g., KDE plasma, GNOME, Xfce), you can check system information using the available **GUI** tools or the command-line interface (**CLI**).
{: .callout.info }

#### 2. Toolchain Configuration
{: data-toc-skip='' .mt-4 }

- **Text Editor**: You are using [**Kate**](https://kate-editor.org/){: target="_blank" rel="noopener noreferrer"}, but you can also use other GUI (Graphical User Interface) text editors such as [VS Code](https://code.visualstudio.com/){: target="_blank" rel="noopener noreferrer"}, [Gedit](https://gedit-text-editor.org/){: target="_blank" rel="noopener noreferrer"}, [Sublime Text](https://www.sublimetext.com/){: target="_blank" rel="noopener noreferrer"}, [Geany](https://geany.org/){: target="_blank" rel="noopener noreferrer"}, [GNOME Text Editor](https://apps.gnome.org/TextEditor/){: target="_blank" rel="noopener noreferrer"}, [Notepadqq](https://notepadqq.com/s/){: target="_blank" rel="noopener noreferrer"}, etc. Alternatively, you can use CLI (Command Line Interface) or TUI (Terminal User Interface) text editors like [nano](https://nano-editor.org/){: target="_blank" rel="noopener noreferrer"}, [Neovim](https://neovim.io/){: target="_blank" rel="noopener noreferrer"}, [Vim](https://www.vim.org/){: target="_blank" rel="noopener noreferrer"}, [GNU Emacs](https://www.gnu.org/software/emacs/){: target="_blank" rel="noopener noreferrer"}, [amp](https://amp.rs/){: target="_blank" rel="noopener noreferrer"}, [Micro](https://micro-editor.github.io/){: target="_blank" rel="noopener noreferrer"}, etc.
- **Terminal Emulator & Shell**: You are using [**Konsole**](https://konsole.kde.org/){: target="_blank" rel="noopener noreferrer"}, but you can also use other terminal emulators such as [Ghosty](https://ghostty.org/){: target="_blank" rel="noopener noreferrer"}, [Wave](https://www.waveterm.dev/){: target="_blank" rel="noopener noreferrer"}, [Warp](https://www.warp.dev/){: target="_blank" rel="noopener noreferrer"} (not open-source), [GNOME Terminal](https://en.wikipedia.org/wiki/GNOME_Terminal){: target="_blank" rel="noopener noreferrer"}, [xterm](https://invisible-island.net/xterm/){: target="_blank" rel="noopener noreferrer"}, [Terminator](https://gnome-terminator.org/){: target="_blank" rel="noopener noreferrer"}, [Alacritty](https://alacritty.org/){: target="_blank" rel="noopener noreferrer"}, [Kitty](https://sw.kovidgoyal.net/kitty/){: target="_blank" rel="noopener noreferrer"}, [Hyper](https://hyper.is/){: target="_blank" rel="noopener noreferrer"}, [Tabby](https://tabby.sh/){: target="_blank" rel="noopener noreferrer"}, [Cool Retro Term](https://github.com/Swordfish90/cool-retro-term){: target="_blank" rel="noopener noreferrer"}, etc. For the shell, you are using [**zsh**](https://ohmyz.sh/){: target="_blank" rel="noopener noreferrer"}, but alternatives like [bash](https://www.gnu.org/software/bash/){: target="_blank" rel="noopener noreferrer"} and [fish](https://fishshell.com/){: target="_blank" rel="noopener noreferrer"} are also available.
- **Package Manager**: You are using [**Pacman**](https://wiki.archlinux.org/title/Pacman#){: target="_blank" rel="noopener noreferrer"} (Arch/Manjaro), but depending on your linux distribution, you can use [Pamac](https://wiki.manjaro.org/index.php?title=Pamac){: target="_blank" rel="noopener noreferrer"}, [Apt](https://wiki.debian.org/AptCLI){: target="_blank" rel="noopener noreferrer"} (Debian/Ubuntu), or [DNF](https://rpm-software-management.github.io/){: target="_blank" rel="noopener noreferrer"} (Fedora).

#### 3. Assembly Toolchain Installation
{: data-toc-skip='' .mt-4 }

- Install the [**Binutils**](https://www.gnu.org/software/binutils/){: target="_blank" rel="noopener noreferrer"} package, which includes the GNU Assembler ([`as`](https://sourceware.org/binutils/docs/as/){: target="_blank" rel="noopener noreferrer"}) and GNU Linker ([`ld`](https://sourceware.org/binutils/docs/ld/){: target="_blank" rel="noopener noreferrer"}), along with other essential tools and libraries as part of the GNU Binutils toolset.

> **Binutils** may already be pre-installed on your linux distribution.
{: .callout.note }

- You can download it directly from the official [GNU Binutils](https://www.gnu.org/software/binutils/){: target="_blank" rel="noopener noreferrer"} page, clone the repository, or install it via a package manager:

  ```zsh
  # For Arch Linux / Manjaro:
  sudo pacman -S binutils

  # For Debian / Ubuntu:
  sudo apt install binutils

  # For Fedora:
  sudo dnf install binutils
  ```
  {: .nolineno }

- **Verify Installation**: Check if `as` (GNU Assembler) and `ld` (GNU Linker) are installed by running the following command:

  ```zsh
  as --version && ld --version
  ```
  {: .nolineno }

  * **`as --version`**: This should output something like `GNU assembler (GNU Binutils) <version>`, where `<version>` represents the assembler's version number.
  * **`ld --version`**: This should display the linker's version, typically in the format `GNU ld (GNU Binutils) <version>`, where `<version>` represents the linker's version number.

> The location where **Binutils** (Binary Utilities) is installed can vary slightly depending on the Linux distribution and how it was installed (e.g., via package manager or compiled from source).
> - **Default Installation Paths**:
>   * Executables: `/usr/bin/` (e.g., `/usr/bin/as`, `/usr/bin/ld`, `/usr/bin/objdump`).
>   * Libraries: `/usr/lib/` or `/usr/local/lib/`.
>   * Include Files: `/usr/include/` or `/usr/local/include/`.
>   * Man Pages: `/usr/share/man/`.
> - **Custom Installations** (Compiled from Source):
>   * Executables: `/usr/local/bin/`.
>   * Libraries: `/usr/local/lib/`.
>   * Include Files: `/usr/local/include/`.
>   * Man Pages: `/usr/local/share/man/`.
> - **Check Installation Paths**:
>   ```zsh
>   which as && whereis ld
>   ```
>   {: .nolineno }
{: .callout.info }

> For reference, you can consult the [GNU Binutils](https://www.gnu.org/software/binutils/){: target="_blank" rel="noopener noreferrer"} project, including the [GNU Assembler](https://sourceware.org/binutils/docs/as/){: target="_blank" rel="noopener noreferrer"} and [GNU Linker](https://sourceware.org/binutils/docs/ld/){: target="_blank" rel="noopener noreferrer"} documentation. For debugging, refer to the [GNU Debugger](https://sourceware.org/gdb/){: target="_blank" rel="noopener noreferrer"} project and the [GDB](https://sourceware.org/gdb/current/onlinedocs/gdb/){: target="_blank" rel="noopener noreferrer"} documentation. Additionally, for system calls, you can explore the [Linux Syscall Table](https://www.chromium.org/chromium-os/developer-library/reference/linux-constants/syscalls/){: target="_blank" rel="noopener noreferrer"} and [Syscall Tables](https://syscalls.w3challs.com/){: target="_blank" rel="noopener noreferrer"}. For further details, see the [GNU Binutils Manual](https://sourceware.org/binutils/docs/){: target="_blank" rel="noopener noreferrer"}.
{: .callout.info }

#### 4. Writing and Running an Assembly Program
{: data-toc-skip='' .mt-4 }

Open **Kate** or any preferred GUI or CLI/TUI text editor.

##### 🔷 **64-bit Assembly** (x86_64 or x64):
{: data-toc-skip='' .mt-4 .mb-3 }

- Create a file named `hello64.s`, ensuring it has a `.s` extension, and add the following code:

  ```
  # 64-bit x86_64 Linux Assembly (AT&T Syntax)

  .section .data
  msg: .asciz "Hello, 64-bit World!\n"
  len = . - msg

  .section .text
  .global _start

  _start:
      mov $1, %rax           # Syscall 1 (write)
      mov $1, %rdi           # File descriptor (stdout)
      lea msg(%rip), %rsi    # Message address
      mov $len, %rdx         # Message length
      syscall

      mov $60, %rax          # Syscall 60 (exit)
      xor %rdi, %rdi         # Exit code 0
      syscall
  ```

- Build and Run:

  ```zsh
  as --64 -o hello64.o hello64.s           # Assemble to object file
  ld -m elf_x86_64 -o hello64 hello64.o    # Link to create executable
  ./hello64                                # Run the program
  ```
  {: .nolineno }

You will see the output: `Hello, 64-bit World!`

> Your code can explicitly target 64-bit architecture, so you should use the `--64` flag (or rely on the default behavior on a 64-bit system). Alternatively, if you're on a 64-bit system, you can omit both `--64` and `-m elf_x86_64`, as `as` will default to 64-bit.
{: .callout.tip }

Kate interface displaying a GAS 64-bit linux assembly program:

![Linux-GAS-Light](https://i.imgur.com/P4WzyOk.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEWrtLm9wsNlpryjAAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

![Linux-GAS-Dark](https://i.imgur.com/SuDqBQ8.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUoLzIwPEUGBZ8bAAAACklEQVQI12NwAAAAQgBBg7nsrQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

##### 🔷 **32-bit Assembly** (x86, i386, or i686):
{: data-toc-skip='' .mt-4 .mb-3 }

- To compile 32-bit assembly on a 64-bit system, install the following libraries. They may already be pre-installed on your Linux distribution.

  ```zsh
  # Arch/Manjaro
  sudo pacman -S lib32-glibc

  # Debian/Ubuntu
  sudo apt install gcc-multilib libc6-dev-i386

  # Fedora
  sudo dnf install glibc-devel.i686
  ```
  {: .nolineno }

- Create a file named `hello32.s`, ensuring it has a `.s` extension, and add the following code:

  ```
  # 32-bit x86 Linux Assembly (AT&T Syntax)

  .section .data
  msg: .asciz "Hello, 32-bit World!\n"
  len = . - msg

  .section .text
  .global _start

  _start:
      mov $4, %eax           # Syscall 4 = write
      mov $1, %ebx           # File descriptor (stdout)
      mov $msg, %ecx         # Pointer to message
      mov $len, %edx         # Message length
      int $0x80              # Invoke kernel

      mov $1, %eax           # Syscall 1 = exit
      xor %ebx, %ebx         # Exit code 0
      int $0x80              # Invoke kernel
  ```

- Build and Run:

  ```zsh
  as --32 -o hello32.o hello32.s           # Assemble to object file
  ld -m elf_i386 -o hello32 hello32.o      # Link to create executable
  ./hello32                                # Run the program
  ```
  {: .nolineno }

You will see the output: `Hello, 32-bit World!`

> On a 64-bit system, the default behavior of `ld` is to produce a 64-bit executable. If you attempt to link a 32-bit object file without specifying `-m elf_i386`, the linker will fail because it cannot mix 32-bit and 64-bit code. You may encounter an error message like: <br>`ld: i386 architecture of input file 'hello32.o' is incompatible with i386:x86-64 output`. This error occurs because `ld` is trying to produce a 64-bit executable (`i386:x86-64`), but the input object file is 32-bit (`i386`).
{: .callout.warning }

#### 5. Debugging with GDB
{: data-toc-skip='' .mt-4 }

- Install `gdb` via a package manager:

  ```zsh
  # Arch/Manjaro
  sudo pacman -S gdb

  # Debian/Ubuntu
  sudo apt install gdb

  # Fedora
  sudo dnf install gdb
  ```
  {: .nolineno }

- Debugging 64-bit (x86_64):

  ```zsh
  as --64 --gstabs -o hello64.o hello64.s     # Assemble with debug symbols
  ld -m elf_x86_64 -o hello64 hello64.o       # Link to create executable
  gdb ./hello64                               # Launch GDB
  ```
  {: .nolineno }

- Debugging 32-bit (x86):

  ```zsh
  as --32 --gstabs -o hello32.o hello32.s     # Assemble with debug symbols
  ld -m elf_i386 -o hello32 hello32.o         # Link to create executable
  gdb ./hello32                               # Launch GDB
  ```
  {: .nolineno }

> **Debug Symbols**: Instead of using the `--gstabs` flag, you can specify `--gdwarf-4` or `--gdwarf-5` for modern debugging support. If you are using an older version of **GDB**, `--gdwarf-2` or `--gdwarf-4` may provide better compatibility.
{: .callout.tip }

> **Basic GDB commands**:
>   - Set a breakpoint at `_start`: `break _start`
>   - Run the program: `run` (or `r`)
>   - Step one assembly instruction: `stepi` (or `si`)
>   - Continue execution until next breakpoint: `continue` (or `c`)
>   - Inspect registers: `info registers` (or `i r`)
>   - Print value of a register (e.g., `rax`): `print $rax` (or `p $rax`)
>   - Disassemble next 10 instructions: `x/10i $eip` (x86) or `x/10i $rip` (x86_64)
>   - Examine memory at address (e.g., `0x404000`): `x/xw 0x404000` (hex/word)
>   - Quit GDB: `quit` (or `q`)
> 
> **Advanced Commands**:
>   - Watch a memory address for changes: `watch *0x404000`
>   - Backtrace (show call stack): `bt`
>   - List all breakpoints: `info breakpoints` (or `i b`)
>   - Delete a breakpoint (e.g., breakpoint 1): `delete 1`
>   - Disassemble current function: `disassemble`
>   - Set a temporary breakpoint: `tbreak main`
>   - Execute until return: `finish`
> 
> **TUI (Text User Interface)**:
>   - Enable TUI mode: `tui enable`
>   - Toggle assembly layout: `layout asm`
>   - Show registers + assembly: `tui layout split`
>   - Show registers only: `tui layout regs`
>   - Refresh corrupted TUI display: `refresh` (or <kbd>Ctrl</kbd>+<kbd>L</kbd>)
>   - Exit TUI mode: `tui disable` (or <kbd>Ctrl</kbd>+<kbd>X</kbd>+<kbd>A</kbd>)
{: .callout.example }

> **Cross-Compiling and Documentation**:
>   - Use `objcopy` and `objdump` (part of GNU Binutils) for cross-architecture work.
>   - Access detailed documentation for `as`, `ld`, and `gdb` using the commands `man as`, `man ld`, and `man gdb`, respectively.
{: .callout.tip }

#### 6. Intel Syntax Support
{: data-toc-skip='' .mt-4 }

**GAS** uses **AT&T** syntax by default. For **Intel** syntax, add `.intel_syntax noprefix` to your assembly file.

- 64-bit Intel Syntax:

  ```
  # 64-bit x86_64 Linux Assembly (Intel Syntax)

  .intel_syntax noprefix
  .section .data
  msg: .asciz "Hello, 64-bit World!\n"
  len = . - msg

  .section .text
  .global _start

  _start:
      mov rax, 1              # Syscall 1 (write)
      mov rdi, 1              # File descriptor (stdout)
      lea rsi, [msg]          # Message address
      mov rdx, len            # Message length
      syscall                 # Invoke kernel

      mov rax, 60             # Syscall 60 (exit)
      xor rdi, rdi            # Exit code 0
      syscall                 # Invoke kernel
  ```

- 32-bit Intel Syntax:

  ```
  # 32-bit x86 Linux Assembly (Intel Syntax)

  .intel_syntax noprefix
  .section .data
  msg: .asciz "Hello, 32-bit World!\n"
  len = . - msg

  .section .text
  .global _start

  _start:
      mov eax, 4          # Syscall 4 (write)
      mov ebx, 1          # File descriptor
      mov ecx, offset msg # Message address
      mov edx, len        # Message length
      int 0x80

      mov eax, 1          # Syscall 1 (exit)
      xor ebx, ebx        # Exit code 0
      int 0x80
  ```

#### 7. Generate Listing File
{: data-toc-skip='' .mt-4 }

The listing file, which includes the assembly code, machine code, and addresses, can be generated using the GNU Assembler (`as`) by applying the `-a` option followed by the desired listing flags.

```zsh
as -al=listing.lst -o output.o input.s
```
{: .nolineno }

- `-a`: Enables the generation of a listing.
- `-al=listing.lst`: Specifies the output listing file (e.g., `listing.lst`).
- `-o output.o`: Specifies the object file.
- `input.s`: The assembly source file.

### Method #10

| **Tools Used** | **Description**                       |
| -------------- | ------------------------------------- |
| **OS/Distro**  | Manjaro **Linux** 25.0.0 (Zetar)      |
| **Kernel**     | Linux 6.12.11-1-MANJARO (64-bit)      |
| **Desktop**    | KDE Plasma 6.2.5                      |
| **Editor/IDE** | Nano (v8.3)                           |
| **Assembler**  | Netwide Assembler (NASM) (v2.16.03)   |
| **Linker**     | GNU `ld` (v2.43.1)                    |
| **Debugger**   | GNU `gdb` (v16.1)                     |

<details class="details-block" markdown="1">
  <summary>Why Choose This Method? Understanding the Benefits and Limitations</summary>
  <p style="text-align: justify;"><a href="https://www.nasm.us/" target="_blank" rel="noopener noreferrer"><strong>NASM</strong></a>(Netwide Assembler) is an open-source x86/x86-64 assembler known for its Intel-style syntax (<code class="language-plaintext highlighter-rouge">mov dest, src</code>), which enhances readability. It supports multiple object formats (ELF, COFF, Mach-O) and runs on Windows, Linux, and macOS. NASM is widely used for OS development, bootloaders, and performance-critical code due to its independence from compiler toolchains. It includes a robust macro system and preprocessor, allowing flexible code generation.</p>
  <p style="text-align: justify;"><strong>NASM vs. GAS</strong>: The primary difference between <b>NASM</b> and <b>GAS</b> lies in syntax and toolchain integration. NASM uses Intel syntax (<code class="language-plaintext highlighter-rouge">mov dest, src</code>), while GAS defaults to AT&T syntax (<code class="language-plaintext highlighter-rouge">movl $src, %dest</code>), which reverses operand order and requires register prefixes (<code class="language-plaintext highlighter-rouge">%</code>). NASM is cross-platform, supports multiple object formats, and includes a built-in preprocessor, making it ideal for standalone projects or OS development. In contrast, <b>GAS</b> is tightly integrated with the GNU toolchain, leverages the C preprocessor, and is preferred for inline assembly or Unix-centric workflows. Choose NASM for portability and Intel syntax familiarity; opt for GAS for GCC compatibility.</p>
  <p style="text-align: justify;"><strong>Binutils vs. GCC for Linking</strong>: For pure assembly projects, <b>GNU Binutils</b> (including <code class="language-plaintext highlighter-rouge">as</code>, <code class="language-plaintext highlighter-rouge">ld</code>, etc.) is a better choice than <code class="language-plaintext highlighter-rouge">gcc</code>, which is designed for high-level languages like C. While gcc can link assembly, it adds unnecessary overhead. Using <code class="language-plaintext highlighter-rouge">ld</code> directly is cleaner, more efficient, and avoids linking the C runtime unless explicitly needed. However, Binutils requires manual setup (e.g., <code class="language-plaintext highlighter-rouge">-m elf_i386</code> for 32-bit). <code class="language-plaintext highlighter-rouge">gcc</code> simplifies linking flags and is useful for mixed C/assembly projects, though <code class="language-plaintext highlighter-rouge">-nostdlib</code> is needed to prevent automatic linking of the C runtime. Use <code class="language-plaintext highlighter-rouge">ld</code> for pure assembly and <code class="language-plaintext highlighter-rouge">gcc</code> when integrating with C libraries like <code class="language-plaintext highlighter-rouge">libc</code>.</p>
</details>

> This method assumes you are using **Linux** (e.g., [Manjaro Linux](https://manjaro.org/){: target="_blank" rel="noopener noreferrer"}) as your operating system.

#### 1. Updating System Packages
{: data-toc-skip='' .mt-4 }

Before installing packages, ensure your system is up-to-date:

```zsh
# For Arch Linux / Manjaro:
sudo pacman -Syu

# For Debian / Ubuntu:
sudo apt update && sudo apt upgrade

# For Fedora:
sudo dnf update
```
{: .nolineno }

- Checking System Information:
  * **OS/Distro Version**: Use `lsb_release -a`, `cat /etc/os-release`, or `hostnamectl`.
  * **Kernel Version**: Use `uname -r` or `uname -a`.

> If you are using a **Linux desktop environment** (e.g., KDE plasma, GNOME, Xfce), you can check system information using the available **GUI** tools or the command-line interface (**CLI**).
{: .callout.info }

#### 2. Toolchain Configuration
{: data-toc-skip='' .mt-4 }

- **Text Editor**: You are using [**Nano**](https://nano-editor.org/){: target="_blank" rel="noopener noreferrer"}, but you can also use GUI (Graphical User Interface) text editors such as [VS Code](https://code.visualstudio.com/){: target="_blank" rel="noopener noreferrer"}, [Kate](https://kate-editor.org/){: target="_blank" rel="noopener noreferrer"}, [Gedit](https://gedit-text-editor.org/){: target="_blank" rel="noopener noreferrer"}, [Sublime Text](https://www.sublimetext.com/){: target="_blank" rel="noopener noreferrer"}, [Geany](https://geany.org/){: target="_blank" rel="noopener noreferrer"}, [GNOME Text Editor](https://apps.gnome.org/TextEditor/){: target="_blank" rel="noopener noreferrer"}, [Notepadqq](https://notepadqq.com/s/){: target="_blank" rel="noopener noreferrer"}, etc. Alternatively, you can use CLI (Command Line Interface) or TUI (Terminal User Interface) text editors like [Neovim](https://neovim.io/){: target="_blank" rel="noopener noreferrer"}, [Vim](https://www.vim.org/){: target="_blank" rel="noopener noreferrer"}, [GNU Emacs](https://www.gnu.org/software/emacs/){: target="_blank" rel="noopener noreferrer"}, [amp](https://amp.rs/){: target="_blank" rel="noopener noreferrer"}, [Micro](https://micro-editor.github.io/){: target="_blank" rel="noopener noreferrer"}, etc.
- **Terminal Emulator & Shell**: You are using [**Ghostty**](https://ghostty.org/){: target="_blank" rel="noopener noreferrer"}, but you can also use other terminal emulators such as [Konsole](https://konsole.kde.org/){: target="_blank" rel="noopener noreferrer"}, [Wave](https://www.waveterm.dev/){: target="_blank" rel="noopener noreferrer"}, [Warp](https://www.warp.dev/){: target="_blank" rel="noopener noreferrer"} (not open-source), [GNOME Terminal](https://en.wikipedia.org/wiki/GNOME_Terminal){: target="_blank" rel="noopener noreferrer"}, [xterm](https://invisible-island.net/xterm/){: target="_blank" rel="noopener noreferrer"}, [Terminator](https://gnome-terminator.org/){: target="_blank" rel="noopener noreferrer"}, [Alacritty](https://alacritty.org/){: target="_blank" rel="noopener noreferrer"}, [Kitty](https://sw.kovidgoyal.net/kitty/){: target="_blank" rel="noopener noreferrer"}, [Hyper](https://hyper.is/){: target="_blank" rel="noopener noreferrer"}, [Tabby](https://tabby.sh/){: target="_blank" rel="noopener noreferrer"}, [Cool Retro Term](https://github.com/Swordfish90/cool-retro-term){: target="_blank" rel="noopener noreferrer"}, etc. For the shell, you are using [**zsh**](https://ohmyz.sh/){: target="_blank" rel="noopener noreferrer"}, but alternatives like [bash](https://www.gnu.org/software/bash/){: target="_blank" rel="noopener noreferrer"} and [fish](https://fishshell.com/){: target="_blank" rel="noopener noreferrer"} are also available.
- **Package Manager**: You are using [**Pacman**](https://wiki.archlinux.org/title/Pacman#){: target="_blank" rel="noopener noreferrer"} (Arch/Manjaro), but depending on your linux distribution, you can use [Pamac](https://wiki.manjaro.org/index.php?title=Pamac){: target="_blank" rel="noopener noreferrer"}, [Apt](https://wiki.debian.org/AptCLI){: target="_blank" rel="noopener noreferrer"} (Debian/Ubuntu), or [DNF](https://rpm-software-management.github.io/){: target="_blank" rel="noopener noreferrer"} (Fedora).

<!-- Zsh Theme | https://github.com/romkatv/powerlevel10k -->

#### 3. Assembly Toolchain Installation
{: data-toc-skip='' .mt-4 }

- Install the Netwide Assembler ([`nasm`](https://www.nasm.us/){: target="_blank" rel="noopener noreferrer"}) package, which also includes `ndisasm`, a disassembler. Additionally, install the [Binutils](https://www.gnu.org/software/binutils/){: target="_blank" rel="noopener noreferrer"} package, which provides essential tools such as the GNU Assembler ([`as`](https://sourceware.org/binutils/docs/as/){: target="_blank" rel="noopener noreferrer"}) and the GNU Linker ([`ld`](https://sourceware.org/binutils/docs/ld/){: target="_blank" rel="noopener noreferrer"}), along with other utilities from the GNU Binutils toolset.
- For debugging, install the GNU Debugger ([`gdb`](https://sourceware.org/gdb/){: target="_blank" rel="noopener noreferrer"}) package. Additionally, a separate package is required for 32-bit (x86) assembly, which will be discussed in its respective section.
- From the Binutils package, we are primarily concerned with the GNU Linker (`ld`).

> You can also choose to install GNU [GCC](https://gcc.gnu.org/){: target="_blank" rel="noopener noreferrer"} and skip installing Binutils, as we are only installing it for the GNU Linker (`ld`). GCC includes all the necessary tools, such as the GNU Assembler (`as`), the GNU Linker (`ld`), and more.
> 
> Additionally, GCC serves as a complete C/C++ development environment. However, if you are working exclusively with assembly, you may not need it. You will need GCC if you plan to mix C/C++ with assembly.  
> - To install GCC along with other essential tools: 
>   ```zsh
>   # For Arch Linux / Manjaro:
>   sudo pacman -S nasm gcc gdb
>
>   # For Debian / Ubuntu:
>   sudo apt install nasm gcc gdb
>
>   # For Fedora:
>   sudo dnf install nasm gcc gdb
>   ```
>   {: .nolineno }
{: .callout.tip }

> **Binutils** may already be pre-installed on your linux distribution.
{: .callout.note }

- You can download these packages directly from their official websites, clone their repositories, or install them via a package manager.  

  ```zsh
  # For Arch Linux / Manjaro:
  sudo pacman -S nasm binutils gdb

  # For Debian / Ubuntu:
  sudo apt install nasm binutils gdb

  # For Fedora:
  sudo dnf install nasm binutils gdb
  ```
  {: .nolineno }

- **Verify Installation**: Check if `nasm` (Netwide Assembler), `ld` (GNU Linker), and `gdb` (GNU Debugger) are installed by running the following command:  

  ```zsh
  nasm --version && ld --version && gdb --version
  ```
  {: .nolineno }

  * **`nasm --version`**: This should output something like `NASM version <VersionNumber> compiled on <MM DD YYYY>`, where `<VersionNumber>` represents the NASM version number and `<MM DD YYYY>` is the compilation date.
  * **`ld --version`**: This should display the linker's version, typically in the format `GNU ld (GNU Binutils) <version>`, where `<version>` represents the linker's version number.
  * **`gdb --version`**: This should display the debugger's version, typically in the format `GNU gdb (GDB) <version>`, where `<version>` represents the debugger's version number.

> The installation location of NASM, Binutils, and GDB may vary depending on the Linux distribution and the installation method (e.g., via a package manager or compiled from source).
> - **Default Installation Paths**:
>   * Executables: `/usr/bin/` (e.g., `/usr/bin/nasm`, `/usr/bin/ld`, `/usr/bin/gdb`).
>   * Libraries: `/usr/lib/` or `/usr/local/lib/`.
>   * Include Files: `/usr/include/` or `/usr/local/include/`.
>   * Man Pages: `/usr/share/man/`.
> - **Custom Installations** (Compiled from Source):
>   * Executables: `/usr/local/bin/`.
>   * Libraries: `/usr/local/lib/`.
>   * Include Files: `/usr/local/include/`.
>   * Man Pages: `/usr/local/share/man/`.
> - **Check Installation Paths**:
>   ```zsh
>   which nasm && whereis ld && which gdb
>   ```
>   {: .nolineno }
{: .callout.info }

> For reference, you can consult the [NASM](https://www.nasm.us/xdoc/2.16.03/html/nasmdoc0.html) documentation (for the PDF format, check [this link](https://www.nasm.us/xdoc/2.16.03/nasmdoc.pdf){: target="_blank" rel="noopener noreferrer"}). You can also refer to the [GNU Binutils](https://www.gnu.org/software/binutils/){: target="_blank" rel="noopener noreferrer"} project, including the [GNU Linker](https://sourceware.org/binutils/docs/ld/){: target="_blank" rel="noopener noreferrer"} documentation. For debugging, see the [GNU Debugger](https://sourceware.org/gdb/){: target="_blank" rel="noopener noreferrer"} project and the [GDB](https://sourceware.org/gdb/current/onlinedocs/gdb/){: target="_blank" rel="noopener noreferrer"} documentation. Additionally, for system calls, you can explore the [Linux Syscall Table](https://www.chromium.org/chromium-os/developer-library/reference/linux-constants/syscalls/){: target="_blank" rel="noopener noreferrer"} and the [Syscall Tables](https://syscalls.w3challs.com/){: target="_blank" rel="noopener noreferrer"}. For further details, refer to the [GNU GCC](https://gcc.gnu.org/){: target="_blank" rel="noopener noreferrer"} project and the [GCC](https://gcc.gnu.org/onlinedocs/gcc-14.2.0/gcc/){: target="_blank" rel="noopener noreferrer"} documentation.
{: .callout.info }  

#### 4. Writing and Running an Assembly Program
{: data-toc-skip='' .mt-4 }

1. Open **Ghostty** or your preferred terminal emulator, and navigate to the directory where you want to store your assembly projects.  
2. Use the **Nano** text editor or any editor of your choice.  

##### 🔷 **64-bit Assembly** (x86_64 or x64):
{: data-toc-skip='' .mt-4 .mb-3 }

- Create a file named `hello_x64.asm` by typing `nano hello_x64.asm` and pressing <kbd>Enter</kbd>. Ensure that the file has a `.asm` extension, then add the following code:  

  ```nasm
  ; x86_64 (64-bit) Linux Assembly (Intel Syntax)

  section .data
  message db "Hello, x64!", 0xA   ; String with newline

  section .text
  global _start

  _start:
      ; Write "Hello, x64!" to stdout
      mov rax, 1          ; sys_write
      mov rdi, 1          ; stdout
      mov rsi, message    ; message pointer
      mov rdx, 12         ; length
      syscall             ; invoke syscall

      ; Exit
      mov rax, 60         ; sys_exit
      xor rdi, rdi        ; exit code 0
      syscall
  ```

- Build and Run:

  ```zsh
  # Option 1: Using Binutils (ld)
  nasm -f elf64 hello_x64.asm -o hello_x64.o   # Assemble to object file
  ld hello_x64.o -o hello_x64                  # Link to create executable
  ./hello_x64                                  # Run the program

  # Option 2: Using GCC
  nasm -f elf64 hello_x64.asm -o hello_x64.o  
  gcc -nostdlib hello_x64.o -o hello_x64       # Link with GCC (skip C runtime) 
  ./hello_x64
  ```
  {: .nolineno }

You will see the output: `Hello, x64!`

![Linux-NASM](https://i.imgur.com/q2X0m9x.png){: .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUjKiMkKiRxhT/nAAAACklEQVQI12NoAAAAggCB3UNq9AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}
_Ghostty interface displaying a NASM 64-bit linux assembly program_

##### 🔷 **32-bit Assembly** (x86, i386, or i686):
{: data-toc-skip='' .mt-4 .mb-3 }

- To compile 32-bit assembly on a 64-bit system, install the following libraries. They may already be pre-installed on your Linux distribution.  

  ```zsh
  # Arch/Manjaro
  sudo pacman -S lib32-glibc

  # Debian/Ubuntu
  sudo apt install gcc-multilib libc6-dev-i386

  # Fedora
  sudo dnf install glibc-devel.i686
  ```
  {: .nolineno }

- Create a file named `hello_x86.asm` by typing `nano hello_x86.asm` and pressing <kbd>Enter</kbd>. Ensure that the file has a `.asm` extension, then add the following code:  

  ```nasm
  ; x86 (32-bit) Linux Assembly (Intel Syntax)

  section .data
  message db "Hello, x86!", 0xA     ; String with newline

  section .text
  global _start

  _start:
      ; Write "Hello, x86!" to stdout
      mov eax, 4          ; sys_write
      mov ebx, 1          ; stdout
      mov ecx, message    ; message pointer
      mov edx, 12         ; length
      int 0x80            ; invoke syscall

      ; Exit
      mov eax, 1          ; sys_exit
      xor ebx, ebx        ; exit code 0
      int 0x80
  ```

- Build and Run:

  ```zsh
  # Option 1: Using Binutils (ld)
  nasm -f elf32 hello_x86.asm -o hello_x86.o   # Assemble to object file
  ld -m elf_i386 hello_x86.o -o hello_x86      # Link to create executable
  ./hello_x86                                  # Run the program

  # Option 2: Using GCC
  nasm -f elf32 hello_x86.asm -o hello_x86.o  
  gcc -m32 -nostdlib hello_x86.o -o hello_x86  # Link with GCC (skip C runtime)
  ./hello_x86
  ```
  {: .nolineno }

You will see the output: `Hello, x86!`

> On a 64-bit system, the default behavior of `ld` is to produce a 64-bit executable. If you attempt to link a 32-bit object file without specifying `-m elf_i386`, the linker will fail because it cannot mix 32-bit and 64-bit code. You may encounter an error message like: <br>`ld: i386 architecture of input file 'hello_x86.o' is incompatible with i386:x86-64 output`. This error occurs because `ld` is trying to produce a 64-bit executable (`i386:x86-64`), but the input object file is 32-bit (`i386`).
{: .callout.warning }

#### 5. Debugging with GDB
{: data-toc-skip='' .mt-4 }

- Install `gdb` via a package manager if you haven't installed it in the previous steps.  

  ```zsh
  # Arch/Manjaro
  sudo pacman -S gdb

  # Debian/Ubuntu
  sudo apt install gdb

  # Fedora
  sudo dnf install gdb
  ```
  {: .nolineno }

- Debugging 64-bit (x86_64):

  ```zsh
  # Option 1: Using Binutils (ld)
  nasm -f elf64 -g -F dwarf hello_x64.asm -o hello_x64.o  # Assemble with debug symbols
  ld hello_x64.o -o hello_x64                             # Link to create executable
  gdb ./hello_x64                                         # Launch GDB

  # Option 2: Using GCC
  nasm -f elf64 -g -F dwarf hello_x64.asm -o hello_x64.o
  gcc -nostdlib -no-pie hello_x64.o -o hello_x64
  gdb ./hello_x64
  ```
  {: .nolineno }

- Debugging 32-bit (x86):

  ```zsh
  # Option 1: Using Binutils (ld)
  nasm -f elf32 -g -F dwarf hello_x86.asm -o hello_x86.o  # Assemble with debug symbols
  ld -m elf_i386 hello_x86.o -o hello_x86                 # Link to create executable
  gdb ./hello_x86                                         # Launch GDB

  # Option 2: Using GCC
  nasm -f elf32 -g -F dwarf hello_x86.asm -o hello_x86.o
  gcc -m32 -nostdlib -no-pie hello_x86.o -o hello_x86
  gdb ./hello_x86
  ```
  {: .nolineno }

> **Basic GDB commands**:
>   - Set a breakpoint at `_start`: `break _start`
>   - Run the program: `run` (or `r`)
>   - Step one assembly instruction: `stepi` (or `si`)
>   - Continue execution until next breakpoint: `continue` (or `c`)
>   - Inspect registers: `info registers` (or `i r`)
>   - Print value of a register (e.g., `rax`): `print $rax` (or `p $rax`)
>   - Disassemble next 10 instructions: `x/10i $eip` (x86) or `x/10i $rip` (x86_64)
>   - Examine memory at address (e.g., `0x404000`): `x/xw 0x404000` (hex/word)
>   - Quit GDB: `quit` (or `q`)
> 
> **Advanced Commands**:
>   - Watch a memory address for changes: `watch *0x404000`
>   - Backtrace (show call stack): `bt`
>   - List all breakpoints: `info breakpoints` (or `i b`)
>   - Delete a breakpoint (e.g., breakpoint 1): `delete 1`
>   - Disassemble current function: `disassemble`
>   - Set a temporary breakpoint: `tbreak main`
>   - Execute until return: `finish`
> 
> **TUI (Text User Interface)**:
>   - Enable TUI mode: `tui enable`
>   - Toggle assembly layout: `layout asm`
>   - Show registers + assembly: `tui layout split`
>   - Show registers only: `tui layout regs`
>   - Refresh corrupted TUI display: `refresh` (or <kbd>Ctrl</kbd>+<kbd>L</kbd>)
>   - Exit TUI mode: `tui disable` (or <kbd>Ctrl</kbd>+<kbd>X</kbd>+<kbd>A</kbd>)
{: .callout.example }

#### 6. Generate Listing File
{: data-toc-skip='' .mt-4 }

For NASM, use the `-l` option to create a listing file containing assembly code, machine code (hex), and addresses:

```zsh
nasm -f elf64 -l listing.lst input.asm -o output.o
```
{: .nolineno }

- `-f elf64`: Output format (use `elf32` for 32-bit)
- `-l listing.lst`: Generate listing file (`listing.lst`)
- `input.asm`: Your NASM assembly source file
- `-o output.o`: Object file output

### Method #11

| **Tools Used** | **Description**                                                                             |
| -------------- | ------------------------------------------------------------------------------------------- |
| **OS**         | Windows 10 (64-bit)                                                                         |
| **Editor/IDE** | Visual Studio Code (VS Code) (v1.97.2)                                                      |
| **Assembler**  | Netwide Assembler (NASM) (v2.16.03) - win64                                                 |
| **Linker**     | GoLink (v1.0.4.6), ld (v2.43), gcc/g++ (v14.2.0), Polink (v12.0), MS link (v14.43.34808.0)  |
| **Debugger**   | x64dbg (snapshot_2025-02-27_00-11), IDA Free (v9.0.20241216), Ghidra (v11.3.1), WinDbg (v1.2502.25002.0), gdb (v14.2) |

> Check out the [NASM-Starter](https://github.com/tis-starlight/NASM-Starter){: target="_blank" rel="noopener noreferrer"} repository for a basic **NASM** and **GoLink** setup with a well-organized folder structure. Cloning or using this repository is optional. Once ready, follow the instructions below.
{: .callout.tip }

> This method assumes you are using **Windows 10** as your operating system.

#### 1. IDE

[Visual Studio Code](https://code.visualstudio.com/){: target="_blank" rel="noopener noreferrer"} (VS Code) is a lightweight yet powerful code editor with built-in support for debugging, version control, and multiple programming languages. The [Extensions Marketplace](https://marketplace.visualstudio.com/vscode){: target="_blank" rel="noopener noreferrer"} offers plugins to extend functionality, while the official [documentation](https://code.visualstudio.com/docs){: target="_blank" rel="noopener noreferrer"} provides comprehensive usage guides.

- **Install VS Code**:
  * Download the latest stable **64-bit installer** from the official [website](https://code.visualstudio.com/){: target="_blank" rel="noopener noreferrer"}.
  * Run the installer. Check "**Add to PATH**" during installation.
- **Essential Extensions**: 
  * Enhance your assembly development in **VS Code** with essential extensions tailored to your workflow.
  * Launch VS Code and navigate to the Extensions by clicking on the Extensions icon in the Activity Bar or pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>.
  * Search for and install the following extensions:
    * 🔍 [**ASM Code Lens**](vscode:extension/maziac.asm-code-lens) - Improves code readability with cross-references and metadata.  
    * 🏗 [**x86 and x86_64 Assembly**](vscode:extension/13xforever.language-x86-64-assembly) - Adds syntax highlighting for Intel and AT&T assembly.  
    * 🚀 [**Code Runner**](vscode:extension/formulahendry.code-runner) - Enables quick execution of code snippets.  
    * 🎯 [**exe Runner**](vscode:extension/brandonfowler.exe-runner) - Runs compiled executables within VS Code.  
    * 🧰 [**C/C++**](vscode:extension/ms-vscode.cpptools) - Provides debugging, IntelliSense, and code navigation, useful for mixed-language projects.
- **Configure Workspace/Folder Structure**:
  * Organize your assembly project with a structured folder layout to separate source files, object files, and executables for efficient development.
  * Create a project folder (e.g., `NASM-Starter`) or choose a suitable name for your project. The directory contains `src/` (source code - `.asm` files), `obj/` (object files - `.obj`), and `bin/` (executables - `.exe`). Use the following folder structure:

    ```
    📁 NASM-Starter/  
    │
    ├── 📁 .vscode/
    │   ├── 📄 settings.json    # Editor settings
    │   └── 📄 extensions.json  # Recommended extensions
    │
    ├── 📁 src/
    │   ├── 📁 x86/             # 32-bit code
    │   └── 📁 x64/             # 64-bit code
    │
    ├── 📁 obj/
    │   ├── 📁 x86/             # 32-bit objects
    │   └── 📁 x64/             # 64-bit objects
    │
    ├── 📁 bin/
    │   ├── 📁 x86/             # 32-bit binaries
    │   └── 📁 x64/             # 64-bit binaries
    │
    ├── 📁 tools/
    │   ├── 📄 nasm.exe         # NASM assembler
    │   └── 📄 GoLink.exe       # GoLink linker
    │
    ├── 📁 scripts/
    │   ├── 📄 build_x86.bat    # 32-bit build
    │   ├── 📄 build_x64.bat    # 64-bit build
    │   └── 📄 clean.bat        # Cleanup
    │
    ├── 📄 .editorconfig        # Code style rules
    ├── 📄 .gitattributes       # Git file rules
    ├── 📄 .gitignore           # Git ignores
    ├── 📄 LICENSE              # License
    └── 📄 README.md            # Project docs
    ```

#### 2. Assembler

- Download the latest stable version of **NASM** from the official [website](https://www.nasm.us/){: target="_blank" rel="noopener noreferrer"}. Choose the `win64` version from the available installers. For reference, you can consult the [NASM](https://www.nasm.us/xdoc/2.16.03/html/nasmdoc0.html){: target="_blank" rel="noopener noreferrer"} documentation (for the PDF format, check [this link](https://www.nasm.us/xdoc/2.16.03/nasmdoc.pdf){: target="_blank" rel="noopener noreferrer"}). 
  - Use the **installable package** (`nasm-2.16.03-installer-x64.exe`), which includes the NASM assembler (`nasm.exe`), disassembler (`ndisasm.exe`), additional modules, the complete NASM PDF manual, and Visual Studio 2008 NASM integration (rules file). The default installation location is `C:\Program Files\NASM`.
  
    ```
    📁 C:\Program Files\NASM\
    ├── VSrules\              # Contains Visual Studio integration rules
    │   ├── nasm.README       # Readme file for VS integration
    │   └── nasm.rules        # Rules for Visual Studio projects
    ├── LICENSE               # NASM license file
    ├── nasm.exe              # NASM assembler executable
    ├── nasm.ico              # NASM icon file
    ├── nasmdoc.pdf           # NASM documentation in PDF format
    ├── nasmpath.bat          # Batch script to set NASM path
    ├── ndisasm.exe           # NASM disassembler executable
    └── Uninstall.exe         # NASM uninstaller
    ```

  - Alternatively, use the **executable-only** ZIP file (`nasm-2.16.03-win64.zip`), which includes the NASM assembler (`nasm.exe`), disassembler (`ndisasm.exe`), and `LICENSE` file. This option is useful for a minimal setup, reduced dependencies, and portability:
    * Extract the downloaded ZIP file to a preferred location (e.g., `C:\nasm`).
    * Add NASM to your system `PATH`:
      1. Open "**Advanced System Settings**" → "**Environment Variables**" → "**System Variables**".
      2. Locate and select the "**Path**" variable, then click "**Edit**".
      3. Click "**New**" and add the path to the NASM executable (e.g., `C:\nasm`).
      4. Click "**OK**" to save the changes and close all dialogs.

> If **VS Code** is already open, you must restart it for the environment variable changes to take effect. Otherwise, you will encounter an error message like: `'nasm' is not recognized as an internal or external command, operable program, or batch file`.
{: .callout.warning }

- **Verify Installation**: Open Command Prompt and run:

  ```terminal
  nasm -v
  ```

This should output something like `NASM version 2.16.03 compiled on Apr 17 2024`, confirming NASM is installed correctly.

- **Assemble/build code with NASM**:

  ```terminal
  // For 64-bit (x86_64 or x64)
  nasm -f win64 example64.asm -o example64.obj -l example64.lst

  // For 32-bit (x86 or i386 or i686)
  nasm -f win32 example32.asm -o example32.obj -l example32.lst
  ```

The `-l` flag generates a listing file.

#### 3. Linker

[Linkers](/posts/language-translators/#1-linker) combine object files into executables by resolving symbols, handling memory addresses (relocation), and linking libraries. They support **static linking** (embedding libraries into the executable) and **dynamic linking** (loading shared libraries at runtime). Linkers also optimize binaries by removing unused code and enabling **Link-Time Optimization** (LTO). Errors like undefined references or architecture mismatches are detected during linking. Efficient linking is crucial for performance, portability, and reducing executable size.

<details class="details-beauty" markdown="1">
<summary>Windows API (Win32 API)</summary>
Linux and Windows take very different approaches when interacting with the underlying system from assembly code. In **Linux**, developers can write self-contained assembly programs that directly invoke/make system calls using the stable and documented syscall interface (e.g., `sys_write`, `sys_exit`). These syscalls are accessed via the syscall instruction (or int 0x80 in 32-bit mode), allowing programs to bypass linking against external libraries like the C standard library. This means your code can interact directly with the Linux kernel to perform tasks like writing to the console or exiting the program. While syscall numbers are generally stable, their availability may depend on the kernel version—newer syscalls might not exist in older kernels.

**Windows**, by contrast, does not expose a stable, public syscall interface for user-mode applications. While Windows does use direct system calls (syscalls) internally, these are undocumented, subject to change even between minor OS updates, and unsupported by Microsoft. Instead, Windows programs must use the **Windows API** (Win32 API), which provides high-level functions like `WriteConsoleA` and `ExitProcess` from system libraries such as `kernel32.dll`. While direct syscalls are occasionally used in niche scenarios (e.g., security research or malware), they are inherently fragile and not part of standard development practices.

The [Windows API](https://learn.microsoft.com/en-us/windows/win32/api/){: target="_blank" rel="noopener noreferrer"} is commonly referred to as the "**Win32 API**". The term Win32 API is retained even for 64-bit Windows development. There is no separate "Win64 API"; instead, the same function names (e.g., `MessageBox`) are used across architectures. However, implementation details differ:
  - On a 64-bit Windows system, 64-bit APIs reside in DLLs such as `kernel32.dll`, which are stored in the `System32` directory. Meanwhile, their 32-bit counterparts are located in the `SysWOW64` directory, which is part of the **WOW64** (Windows-on-Windows 64-bit) subsystem that enables 32-bit applications to run on a 64-bit OS.
  - Data types (e.g., pointer sizes) and calling conventions (e.g., x64 (64bit) uses `fastcall` and x86 (32bit) uses `stdcall`) are adjusted transparently via the Windows SDK headers and libraries.
</details>

<details class="details-beauty" markdown="1">
<summary>Linking Libraries and DLLs</summary>
> The Microsoft documentation for each API function specifies the required `.lib` and `.dll` files to include. Windows import libraries are available from various sources, including [Pelles C](https://www.smorgasbordet.com/pellesc/){: target="_blank" rel="noopener noreferrer"} (32-bit and 64-bit), [MASM32](https://www.masm32.com/){: target="_blank" rel="noopener noreferrer"} (32-bit), and [WinInc](https://www.japheth.de/WinInc.html){: target="_blank" rel="noopener noreferrer"} (32-bit and 64-bit).
{: .callout.info }

◉ **Determining Required Libraries**: 
- When developing 32-bit or 64-bit assembly programs on Windows, determining the necessary libraries for linking is crucial for proper functionality. The first step is to identify the API calls used in your code. Windows API functions are typically provided by system libraries, so understanding which functions your program relies on helps in selecting the appropriate dependencies. Some of the most commonly used libraries include `kernel32.dll` for core system functions, `user32.dll` for graphical user interface operations, and `msvcrt.dll` for standard C runtime support.
- To verify dependencies and ensure correct linking, various tools can be used. Microsoft's official documentation provides comprehensive details about available APIs and their associated libraries. Additionally, command-line tools like [`dumpbin`](https://learn.microsoft.com/en-us/cpp/build/reference/dumpbin-reference?view=msvc-170){: target="_blank" rel="noopener noreferrer"}, included with Visual Studio, allow developers to inspect executable files and determine linked dependencies. Another useful tool is Dependency Walker ([`depends.exe`](https://dependencywalker.com/){: target="_blank" rel="noopener noreferrer"}), which provides a graphical interface for analyzing DLL dependencies. By leveraging these methods, developers can confidently link the required libraries, ensuring their assembly programs run smoothly on Windows.

◉ **Linking Unnecessary or Incorrect Libraries**:
- **Unused Libraries**: Modern linkers (e.g., Microsoft `link.exe`, GNU `ld`) optimize by discarding unused code from libraries. Linking an unnecessary library (e.g., `user32.lib` for a console app) typically won't bloat your executable. However, libraries with global initializers (e.g., C++ runtimes) might still execute code unexpectedly, even if unused.
- **Wrong Libraries**:
  * **Missing Symbols**: Linking a library that lacks required functions (e.g., using `msvcrt.lib` instead of `kernel32.lib` for Windows APIs) causes linker errors like `"undefined reference"`.
  * **Conflicting Symbols**: If two libraries define the same symbol (e.g., `printf` in `msvcrt.lib` and `ucrt.lib`), the linker picks one arbitrarily, risking crashes.
  * **Architecture Mismatches**: Mixing 32-bit (x86) and 64-bit (x64) libraries fails with errors like `"invalid object file"`.

◉ **Linking `.lib` vs. `.dll` files**:
- **Static libraries** (`.lib`) embed code directly into the executable, which eliminates runtime dependencies but results in larger executables.
- **Import libraries** (`.lib`) act as stubs for DLLs, meaning the actual code resides in the `.dll` and loads at runtime. This approach produces smaller executables but introduces a dependency on the presence of the `.dll` on the target system.
- **Linking `.dll` directly**: Most linkers, such as `link.exe` and `ld`, cannot directly use `.dll` files for linking; they require corresponding `.lib` import libraries to resolve symbols. Attempting to link a `.dll` directly typically results in an `"unrecognized file format"` error. **GoLink** is a unique linker that bypasses traditional linking requirements by directly parsing `.dll` export tables, making it an exception to standard linkers that require `.lib` import libraries.
- **Mixing `.lib` and `.dll`**: Mixing `.lib` and `.dll` incorrectly can cause issues—linking a `.lib` as a `.dll` or vice versa results in immediate format errors, while using the wrong import library (e.g., linking `kernel32.lib` but missing `kernel32.dll` at runtime) can cause the program to crash with a `"DLL not found"` error.
</details>

<details class="details-beauty" markdown="1">
<summary>Linker Architecture (Bitness) vs. Output Format</summary>
When discussing linkers, it's crucial to distinguish between **how the linker runs** (its architecture) and **what it produces** (the executable format). A "**32-bit linker**" is a program compiled to run as a 32-bit application. Thanks to Windows' WoW64 compatibility layer, it can operate on both 32-bit and 64-bit systems. However, its ability to create 32-bit or 64-bit executables (PE32 or PE32+) depends on its design. Modern linkers (e.g., GoLink, MSVC's `link.exe`, or `ld`) support generating outputs for either architecture, regardless of whether the linker itself is 32-bit or 64-bit. For example, specifying `/MACHINE:X86` (for 32-bit) or `/MACHINE:X64` (for 64-bit) in MSVC's linker determines the output format. Similarly, assemblers like NASM use flags (e.g., `-f win32` or `-f win64`) to generate matching object files, which the linker then combines into the final executable.

A "**64-bit linker**" requires a 64-bit OS to run but can also produce both 32-bit and 64-bit executables if designed to do so. The key takeaway is that **the linker's own bitness affects where it can run, not what it can produce**. The output format is controlled by the linker's options and the object files it processes. However, older or simpler linkers might lack cross-architecture support, and 32-bit linkers may struggle with very large 64-bit projects due to memory constraints.
</details>

Choose one of the following options:

<details class="details-beauty" markdown="1">
<summary>Option 1: GoLink [Recommended]</summary>
**GoLink** is a free linker (`GoLink.exe`) designed for Windows (Win32 and Win64/x64) that processes COFF object files and resource (`.res`) files to generate executable (`.exe`) and dynamic-link library (`.dll`) files. It is a fully featured yet lightweight linker that minimizes dependencies and reduces file overhead. Unlike traditional linkers, GoLink does not require import libraries (`.lib`) to resolve functions within DLLs. Instead, it directly inspects DLLs to identify available functions, streamlining the linking process.

- **Key Features**:
  * **No Import Libraries Required**: GoLink eliminates the need for separate import libraries by directly parsing `.dll`, `.exe`, `.ocx`, and `.drv` files to resolve symbols.
  * **Architecture Detection**: It automatically determines the architecture of input files and generates either 32-bit (`x86`) or 64-bit (`x64`) executables. However, mixing 32-bit and 64-bit code within the same build results in an error.
  * **Optimized Code Analysis**: When used with **GoAsm**, GoLink can detect and report redundant data and code, improving program efficiency.
  * **Unicode Support**: Supports Unicode filenames and labels, including exports and imports.
  * **Portable Executable (PE) Support**: Compatible with `.exe`, `.dll`, and `.sys` driver file formats.
- **Dependency Resolution**: When resolving dependencies (e.g., `kernel32.dll`), GoLink follows this search order:
  1. The directory where GoLink is launched
  2. The current working directory
  3. Windows system directories (`System32`, `SysWOW64`)
  4. Directories listed in the `PATH` environment variable

  > To use a specific DLL, users can either place it in the GoLink launch directory or specify its full path.
  {: .callout.tip }

- **Installation Instructions**:
  1. Download the latest version of **GoLink** from the official [website](https://www.godevtool.com/){: target="_blank" rel="noopener noreferrer"}. Refer to the GoLink [documentation](https://www.godevtool.com/GolinkFrame.htm){: target="_blank" rel="noopener noreferrer"} for additional details.
  2. Extract the downloaded ZIP file to a preferred location (e.g., `C:\golink`).
  3. Add GoLink to your system `PATH`:
    * Open **Advanced System Settings** → **Environment Variables**.
    * Under **System Variables**, locate and select the "Path" variable, then click **Edit**.
    * Click **New** and add the path to the GoLink executable (e.g., `C:\golink`).
    * Click **OK** to save changes and close all dialogs.

  > Restart VS Code if it is already open to ensure the environment variable takes effect. Otherwise, you may encounter an error message such as: `'golink' is not recognized as an internal or external command, operable program, or batch file`.
  {: .callout.warning }

- **Verify Installation**: Open Command Prompt and run:
  
  ```terminal
  golink
  ```

  This should display output similar to: `GoLink.Exe Version 1.0.4.6  Copyright Jeremy Gordon 2002-2025` along with GoLink's usage information, confirming that the installation was successful.

- **Linking with GoLink**: GoLink simplifies the linking process by using `.dll` files directly, eliminating the need for `.lib` files.

  ```terminal
  // For 64-bit (x86_64 or x64)
  golink /entry:_start /console example64.obj kernel32.dll

  // For 32-bit (x86 or i386 or i686)
  golink /entry:_start /console example32.obj kernel32.dll
  ```

  Omit `/console` if the application is a GUI application rather than a console/command-line application.

  > GoLink automatically resolves Windows API dependencies (e.g., `kernel32.dll`). In many cases, system libraries are included automatically, so specifying `kernel32.dll` is only necessary if your code explicitly calls functions from it.
  {: .callout.note }
</details>

<details class="details-beauty" markdown="1">
<summary>Option 2: GNU Linker (ld) and GCC/G++</summary>
Microsoft Windows' default compiler is **MSVC**, which comes installed with **Visual Studio**. While Visual Studio is a powerful IDE suitable for most development scenarios, some libraries and workflows benefit from a more minimalist environment. This can be achieved by using **GCC/G++** on Windows. **MinGW** is a GNU-developed package that allows you to use GCC/G++ on Windows.

- To obtain GNU `ld`, `gcc`/`g++`, and other development tools on Microsoft Windows, several options are available. The choice depends on your specific development needs and compatibility requirements:  
  * [**MinGW-w64**](https://www.mingw-w64.org/){: target="_blank" rel="noopener noreferrer"} ([Official Source](https://sourceforge.net/projects/mingw-w64/){: target="_blank" rel="noopener noreferrer"} \| [Pre-built Binaries](https://github.com/niXman/mingw-builds-binaries/releases){: target="_blank" rel="noopener noreferrer"}) **[Recommended]**: An improved version of MinGW, supporting both **32-bit** and **64-bit** Windows development, offering additional features and better compatibility with modern systems.
  * [**MinGW**](https://osdn.net/projects/mingw/){: target="_blank" rel="noopener noreferrer"} ([Official Source](https://sourceforge.net/projects/mingw/){: target="_blank" rel="noopener noreferrer"}): A lightweight development environment providing Windows ports of the **GNU Compiler Collection (GCC)**. It enables the compilation of native Windows applications without requiring a Unix-like system.
  * [**MSYS2**](https://www.msys2.org/){: target="_blank" rel="noopener noreferrer"}: A Unix-like terminal and package manager (Pacman) designed for seamless native Windows development with MinGW-w64.
  * [**Cygwin**](https://cygwin.com/){: target="_blank" rel="noopener noreferrer"}: Provides a POSIX-compatible environment on Windows but requires a compatibility DLL (`cygwin1.dll`), making applications less native than those built with MinGW-w64.
  * [**w64devkit**](https://github.com/skeeto/w64devkit){: target="_blank" rel="noopener noreferrer"}: A lightweight and portable development kit.

  Some distributions offer pre-built toolchains, packages, binaries, and installers, while others require manual compilation from source.

- **Installation Instructions**:
  * MinGW-w64 provides GNU `ld`, `GCC`/`G++`, and other associated tools. It supports C/C++ development, pure assembly programming, and mixed assembly development. For more details, refer to the GNU [ld documentation](https://sourceware.org/binutils/docs/ld/){: target="_blank" rel="noopener noreferrer"} and the [GCC documentation](https://gcc.gnu.org/onlinedocs/gcc-14.2.0/gcc/){: target="_blank" rel="noopener noreferrer"}.  
  * Download the latest version of **MinGW-w64** (e.g., `x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev1.7z` \| [Scan Result](https://www.virustotal.com/gui/file/9fa5768ba0e628203c4631d447ce533335cdd1fd9c318d84c774e729efa4edad){: target="_blank" rel="noopener noreferrer"}) from the [pre-built binaries](https://github.com/niXman/mingw-builds-binaries/releases){: target="_blank" rel="noopener noreferrer"} repository.
  * Extract the downloaded archive to a preferred location (e.g., `C:\mingw64`).
  * Add MinGW-w64 to your system `PATH`:
    * Open **Advanced System Settings** → **Environment Variables**.
    * Under **System Variables**, locate and select the "Path" variable, then click **Edit**.
    * Click **New** and add the path to the MinGW-w64 binaries (e.g., `C:\mingw64\bin`).
    * Click **OK** to save changes and close all dialogs.

  > Restart VS Code if it is already open to ensure the environment variables take effect. Otherwise, you may encounter an error message such as: `'ld', 'gcc', or 'g++' is not recognized as an internal or external command, operable program, or batch file`.
  {: .callout.warning }

- **Verify Installation**: Open Command Prompt and run:

  ```terminal
  ld --version && gcc --version && g++ --version
  ```

  * **`ld --version`**: Displays the linker's version, typically in the format `GNU ld (GNU Binutils) <version>`, where `<version>` represents the linker's version number.  
  * **`gcc --version`**: Displays the GCC version, typically in the format `gcc.exe (x86_64-posix-seh-rev1, Built by MinGW-Builds project) <version>`, where `<version>` represents the GCC version number.  
  * **`g++ --version`**: Displays the G++ version, typically in the format `g++.exe (x86_64-posix-seh-rev1, Built by MinGW-Builds project) <version>`, where `<version>` represents the G++ version number.

> **MinGW-w64 filenames follow this format**: `<architecture>-<GCC version>-<build>-<threading model>-<exception handling>-<runtime>-rt-<MinGW-w64 version>-<revision>.7z`
> - **32-bit**:
>   * i686-14.2.0-release-mcf-dwarf-ucrt-rt_v12-rev1.7z
>   * i686-14.2.0-release-posix-dwarf-msvcrt-rt_v12-rev1.7z
>   * i686-14.2.0-release-posix-dwarf-ucrt-rt_v12-rev1.7z
>   * i686-14.2.0-release-win32-dwarf-msvcrt-rt_v12-rev1.7z
>   * i686-14.2.0-release-win32-dwarf-ucrt-rt_v12-rev1.7z
> - **64-bit**:
>   * x86_64-14.2.0-release-mcf-seh-ucrt-rt_v12-rev1.7z
>   * x86_64-14.2.0-release-posix-seh-msvcrt-rt_v12-rev1.7z
>   * x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev1.7z
>   * x86_64-14.2.0-release-win32-seh-msvcrt-rt_v12-rev1.7z
>   * x86_64-14.2.0-release-win32-seh-ucrt-rt_v12-rev1.7z
{: .callout.example }

> For **32-bit development**, download `i686-14.2.0-release-posix-dwarf-ucrt-rt_v12-rev1.7z` and extract it to a directory like `C:\mingw32`. **Do not add both 32-bit (`mingw32`) and 64-bit (`mingw64`) binaries to the `PATH` environment variable**, as their conflicting tool names (e.g., `gcc.exe`, `ld.exe`) will cause errors. The 32-bit libraries from the `i686` distribution are mandatory for linking 32-bit (x86/i386/i686) assembly programs (`.obj` files) into 32-bit `.exe` files.  
> - **32-bit vs 64-bit MinGW**  
>   * The **x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev1.7z** distribution contains 64-bit compilers, linkers, and libraries. It does not include 32-bit tools or libraries.  
>   * The **i686-14.2.0-release-posix-dwarf-ucrt-rt_v12-rev1.7z** distribution includes 32-bit compilers, linkers, and libraries.  
> To work with both **32-bit** and **64-bit** programs, you need both distributions. However, since their binaries share identical filenames, adding both to `PATH` simultaneously creates conflicts.  
> - **Using 64-bit Tools for Both Architectures:**
>   * You can use the 64-bit MinGW binaries (from `x86_64`) for compiling and linking both **32-bit** and **64-bit** programs only if your installation has **multilib support** (includes 32-bit runtime libraries like `libgcc.a`). To set this up:  
> 	  1. Extract the **64-bit** distribution to `C:\mingw64` and the **32-bit** distribution to `C:\mingw32`.  
>	    2. Add only the 64-bit tools to `PATH` (e.g., `C:\mingw64\bin`), ensuring global access to 64-bit tools like `gcc` and `ld`.  
>     3. When compiling/linking 32-bit programs, explicitly reference the 32-bit libraries (e.g., `C:\mingw32\i686-w64-mingw32\lib`).
> - **Why Use 32-bit Binaries?**
>   * The 32-bit MinGW distribution (`i686`) is required if:  
>     * You need to compile or link 32-bit programs directly (e.g., using `ld`).  
>     * Your project depends on 32-bit-specific libraries (e.g., `libkernel32.a` for Windows API calls in 32-bit mode).  
>     * You lack a multilib-enabled 64-bit MinGW installation.  
> - **Why Avoid 32-bit Binaries?** 
>   * You can omit the 32-bit MinGW tools only if:  
>     * You use a multilib-enabled 64-bit MinGW with `gcc -m32`.  
>     * You explicitly reference 32-bit libraries and ensure all required 32-bit runtime libraries (e.g., `libgcc.a`) are present.  
> - **Critical Note**:  
>   * The 64-bit linker (`ld`) cannot process 32-bit object files or libraries. For 32-bit programs, you must either:  
>   * Use the 32-bit linker (from `mingw32`), or  
>   * Use `gcc -m32` with a multilib-enabled installation (which includes 32-bit runtime libraries).  
>   * Standalone 64-bit MinGW (without multilib) cannot generate 32-bit executables, even with explicit library paths.
{: .callout.warning }

- **Linking with ld**:

  ```terminal
  // For 64-bit (x86_64 or x64)
  ld -m i386pep example64.obj -o example64.exe -L"C:\mingw64\lib" -lmsvcrt -lkernel32 -e main

  // For 32-bit (x86, i386, or i686)
  ld -m i386pe example32.obj -o example32.exe -L"C:\mingw32\lib" -lmsvcrt -lkernel32 -e main
  ```

  Ensure that `-m i386pe` is used for 32-bit linking.

- **Linking with gcc**: If you want a simpler way to link without dealing with low-level linker options, use gcc:

  ```terminal
  // For 64-bit (x86_64 or x64)
  gcc -m64 -o example64.exe example64.obj

  // For 32-bit (x86, i386, or i686)
  gcc -m32 -o example32.exe example32.obj
  ```

  > Your MinGW-w64 installation must support **multilib** (both 32-bit and 64-bit compilers). If `-m32` fails, you may need a dedicated 32-bit toolchain.
  {: .callout.warning }

- **Linking with g++**: If you are linking assembly with C++:

  ```terminal
  // For 64-bit (x86_64 or x64)
  g++ -m64 -o example64.exe example64.obj

  // For 32-bit (x86, i386, or i686)
  g++ -m32 -o example32.exe example32.obj
  ```

  > `g++` is recommended when linking with C++ code because it handles C++ name mangling and runtime dependencies automatically.
  {: .callout.tip }

  > `gcc` and `g++` are compiler driver programs—they not only compile source files but also invoke the linker (`ld`) to perform the actual linking. They automatically construct the linker command, including passing options like `-Wl,...`, so manual invocation of `ld` is typically unnecessary.
  {: .callout.info }
</details>

<details class="details-beauty" markdown="1">
<summary>Option 3: Polink via Pelles C</summary>
**Polink** is part of **Pelles C**, a comprehensive development kit for Windows desktop applications. Pelles C includes an optimizing C compiler, a macro assembler, a linker, a resource compiler, a message compiler, a code-signing utility, a make utility, and an installation builder. It also features an integrated development environment (IDE) with project management, a debugger, a profiler, a source code editor, and resource editors for dialogs, menus, string tables, accelerator tables, bitmaps, icons, cursors, animated cursors, and AVI animations (without sound), as well as support for versioning and manifests. The toolkit produces compact executable files.

Polink is redistributable, meaning it can be freely distributed with your software. While Pelles C offers many useful tools, **our focus is solely on Polink**, the linker included in Pelles C.

- **Installation Instructions**:
  * Download the latest version of **Pelles C** from the official [website](https://www.smorgasbordet.com/pellesc/){: target="_blank" rel="noopener noreferrer"}.
  * Open the **Pelles C Setup** installer and follow these steps:
    * Accept the license agreement by selecting "I accept the terms in the license agreement".
    * Choose additional components if needed, such as:
      * Additional translations
      * Windows Explorer file associations
      * Add-In SDK (includes development tools, prebuilt samples, and source code for samples)
      * Or proceed with the default installation, which includes **Standard C Development**, **Windows Desktop Development**, and basic Windows Explorer file associations.
    * Select whether to install for the current user or all users on the computer.
    * The default installation location is `C:\Program Files\PellesC`.
  * Add Polink to your system `PATH`:
    * Open **Advanced System Settings** → **Environment Variables**.
    * Under **System Variables**, locate and select the "Path" variable, then click **Edit**.
    * Click **New** and add the path to the Polink binaries (e.g., `C:\Program Files\PellesC\Bin`).
    * Click **OK** to save changes and close all dialogs.

  > Restart VS Code if it is already open to ensure the environment variables take effect. Otherwise, you may encounter an error message such as: `'polink' is not recognized as an internal or external command, operable program or batch file`.
  {: .callout.warning }

- **Verify Installation**: Open Command Prompt and run:

  ```terminal
  polink
  ```

  This should output something like `Pelles Linker, Version 12.00.0 - Copyright (c) Pelle Orinius 1998-2023` along with PoLink's usage information, confirming PoLink is installed correctly.

- **Linking with Polink**:

  ```terminal
  // For 64-bit (x86_64 or x64) console applications
  polink /ENTRY:Start /SUBSYSTEM:CONSOLE /LIBPATH:c:\lib64 kernel32.lib user32.lib program.obj

  // For 64-bit (x86_64 or x64) GUI applications
  polink /ENTRY:Start /SUBSYSTEM:WINDOWS /LIBPATH:c:\lib64 kernel32.lib user32.lib program.obj

  // For 32-bit (x86, i386, or i686) console applications
  polink /ENTRY:Start /SUBSYSTEM:CONSOLE /LIBPATH:c:\lib32 kernel32.lib user32.lib program.obj

  // For 32-bit (x86, i386, or i686) GUI applications
  polink /ENTRY:Start /SUBSYSTEM:WINDOWS /LIBPATH:c:\lib32 kernel32.lib user32.lib program.obj
  ```

  Ensure that you specify the appropriate subsystem (`CONSOLE` or `WINDOWS`) and library path corresponding to the target architecture (32-bit or 64-bit).
</details>

<details class="details-beauty" markdown="1">
<summary>Option 4: Microsoft Linker</summary>
The default compiler for Microsoft Windows is **MSVC**, which is installed as part of **Visual Studio**. It includes all the necessary build tools, one of which is the Microsoft linker (`link.exe`). This linker is not redistributable, meaning you cannot freely distribute it with your software. To use it legally, you must either install **Visual Studio** or an appropriate **SDK** that provides it. Attempting to extract it from an existing installation may present legal or practical limitations.

> Since we only need the Microsoft linker (`link.exe`) for linking, installing the full **Visual Studio IDE** may be unnecessary if you do not require the additional tools. If you only need the command-line tools and not the full IDE, it is **recommended** to download the [Build Tools for Visual Studio](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022){: target="_blank" rel="noopener noreferrer"}. Once installed with the "**Desktop development with C++**" workload, the tools will be located at: `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools`. 
> 
> However, if you install the full **Visual Studio IDE** with the "**Desktop development with C++**" workload, the installation path will be: `C:\Program Files\Microsoft Visual Studio\2022\<edition>\`. Make sure to adjust your build and linking configurations accordingly.
{: .callout.tip }

- **Installation Instructions**:
  * Download and install the latest stable **Long-Term Servicing Channel** (LTSC) version of **Visual Studio** from the official [website](https://visualstudio.microsoft.com/downloads/){: target="_blank" rel="noopener noreferrer"}. The **Community Edition** is available for free. 
  * During installation, select the "**Desktop development with C++**" workload in the **Visual Studio Installer**. This includes all necessary build tools, including `link.exe`, and supports C/C++ development.

  > If Visual Studio is already installed, add the workload via "**Tools**" → "**Get Tools and Features**", which opens the Visual Studio Installer. Alternatively, open the **Visual Studio Installer** from the **Start** menu or by launching it directly from: `C:\Program Files (x86)\Microsoft Visual Studio\Installer\setup.exe`. In the installer, click the **Modify** button, then choose the workloads or components you wish to install.
  {: .callout.tip }

- **Linking with link.exe**:

  > Use the **Developer Command Prompt for Visual Studio** to avoid path-related issues, as it automatically sets the necessary *Visual Studio environment variables*. Manually adding system environment variables for the x86 and x64 linker binaries to the `PATH` may cause conflicts.
  >
  > You can launch the **Developer Command Prompt** by searching for it in the **Start Menu** or running the following batch script: `C:\Program Files\Microsoft Visual Studio\2022\<edition>\Common7\Tools\LaunchDevCmd.bat`. Alternatively, you can create a custom script to launch either the 32-bit or 64-bit linker (`link.exe`), the Developer Command Prompt for x86 or x64, or use the linker path directly.
  {: .callout.tip }

  > **Linker Locations**: Use the correct path for your target architecture.
  > * **64-bit** (`link.exe`): `C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64`
  > * **32-bit** (`link.exe`): `C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86`
  {: .callout.info }

  ```
  // Navigate to the linker location and copy its path for use.
  // Replace <edition> with your Visual Studio edition (e.g., Community, Professional, Enterprise).
  // Replace <version> with your Visual Studio version (e.g., 14.43.34808).

  // 64-bit (x86_64 or x64) - Console application (CLI)
  & "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64\link.exe" /SUBSYSTEM:CONSOLE /ENTRY:_start example64.obj

  // 64-bit (x86_64 or x64) - Windows application (GUI)
  & "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64\link.exe" /SUBSYSTEM:WINDOWS /ENTRY:_start example64.obj

  // 32-bit (x86, i386, or i686) - Console application (CLI)
  & "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86\link.exe" /SUBSYSTEM:CONSOLE /ENTRY:_start example32.obj

  // 32-bit (x86, i386, or i686) - Windows application (GUI)
  & "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86\link.exe" /SUBSYSTEM:WINDOWS /ENTRY:_start example32.obj
  ```
</details>

#### 4. Debugger

[Debuggers](/posts/errors-bugs-debugging/#debugging) are essential tools for analyzing and troubleshooting assembly programs. They are also commonly used in *software reverse engineering* (SRE). In addition to these core uses, debuggers play a crucial role in **malware analysis** by inspecting malicious binaries, in **CrackMe  (CTF) challenges** for practicing reverse engineering skills, and in **software debugging** to identify and resolve issues in compiled Windows applications. They also support **binary patching** without source code access and aid in **bypassing anti-debugging techniques**, making them invaluable for both security research and advanced software analysis. 

You may choose one or more of the following debuggers:

<details class="details-beauty" markdown="1">
<summary>Option 1: x64dbg</summary>
**x64dbg** is an open-source debugger for Windows that supports both 32-bit (`x32dbg`) and 64-bit (`x64dbg`) applications. It is widely used for reverse engineering and malware analysis, offering a modern interface and advanced features. x64dbg serves as the successor to **OllyDbg**, a once-popular 32-bit debugger that is now considered outdated and obsolete. Building on OllyDbg's foundation, x64dbg introduces significant enhancements to meet the needs of modern software analysis.

- **Installation Instructions**:
  * Download the latest snapshot/version of **x64dbg** from the official sources: ([Website](https://x64dbg.com/){: target="_blank" rel="noopener noreferrer"} \| [Source Forge](https://sourceforge.net/projects/x64dbg/files/snapshots/){: target="_blank" rel="noopener noreferrer"} \| [Github](https://github.com/x64dbg/x64dbg){: target="_blank" rel="noopener noreferrer"}). Refer to the official [x64dbg manual](https://help.x64dbg.com/en/latest/){: target="_blank" rel="noopener noreferrer"} and explore available [plugins](https://plugins.x64dbg.com/){: target="_blank" rel="noopener noreferrer"}.
  * Extract the downloaded ZIP file to the `C:\` drive and rename the folder to `x64dbg`, so the final path looks like `C:\x64dbg`.

- **Debugging with x64dbg**:
  * To debug 32-bit binaries (.exe/portable executables), run `x32dbg.exe` located at `C:\x64dbg\release\x32`.
  * To debug 64-bit binaries (.exe/portable executables), run `x64dbg.exe` located at `C:\x64dbg\release\x64`.

  > If you're unsure of the binary architecture (32-bit or 64-bit), run `x96dbg.exe` from `C:\x64dbg\release`. It will automatically launch the appropriate debugger (`x32dbg.exe` for 32-bit or `x64dbg.exe` for 64-bit).
  > - When you run `x96dbg.exe` for the first time, you'll be prompted with a few configuration questions:
  >   * "*Do you want to register a shell extension?*" Choose **Yes** to enable shell integration/context menu support.
  >   * "*Do you want to create a desktop shortcut?*" Choose **Yes** if you'd like a shortcut on your desktop.
  >   * "*Do you want to register the database icon?*" Choose **Yes** to enable additional integration features.
  > - On subsequent runs, `x96dbg.exe` will open a launcher allowing you to start **x32dbg**, **x64dbg**, or re-run the installation prompts (helpful for reconfiguring if you skipped them earlier).
  {: .callout.tip }

  * **Ways to start debugging**:
    1. **Drag and Drop**: Simply drag the binary (.exe/portable executable) onto the appropriate debugger (`x32dbg.exe`, `x64dbg.exe`, or `x96dbg.exe` if the architecture is unknown).
    2. **Open Manually**: Launch the debugger and go to "**File**" → "**Open**" (<kbd>F3</kbd>) to select the binary you want to debug.
    3. **Attach to Running Process**: First, run the binary you want to debug. Then, in the debugger, go to "**File**" → "**Attach**" (<kbd>Alt</kbd>+<kbd>A</kbd>), and select the process corresponding to your binary.

  > **Basic x64dbg Shortcuts**:
  >  - Run Program: <kbd>F9</kbd>
  >  - Step Into (CALL): <kbd>F7</kbd>
  >  - Step Over (CALL): <kbd>F8</kbd>
  >  - Step Out: <kbd>Shift</kbd>+<kbd>F8</kbd>
  >  - Restart Debugging: <kbd>Ctrl</kbd>+<kbd>F2</kbd>
  >  - Set Breakpoint: <kbd>F2</kbd>
  >  - Remove All Breakpoints: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>
  >  - Pause Execution: <kbd>F12</kbd>
  >  - Execute Until Return: <kbd>Ctrl</kbd>+<kbd>F9</kbd>
  {: .callout.example }

  > - **CPU Tab**: Use the CPU Tab to monitor CPU registers, inspect memory contents, and view disassembled code during execution. It's essential for tracking the state of the program and debugging issues at a low level.
  > - **Search for Strings** (<kbd>Ctrl</kbd>+<kbd>S</kbd>): Finds hardcoded strings embedded within the binary, which can help in identifying potential static data, such as error messages or URLs.
  > - **Find References** (<kbd>Ctrl</kbd>+<kbd>R</kbd>): Locates references (calls or memory accesses) to a specific function or variable in the binary, helping track how and where it is used throughout the program.
  > - **Go to Address** (<kbd>Ctrl</kbd>+<kbd>G</kbd>): Jump to a specific memory address to quickly examine or modify that part of the program. Useful for pinpointing locations such as function prologues or critical data structures.
  > - **Patching Instructions**:
  >   * **Edit Instructions**: Right-click on an instruction in the disassembly and select "**Assemble**" to modify its opcodes or operands directly.
  >   * **Create Edited Binary**: Use **Patch File** (<kbd>Ctrl</kbd>+<kbd>P</kbd>) to save the changes to the binary and generate a patched executable with the modifications.
  {: .callout.tip }
</details>

<details class="details-beauty" markdown="1">
<summary>Option 2: IDA Free</summary>
**IDA Free** is the free edition of **IDA Pro**, a widely used interactive disassembler and debugger developed by [Hex-Rays](https://hex-rays.com/){: target="_blank" rel="noopener noreferrer"}. It offers essential disassembly and analysis capabilities suitable for reverse engineering tasks, but it includes several limitations compared to the commercial version.

IDA Free is cross-platform, supporting **Windows**, **Linux**, and **macOS**, and is available only for **non-commercial use**. Unlike some other tools in the reverse engineering space, **IDA Free is proprietary and closed-source**, which may be a consideration for users seeking open-source alternatives.

- **Installation Instructions**:
  * Download and install the latest version of **IDA Free** from the official [Hex-Rays website](https://hex-rays.com/ida-free){: target="_blank" rel="noopener noreferrer"}. Comprehensive usage details can be found in the official [IDA documentation](https://docs.hex-rays.com/){: target="_blank" rel="noopener noreferrer"}.
  * To download IDA Free and obtain the required license file (`ida.hexlic`), you must first create a Hex-Rays account.
  * For a step-by-step installation guide, refer to the official instructions [here](https://docs.hex-rays.com/getting-started/install-ida#installation-on-windows){: target="_blank" rel="noopener noreferrer"}.
</details>

<details class="details-beauty" markdown="1">
<summary>Option 3: Ghidra</summary>
**Ghidra** is a comprehensive *software reverse engineering* (SRE) suite developed by the [NSA](https://www.nsa.gov/){: target="_blank" rel="noopener noreferrer"} (National Security Agency). It supports a wide range of processor instruction sets and executable formats, making it a valuable tool for analyzing assembly code. Ghidra is open-source, cross-platform, and written in Java. It can be extended with scripts, plugins, and the Ghidra Server for collaborative reverse engineering.

For detailed instructions and helpful references, see: ([Ghidra Installation Guide](https://ghidra-sre.org/InstallationGuide.html){: target="_blank" rel="noopener noreferrer"} \| [Ghidra CheatSheet](https://ghidra-sre.org/CheatSheet.html){: target="_blank" rel="noopener noreferrer"} \| [Ghidra Docs](https://github.com/NationalSecurityAgency/ghidra/tree/master/GhidraDocs){: target="_blank" rel="noopener noreferrer"}).

- **Installation Instructions**:
  * **Java JDK is required**. Install the latest version of the **JDK** (e.g., JDK 21 64-bit) from [Adoptium Temurin](https://adoptium.net/temurin/releases/){: target="_blank" rel="noopener noreferrer"}.
  * Download the latest version of **Ghidra** from the official sources: ([Website](https://ghidra-sre.org/){: target="_blank" rel="noopener noreferrer"} \| [Github](https://github.com/NationalSecurityAgency/ghidra){: target="_blank" rel="noopener noreferrer"}).
  * Extract the ZIP file to your preferred location (e.g., `C:\Ghidra`).
  * Run `ghidraRun.bat` to launch Ghidra.

- **Opening and Analyzing a Binary in Ghidra**:
  1. Launch Ghidra → Create a new project → Import your executable file.
  2. Double-click the imported file, then click "Yes" when prompted to analyze.
  3. View the disassembly in the Listing or Graph window.

  > Ghidra may be slower when analyzing large binaries, but it offers in-depth and comprehensive analysis.
  {: .callout.info }
</details>

<details class="details-beauty" markdown="1">
<summary>Option 4: WinDbg</summary>
**WinDbg** (Windows Debugger) is a powerful debugging tool provided by [Microsoft](https://www.microsoft.com/){: target="_blank" rel="noopener noreferrer"} for analyzing crash dumps, debugging live user-mode and kernel-mode code, and examining CPU registers and memory. It enables developers to inspect memory, stack traces, threads, and overall system behavior to diagnose issues such as crashes, memory leaks, and other unexpected behaviors in software.

WinDbg is particularly useful for low-level debugging, including reverse engineering, malware analysis, and troubleshooting optimized or hand-written assembly routines.

- **Installation Instructions**:
  * Download and install the latest version of **WinDbg** from the official [website](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/){: target="_blank" rel="noopener noreferrer"}. The site also provides installation instructions.
  * Open WinDbg and either connect to an existing process or start a new one via "**File**" → "**Open Executable**".
  * For a complete getting started guide, see [this link](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/getting-started-with-windbg){: target="_blank" rel="noopener noreferrer"}.
</details>

<details class="details-beauty" markdown="1">
<summary>Option 5: GNU gdb via MinGW-w64</summary>
**GNU GDB** (GNU Debugger) is a powerful open-source tool used to debug programs written in C, C++, and other languages. It allows developers to set breakpoints, step through code, inspect variables, and analyze memory during program execution. Commonly used on Unix-like systems, GDB supports both local and remote debugging, making it ideal for troubleshooting crashes, logic errors, and low-level issues in software and embedded systems.

> If you have previously downloaded MinGW (MinGW-w64), it should be available for use. **GDB** is recommended for debugging if you have set up `ld`, `gcc`, and `g++` through MinGW-w64. However, if you are using a different linker, you can opt for another debugger, or you can continue using GDB if you prefer.
{: .callout.tip }

> [LLDB](https://lldb.llvm.org/){: target="_blank" rel="noopener noreferrer"} ([LLVM](https://llvm.org/){: target="_blank" rel="noopener noreferrer"} Debugger) is a strong alternative to GDB, particularly if you're working with PE executables (Windows .exe files). It provides excellent support for modern debugging features and can be more efficient in certain environments.
{: .callout.tip }

- To obtain GNU `gdb`, and other development tools on Microsoft Windows, several options are available. The choice depends on your specific development needs and compatibility requirements:  
  * [**MinGW-w64**](https://www.mingw-w64.org/){: target="_blank" rel="noopener noreferrer"} ([Official Source](https://sourceforge.net/projects/mingw-w64/){: target="_blank" rel="noopener noreferrer"} \| [Pre-built Binaries](https://github.com/niXman/mingw-builds-binaries/releases){: target="_blank" rel="noopener noreferrer"}) **[Recommended]**: An improved version of MinGW, supporting both **32-bit** and **64-bit** Windows development, offering additional features and better compatibility with modern systems.
  * [**MinGW**](https://osdn.net/projects/mingw/){: target="_blank" rel="noopener noreferrer"} ([Official Source](https://sourceforge.net/projects/mingw/){: target="_blank" rel="noopener noreferrer"}): A lightweight development environment providing Windows ports of the **GNU Compiler Collection (GCC)**. It enables the compilation of native Windows applications without requiring a Unix-like system.
  * [**MSYS2**](https://www.msys2.org/){: target="_blank" rel="noopener noreferrer"}: A Unix-like terminal and package manager (Pacman) designed for seamless native Windows development with MinGW-w64.
  * [**Cygwin**](https://cygwin.com/){: target="_blank" rel="noopener noreferrer"}: Provides a POSIX-compatible environment on Windows but requires a compatibility DLL (`cygwin1.dll`), making applications less native than those built with MinGW-w64.
  * [**w64devkit**](https://github.com/skeeto/w64devkit){: target="_blank" rel="noopener noreferrer"}: A lightweight and portable development kit.

  Some distributions offer pre-built toolchains, packages, binaries, and installers, while others require manual compilation from source.

- **Installation Instructions**:
  * MinGW-w64 provides GNU `gdb`, and other associated tools. It supports C/C++ development, pure assembly programming, and mixed assembly development. For more details, refer to the [GNU GDB](https://sourceware.org/gdb/){: target="_blank" rel="noopener noreferrer"}.
  * Download the latest version of **MinGW-w64** (e.g., `x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev1.7z` \| [Scan Result](https://www.virustotal.com/gui/file/9fa5768ba0e628203c4631d447ce533335cdd1fd9c318d84c774e729efa4edad){: target="_blank" rel="noopener noreferrer"}) from the [pre-built binaries](https://github.com/niXman/mingw-builds-binaries/releases){: target="_blank" rel="noopener noreferrer"} repository.
  * Extract the downloaded archive to a preferred location (e.g., `C:\mingw64`).
  * Add MinGW-w64 to your system `PATH`:
    * Open **Advanced System Settings** → **Environment Variables**.
    * Under **System Variables**, locate and select the "Path" variable, then click **Edit**.
    * Click **New** and add the path to the MinGW-w64 binaries (e.g., `C:\mingw64\bin`).
    * Click **OK** to save changes and close all dialogs.

  > Restart VS Code if it is already open to ensure the environment variables take effect. Otherwise, you may encounter an error message such as: `'gdb' is not recognized as an internal or external command, operable program, or batch file`.
  {: .callout.warning }

- **Verify Installation**: Open Command Prompt and run:

  ```terminal
  gdb --version
  ```

  * **`gdb --version`**: Displays the debugger's version, typically in the format `GNU gdb (GDB) <version>`, where `<version>` represents the debugger's version number.

- **Debugging with GDB**:
  * **Compile with debug info using NASM**:
    * **32-bit**: `nasm -f win32 -g example.asm -o example.obj`
    * **64-bit**: `nasm -f win64 -g example.asm -o example.obj`
  * **Link with `ld` from MinGW-w64**:
    * **32-bit**: `ld -m i386pe -o example.exe example.obj`
    * **64-bit**: `ld -m i386pep -o example.exe example.obj`
  * **Handling Debugging Issues**:
    * Using PDB-Style Debugging: If the `-g` flag does not produce usable debug symbols, try using CodeView (CV8) format instead: `nasm -f win32 -g cv8 example.asm -o example.obj`
    * This generates CV8 debug symbols, which are often better supported by GDB under MinGW.
  * **Start debugging**: `gdb example.exe`

  > **Basic GDB commands**:
  >   - Set a breakpoint at `_start`: `break _start`
  >   - Run the program: `run` (or `r`)
  >   - Step one assembly instruction: `stepi` (or `si`)
  >   - Continue execution until next breakpoint: `continue` (or `c`)
  >   - Inspect registers: `info registers` (or `i r`)
  >   - Print value of a register (e.g., `rax`): `print $rax` (or `p $rax`)
  >   - Disassemble next 10 instructions: `x/10i $eip` (x86) or `x/10i $rip` (x86_64)
  >   - Examine memory at address (e.g., `0x404000`): `x/xw 0x404000` (hex/word)
  >   - Quit GDB: `quit` (or `q`)
  > 
  > **Advanced Commands**:
  >   - Watch a memory address for changes: `watch *0x404000`
  >   - Backtrace (show call stack): `bt`
  >   - List all breakpoints: `info breakpoints` (or `i b`)
  >   - Delete a breakpoint (e.g., breakpoint 1): `delete 1`
  >   - Disassemble current function: `disassemble`
  >   - Set a temporary breakpoint: `tbreak main`
  >   - Execute until return: `finish`
  > 
  > **TUI (Text User Interface)**:
  >   - Enable TUI mode: `tui enable`
  >   - Toggle assembly layout: `layout asm`
  >   - Show registers + assembly: `tui layout split`
  >   - Show registers only: `tui layout regs`
  >   - Refresh corrupted TUI display: `refresh` (or <kbd>Ctrl</kbd>+<kbd>L</kbd>)
  >   - Exit TUI mode: `tui disable` (or <kbd>Ctrl</kbd>+<kbd>X</kbd>+<kbd>A</kbd>)
  {: .callout.example }
</details>

#### 5. Full Workflow Example

> In [Section 1: IDE](#1-ide), we covered how to create a project folder (`NASM-Starter`), set up a proper folder/workspace structure for managing assembly projects, and install useful VS Code extensions. Sections 2 through 4 focus on the Assembler, Linker, and Debugger, respectively. All examples in the following sections use the same folder structure. If you haven't reviewed it yet, please do so before proceeding.
{: .callout.note }

- **Common Ways to Write Assembly Programs**: Assembly programs can be written using a variety of approaches depending on the target platform and use case:
  * Using Windows API calls (Standalone / No CRT)
  * Using C standard library functions (with CRT / C runtime)
  * Using Linux system calls (for Linux environments)
  * Using BIOS interrupts (Real Mode – typically for bootloaders or DOS)
  * Using DOS interrupts (for DOS programming)
  * Using inline assembly in high-level languages (e.g., C or C++)

##### 🔷 64-bit Assembly (x86_64 / x64) (*Not decorated*):
{: data-toc-skip='' .mt-4 .mb-4 }

<details class="details-beauty" markdown="1">
<summary>Standalone Console (CLI) Program Using Win32 API Calls</summary>
- Open **VS Code** and create a file named `hello64.asm`. The final path should be: `NASM-Starter\src\x64\hello64.asm`.
- Ensure that the file has a `.asm` extension, then copy and paste the following code snippet:

```nasm
; x86_64 (64-bit) Windows Assembly (Intel Syntax)

section .data
    msg db 'Hello, 64-bit World!', 0  ; Message to print (null-terminated)
    len equ $ - msg - 1               ; Length of message (excluding null terminator)

section .text
    global _start                     ; Program entry point
    extern GetStdHandle               ; Import Windows API functions
    extern WriteConsoleA
    extern ExitProcess

_start:
    ; === Setup stack ===
    sub rsp, 40                       ; Allocate shadow space (32 bytes) + 5th arg (8 bytes)

    ; === Get console handle ===
    mov ecx, -11                      ; STD_OUTPUT_HANDLE (-11)
    call GetStdHandle                 ; Handle returned in RAX

    ; === Write message to console ===
    mov rcx, rax                      ; 1st arg: Console handle
    lea rdx, [rel msg]                ; 2nd arg: Pointer to message (RIP-relative)
    mov r8, len                       ; 3rd arg: Number of chars to write
    xor r9, r9                        ; 4th arg: lpNumberOfCharsWritten (NULL)
    mov qword [rsp + 32], 0           ; 5th arg: lpReserved (NULL)
    call WriteConsoleA

    ; === Exit program ===
    xor ecx, ecx                      ; Exit code: 0 (success)
    call ExitProcess                  ; Terminate program

    ; === Cleanup stack (theoretical) ===
    add rsp, 40                       ; Not reached (ExitProcess terminates)
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win64 src\x64\hello64.asm -o obj\x64\hello64.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:_start /console obj\x64\hello64.obj /fo bin\x64\hello64.exe kernel32.dll

  // Option 2: Using GNU ld
  ld -e _start -subsystem console obj\x64\hello64.obj -o bin\x64\hello64.exe -L"C:\mingw64\x86_64-w64-mingw32\lib" -lkernel32

  // Option 3: Using gcc/g++
  gcc -o bin\x64\hello64.exe obj\x64\hello64.obj -nostdlib -lkernel32
  g++ -o bin\x64\hello64.exe obj\x64\hello64.obj -nostdlib -lkernel32

  // Option 4: Using Polink
  polink /ENTRY:_start /SUBSYSTEM:CONSOLE /OUT:bin\x64\hello64.exe obj\x64\hello64.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win64" kernel32.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64\link.exe" /ENTRY:_start /SUBSYSTEM:CONSOLE /OUT:bin\x64\hello64.exe obj\x64\hello64.obj /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<sdk_version>\um\x64" kernel32.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    |-----------------|-------------------------|
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 5,507                   |
    | **gcc/g++**     | 5,584                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 2,560                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `hello64.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x64\hello64.exe
  ```

  You should see the output: `Hello, 64-bit World!`.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone MessageBox (GUI) Program Using Win32 API Calls</summary>
- Open **VS Code** and create a file named `MessageBox64.asm`. The final path should be: `NASM-Starter\src\x64\MessageBox64.asm`.
- Ensure that the file has a `.asm` extension, then copy and paste the following code snippet:

```nasm
; x86_64 (64-bit) Windows Assembly (Intel Syntax)

; Constants
MB_DEFBUTTON2 EQU 100h      ; Default second button (No)
IDNO          EQU 7         ; Return value when 'No' is selected
MB_YESNO      EQU 4         ; MessageBox with Yes/No buttons

; External Windows API functions
extern MessageBoxA
extern ExitProcess

; Export entry point
global main

section .data
    MessageBoxText    db "Do you want to exit?", 0
    MessageBoxCaption db "MessageBox 64", 0

section .text
main:
    ; Align stack to 16 bytes + allocate 32-byte shadow space (8+32=40)
    sub  rsp, 40

.message_loop:
    ; Set up MessageBoxA parameters:
    xor  ecx, ecx                 	; hWnd = NULL (no parent window)
    lea  rdx, [rel MessageBoxText] 	; Message text
    lea  r8, [rel MessageBoxCaption] 	; Window title
    mov  r9d, MB_YESNO | MB_DEFBUTTON2 	; Button configuration

    call MessageBoxA

    ; Check if user clicked 'No'
    cmp  eax, IDNO
    je   .message_loop

    ; Cleanup stack and exit process
    add  rsp, 40                 ; Restore original stack pointer
    xor  ecx, ecx                ; Exit code = 0
    call ExitProcess
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win64 src\x64\MessageBox64.asm -o obj\x64\MessageBox64.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:main obj\x64\MessageBox64.obj /fo bin\x64\MessageBox64.exe kernel32.dll user32.dll

  // Option 2: Using GNU ld
  ld -e main obj\x64\MessageBox64.obj -o bin\x64\MessageBox64.exe -L"C:\mingw64\x86_64-w64-mingw32\lib" -lkernel32 -luser32

  // Option 3: Using gcc/g++
  gcc -o bin\x64\MessageBox64.exe obj\x64\MessageBox64.obj -nostdlib -lkernel32 -luser32
  g++ -o bin\x64\MessageBox64.exe obj\x64\MessageBox64.obj -nostdlib -lkernel32 -luser32

  // Option 4: Using Polink
  polink /ENTRY:main /SUBSYSTEM:WINDOWS /OUT:bin\x64\MessageBox64.exe obj\x64\MessageBox64.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win64" kernel32.lib user32.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64\link.exe" /ENTRY:main /SUBSYSTEM:WINDOWS /OUT:bin\x64\MessageBox64.exe obj\x64\MessageBox64.obj /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<sdk_version>\um\x64" kernel32.lib user32.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    |-----------------|-------------------------|
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 5,964                   |
    | **gcc/g++**     | 6,041                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 2,560                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `MessageBox64.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x64\MessageBox64.exe
  ```

  You should see a message box appear.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone Console (CLI) Program Using C Runtime (CRT)</summary>
- Open **VS Code** and create a file named `hello64crt.asm`. The final path should be: `NASM-Starter\src\x64\hello64crt.asm`.
- Ensure the file has a `.asm` extension, and copy the following code snippet into it:

```nasm
; x86_64 (64-bit) Windows Assembly (Intel Syntax)

bits 64
default rel

section .data
    msg db "Hello, 64-bit World!", 0xd, 0xa, 0  ; Null-terminated string with CRLF

section .text
global main
extern printf

main:
    ; (Prologue) Stack frame management
    push    rbp                 ; Preserve caller's base pointer
    mov     rbp, rsp            ; Establish new stack frame
    sub     rsp, 32             ; Allocate shadow space per Windows x64 ABI

    ; Console I/O operations
    lea     rcx, [msg]          ; First parameter: message buffer address
    call    printf              ; Write null-terminated string to stdout

    ; (Epilogue) Program termination sequence
    xor     eax, eax            ; Set process exit code (0)
    add     rsp, 32             ; Deallocate stack space
    pop     rbp                 ; Restore original base pointer
    ret                         ; Return control to caller
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win64 src\x64\hello64crt.asm -o obj\x64\hello64crt.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:main /console obj\x64\hello64crt.obj /fo bin\x64\hello64crt.exe msvcrt.dll

  // Option 2: Using GNU ld
  ld -e main -subsystem console obj\x64\hello64crt.obj -o bin\x64\hello64crt.exe -L"C:\mingw64\x86_64-w64-mingw32\lib" -lmsvcrt

  // Option 3: Using gcc/g++
  gcc -o bin\x64\hello64crt.exe obj\x64\hello64crt.obj -nostdlib -lmsvcrt
  g++ -o bin\x64\hello64crt.exe obj\x64\hello64crt.obj -nostdlib -lmsvcrt

  // Option 4: Using Polink
  polink /ENTRY:main /SUBSYSTEM:CONSOLE /OUT:bin\x64\hello64crt.exe obj\x64\hello64crt.obj /LIBPATH:"C:\Program Files\PellesC\Lib" pocrt64.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x64\link.exe" /ENTRY:main /SUBSYSTEM:CONSOLE /OUT:bin\x64\hello64crt.exe obj\x64\hello64crt.obj /LIBPATH:"C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\lib\x64" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<sdk_version>\ucrt\x64" msvcrt.lib legacy_stdio_definitions.lib ucrt.lib 
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes)                                              |
    | --------------- | -------------------------------------------------------------------- |
    | **GoLink**      | 2,560                                                                |
    | **GNU ld**      | 7,144                                                                |
    | **gcc/g++**     | 55,773 (default), 7,221 (`-nostdlib`), 55,614 (`-nostdlib -lmsvcrt`) |
    | **Polink**      | 2,048                                                                |
    | **MSVC Linker** | 4,608                                                                |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `hello64crt.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x64\hello64crt.exe
  ```

  You should see the output: `Hello, 64-bit World!`.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone MessageBox (GUI) Program Using C Runtime (CRT) and Win32 API Calls</summary>
- Open **VS Code** and create a file named `MessageBox64_CRT.asm`. The final path should be: `NASM-Starter\src\x64\MessageBox64_CRT.asm`.
- Ensure the file has a `.asm` extension, and copy the following code snippet into it:

```nasm
; x86_64 (64-bit) Windows Assembly (Intel Syntax)

extern MessageBoxA, sprintf    ; External API/CRT functions
global WinMain                 ; Entry point for CRT GUI applications

section .data
    fmt     db "Do you want to exit? (Count: %d)", 0  	; Message format string
    caption db "CRT+Win32 Demo", 0                   	  ; MessageBox title
    counter dd 0                                     	  ; Loop iteration counter
    buffer  times 256 db 0                          	  ; Text formatting buffer

section .text
WinMain:
    sub  rsp, 40                  ; Allocate shadow space + alignment

.message_loop:
    mov  eax, [rel counter]       ; Load counter
    inc  eax                      ; Increment counter
    mov  [rel counter], eax       ; Store updated value

    lea  rcx, [rel buffer]        ; Output buffer address
    lea  rdx, [rel fmt]           ; Format string address
    mov  r8d, eax                 ; Counter value argument
    call sprintf                  ; Format string with counter

    xor  ecx, ecx                 ; hWnd = NULL
    lea  rdx, [rel buffer]        ; Formatted text
    lea  r8, [rel caption]        ; Window title
    mov  r9d, 4 | 100h            ; MB_YESNO | MB_DEFBUTTON2 flags
    call MessageBoxA              ; Display dialog

    cmp  eax, 7                   ; Check for 'No' response
    je   .message_loop            ; Continue loop if declined

    add  rsp, 40                  ; Restore stack allocation
    ret                           ; Return to CRT for exit
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win64 src\x64\MessageBox64_CRT.asm -o obj\x64\MessageBox64_CRT.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:WinMain obj\x64\MessageBox64_CRT.obj /fo:bin\x64\MessageBox64_CRT.exe user32.dll msvcrt.dll

  // Option 2: Using GNU ld
  ld -e WinMain -subsystem windows obj\x64\MessageBox64_CRT.obj -o bin\x64\MessageBox64_CRT.exe -L"C:\mingw64\x86_64-w64-mingw32\lib" -luser32 -lmsvcrt

  // Option 3: Using gcc/g++
  gcc -o bin\x64\MessageBox64_CRT.exe obj\x64\MessageBox64_CRT.obj -nostdlib -luser32 -lmsvcrt
  g++ -o bin\x64\MessageBox64_CRT.exe obj\x64\MessageBox64_CRT.obj -nostdlib -luser32 -lmsvcrt

  // Option 4: Using Polink
  polink /ENTRY:WinMain /SUBSYSTEM:WINDOWS /OUT:bin\x64\MessageBox64_CRT.exe obj\x64\MessageBox64_CRT.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win64" /LIBPATH:"C:\Program Files\PellesC\Lib" user32.lib pocrt64.lib

  // Option 5: Using MS Link
  "C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34808\bin\Hostx64\x64\link.exe" /ENTRY:WinMain /SUBSYSTEM:WINDOWS /OUT:bin\x64\MessageBox64_CRT.exe obj\x64\MessageBox64_CRT.obj /LIBPATH:"C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34808\lib\x64" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x64" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\ucrt\x64" user32.lib msvcrt.lib legacy_stdio_definitions.lib ucrt.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    | --------------- | ----------------------- |
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 7,748                   |
    | **gcc/g++**     | 7,825                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 4,608                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `MessageBox64_CRT.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x64\MessageBox64_CRT.exe
  ```

  You should see a message box appear.
</details>

<details class="details-beauty" markdown="1">
<summary>Mixed Assembly</summary>
**Mixed Assembly** refers to the practice of combining assembly language code with high-level language components (such as C or C++) or system libraries (like the C Runtime or Win32 API). This approach allows low-level performance optimizations while leveraging the functionality and convenience of higher-level programming interfaces.

> Microsoft Visual C++ does not support inline assembly when targeting **x64**. While inline assembly using the `__asm` keyword is available in **x86** builds, it is not supported for x64. Instead, Microsoft recommends using **intrinsics** or writing assembly code in **external files** that are linked into the project.
{: .callout.warning }

> Switching to **GCC/MinGW** is one way to regain inline assembly support on **x64**, but it's not the only option. Many developers targeting x64 with MSVC use **compiler intrinsics** for low-level operations or write standalone assembly files that are assembled separately and linked into their projects.
{: .callout.tip }

- **I – Inline Assembly in C/C++ (GCC/MinGW)**:
  * Inline assembly allows you to write assembly code directly within C/C++ source files using compiler-specific syntax (e.g., `__asm__` in GCC). This technique is useful for quick prototyping or optimizing small, performance-critical sections of code. However, it is only supported by GCC/MinGW for x64 targets and is not supported by MSVC when targeting x64.
  * Open **VS Code** and create a file named `inline_assembly.c`. The final path should be: `NASM-Starter\src\x64\inline_assembly.c`.
  * Copy the following code snippet into the file:

    ```c
    #include <stdio.h>
    int main() {
      long long a = 5;      // Use 64-bit integers
      long long b = 10;
      long long result;

      // Inline x64 assembly (GCC syntax)
      __asm__ (
        "mov %[a_val], %%rax \n"  // Load 'a' into RAX (64-bit)
        "add %[b_val], %%rax \n"  // Add 'b' to RAX
        "mov %%rax, %[result] \n" // Store result
        : [result] "=r" (result)  // Output
        : [a_val] "r" (a),        // Inputs
          [b_val] "r" (b)
        : "%rax"                  // Clobbered register
      );
      printf("%lld + %lld = %lld\n", a, b, result);
      return 0;
    }
    ```

  * **Compilation (Using MinGW on Windows)**:

    ```terminal
    gcc src/x64/inline_assembly.c -o bin/x64/inline_assembly.exe
    ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `inline_assembly.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x64\inline_assembly.exe
    ```

    You should see the output: `5 + 10 = 15`.

<br>

- **II – External Assembly Module (NASM + C/C++)**:
  * External assembly modules allow you to write assembly code in separate `.asm` files, which are assembled (e.g., using NASM) and then linked with a C or C++ program. This approach is ideal for implementing larger or more complex assembly routines while keeping the high-level code clean and maintainable. An added advantage is that it works with any standard compiler, including GCC, MSVC, and others.
  * Open **VS Code** and create a file named `add_numbers.asm`. The final path should be: `NASM-Starter\src\x64\add_numbers.asm`.
  * Ensure the file has a `.asm` extension, and copy the following code snippet into it:

    ```nasm
    ; add_numbers.asm (x64 NASM syntax, Windows)
    section .text
    global AddNumbers  ; Export function for linker

    AddNumbers:
      ; x64 Windows calling convention:
      ; Args: RCX (a), RDX (b). Return: RAX.
      mov rax, rcx    ; Load 64-bit 'a' into RAX
      add rax, rdx    ; Add 64-bit 'b' to RAX
      ret             ; Return result in RAX
    ```

  * Create a file named `main.c`. The final path should be: `NASM-Starter\src\x64\main.c`. Copy the following code into the file:

    ```c
    #include <stdio.h>

    // Declare external assembly function (64-bit)
    extern long long AddNumbers(long long a, long long b);

    int main() {
      long long a = 5, b = 10;
      long long result = AddNumbers(a, b); // Call x64 assembly
      printf("%lld + %lld = %lld\n", a, b, result);
      return 0;
    }
    ```

  * **Compilation**:
    * Assemble with NASM:

      ```terminal
      nasm -f win64 src\x64\add_numbers.asm -o obj\x64\add_numbers.obj
      ```
    
    * Compile and link with GCC:

      ```terminal
      gcc src/x64/main.c obj/x64/add_numbers.obj -o bin/x64/main.exe
      ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `main.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x64\main.exe
    ```

    You should see the output: `5 + 10 = 15`.

<br>

- **III – Calling C Functions from Assembly**:
  * An assembly program can call C functions, such as those for I/O, memory management, or complex logic. This approach enables you to leverage C libraries or higher-level logic within an assembly program. The main advantage is that it combines the low-level control of assembly with the convenience and functionality of C.
  * Open **VS Code** and create a file named `c_functions.c`. The final path should be: `NASM-Starter\src\x64\c_functions.c`.
  * Copy the following code snippet into the file:

    ```c
    #include <stdio.h>

    // C function to be called from assembly
    void print_message(const char* message) {
      printf("Message from C: %s\n", message);
    }
    ```

  * Create a file named `assembly_main.asm`. The final path should be: `NASM-Starter\src\x64\assembly_main.asm`.
  * Ensure the file has a `.asm` extension, and copy the following code snippet into it:

    ```nasm
    ; assembly_main.asm (x64 NASM, Windows)
    section .data
        message db "Hello from x64 Assembly!", 0  ; Null-terminated string

    section .text
        extern print_message  ; Declare external C function
        extern exit           ; Declare exit() from C runtime
        global main           ; Entry point for GCC

    main:
        ; x64 calling convention: First argument in RCX
        lea rcx, [rel message]   ; Load 64-bit address of 'message' into RCX
        sub rsp, 32              ; Shadow space (32 bytes) for Windows calling convention
        call print_message       ; Call C function
        add rsp, 32              ; Clean up shadow space

        ; Exit program with status 0 using exit()
        xor rcx, rcx             ; Exit code: 0
        call exit                ; Call exit() from C runtime
    ```

  * **Compilation**:
    * Compile the C Code:

      ```terminal
      gcc -c src/x64/c_functions.c -o obj/x64/c_functions.obj
      ```
    
    * Assemble x64 Code:

      ```terminal
      nasm -f win64 src\x64\assembly_main.asm -o obj\x64\assembly_main.obj
      ```

    * Link Object Files:

      ```terminal
      gcc obj/x64/assembly_main.obj obj/x64/c_functions.obj -o bin/x64/assembly_main.exe
      ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `assembly_main.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x64\assembly_main.exe
    ```

    You should see the output: `Message from C: Hello from x64 Assembly!`.
</details>

##### 🔷 32-bit Assembly (x86, i386, or i686) (*Decorated*):
{: data-toc-skip='' .mt-4 .mb-4 }

<details class="details-beauty" markdown="1">
<summary>Standalone Console (CLI) Program Using Win32 API Calls</summary>
- Open **VS Code** and create a file named `hello32.asm`. The final path should be: `NASM-Starter\src\x86\hello32.asm`.
- Ensure that the file has a `.asm` extension, then copy and paste the following code snippet:

```nasm
; x86 (32-bit) Windows Assembly (Intel Syntax)

section .data
    msg db 'Hello, 32-bit World!', 0  ; Message to print (null-terminated)
    len equ $ - msg - 1               ; Length of message (excluding null terminator)

section .text
    global _start                     ; Program entry point
    extern _GetStdHandle@4            ; Import decorated Windows API functions
    extern _WriteConsoleA@20
    extern _ExitProcess@4

_start:
    ; === Get console handle ===
    push -11                          ; STD_OUTPUT_HANDLE (-11)
    call _GetStdHandle@4              ; Handle returned in EAX

    ; === Write message to console ===
    push 0                            ; 5th arg: lpReserved (NULL)
    push 0                            ; 4th arg: lpNumberOfCharsWritten (NULL)
    push len                          ; 3rd arg: Number of chars to write
    push msg                          ; 2nd arg: Pointer to message
    push eax                          ; 1st arg: Console handle
    call _WriteConsoleA@20

    ; === Exit program ===
    push 0                            ; Exit code: 0 (success)
    call _ExitProcess@4               ; Terminate program
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win32 src\x86\hello32.asm -o obj\x86\hello32.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:_start /console obj\x86\hello32.obj /fo bin\x86\hello32.exe kernel32.dll

  // Option 2: Using GNU ld
  C:\mingw32\bin\ld.exe -e _start -subsystem console obj\x86\hello32.obj -o bin\x86\hello32.exe -L"C:\mingw32\i686-w64-mingw32\lib" -lkernel32

  // Option 3: Using gcc/g++
  C:\mingw32\bin\gcc.exe -o bin\x86\hello32.exe obj\x86\hello32.obj -nostdlib -lkernel32
  C:\mingw32\bin\g++.exe -o bin\x86\hello32.exe obj\x86\hello32.obj -nostdlib -lkernel32

  // Option 4: Using Polink
  polink /ENTRY:_start /SUBSYSTEM:CONSOLE /OUT:bin\x86\hello32.exe obj\x86\hello32.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win" kernel32.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86\link.exe" /ENTRY:start /SUBSYSTEM:CONSOLE /NODEFAULTLIB /OUT:bin\x86\hello32.exe obj\x86\hello32.obj /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<version>\um\x86" kernel32.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    |-----------------|-------------------------|
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 6,122                   |
    | **gcc/g++**     | 6,201                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 3,072                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `hello32.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x86\hello32.exe
  ```

  You should see the output: `Hello, 32-bit World!`.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone MessageBox (GUI) Program Using Win32 API Calls</summary>
- Open **VS Code** and create a file named `MessageBox32.asm`. The final path should be: `NASM-Starter\src\x86\MessageBox32.asm`.
- Ensure that the file has a `.asm` extension, then copy and paste the following code snippet:

```nasm
; x86 (32-bit) Windows Assembly (Intel Syntax)

; Constants
MB_DEFBUTTON2 EQU 100h      ; Default second button (No)
IDNO          EQU 7         ; Return value when 'No' is selected
MB_YESNO      EQU 4         ; MessageBox with Yes/No buttons

; External Windows API functions
extern _MessageBoxA@16
extern _ExitProcess@4

; Export entry point
global main

section .data
    MessageBoxText    db "Do you want to exit?", 0
    MessageBoxCaption db "MessageBox 32", 0

section .text
main:
.message_loop:
    ; Set up MessageBoxA parameters (reverse order)
    push MB_YESNO | MB_DEFBUTTON2  ; uType
    push MessageBoxCaption         ; lpCaption
    push MessageBoxText            ; lpText
    push 0                         ; hWnd (NULL)
    call _MessageBoxA@16

    ; Check if user clicked 'No'
    cmp eax, IDNO
    je .message_loop

    ; Exit process
    push 0
    call _ExitProcess@4
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win32 src\x86\MessageBox32.asm -o obj\x86\MessageBox32.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:main obj\x86\MessageBox32.obj /fo bin\x86\MessageBox32.exe kernel32.dll user32.dll

  // Option 2: Using GNU ld
  C:\mingw32\bin\ld.exe -e main obj\x86\MessageBox32.obj -o bin\x86\MessageBox32.exe -L"C:\mingw32\i686-w64-mingw32\lib" -lkernel32 -luser32

  // Option 3: Using gcc/g++
  C:\mingw32\bin\gcc.exe -o bin\x86\MessageBox32.exe obj\x86\MessageBox32.obj -nostdlib -lkernel32 -luser32
  C:\mingw32\bin\g++.exe -o bin\x86\MessageBox32.exe obj\x86\MessageBox32.obj -nostdlib -lkernel32 -luser32

  // Option 4: Using Polink
  polink /ENTRY:main /SUBSYSTEM:WINDOWS /OUT:bin\x86\MessageBox32.exe obj\x86\MessageBox32.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win" kernel32.lib user32.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86\link.exe" /ENTRY:main /SUBSYSTEM:WINDOWS /OUT:bin\x86\MessageBox32.exe obj\x86\MessageBox32.obj /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<sdk_version>\um\x86" kernel32.lib user32.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    |-----------------|-------------------------|
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 6,574                   |
    | **gcc/g++**     | 6,653                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 3,072                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `MessageBox32.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x86\MessageBox32.exe
  ```

  You should see a message box appear.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone Console (CLI) Program Using C Runtime (CRT)</summary>
- Open **VS Code** and create a file named `hello32crt.asm`. The final path should be: `NASM-Starter\src\x86\hello32crt.asm`.
- Ensure the file has a `.asm` extension, and copy the following code snippet into it:

```nasm
; x86 (32-bit) Windows Assembly (Intel Syntax)

bits 32

section .data
    msg db "Hello, 32-bit World!", 0xd, 0xa, 0  ; Null-terminated string with CRLF

section .text
global main
extern _printf

main:
    ; (Prologue) Stack frame management
    push    ebp                 ; Preserve caller's base pointer
    mov     ebp, esp            ; Establish new stack frame

    ; Console I/O operations
    push    msg                 ; Push message address as parameter
    call    _printf             ; Call printf from C runtime
    add     esp, 4              ; Clean up stack after call

    ; (Epilogue) Program termination sequence
    xor     eax, eax            ; Set process exit code (0)
    pop     ebp                 ; Restore original base pointer
    ret                         ; Return control to caller
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win32 src\x86\hello32crt.asm -o obj\x86\hello32crt.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:main /mix /console obj\x86\hello32crt.obj /fo bin\x86\hello32crt.exe msvcrt.dll

  // Option 2: Using GNU ld
  C:\mingw32\bin\ld.exe -e main -subsystem console obj\x86\hello32crt.obj -o bin\x86\hello32crt.exe -L"C:\mingw32\i686-w64-mingw32\lib" -lmsvcrt

  // Option 3: Using gcc/g++
  C:\mingw32\bin\gcc.exe -o bin\x86\hello32crt.exe obj\x86\hello32crt.obj -nostdlib -lmsvcrt
  C:\mingw32\bin\g++.exe -o bin\x86\hello32crt.exe obj\x86\hello32crt.obj -nostdlib -lmsvcrt

  // Option 4: Using Polink
  polink /ENTRY:main /SUBSYSTEM:CONSOLE /OUT:bin\x86\hello32crt.exe obj\x86\hello32crt.obj /LIBPATH:"C:\Program Files\PellesC\Lib" pocrt.lib

  // Option 5: Using MSVC Link
  "C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\bin\Hostx64\x86\link.exe" /ENTRY:main /SUBSYSTEM:CONSOLE /OUT:bin\x86\hello32crt.exe obj\x86\hello32crt.obj /LIBPATH:"C:\Program Files\Microsoft Visual Studio\2022\<edition>\VC\Tools\MSVC\<version>\lib\x86" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\<sdk_version>\ucrt\x86" msvcrt.lib legacy_stdio_definitions.lib ucrt.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    | --------------- | ----------------------- |
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 6,694                   |
    | **gcc/g++**     | 6,773                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 3,584                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `hello32crt.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x86\hello32crt.exe
  ```

  You should see the output: `Hello, 32-bit World!`.
</details>

<details class="details-beauty" markdown="1">
<summary>Standalone MessageBox (GUI) Program Using C Runtime (CRT) and Win32 API Calls</summary>
- Open **VS Code** and create a file named `MessageBox32_CRT.asm`. The final path should be: `NASM-Starter\src\x86\MessageBox32_CRT.asm`.
- Ensure the file has a `.asm` extension, and copy the following code snippet into it:

```nasm
; x86 (32-bit) Windows Assembly (Intel Syntax)

extern _MessageBoxA@16, _sprintf    ; External API/CRT functions
global WinMain                      ; Entry point for CRT GUI applications

section .data
    fmt     db "Do you want to exit? (Count: %d)", 0   ; Format string
    caption db "CRT+Win32 Demo", 0                     ; MessageBox title
    counter dd 0                                       ; Counter variable
    buffer  times 256 db 0                             ; Formatting buffer

section .text
WinMain:
.message_loop:
    mov  eax, [counter]       ; Load counter value
    inc  eax                  ; Increment counter
    mov  [counter], eax       ; Store updated counter

    ; Call sprintf(buffer, fmt, counter)
    push eax                  ; Push counter (3rd arg)
    push fmt                  ; Push format string (2nd arg)
    push buffer               ; Push buffer (1st arg)
    call _sprintf             ; Format string
    add  esp, 12              ; Clean cdecl stack

    ; Call MessageBoxA(hWnd, lpText, lpCaption, uType)
    push 4 | 0x100            ; MB_YESNO | MB_DEFBUTTON2 (4th arg)
    push caption              ; lpCaption (3rd arg)
    push buffer               ; lpText (2nd arg)
    push 0                    ; hWnd (1st arg)
    call _MessageBoxA@16      ; Show dialog

    cmp  eax, 7               ; Check if "No" clicked
    je   .message_loop        ; Loop if "No"

    ret                       ; Exit program
```

Open the **Terminal** in VS Code and run the following commands from the root of your project folder (`NASM-Starter`):
- **Assemble** (compile) the source file:

  ```terminal
  nasm -f win32 src\x86\MessageBox32_CRT.asm -o obj\x86\MessageBox32_CRT.obj
  ```

- **Link** the object file:

  ```
  // Option 1: Using GoLink
  golink /entry:WinMain /mix obj\x86\MessageBox32_CRT.obj /fo:bin\x86\MessageBox32_CRT.exe user32.dll msvcrt.dll

  // Option 2: Using GNU ld
  C:\mingw32\bin\ld.exe -e WinMain -subsystem windows obj\x86\MessageBox32_CRT.obj -o bin\x86\MessageBox32_CRT.exe -L"C:\mingw32\i686-w64-mingw32\lib" -luser32 -lmsvcrt

  // Option 3: Using gcc/g++
  C:\mingw32\bin\gcc.exe -o bin\x86\MessageBox32_CRT.exe obj\x86\MessageBox32_CRT.obj -nostdlib -luser32 -lmsvcrt
  C:\mingw32\bin\g++.exe -o bin\x86\MessageBox32_CRT.exe obj\x86\MessageBox32_CRT.obj -nostdlib -luser32 -lmsvcrt

  // Option 4: Using Polink
  polink /ENTRY:WinMain /SUBSYSTEM:WINDOWS /OUT:bin\x86\MessageBox32_CRT.exe obj\x86\MessageBox32_CRT.obj /LIBPATH:"C:\Program Files\PellesC\Lib\Win" /LIBPATH:"C:\Program Files\PellesC\Lib" user32.lib pocrt.lib

  // Option 5: Using MS Link
  "C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34808\bin\Hostx64\x86\link.exe" /ENTRY:WinMain /SUBSYSTEM:WINDOWS /OUT:bin\x86\MessageBox32_CRT.exe obj\x86\MessageBox32_CRT.obj /LIBPATH:"C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Tools\MSVC\14.43.34808\lib\x86" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x86" /LIBPATH:"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\ucrt\x86" user32.lib msvcrt.lib legacy_stdio_definitions.lib ucrt.lib
  ```

  * **Executable Size Comparison**:

    | Linker          | Executable Size (bytes) |
    | --------------- | ----------------------- |
    | **GoLink**      | 2,560                   |
    | **GNU ld**      | 7,305                   |
    | **gcc/g++**     | 7,384                   |
    | **Polink**      | 2,048                   |
    | **MSVC Linker** | 3,584                   |

- **Run the Program**: Use the **Exe Runner** VS Code extension to run the `MessageBox32_CRT.exe` file by right-clicking and selecting "**Run Executable**". Alternatively, you can execute the following command:

  ```terminal
  bin\x86\MessageBox32_CRT.exe
  ```

  You should see a message box appear.
</details>

<details class="details-beauty" markdown="1">
<summary>Mixed Assembly</summary>
**Mixed Assembly** refers to the practice of combining assembly language code with high-level language components (such as C or C++) or system libraries (like the C Runtime or Win32 API). This approach allows low-level performance optimizations while leveraging the functionality and convenience of higher-level programming interfaces.

> Microsoft Visual C++ does not support inline assembly when targeting **x64**. While inline assembly using the `__asm` keyword is available in **x86** builds, it is not supported for x64. Instead, Microsoft recommends using **intrinsics** or writing assembly code in **external files** that are linked into the project.
{: .callout.warning }

> Switching to **GCC/MinGW** is one way to regain inline assembly support on **x64**, but it's not the only option. Many developers targeting x64 with MSVC use **compiler intrinsics** for low-level operations or write standalone assembly files that are assembled separately and linked into their projects.
{: .callout.tip }

- **I – Inline Assembly in C/C++ (GCC/MinGW)**:
  * Inline assembly allows you to write assembly code directly within C/C++ source files using compiler-specific syntax (e.g., `__asm__` in GCC). This technique is useful for quick prototyping or optimizing small, performance-critical sections of code. Unlike x64 targets, inline assembly is supported in both GCC/MinGW and MSVC when targeting x86 (32-bit) builds.
  * Open **VS Code** and create a file named `inline_assembly.c`. The final path should be: `NASM-Starter\src\x86\inline_assembly.c`.
  * Copy the following code snippet into the file:

    ```c
    #include <stdio.h>
    int main() {
      int a = 5;       // 32-bit integers
      int b = 10;
      int result;

      // Inline x86 assembly (GCC syntax)
      __asm__ (
        "mov %[a_val], %%eax \n"  // Load 'a' into EAX (32-bit)
        "add %[b_val], %%eax \n"  // Add 'b' to EAX
        "mov %%eax, %[result] \n" // Store result
        : [result] "=r" (result)  // Output operand
        : [a_val] "r" (a),        // Input operands
          [b_val] "r" (b)
        : "eax"                   // Clobbered register
      );
      printf("%d + %d = %d\n", a, b, result);
      return 0;
    }
    ```

  * **Compilation (Using MinGW on Windows)**:

    ```terminal
    C:\mingw32\bin\gcc.exe src/x86/inline_assembly.c -o bin/x86/inline_assembly.exe
    ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `inline_assembly.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x86\inline_assembly.exe
    ```

    You should see the output: `5 + 10 = 15`.

<br>

- **II – External Assembly Module (NASM + C/C++)**:
  * External assembly modules allow you to write assembly code in separate `.asm` files, which are assembled (e.g., using NASM) and then linked with a C or C++ program. This approach is ideal for implementing larger or more complex assembly routines while keeping the high-level code clean and maintainable. An added advantage is that it works with any standard compiler, including GCC, MSVC, and others.
  * Open **VS Code** and create a file named `add_numbers.asm`. The final path should be: `NASM-Starter\src\x86\add_numbers.asm`.
  * Ensure the file has a `.asm` extension, and copy the following code snippet into it:

    ```nasm
    ; add_numbers.asm (x86 NASM, Windows cdecl calling convention)
    section .text
    global _AddNumbers  ; Export function for linker

    _AddNumbers:
        ; Args pushed on stack: int a (ESP+4), int b (ESP+8)
        mov eax, [esp + 4]   ; Load 32-bit 'a' into EAX
        add eax, [esp + 8]   ; Add 32-bit 'b' to EAX
        ret                  ; Return result in EAX
    ```

  * Create a file named `main.c`. The final path should be: `NASM-Starter\src\x86\main.c`. Copy the following code into the file:

    ```c
    #include <stdio.h>

    // Declare external assembly function (32-bit)
    extern int AddNumbers(int a, int b);

    int main() {
      int a = 5, b = 10;
      int result = AddNumbers(a, b); // Call x86 assembly
      printf("%d + %d = %d\n", a, b, result);
      return 0;
    }
    ```

  * **Compilation**:
    * Assemble with NASM:

      ```terminal
      nasm -f win32 src\x86\add_numbers.asm -o obj\x86\add_numbers.obj
      ```
    
    * Compile and link with GCC:

      ```terminal
      C:\mingw32\bin\gcc.exe src/x86/main.c obj/x86/add_numbers.obj -o bin/x86/main.exe
      ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `main.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x86\main.exe
    ```

    You should see the output: `5 + 10 = 15`.

<br>

- **III – Calling C Functions from Assembly**:
  * An assembly program can call C functions, such as those for I/O, memory management, or complex logic. This approach enables you to leverage C libraries or higher-level logic within an assembly program. The main advantage is that it combines the low-level control of assembly with the convenience and functionality of C.
  * Open **VS Code** and create a file named `c_functions.c`. The final path should be: `NASM-Starter\src\x86\c_functions.c`.
  * Copy the following code snippet into the file:

    ```c
    #include <stdio.h>

    // C function to be called from assembly (32-bit)
    void __cdecl print_message(const char* message) {  // Explicit __cdecl (default in x86)
      printf("Message from C: %s\n", message);
    }
    ```

  * Create a file named `assembly_main.asm`. The final path should be: `NASM-Starter\src\x86\assembly_main.asm`.
  * Ensure the file has a `.asm` extension, and copy the following code snippet into it:

    ```nasm
    ; assembly_main.asm (x86 NASM, Windows cdecl)
    section .data
        message db "Hello from x86 Assembly!", 0  ; Null-terminated string

    section .text
        extern _print_message  ; C functions get underscores in MinGW
        extern _exit           ; Exit from C runtime
        global _main           ; Entry point for GCC

    _main:
        ; cdecl calling convention: push args right-to-left
        push dword message    ; Push 32-bit address of message (arg for print_message)
        call _print_message   ; Call C function
        add esp, 4            ; Clean up stack (1 argument * 4 bytes)

        ; Exit via C's exit()
        push dword 0          ; Exit code 0 (32-bit)
        call _exit            ; Call exit()
        ; No return needed (exit terminates)
    ```

  * **Compilation**:
    * Compile the C Code:

      ```terminal
      C:\mingw32\bin\gcc.exe -c src/x86/c_functions.c -o obj/x86/c_functions.obj
      ```
    
    * Assemble x86 Code:

      ```terminal
      nasm -f win32 src\x86\assembly_main.asm -o obj\x86\assembly_main.obj
      ```

    * Link Object Files:

      ```terminal
      C:\mingw32\bin\gcc.exe obj/x86/assembly_main.obj obj/x86/c_functions.obj -o bin/x86/assembly_main.exe
      ```

  * **Run the Program**: You can use the **Exe Runner** extension in VS Code by right-clicking on the `assembly_main.exe` file and selecting "**Run Executable**", or run it manually using the command below:

    ```terminal
    bin\x86\assembly_main.exe
    ```

    You should see the output: `Message from C: Hello from x86 Assembly!`.
</details>

##### 🔶 Debugging:
{: data-toc-skip='' .mt-4 .mb-4 }

Previously, we discussed how to start debugging. If you haven't seen it yet, check out [Section 4: Debugger](#4-debugger). You can use any of the PE files (executables) we built earlier. In the example below, we're debugging the `hello64.exe` file.

- **x64dbg** interface displaying a loaded 64-bit PE:

  ![x64dbg-light](https://i.imgur.com/yxHvklg.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAANUlEQVQImQEqANX/Aenl4v/8/fgADQkFAAYHDAD69PcABPbz8AAEAwcA/AUDAPX28QACAQIAnsUQi3o1pgkAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}

  ![x64dbg-dark](https://i.imgur.com/flk2FJE.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQElEQVQImQXBSw6AIAxAwQet6AI/ZyHe/1TGmkCpM6ndLTQp9hrdB5tk8hxOREJUgaCUlVzrzlIEn53rPHg+4weZ1RPX4pwr8AAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

- **IDA Free** interface displaying a loaded 64-bit PE:

  ![idafree-light](https://i.imgur.com/iP4Otpu.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAM0lEQVQImWM8dePWfzYBHgYWZiYGtt9/GbiZWRhYeAV4GNg4OBlYmFkY/jL+ZGBkYWUAANr4CAhgdFkpAAAAAElFTkSuQmCC" referrerpolicy="no-referrer" style="border-radius: 8px;"}

  ![idafree-dark](https://i.imgur.com/ES5N1Aa.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAMklEQVQImQXBMRKAQAgEwRH44WWX+nkjEwOpYkG7j3OvL81QNT1FviKu+6HUqAcPJzX8988Xlgj0ytEAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}

- **Ghidra** interface displaying a loaded 64-bit PE:

  ![ghidra-light](https://i.imgur.com/cMqpHY8.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAPklEQVQImQXBMQ6AMAwEwXXw2SQS/P93FBR0SNQWhBk7zmv2TCLFfIuU8H0Eo2+Ew8dKa4ZXFU/dSAtgmMEPB5wOEWyz0kAAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}

  ![ghidra-dark](https://i.imgur.com/R3vJQXD.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARUlEQVQImQXBOw6AIBBAwbeAqI2x9yIWFtz/NH5IMLILzsh+pK6fYq3hXOctmVDyyXU/WK0MMWKqhHGa2ZYVU8V5j4jwAwTBGonovcG4AAAAAElFTkSuQmCC" referrerpolicy="no-referrer" style="border-radius: 8px;"}

- **WinDbg** interface displaying a loaded 64-bit PE:

  ![WinDbg-light](https://i.imgur.com/8OHvKqg.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARElEQVQImQXBsQ2AMAwAwTexYiwMRVoK9p+ElgkyAwUSUgCFO9mP2tWcKZytGAC6Lo0SwegZcmIQQc/XuK+HWT5oHYAfh30NOJE+nAAAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}

  ![WinDbg-dark](https://i.imgur.com/0HL3KBF.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARElEQVQImQXBQQ5AMBBA0T9MWJBwI4kTuP8B7LoglOp06j1Z1q1+VojpIR07ANpJwK6bJiZyfqnuaNGZdhpwTnobEYEf0ZMaZVmO29gAAAAASUVORK5CYII=" referrerpolicy="no-referrer" style="border-radius: 8px;"}

- **GDB** displaying a loaded 64-bit PE:

  ![gdb-light](https://i.imgur.com/yEjQLYP.png){: .light .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAPUlEQVQImQXBwQ2AMAwEwQXFuP/mSA18sQDHUnLMcPauGqV4Qm9+ypFqrAks3AwzB0S7S1xRuDeOOdk3+AHjZB8OC50NAAAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

  ![gdb-dark](https://i.imgur.com/Dqakfn7.png){: .dark .shadow lqip="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAOklEQVQImQXB0QmAMBBEwbfhQD+sRdN/WwENyXHrjO6ne34vRVFlMIQzadHItcm5QCLquLAgPbBOBPygyhlZwZ5jzQAAAABJRU5ErkJggg==" referrerpolicy="no-referrer" style="border-radius: 8px;"}

### Additional Methods

There are several other ways to set up an assembly development environment:

- You can use the *Irvine* library for assembly programming. Refer to the author's official [website](https://asmirvine.com/gettingStartedVS2022/index.htm){: target="_blank" rel="noopener noreferrer"} for a detailed guide on "Getting Started with MASM and Visual Studio 2022".
- You may also use *Code::Blocks*, which includes MinGW by default, making GNU tools readily available. However, if you do not plan to use the Code::Blocks IDE itself, this approach is not recommended. It would be more efficient to install MinGW directly rather than downloading the entire IDE just for its toolchain. Assembly development using MinGW has already been covered in earlier sections.
- You can also use *online tools* such as [Godbolt](https://godbolt.org){: target="_blank" rel="noopener noreferrer"} (Compiler Explorer), [Dogbolt](https://dogbolt.org){: target="_blank" rel="noopener noreferrer"} (Decompiler Explorer), [x86-64 Playground](https://x64.halb.it/){: target="_blank" rel="noopener noreferrer"} and others. However, these tools may have limited functionality compared to a full local development environment.
