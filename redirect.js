// Forward to the same path on beeware.org. A client-side redirect makes
// pybee.org the referrer, so pass the original one along as ?ref=
(function () {
    var target = "https://beeware.org" + window.location.pathname + window.location.search;
    var ref = document.referrer;
    if (ref && !/^https?:\/\/(www\.)?pybee\.org\//i.test(ref)) {
        target += (window.location.search ? "&" : "?") + "ref=" + encodeURIComponent(ref);
    }
    window.location.replace(target + window.location.hash);
})();
