//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!"), "world! hello");
console.log(
    reverseWords("yoda doesn't speak like this"),
    "this like speak doesn't yoda"
);
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
