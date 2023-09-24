// declarations.d.ts

// Example: Declare a custom type for user data
declare interface UserData {
    id: number;
    username: string;
    email: string;
  }
  
  // Example: Declare a module for custom SVG files
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  // Add more custom type declarations as needed for your project
  