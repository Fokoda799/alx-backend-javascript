process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const acceptName = process.stdin.read();
  if (acceptName !== null) {
    process.stdout.write(`Your name is: ${acceptName.toString()}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
