setInterval(() => {
  const last = process.hrtime();
  setImmediate(() => {
    const delta = process.hrtime(last)[1];
    if (delta > 5e8) process.stdout.write(`---- EVENT LOOP BLOCKED FOR ${delta / 1000}! ----`);
  });
}, 500);
