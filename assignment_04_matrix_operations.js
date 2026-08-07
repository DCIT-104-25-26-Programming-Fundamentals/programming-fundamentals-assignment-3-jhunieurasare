// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix
function readMatrix(rows, cols)
{
    let matrix = [];

    for (let i = 0; i < rows; i++)
    {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        let values = row.split(" ").map(Number);

        matrix.push(values);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        console.log(matrix[i].join("\t"));
    }
}

// Part A - Transpose a matrix
function transpose(matrix)
{
    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = [];

    for (let j = 0; j < cols; j++)
    {
        let newRow = [];

        for (let i = 0; i < rows; i++)
        {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

// Part B - Add two matrices
function addMatrices(matrix1, matrix2)
{
    let rows = matrix1.length;
    let cols = matrix1[0].length;

    let result = [];

    for (let i = 0; i < rows; i++)
    {
        let row = [];

        for (let j = 0; j < cols; j++)
        {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }

        result.push(row);
    }

    return result;
}

// Part C - Multiply two matrices
function multiplyMatrices(A, B)
{
    let rowsA = A.length;
    let colsA = A[0].length;
    let colsB = B[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++)
    {
        let row = [];

        for (let j = 0; j < colsB; j++)
        {
            let total = 0;

            for (let k = 0; k < colsA; k++)
            {
                total += A[i][k] * B[k][j];
            }

            row.push(total);
        }

        result.push(row);
    }

    return result;
}



console.log("PART A - Matrix Transpose");

let rows = readlineSync.questionInt("Enter number of rows: ");
let cols = readlineSync.questionInt("Enter number of columns: ");

let matrix = readMatrix(rows, cols);

console.log("\nOriginal Matrix:");
displayMatrix(matrix);

console.log("\nTransposed Matrix:");
displayMatrix(transpose(matrix));



console.log("\nPART B - Matrix Addition");

rows = readlineSync.questionInt("Enter number of rows: ");
cols = readlineSync.questionInt("Enter number of columns: ");

console.log("Enter Matrix 1");
let matrix1 = readMatrix(rows, cols);

console.log("Enter Matrix 2");
let matrix2 = readMatrix(rows, cols);

console.log("\nSum Matrix:");
displayMatrix(addMatrices(matrix1, matrix2));



console.log("\nPART C - Matrix Multiplication");

let rowsA = readlineSync.questionInt("Rows of Matrix A: ");
let colsA = readlineSync.questionInt("Columns of Matrix A: ");

console.log("Enter Matrix A");
let A = readMatrix(rowsA, colsA);

let rowsB = readlineSync.questionInt("Rows of Matrix B: ");
let colsB = readlineSync.questionInt("Columns of Matrix B: ");

if (colsA !== rowsB)
{
    console.log("Matrix multiplication is not possible.");
}
else
{
    console.log("Enter Matrix B");
    let B = readMatrix(rowsB, colsB);

    console.log("\nProduct Matrix:");
    displayMatrix(multiplyMatrices(A, B));
}