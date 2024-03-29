// Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

// The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them there without quotes.

function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2); // The "fox" "bites" the "dog"'s "tail".

madlibs(template2); // The "cat" "pats" the "cat"'s "head".

// Going over the problem description and the examples, we can see that the function returns some text, given a template as its input. But, what exactly is a "template"?

// Generally, a template is like a guide to making something. Typically, it has parts that are built already and you just need to fill in some missing pieces. Going back to the first madlibs exercise, the sentence representing the story is an example of this. As a template, the solution just supplies the sentence with a noun, verb, adjective, and adverb, and simply plugs them in to create a story.
