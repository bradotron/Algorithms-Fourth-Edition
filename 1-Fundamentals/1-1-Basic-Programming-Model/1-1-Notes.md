# Basic Programming Concepts Covered

* Program Structure
* Primative Types and Expressions
  - includes type conversion, casting
  - comparisons
* Arrays
* Recursion
  - Don't forget the edge case!
* API - Application Programming Interface
  - seperate the client (program) from the implementation
* Input and Output
  - Redirection
    + ">" or "<" used to rediret from a file to standard input or redirect standard output to a file
    ```
    java Average < data.text; 
    ```
    + redirects data.txt into standard input
    ```
    java RandomSeq 1000 100.0 200.0 > data.txt
    ```
    + redirects standard output into data.txt
  - Piping
    + "|" pipes output from one program into the input of another
    ```
    java RandomSeq 1000 100.0 200.0 | java Average
    ```
    + pipes output of RandomSeq into Average, one value at a time
* Binary Search
  - covers a library they created that does binary search
