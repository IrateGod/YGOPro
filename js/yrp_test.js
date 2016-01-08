process.on('uncaughtException', function (err) {
    console.log(err);
});
function readBytes (offset, amount) {
    var byteArray = [],
        index;
    for (index = 0; index < amount; index++) {
        byteArray[index] = this[offset + index];
    }
    return byteArray;
}
function getDictSize (byteArray) {
    var dictSize = 0;
    for (var i = 0; i < 4; i++) {
        dictSize += (byteArray[i] << (i * 8)); // shifting works properly if byteArray[i] is an int
    }
    return dictSize;
}
Buffer.prototype.readBytes = readBytes;
var rf = "AppData/Roaming/YGOPro Salvation/ygopro/replay/huh.yrp";
var rb = fs.readFileSync(rf);
var header = {
    id: rb.readUInt32LE(0),
    version: rb.readUInt32LE(4),
    flag: rb.readUInt32LE(8),
    seed: rb.readUInt32LE(12),
    datasize: rb.readUInt32LE(16),
    hash: rb.readUInt32LE(20),
    props: rb.readBytes(24, 8)
};
header.posBits = {
    lc: header.props[0] % 9,
    lp: Math.floor(header.props[0] / 9) % 5,
    pb: Math.floor(Math.floor(header.props[0] / 9) / 5)
};
header.dictSize = getDictSize(header.props.slice(1, 5));
console.log("Props: ", header.props, "\nPosBits: ", "lc: ", header.posBits.lc, "\nlp: ", header.posBits.lp, "\npb: ", header.posBits.pb, "\nDictionary Size: ", header.dictSize);