// Extracts an Auth Bearer's credentials from the request header.
//
// FUGLY HACK: I'm doing this so as not to introduce an extra jwt dependency.
// Also, using a single space (' ') instead of \s for the regex.
//
exports.parse = function(headers) {
  return headers
    ? headers.authorization.split(/Bearer /i)[1]
    : null
    ;
};
