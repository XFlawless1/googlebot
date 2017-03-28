setInterval(() => {
  const last = process.hrtime();
  setImmediate(() => {
    const delta = process.hrtime(last)[1];
    if (delta > 500e6) process.stdout.write(`---- EVENT LOOP BLOCKED FOR ${delta / 1e8}ms! ----\n`);
  });
}, 500);
