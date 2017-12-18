function assign(obj, keyPath, value) {
        lastKeyIndex = keyPath.length-1;
        for (var i = 0; i < lastKeyIndex; ++ i) {
                key = keyPath[i];
                if (!(key in obj))
                        obj[key] = {}
                        obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
}

module.exports = assign;
