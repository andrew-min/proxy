function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.adobe.io") || host == "adobe.io") {
        return "SOCKS5 127.0.0.1:56789";
    }
    return "DIRECT";
}
