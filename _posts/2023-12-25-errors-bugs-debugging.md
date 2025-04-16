---
title: 0.3 - Errors, Bugs and Debugging
description: An overview of computer errors, bugs, debugging techniques, debuggers, and essential error-handling terminology.
# author: Starlight
date: 2023-12-25 19:30:00 +0500
categories: [Programming Languages, -Programming 101]
tags: [errors, bugs, debugging, debuggers]
# pin: true
# toc: false
# math: true
# mermaid: true
image:      
  path: /assets/img/posts/errors-bugs-debugging.jpg
  lqip: data:image/jpeg;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoKAAcAAkA4JZQAAtzJXo0gAP7ykrRvEXe4yVhsgsH32RiH/7g0/VN4L+UBKZcmh9HwFF+EpwNj4hqN4pgDrwVgAAA=
  alt: Errors, Bugs and Debugging
# render_with_liquid: false
---

## Errors 

Errors refer to mistakes or [bugs](https://en.wikipedia.org/wiki/Software_bug){: target="_blank" rel="noopener noreferrer"} in the code that prevent it from executing as intended. Understanding and categorizing errors is crucial for developers to identify, diagnose, and fix issues in their programs. 

## Types of errors

Errors in programming can be broadly classified into three main types: syntax errors, runtime errors, and logical errors.

### 1. Syntax Error

A collection of (grammatical) rules for writing programs in a programming language is known as **syntax**. All program statements are written according to these rules. 

[Syntax errors](https://en.wikipedia.org/wiki/Syntax_error){: target="_blank" rel="noopener noreferrer"} occur when the code violates the rules of the programming language's syntax. These errors are typically detected by the compiler or interpreter during the compilation or parsing phase, and they prevent the program from being compiled or executed.

- **Examples**:
  * Missing (delimiters) semicolons or parentheses.
  * Incorrect indentation.
  * Misspelled keywords or variable/function names.

### 2. Runtime Error

**Runtime errors** (execution time errors) occur during the execution of a program. Unlike syntax errors, these errors do not prevent the program from compiling, but they cause the program to terminate abruptly or behave unexpectedly at runtime.

- **Examples**:
  * Division by zero.
  * Accessing an array index that is out of bounds.
  * Trying to open a file that does not exist.

### 3. Logical Error

**Logical errors** occur when the code is syntactically correct and runs without errors, but it does not produce the expected output due to a flaw in the algorithm or logic. A statement with a logical error may produce unexpected and incorrect results in the program.

- Logical errors are the most challenging type of errors for the following reasons:
  * They cannot be detected by the compiler/translator.
  * They do not crash the program. That is why they are difficult to detect.
  * The user needs to review the entire program to identify logical errors.
  * It may take a significant amount of time to detect logical errors.

- **Examples**:
  * Incorrect conditional statements.
  * Flawed loop logic.
  * Misunderstanding of requirements leading to incorrect implementation.

## Program Bug

A [program bug](https://en.wikipedia.org/wiki/Software_bug){: target="_blank" rel="noopener noreferrer"} is a flaw or error in a software application or system that causes it to produce unexpected or incorrect results. Bugs can manifest in various forms, such as syntax errors, logical errors, or runtime errors, and they can occur at different stages of the software development life cycle. Bugs can be introduced during the coding phase, but they may also arise due to design issues, incorrect specifications, or unexpected interactions between different parts of a program.

### History of Bugs
{: data-toc-skip=''}

The term **bug** in the context of computer programming has an interesting historical origin. In 1947, [**Grace Hopper**](https://en.wikipedia.org/wiki/Grace_Hopper){: target="_blank" rel="noopener noreferrer"}, an American computer scientist, found an actual moth causing a malfunction in the _Harvard Mark II_ computer. She documented the "first actual case where bug was found" in the logbook, coining the term "bug" to describe a defect in a computer program. Since then, the term has become widely used in the field of software development.

## Debugging

[Debugging](https://en.wikipedia.org/wiki/Debugging){: target="_blank" rel="noopener noreferrer"} is the process of finding and fixing bugs in a program. It is a crucial and integral part of the software development life cycle (SDLC). The goal of debugging is to identify the root cause of an issue and make the necessary corrections to ensure the program behaves as intended.

[Debugger](https://en.wikipedia.org/wiki/Debugger){: target="_blank" rel="noopener noreferrer"} is a tool or software application designed to help programmers identify and fix bugs in their code. Debuggers provide various features and functionalities to facilitate the debugging process.

### Importance of debugging
{: data-toc-skip=''}

The following are the reasons why debugging is crucial in software development:

- **Error Correction**: Identify and fix bugs to prevent unexpected behavior.
- **Code Quality**: Improve overall code reliability and robustness.
- **Performance Optimization**: Identify and address inefficiencies to enhance software performance.
- **Code Understanding**: Gain insights into code execution and variables for better comprehension.
- **Hypothesis Testing**: Form and test hypotheses to pinpoint and resolve issues.
- **Reliability Assurance**: Eliminate bugs to ensure software works as intended, reducing failures.
- **Collaboration**: Resolve integration issues in collaborative development environments.
- **Continuous Improvement**: Learn from debugging experiences for ongoing skill enhancement.
- **User Experience**: Debugging contributes to a smoother user experience by eliminating disruptions caused by bugs.
- **Cost Reduction**: Early bug detection and resolution during development can reduce the overall cost of fixing issues in later stages.
- **Security**: Debugging helps identify and patch vulnerabilities, enhancing the software's security.
- **Code Maintenance**: Regular debugging makes code easier to maintain, reducing the risk of accumulating technical debt.
- **Testing Validation**: Debugging ensures that the code behaves as expected during various testing scenarios.
- **Documentation Improvement**: Debugging often involves understanding and documenting code, contributing to better project documentation.
- **Innovation**: By resolving issues, developers can focus on implementing new features and innovations rather than constantly addressing bugs.

## Techniques for Debugging

Developers employ various debugging techniques to identify and resolve issues in software. The choice of technique depends on the problem's nature, the development environment, and the available tools. Often, a combination of these techniques is used to comprehensively diagnose and enhance software quality.

Here are some common debugging techniques:

#### Print Statement Debugging:
{: data-toc-skip='' .mt-4 .mb-2 }

Developers "insert print statements (or equivalent output statements) in the code to print the values of variables or messages at various points". This helps trace the flow of the program and identify the source of errors.

#### Interactive Debugging:
{: data-toc-skip='' .mt-2 .mb-2 }

Developers use an "interactive debugger provided by an integrated development environment (IDE) or a standalone debugger". They can set breakpoints, step through code, inspect variables, and analyze the program's state in real-time.

#### Remote Debugging:
{: data-toc-skip='' .mt-2 .mb-2 }

Debugging is performed on a "system or environment that is different from the one where the code is running". This is particularly useful in situations where the development and execution environments are separate.

#### Postmortem Debugging:
{: data-toc-skip='' .mt-2 .mb-2 }

Debugging is done after the "program has terminated or crashed". Developers analyze core dumps, crash reports, or log files to understand the state of the program at the time of failure.

#### Static Analysis (Static Debugging):
{: data-toc-skip='' .mt-2 .mb-2 }

Developers use [static analysis](https://en.wikipedia.org/wiki/Static_program_analysis){: target="_blank" rel="noopener noreferrer"} tools to "analyze the source code without executing it". These [tools](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis){: target="_blank" rel="noopener noreferrer"} identify potential issues, such as coding style violations, potential bugs, or security vulnerabilities.
  * **Linting**: A form of static analysis focused on identifying issues related to coding standards. A **linter** is a tool that analyzes source code to flag programming errors, bugs, stylistic issues, and other problematic patterns. **Linting** or lint analysis, refers to the process of running a linter on your code to identify and report such issues.  _Use Cases_: Enforcing code style and maintaining code quality.
  * **Code Review**: Developers conduct code reviews, where peers examine each other's code for potential issues, adherence to coding standards, and overall code quality.

#### Dynamic Analysis (Dynamic Debugging):
{: data-toc-skip='' .mt-2 .mb-2 }

Developers use [dynamic analysis](https://en.wikipedia.org/wiki/Dynamic_program_analysis){: target="_blank" rel="noopener noreferrer"} tools to "analyze the behavior of a program during execution". This includes runtime memory analysis, code coverage analysis, and other techniques to identify issues that may not be apparent in the source code alone.
  * **Unit Testing**: Developers write unit tests to verify the correctness of individual units (functions, methods, or classes) of code. Failures in unit tests indicate potential bugs or regressions.
  * **Integration Testing**: Developers test the interaction between different components or modules of a software system. Integration testing helps identify issues that arise when different parts of the code work together.
  * **Regression Testing**: Developers run tests to ensure that recent changes to the codebase have not introduced new bugs or negatively impacted existing functionality.
  * **Fuzz Testing**: Fuzz testing involves providing random or invalid inputs to a program to uncover unexpected behavior or vulnerabilities. It is particularly useful for identifying security issues.
  * **Profiling**: [Profiling](https://en.wikipedia.org/wiki/Profiling_(computer_programming)){: target="_blank" rel="noopener noreferrer"} tools are used to "analyze the performance (runtime behavior) of a program, identify bottlenecks, and optimize code". While not strictly debugging, profiling helps in improving the efficiency of a program.
    * **Memory Profiling**: Analyzing memory usage during program execution. _Use Cases_: Identifying memory leaks or inefficient memory usage.
    * **Performance Profiling**: Analyzing overall program performance, including CPU usage, memory usage, and other metrics. _Use Cases_: Understanding and improving the efficiency of a program.
  * **Code Coverage**: Code coverage measures the extent to which the source code of a program has been executed during testing. Debuggers and testing tools often provide code coverage analysis.

> Do not confuse **static analysis** and **dynamic analysis** in the context of *reverse engineering* with traditional debugging techniques; in reverse engineering, they are used to understand and analyze software behavior or structure rather than to directly fix bugs.
{: .gh-alert.note }

## Debugging Strategies

### Ahead-Of-Time (AOT) debugging

**AOT debugging** is a debugging approach that involves _"precompiling the entire program with debugging information before execution"_, in contrast to JIT (Just-In-Time) debugging, which dynamically compiles and debugs code at runtime when an error occurs. AOT debugging is related to Ahead-Of-Time compilation.

AOT debugging is particularly relevant in scenarios where program efficiency and predictability are paramount, and the trade-off of precompilation is acceptable. It is often associated with languages and platforms that emphasize low-level control over system resources.

Here are key points to know about AOT debugging:

- **Compilation Timing**:
AOT debugging compiles the entire program, including all source code and associated debugging information, before the program is executed. This is done in advance of runtime.

- **Debugging Information**:
Debugging information, such as variable names, line numbers, and function names, is embedded into the compiled code during the AOT compilation process. This information is essential for effective debugging.

- **Execution Efficiency**:
AOT compilation aims to optimize the program's execution by generating machine code that is ready for immediate execution. This can potentially result in faster startup times compared to JIT compilation.

- **Debugging at Startup**:
Since the entire program is compiled with debugging information beforehand, debugging tools can be attached to the program at startup. Developers can inspect variables, set breakpoints, and analyze the code from the beginning of execution.

- **Platform and Language Support**:
AOT compilation is commonly associated with languages like C and C++, where the entire program is compiled into native machine code ahead of time. It is often used in scenarios where fine-tuned control over performance is crucial.

- **Integration with Development Environments**:
Debugging in an AOT context is often integrated into development environments and IDEs, allowing developers to seamlessly work with the compiled code and associated debugging information.

- **Source Code Availability**:
Like JIT debugging, AOT debugging is most effective when the original source code is available. Debuggers can map the compiled machine code back to the source code, facilitating high-level code inspection during debugging.

- **Profiling**:
AOT compilation can also support profiling for performance optimization. Profiling tools can analyze the precompiled code to identify bottlenecks and areas for improvement.

- **Postmortem Debugging**:
AOT debugging is conducive to postmortem debugging, where developers analyze crash dump files generated after a program terminates unexpectedly. This aids in understanding the state of the program at the time of the crash.

- **Security Considerations**:
AOT debugging may have security advantages, as the compiled code is fixed and doesn't allow for dynamic code generation during runtime. This can reduce potential attack vectors related to dynamic code execution.

### Just-In-Time (JIT) debugging

**JIT debugging** is a technique used in software development and debugging to _"dynamically compile and debug code at runtime when an error or exception occurs"_.

Instead of precompiling the entire program with debugging information, JIT debugging compiles only the specific portions of code that are about to be executed, allowing for more efficient debugging. JIT debugging is closely associated with Just-In-Time compilation, where code is compiled at runtime.

JIT debugging provides developers with a powerful tool to diagnose and fix issues in their code during runtime. It's particularly beneficial for languages that use managed runtime environments, where the dynamic compilation of code is a fundamental aspect of execution.

Here are key points to know about JIT debugging:

- **Dynamic Compilation**:
In JIT debugging, the compiler generates machine code for a specific portion of code just before it is executed. This contrasts with ahead-of-time (AOT) compilation, where the entire program is compiled before execution.

- **On-Demand Debugging**:
JIT debugging is triggered when an error or exception occurs during the execution of a program. When such an event happens, the debugger is invoked to analyze the issue in the specific code causing the problem.

- **Debugging Information**:
JIT compilers can include debugging information in the generated machine code. This information includes details like variable names, line numbers, and function names, which is essential for effective debugging.

- **Integration with Development Environments**:
JIT debugging is often integrated with development environments and IDEs (Integrated Development Environments). When an exception occurs, the debugger is launched automatically, and developers can inspect variables, set breakpoints, and step through the code.

- **Platform and Language Support**:
JIT debugging is commonly associated with managed languages like Java, C#, and some scripting languages. In Java, for example, the Java Virtual Machine (JVM) uses JIT compilation. In .NET languages like C#, the Common Language Runtime (CLR) employs JIT compilation.

- **Just-In-Time Profiling**:
JIT debugging can also be used for profiling purposes. Profiling involves collecting information about the runtime behavior of a program, helping developers identify performance bottlenecks and optimize code.

- **Availability of Source Code**:
JIT debugging is most effective when the original source code is available. Debuggers can map the compiled machine code back to the source code, allowing developers to work with a high-level representation of the code during debugging.

- **Postmortem Debugging**:
In some scenarios, JIT debugging can be used for postmortem debugging, where crash dump files are analyzed after a program has terminated unexpectedly. This helps developers understand the state of the program at the time of the crash.

- **Security Considerations**:
JIT debugging introduces security considerations, as it allows for dynamic code execution. In production environments, it's common to disable JIT debugging to reduce the attack surface.

## Types of Debuggers

Debuggers are tools that help developers identify and resolve issues in their code. They come in various forms and are often integrated into development environments or provided as standalone applications. For a comprehensive [comparison of debuggers](https://en.wikipedia.org/wiki/Comparison_of_debuggers){: target="_blank" rel="noopener noreferrer"}, refer to this resource.

Here's a categorized list of different types of debuggers:

- **Integrated Development Environment (IDE) Debuggers**:
  * **Visual Studio Debugger**: Integrated with Microsoft Visual Studio, it supports various languages like C++, C#, and more.
  * **Eclipse Debugger**: Integrated debugger in the Eclipse IDE, supporting Java, C/C++, and other languages.
  * **Xcode Debugger**: Integrated debugger for macOS and iOS development within the Xcode IDE.

- **Language-Specific Debuggers**:
  * **GDB (GNU Debugger)**: Commonly used for debugging C, C++, and Fortran code on Unix-like systems.
  * **LLDB (LLVM Debugger)**: A debugger for the LLVM compiler infrastructure, often used with languages like C, C++, and Swift.
  * **pdb (Python Debugger)**: Debugger for Python, allowing developers to step through code and inspect variables.

- **Web Development Debuggers**:
  * **Chrome Developer Tools**: Browser-based debugger for JavaScript, CSS, and HTML in the Google Chrome browser.
  * **Firefox Developer Tools**: Similar to Chrome Developer Tools, available in the Mozilla Firefox browser.
  * **Safari Web Inspector**: Integrated into the Safari browser, allowing developers to debug web content.

- **System-Level Debuggers**:
  * **WinDbg**: Debugger for Windows, used for kernel-mode and user-mode debugging.
  * **Valgrind**: Tool for memory debugging, memory leak detection, and profiling on Unix-like systems.

- **Hardware Debuggers**:
  * **JTAG Debuggers**: Used for debugging embedded systems and microcontrollers through the Joint Test Action Group (JTAG) interface.
  * **Trace32 (Lauterbach)**: A powerful hardware-assisted debugger for various microprocessor architectures.

- **Remote Debugging Tools**:
  * **Remote GDB**: Allows debugging of a program running on one machine using GDB from another machine.
  * **Remote Debugging in Visual Studio Code**: VS Code supports remote debugging for various languages and platforms.

- **Dynamic Analysis Tools**:
  * **Valgrind (Memcheck)**: Helps in detecting memory-related issues dynamically.
  * **AddressSanitizer (ASan)**: A runtime memory error detector that finds memory corruption bugs in C/C++ programs.

- **Mobile Development Debuggers**:
  * **Android Studio Debugger**: Integrated debugger for Android app development, supporting Java, Kotlin, and C++.
  * **Xamarin Debugger**: Integrated with Visual Studio, used for debugging Xamarin-based cross-platform mobile applications.

- **Game Development Debuggers**:
  * **Unity Debugger**: Integrated debugger for Unity game development, supporting C# scripting.
  * **Unreal Engine Debugger**: Integrated debugger for Unreal Engine, used for debugging C++ code in game development.

- **Database Debugging Tools**:
  * **PL/pgSQL Debugger (PostgreSQL)**: Debugger for debugging stored procedures and functions in PostgreSQL.
  * **SQL Server Management Studio Debugger (SSMS)**: Debugger for Transact-SQL code in Microsoft SQL Server.

- **GPU Debuggers**:
  * **NVIDIA Nsight**: Debugger for CUDA applications, providing GPU debugging and profiling.
  * **AMD Radeon GPU Debugger (RGP)**: Tool for debugging and profiling AMD GPUs.

- **Embedded Systems Debuggers**:
  * **OpenOCD (Open On-Chip Debugger)**: Debugger for embedded systems, supporting various hardware interfaces.
  * **Keil Debugger**: Integrated debugger for ARM Cortex-M microcontrollers.

- **Profilers (Not traditional debuggers but useful for performance analysis)**:
  * **gprof**: Profiler for programs written in C or C++, showing which functions consume most of the program's execution time.
  * **Java VisualVM**: Profiling, troubleshooting, and analyzing Java applications.

- **Network Debugging Tools**:
  * **Wireshark**: Network protocol analyzer that helps in debugging network-related issues.
  * **tcpdump**: Command-line packet analyzer for Unix-like systems.

- **Continuous Integration (CI) Debugging Tools**:
  * **Travis CI Debugger**: Integrated debugging for projects using Travis CI for continuous integration.
  * **Jenkins Debugger**: Debugger for Jenkins pipelines and jobs.

- **Memory Leak Detection Tools**:
  * **LeakCanary (Android)**: Library for detecting memory leaks in Android applications.
  * **Valgrind (Massif)**: Helps in detecting memory heap usage and analyzing memory-related issues.

- **Reverse Engineering and Low-Level Debuggers**:
  * **x64Dbg**: A debugger designed for analyzing and debugging 64-bit (x64) and 32-bit (x32) applications.
  * **OllyDbg**: A popular x86 debugger known for its ease of use in reverse engineering and binary analysis. It has been succeeded by x64Dbg, which supports 64-bit applications.
  * **AFD** (Advanced Fullscreen Debugger): An old 32-bit debugger designed for assembly in DOSBox. 

## Features of Debuggers

Debugging tools and features can vary across programming languages and development environments, but these functionalities are fundamental to the process of finding and fixing bugs in software. Common features of debuggers include:

- [**Breakpoints**](https://en.wikipedia.org/wiki/Breakpoint){: target="_blank" rel="noopener noreferrer"}: Allows the programmer to pause the execution of a program at a specific point to inspect the state of variables and the program's flow.
- [**Stepping**](https://en.wikipedia.org/wiki/Stepping_(debugging)){: target="_blank" rel="noopener noreferrer"}: Enables the programmer to execute the program one line or one function at a time, helping to trace the program's execution path.
  * **Step Into**: A debugging action that enters a function and allows the programmer to inspect the internal workings of that function.
  * **Step Over**: A debugging action that executes a function without entering its internal details, moving to the next line of code after the function call.
  * **Step Out**: A debugging action that continues the execution of the program until it exits the current function, allowing the programmer to return to the calling context.
- **Variable Inspection**: Allows the programmer to view the values of variables at different points in the program's execution.
- **Watchpoints**: Monitors the value of a specific variable and pauses the program when the variable's value changes.
- **Stack Trace**: Displays the call stack, showing the sequence of function calls that led to the current point (where an issue occurred) in the program. It is also known as Traceback.
- **Memory Inspection**: Permits the examination of the program's memory to identify memory-related issues such as memory leaks, buffer overflows, or incorrect memory access.
- **Conditional Breakpoints**: Pauses the program only if a specified condition is met, helping to narrow down the search for bugs.

## Terminologies

Understanding the terminologies related to debugging and debuggers is crucial for effective software development. Here are explanations for key terms:

Logging:
: The practice of recording information, such as variable values or messages, during the execution of a program for debugging and analysis purposes. Logging can be associated with both static analysis and dynamic analysis, depending on the context in which it is used.
  - **Error Logging**: Logging specifically focused on recording errors and exceptions. _Use Cases_: Facilitating postmortem analysis of errors in production.
  - **Audit Logging**: Logging events for security and compliance purposes. _Use Cases_: Recording user activities for security audits.

Memory Leak:
: A condition where a program allocates memory but fails to release it, leading to a gradual increase in the program's memory usage.

Exception Handling:
: The process of managing and responding to exceptions (errors or unexpected situations) that occur during program execution. Debuggers often provide features to handle exceptions.

Race Condition:
: A race condition occurs when the behavior of a program depends on the relative timing of events, often leading to unpredictable outcomes. Debugging race conditions can be challenging.

Live Debugging:
: Debugging a program while it is actively handling real-world data and events. Live debugging is often performed on systems that are in production.
