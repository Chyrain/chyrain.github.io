﻿var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+GFWed", {
    "+GFWed": function(url, host, scheme) {
        "use strict";
        if (host === "127.0.0.1" || host === "::1" || host.indexOf(".") < 0) return "DIRECT";
        return "HTTPS vpn.v5kf.com:8443";
    }
});