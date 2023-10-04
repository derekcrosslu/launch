if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
// Yes!
if (false ?? true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
// No...

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// No...