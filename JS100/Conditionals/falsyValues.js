!false // true
!0 // true
!-0 // true
!NaN // true
!undefined // true
!null // true
!'' // true
!0n // true

// The last one is suspicious so testing alternative:
// !0p // SyntaxError