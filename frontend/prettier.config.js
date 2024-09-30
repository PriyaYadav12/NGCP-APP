export default {
  printWidth: 100,
  singleQuote: true,
  overrides: [
    {
      files: '**/*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '**/*.jsx', // Include .jsx files
      options: {
        parser: 'babel', // Use 'babel' parser for JSX
      },
    },
  ],
};
