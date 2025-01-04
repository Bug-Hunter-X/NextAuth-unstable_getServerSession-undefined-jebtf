# NextAuth unstable_getServerSession undefined

This repository demonstrates a common error encountered when using NextAuth.js in Next.js API routes:  'TypeError: Cannot read properties of undefined (reading 'unstable_getServerSession')'.  This typically occurs due to an incorrect import or configuration of the NextAuth session management.

## Problem

The `unstable_getServerSession` function, used for getting server-side sessions with NextAuth.js, is not accessible. This leads to a runtime error, preventing the API route from functioning correctly.  The error message suggests that `unstable_getServerSession` is undefined because NextAuth is not properly set up.

## Solution

The solution involves ensuring that `unstable_getServerSession` is imported correctly from the `next-auth` package and that your `auth/[...nextauth].js` file is correctly configured and in the expected location.

Refer to the files `bug.js` (demonstrating the error) and `bugSolution.js` (showing the solution).