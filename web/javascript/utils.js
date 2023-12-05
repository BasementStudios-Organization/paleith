class Utils {
    static FPS(frames) {
        return 1000 / frames
    }
    static combineObjects(original, addition) {
        let blankObject = new Map()
        for (const [k, v] of Object.entries(original)) blankObject.set(k, v);
        for (const key in Object.keys(addition)) {
            switch (typeof addition[key]) {
                case 'object':
                    blankObject.set(key, Formatters.merge(original[key], addition[key]))
                    break;
                default:
                    blankObject.set(key, addition[key])
            }
        }
        return Object.fromEntries(blankObject.entries())
    }
}