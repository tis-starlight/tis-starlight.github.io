---
title: 0.1 - Computer Programs
description: An insightful look into programs, software types, SDLC phases, and the role of version control in development.
# author: Starlight
date: 2023-12-03 02:25:00 +0500
categories: [Programming Languages, -Programming 101]
tags: [programs, codes, softwares, sdlc, version control, source control]
# pin: true
# toc: false
# math: true
# mermaid: true
image:      
  path: /assets/img/posts/computer-programs.jpg
  lqip: data:image/jpg;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoKAAYAAkA4JZwAAudGFIAA/v2d8Pz2XIlelmAA
  alt: Computer Programs
# render_with_liquid: false
---

"The keyboard is our pen, and code is our language. Let's embark on a linguistic adventure through the world of computer programs, where syntax and semantics come together to create the poetry of the digital age."

## Program

A [program](https://en.wikipedia.org/wiki/Computer_program){: target="_blank" rel="noopener noreferrer"} is a set of instructions written in a programming language that is executed by a computer to perform a specific task. The computer executes these instructions based on the provided program. Unlike algorithms, programs are language-specific and provide detailed instructions with the exact syntax required for a computer to understand and execute. 

An individual who creates programs is referred to as [programmer](https://en.wikipedia.org/wiki/Programmer){: target="_blank" rel="noopener noreferrer"}, a coder, a software developer or a software engineer. Programmers use algorithms as a basis to write programs, translating the logical steps into a language that a computer can comprehend. 

## Types of Codes

In the context of computer programming, there are several types of code, each serving a specific purpose in the development and execution of software.

### Source Code

- [Source code](https://en.wikipedia.org/wiki/Source_code){: target="_blank" rel="noopener noreferrer"} is the human-readable form of a program written by a programmer using a programming language.
- It consists of statements and instructions written in a format that can be understood by humans. This code is typically written in a high-level programming language, such as Python, Java, C++, or others.
- Source code needs to be translated into "machine code" before it can be executed by a computer's central processing unit (CPU).
- **Source program** is a term used to describe the original code written by a programmer, typically in a form that is easy for humans to read and understand.

```c++
// Source Code example
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Object Code

- [Object code](https://en.wikipedia.org/wiki/Object_code){: target="_blank" rel="noopener noreferrer"} is the machine-readable, binary representation of the program that is generated by a compiler or an assembler.
-  It is an intermediate step between the human-readable source code and the machine-executable code.
- When you write a program in a high-level programming language (source code), you need to use a compiler or an interpreter to convert that source code into machine code. The output of this compilation process is often referred to as **object code**. Object code is not human-readable and is specific to the computer architecture for which it was generated or compiled.
- While less readable than the original source code, object code is more human-readable than machine code. It is a binary representation with some level of structure, but it still requires translation by the computer's hardware.
-  Object code needs further processing, either by an assembler (in the case of assembly language) or a linker (in the case of compiled high-level languages), to produce the final machine code.
-  **Object program** is another term used to describe the result of the compilation or assembly process.

### Machine Code

- [Machine code](https://en.wikipedia.org/wiki/Machine_code){: target="_blank" rel="noopener noreferrer"} is a set of instructions written in binary or hexadecimal format that is directly understandable and executable by a computer's central processing unit (CPU).
- It represents the lowest level of programming language and is specific to the architecture of the computer's CPU.
- It is not human-readable and is often in the form of raw binary instructions, making it challenging for programmers to understand or modify directly.
- Each instruction in machine code corresponds to a specific operation that the CPU can perform, such as arithmetic calculations, data movement, or control flow operations.

The x86 assembly instruction `mov eax, 5` moves or loads the value 5 into the `eax` register. The corresponding machine code in binary might look like this:

```
; Machine Code Example (Binary)

; mov eax, 5
10111000 00000101 00000000 00000000 00000101
```

In this example, each group of eight binary digits (bits) represents a byte. The `10111000` is the opcode for the `mov` instruction with the destination register `eax`. The `00000101` represents the immediate value 5 in little-endian format (common in x86 architecture). The rest of the zeros are padding.

### ByteCode

- [Bytecode](https://en.wikipedia.org/wiki/Bytecode){: target="_blank" rel="noopener noreferrer"} is an intermediate representation of a program that is generated by a compiler or an interpreter.
- It is not directly executed by the CPU but is instead interpreted or translated by a virtual machine or an interpreter at runtime.
- Bytecode is typically platform-independent, allowing the same bytecode to be executed on different systems with the appropriate virtual machine or interpreter.
- Java bytecode is a well-known example, used in Java programming, where it is executed by the Java Virtual Machine (JVM).

```java
// Java Source Code
public class BytecodeExample {
  public static void main(String[] args) {
    int a = 5;
    int b = 3;
    int result = a + b;
    System.out.println("Result: " + result);
  }
}
```

After compiling the above Java code, you would get bytecode. This bytecode is in a format that can be executed by the Java Virtual Machine (JVM). The actual bytecode generated by a Java compiler may be more complex and include additional instructions and metadata. Below is a simplified representation of Java bytecode for the above Java source code:

```
// Simplified Java Bytecode
0: iconst_5            // Push the integer constant 5 onto the stack
3: istore_1            // Pop the top value from the stack and store it in local variable 1 (a)
6: iconst_3            // Push the integer constant 3 onto the stack
9: istore_2            // Pop the top value from the stack and store it in local variable 2 (b)
12: iload_1            // Load the value of local variable 1 (a) onto the stack
13: iload_2            // Load the value of local variable 2 (b) onto the stack
14: iadd               // Add the top two values on the stack
15: istore_3           // Pop the result and store it in local variable 3 (result)
18: getstatic          #2  // Get the System.out field
21: new                #3  // Create a new StringBuilder
24: dup
25: ldc                #4  // Push the string "Result: " onto the stack
27: invokespecial      #5  // Invoke the StringBuilder constructor
30: iload_3                // Load the value of local variable 3 (result) onto the stack
31: invokevirtual      #6  // Invoke the append method on the StringBuilder
34: invokevirtual      #7  // Invoke the toString method on the StringBuilder
37: invokevirtual      #8  // Invoke the println method on System.out
```

### MicroCode

- [Microcode](https://en.wikipedia.org/wiki/Microcode){: target="_blank" rel="noopener noreferrer"} is a layer of low-level instructions that reside between machine code and the hardware components of a CPU.
- It is a set of instructions and control signals that are used to implement the architecture and functionality of the CPU.
- Microcode is specific to the CPU's design and is responsible for translating machine code instructions into signals that control the CPU's internal components.
- Programmers usually interact with machine code, while microcode is implemented by CPU manufacturers to execute machine code on the underlying hardware.
- Microcode is stored in the control unit's firmware and is not directly visible or accessible to programmers.

```
; Microcode Example (Hypothetical Microinstructions)
0001: LoadRegister(Register.EAX, 5)
0002: AddRegisters(Register.EAX, Register.EAX, 3)
0003: MoveRegister(Register.EBX, Register.EAX)
0004: InvokeSystemCall(SystemCall.EXIT)
```

## Software

[Software](https://en.wikipedia.org/wiki/Software){: target="_blank" rel="noopener noreferrer"} refers to a set of instructions or programs that tell a computer how to perform specific tasks. It encompasses a wide range of applications, scripts, and programs that enable various functionalities on computing devices. Software is a crucial component of modern technology and is essential for the operation of computers, smartphones, and other electronic devices. For instance, word processors serve as applications designed for tasks such as letter, paper, and book composition.

There are several types of software, broadly categorized into two main groups:

### System Software

[System Software](https://en.wikipedia.org/wiki/System_software){: target="_blank" rel="noopener noreferrer"} is reponsible for managing the computer. It provides a platform for other software to run and interact directly with computer hardware. System software is essential for the proper functioning of a computer, providing a foundation for the execution of application software and ensuring effective communication between hardware and software components.

- **Operating Systems (OS)**: The core software that manages hardware resources, provides services for computer programs, and acts as an intermediary between the user and the computer hardware. Examples include Microsoft Windows, macOS, Linux, and Android.
- **Device Drivers**: Programs that allow the operating system to communicate with and control specific hardware devices, such as printers, graphics cards, and input devices.
- **Utilities**: Tools and programs that perform various tasks related to system maintenance, file management, and security. Examples include antivirus software, disk cleanup utilities, and backup tools.

### Application Software

[Application software](https://en.wikipedia.org/wiki/Application_software){: target="_blank" rel="noopener noreferrer"} is designed to perform specific tasks or functions for end-users. Unlike system software, which facilitates the operation of the computer system, application software directly fulfills the needs or desires of users.

- **Word Processors**: Software used for creating, editing, and formatting text documents. Examples include Microsoft Word, Google Docs, and LibreOffice Writer.
- **Database Software**: Programs that manage and organize large sets of data. Examples include Microsoft Access, MySQL, and Oracle Database.
- **Web Browsers**: Applications that allow users to access and navigate the internet. Examples include Google Chrome, Mozilla Firefox, and Microsoft Edge.
- **Games and Entertainment Software**: Designed for entertainment purposes, including video games, media players, and streaming applications.
- **Graphics and Multimedia Software**: Used for creating and editing visual and multimedia content. Examples include Adobe Photoshop for image editing, Adobe Premiere for video editing, and Audacity for audio editing.
- **Integrated Development Environments (IDEs)**: Such as Visual Studio, Eclipse, and PyCharm, which provide tools for writing, testing, and debugging code.
- **Compilers and Interpreters**: Programs that convert high-level programming code into machine code (compilers) or execute code directly (interpreters).

## SDLC

[SDLC](https://en.wikipedia.org/wiki/Software_development_process){: target="_blank" rel="noopener noreferrer"} stands for **Software Development Life Cycle**. It is a systematic process for planning, creating, testing, deploying, and maintaining software systems. The SDLC aims to produce high-quality software that meets or exceeds customer expectations, is delivered on time and within budget, and can be maintained and updated easily. The SDLC typically consists of several phases, and various models can be used to represent these phases. 

The **Program Development Process** is a more general term that encompasses the activities involved in creating any type of computer program or software. The **SDLC** is a specific framework within the broader Program Development Process, providing a structured approach to software development.

Different software development methodologies, such as _Waterfall_, _Agile_, and _DevOps_, may follow variations of the SDLC to address specific project requirements and team preferences. Each phase of the SDLC is important for delivering a successful software product.

> The topic is covered in more detail in `Software Engineering`.
{: .prompt-info }

The common phases in the SDLC include:

### 1. Planning

- **Requirements Analysis**: Gather and analyze requirements from stakeholders to understand the system's purpose, features, and constraints.
- **Feasibility Study**: Evaluate the project's technical, operational, and financial feasibility.

### 2. Design

- **System Design**: Define the overall system architecture and components.
- **Detailed Design**: Specify in detail how the system will be implemented, including data structures, algorithms, and interfaces.

### 3. Implementation (Coding)

- Translate the design into code using a programming language.
- Follow coding standards and best practices.
- Conduct code reviews to ensure quality.

### 4. Testing

- **Unit Testing**: Test individual components in isolation.
- **Integration Testing**: Test the interactions between integrated components.
- **System Testing**: Test the entire system as a whole.
- **User Acceptance Testing (UAT)**: Validate the system with end-users to ensure it meets their requirements.

### 5. Deployment

- Release the software to users or deploy it to a production environment.

### 6. Maintenance

- Address issues identified in the production environment.
- Make enhancements and updates as needed.
- Create and improve documentation that describes the program's functionality, purpose, and usage.

## Version Control

[Version control](https://en.wikipedia.org/wiki/Version_control){: target="_blank" rel="noopener noreferrer"} is a system that allows multiple people to work on a project simultaneously without interfering with each other's work. It enables tracking changes to files over time, facilitating collaboration among team members, and providing a history of how a project has evolved. **Version control systems (VCS)** are essential for software development, but they can also be used for managing any kind of files, including documents, images, and more.

[Git](https://en.wikipedia.org/wiki/Git){: target="_blank" rel="noopener noreferrer"} is one of the most widely used distributed version control systems. It is popular for its speed, flexibility, and powerful branching and merging capabilities. Other version control systems include Mercurial, SVN (Subversion), and CVS (Concurrent Versions System).

> The topic is covered in more detail in `Git`.
{: .prompt-info }

### Version Control Vs Source Control

- **Version Control** is a broader concept that encompasses the management of different versions or revisions of a project, which may include not only source code but also other project-related files, such as documentation, configuration files, and more.
- **Source control** is a more specific term that often focuses on the control and management of source code files. It emphasizes the role of version control in handling changes to the source code of a software project.

### Key concepts

- **Repository**: A repository is a storage location where all the files and their changes are stored. It can be centralized (stored on a single server) or distributed (each user has a local copy).
- **Commit**: A commit is a snapshot of the changes made to the files at a particular point in time. Each commit is accompanied by a commit message that describes the changes made.
- **Branch**: A branch is a separate line of development within a repository. It allows developers to work on different features or bug fixes simultaneously without affecting the main codebase.
- **Merge**: Merging is the process of combining changes from one branch into another. This is typically done to incorporate features developed in separate branches into the main branch.
- **Clone**: Cloning involves creating a copy of a repository, usually from a remote server. This allows users to work on their own local copy and synchronize changes with the remote repository.
- **Pull/Push**: Pulling is the process of fetching changes from a remote repository and merging them into the local repository. Pushing is the opposite — it involves sending local changes to a remote repository.
- **Conflict Resolution**: Conflicts occur when two or more people make changes to the same part of a file simultaneously. Version control systems provide tools to help users resolve these conflicts.
- **History**: Version control systems maintain a detailed history of changes made to files. This history includes information about who made the changes, when they were made, and the purpose of the changes.
- **Tagging**: Tagging involves assigning a meaningful label to a specific commit, usually to mark important points in development, such as releases or major milestones.
- **Centralized vs. Distributed**: Centralized version control systems (e.g., SVN) have a single central repository. Distributed version control systems (e.g., Git, Mercurial) allow each user to have a complete copy of the repository, enabling offline work and faster operations.
